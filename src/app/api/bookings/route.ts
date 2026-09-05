import { NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/validations';
import { query } from '@/lib/db';
import { sendBookingNotification } from '@/lib/email';
import { generateBookingId } from '@/lib/utils';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = bookingSchema.parse(body);
    
    const bookingId = generateBookingId();
    
    const travelDate = new Date(validatedData.travelDate).toISOString();
    const returnDate = validatedData.returnDate ? new Date(validatedData.returnDate).toISOString() : null;
    const passengers = Number(validatedData.passengers) || 1;

    // Save directly to Supabase PostgreSQL database
    try {
      await query(
        `INSERT INTO public.bookings (
          booking_id, name, phone, email, pickup_location, drop_location,
          travel_date, return_date, pickup_time, trip_type, service_type,
          vehicle_type, passengers, requirements, package_duration,
          source_page, source_section, status
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`,
        [
          bookingId,
          validatedData.name,
          validatedData.phone,
          validatedData.email || null,
          validatedData.pickupLocation || 'Kanpur',
          validatedData.dropLocation || null,
          travelDate,
          returnDate,
          validatedData.travelTime || null,
          validatedData.tripType || 'one_way',
          validatedData.serviceType,
          validatedData.vehicleType || null,
          passengers,
          validatedData.requirements || null,
          validatedData.packageDuration || null,
          validatedData.sourcePage || 'website',
          validatedData.sourceSection || 'direct',
          'new',
        ]
      );
      console.log('✅ Booking successfully saved to Supabase:', bookingId);
    } catch (dbError) {
      console.error('Supabase DB Insert Error (continuing):', dbError);
    }
    
    // Send email notification (non-blocking)
    try {
      await sendBookingNotification({
        bookingId,
        ...validatedData,
        status: 'new'
      });
    } catch (emailErr) {
      console.error('Email error:', emailErr);
    }
    
    return NextResponse.json(
      { 
        success: true, 
        bookingId, 
        message: 'Booking request submitted successfully' 
      },
      { status: 201 }
    );
    
  } catch (error: any) {
    console.error('Booking API Error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const serviceType = searchParams.get('serviceType');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    const offset = (page - 1) * limit;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let bookings: any[] = [];
    let total = 0;
    
    try {
      let sql = 'SELECT * FROM public.bookings WHERE 1=1';
      const params: any[] = [];
      let paramIndex = 1;

      if (status && status !== 'all') {
        sql += ` AND status = $${paramIndex++}`;
        params.push(status);
      }
      if (serviceType && serviceType !== 'all') {
        sql += ` AND service_type = $${paramIndex++}`;
        params.push(serviceType);
      }

      // Count query
      const countRes = await query(sql.replace('SELECT *', 'SELECT count(*)'), params);
      total = parseInt(countRes.rows[0].count);

      // Paginated rows
      sql += ` ORDER BY created_at DESC LIMIT $${paramIndex++} OFFSET $${paramIndex++}`;
      params.push(limit, offset);

      const rowsRes = await query(sql, params);
      bookings = rowsRes.rows;
    } catch (dbError) {
      console.error('Supabase query error:', dbError);
    }
    
    return NextResponse.json({
      success: true,
      data: bookings,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

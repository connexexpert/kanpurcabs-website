import { NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/validations';
import { supabaseServer } from '@/lib/supabase-server';
import { sendBookingNotification } from '@/lib/email';
import { generateBookingId } from '@/lib/utils';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = bookingSchema.parse(body);
    
    const bookingId = generateBookingId();
    
    const bookingPayload = {
      booking_id: bookingId,
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email || null,
      pickup_location: validatedData.pickupLocation || 'Kanpur',
      drop_location: validatedData.dropLocation || null,
      travel_date: new Date(validatedData.travelDate).toISOString(),
      return_date: validatedData.returnDate ? new Date(validatedData.returnDate).toISOString() : null,
      pickup_time: validatedData.travelTime || null,
      trip_type: validatedData.tripType || 'one_way',
      service_type: validatedData.serviceType,
      vehicle_type: validatedData.vehicleType || null,
      passengers: Number(validatedData.passengers) || 1,
      requirements: validatedData.requirements || null,
      package_duration: validatedData.packageDuration || null,
      source_page: validatedData.sourcePage || 'website',
      source_section: validatedData.sourceSection || 'direct',
      status: 'new',
    };
    
    // Save to Supabase
    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder-project.supabase.co") {
        const { error: dbError } = await supabaseServer
          .from('bookings')
          .insert([bookingPayload]);
        
        if (dbError) {
          console.error('Supabase DB Insert Error:', dbError);
        } else {
          console.log('✅ Booking successfully saved to Supabase:', bookingId);
        }
      } else {
        console.log('📝 Supabase URL not configured yet. Payload logged:', bookingId);
      }
    } catch (dbError) {
      console.error('Database connection error (continuing anyway):', dbError);
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
    
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let bookings: any[] = [];
    let total = 0;
    
    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder-project.supabase.co") {
        let query = supabaseServer
          .from('bookings')
          .select('*', { count: 'exact' })
          .order('created_at', { ascending: false })
          .range(from, to);

        if (status && status !== 'all') {
          query = query.eq('status', status);
        }
        if (serviceType && serviceType !== 'all') {
          query = query.eq('service_type', serviceType);
        }

        const { data, count, error } = await query;
        if (!error && data) {
          bookings = data;
          total = count || data.length;
        }
      }
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

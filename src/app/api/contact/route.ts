import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { query } from '@/lib/db';
import { sendContactNotification } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);
    
    // Save to Supabase
    try {
      await query(
        `INSERT INTO public.contact_messages (name, email, phone, subject, message)
         VALUES ($1, $2, $3, $4, $5)`,
        [
          validatedData.name,
          validatedData.email,
          validatedData.phone || null,
          validatedData.subject || null,
          validatedData.message,
        ]
      );
      console.log('✅ Contact message saved to Supabase');
    } catch (dbError) {
      console.error('Database connection error (continuing anyway):', dbError);
    }
    
    // Send email notification (non-blocking)
    try {
      await sendContactNotification(validatedData);
    } catch (emailErr) {
      console.error('Email notification error:', emailErr);
    }
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 201 }
    );
    
  } catch (error: any) {
    console.error('Contact API Error:', error);
    
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

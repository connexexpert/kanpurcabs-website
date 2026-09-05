import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { supabaseServer } from '@/lib/supabase-server';
import { sendContactNotification } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);
    
    // Save to Supabase
    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder-project.supabase.co") {
        const { error: dbError } = await supabaseServer
          .from('contact_messages')
          .insert([
            {
              name: validatedData.name,
              email: validatedData.email,
              phone: validatedData.phone || null,
              subject: validatedData.subject || null,
              message: validatedData.message,
            }
          ]);
        
        if (dbError) {
          console.error('Supabase Contact Insert Error:', dbError);
        } else {
          console.log('✅ Contact message saved to Supabase');
        }
      }
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

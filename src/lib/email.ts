import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendBookingNotification(booking: any) {
  try {
    if (!process.env.SMTP_USER) {
      console.log('SMTP not configured, skipping email notification for booking:', booking.bookingId);
      return false;
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Booking Request - ${booking.bookingId} - KanpurCabs`,
      html: `
        <h2>New Booking Request Received</h2>
        <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
        <p><strong>Service:</strong> ${booking.serviceType}</p>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Email:</strong> ${booking.email || 'N/A'}</p>
        <p><strong>Travel Date:</strong> ${booking.travelDate}</p>
        <h3>Additional Details</h3>
        <ul>
          ${booking.pickupLocation ? `<li><strong>Pickup:</strong> ${booking.pickupLocation}</li>` : ''}
          ${booking.dropLocation ? `<li><strong>Drop:</strong> ${booking.dropLocation}</li>` : ''}
          ${booking.vehicleType ? `<li><strong>Vehicle Pref:</strong> ${booking.vehicleType}</li>` : ''}
          ${booking.requirements ? `<li><strong>Requirements:</strong> ${booking.requirements}</li>` : ''}
        </ul>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Booking email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending booking notification email:', error);
    return false;
  }
}

export async function sendContactNotification(contact: any) {
  try {
    if (!process.env.SMTP_USER) {
      console.log('SMTP not configured, skipping email notification for contact form.');
      return false;
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Message from ${contact.name} - KanpurCabs`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${contact.message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    return false;
  }
}

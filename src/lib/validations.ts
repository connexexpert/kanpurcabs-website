import { z } from 'zod';

export const bookingSchema = z.object({
  serviceType: z.string().min(1, 'Service type is required'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid 10-digit phone number'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  travelDate: z.string().min(1, 'Travel date is required'),
  travelTime: z.string().optional(),
  returnDate: z.string().optional(),
  pickupLocation: z.string().optional(),
  dropLocation: z.string().optional(),
  tripType: z.string().optional(),
  packageDuration: z.string().optional(),
  vehicleType: z.string().optional(),
  passengers: z.string().or(z.number()).optional(),
  requirements: z.string().optional(),
  sourcePage: z.string().optional(),
  sourceSection: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid 10-digit phone number').optional().or(z.literal('')),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const carSchema = z.object({
  name: z.string().min(2),
  category: z.string().min(1),
  brand: z.string().min(1),
  seats: z.number().min(2),
  transmission: z.string(),
  fuelType: z.string(),
  ac: z.boolean(),
  pricePerKm: z.number().min(0),
  description: z.string(),
  features: z.array(z.string()),
  imageUrl: z.string(),
});

export type CarFormData = z.infer<typeof carSchema>;

export const tourSchema = z.object({
  title: z.string().min(5),
  duration: z.string(),
  location: z.string(),
  price: z.number().min(0),
  description: z.string(),
  highlights: z.array(z.string()),
  itinerary: z.any(),
  imageUrl: z.string(),
});

export type TourFormData = z.infer<typeof tourSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFormData = z.infer<typeof loginSchema>;

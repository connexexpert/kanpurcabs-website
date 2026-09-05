'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, BookingFormData } from '@/lib/validations';
import PageHero from '@/components/ui/PageHero';
import { CheckCircle2, Loader2, Phone, Mail, Clock, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function BookingPageWrapper() {
  return (
    <Suspense fallback={
      <main className="bg-gray-50 min-h-screen pb-16">
        <PageHero title="Book Your Ride" subtitle="Loading booking form..." />
        <div className="container mx-auto px-4 py-12 flex justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
        </div>
      </main>
    }>
      <BookingPage />
    </Suspense>
  );
}

function BookingPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<{ success: boolean; bookingId?: string; message?: string } | null>(null);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: 'Local Rental',
      vehicleType: 'Any',
      tripType: 'Round Trip',
      sourcePage: 'booking',
      sourceSection: 'booking-form',
    }
  });

  const serviceType = watch('serviceType');
  const watchedFields = watch();

  // Load query params on mount
  useEffect(() => {
    const qService = searchParams.get('serviceType');
    if (qService) setValue('serviceType', qService);
    
    const fields = ['tripType', 'from', 'to', 'date', 'returnDate', 'package', 'vehicleType', 'tour'];
    fields.forEach(field => {
      const val = searchParams.get(field);
      if (val) {
        if (field === 'from') setValue('pickupLocation', val);
        else if (field === 'to') setValue('dropLocation', val);
        else if (field === 'date') setValue('travelDate', val);
        else if (field === 'package') setValue('packageDuration', val);
        else setValue(field as any, val);
      }
    });
  }, [searchParams, setValue]);

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setBookingResult(result);
      if (result.success) setStep(3);
    } catch (error) {
      console.error('Booking submission error:', error);
      setBookingResult({ success: false, message: 'Failed to submit booking. Please try again or contact us directly.' });
      setStep(3);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ServiceSpecificFields = () => {
    switch (serviceType) {
      case 'Local Rental':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Pickup Location in Kanpur *</label>
                <input {...register('pickupLocation')} className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Package Duration *</label>
                <select {...register('packageDuration')} className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600">
                  <option value="4hr/40km">4 Hrs / 40 Kms</option>
                  <option value="8hr/80km">8 Hrs / 80 Kms</option>
                  <option value="12hr/120km">12 Hrs / 120 Kms</option>
                </select>
              </div>
            </div>
          </>
        );
      case 'Outstation':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Trip Type</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" value="Round Trip" {...register('tripType')} /> Round Trip
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" value="One Way" {...register('tripType')} /> One Way
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">From *</label>
                <input {...register('pickupLocation')} placeholder="Pickup City" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">To *</label>
                <input {...register('dropLocation')} placeholder="Destination City" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600" />
              </div>
              {watchedFields.tripType === 'Round Trip' && (
                <div>
                  <label className="block text-sm font-medium mb-1">Return Date</label>
                  <input type="date" {...register('returnDate')} min={watchedFields.travelDate || new Date().toISOString().split('T')[0]} className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600" />
                </div>
              )}
            </div>
          </>
        );
      case 'Airport Transfer':
      case 'Railway Transfer':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Station / Airport Name *</label>
              <input {...register('pickupLocation')} placeholder="E.g. Kanpur Central" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Drop / Pickup Address *</label>
              <input {...register('dropLocation')} placeholder="Full address" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>
        );
      case 'Sightseeing Tour':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tour Package / Destination *</label>
              <input {...register('requirements')} placeholder="Which tour are you interested in?" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Number of Passengers *</label>
              <input type="number" {...register('passengers')} min="1" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>
        );
      default:
        return (
          <div>
            <label className="block text-sm font-medium mb-1">Requirement Description</label>
            <textarea {...register('requirements')} rows={3} className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-600" placeholder="Please describe your requirements..." />
          </div>
        );
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-16">
      <PageHero 
        title="Book Your Ride" 
        subtitle="Fill out the form below to book a car or request a quote for your journey."
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Form Area */}
          <div className="flex-grow lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
              
              {/* Progress Steps */}
              {step < 3 && (
                <div className="flex items-center mb-8 pb-8 border-b">
                  <div className={cn("flex flex-col items-center", step >= 1 ? "text-blue-700" : "text-gray-400")}>
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2", step >= 1 ? "bg-blue-100" : "bg-gray-100")}>1</div>
                    <span className="text-sm font-medium">Service Details</span>
                  </div>
                  <div className={cn("flex-grow h-1 mx-4", step >= 2 ? "bg-blue-200" : "bg-gray-200")} />
                  <div className={cn("flex flex-col items-center", step >= 2 ? "text-blue-700" : "text-gray-400")}>
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2", step >= 2 ? "bg-blue-100" : "bg-gray-100")}>2</div>
                    <span className="text-sm font-medium">Personal Info</span>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Step 1: Journey Details</h2>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Service Type *</label>
                    <select {...register('serviceType')} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 bg-white">
                      <option value="Local Rental">Local Rental (Within City)</option>
                      <option value="Outstation">Outstation (Out of City)</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Railway Transfer">Railway Transfer</option>
                      <option value="Sightseeing Tour">Sightseeing Tour</option>
                      <option value="Corporate">Corporate Booking</option>
                      <option value="Wedding">Wedding Car</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Travel Date *</label>
                      <input type="date" {...register('travelDate')} min={new Date().toISOString().split('T')[0]} className={cn("w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600", errors.travelDate ? "border-red-500" : "border-gray-300")} />
                      {errors.travelDate && <p className="text-red-500 text-xs mt-1">{errors.travelDate.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Travel Time (Optional)</label>
                      <input type="time" {...register('travelTime')} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600" />
                    </div>
                  </div>

                  <ServiceSpecificFields />

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Vehicle Type</label>
                    <select {...register('vehicleType')} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 bg-white">
                      <option value="Any">Any Available</option>
                      <option value="Hatchback">Hatchback (e.g., Swift)</option>
                      <option value="Sedan">Sedan (e.g., Dzire, Etios)</option>
                      <option value="SUV">SUV (e.g., Innova, Ertiga)</option>
                      <option value="Luxury">Luxury (e.g., Fortuner)</option>
                      <option value="Tempo Traveller">Tempo Traveller (9-26 Seater)</option>
                    </select>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button 
                      type="button" 
                      onClick={() => {
                        // Basic validation before next
                        if (watchedFields.travelDate) setStep(2);
                        else {
                          // trigger validation to show error
                          handleSubmit(() => {})();
                        }
                      }}
                      className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Step 2: Personal Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name *</label>
                      <input {...register('name')} className={cn("w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600", errors.name ? "border-red-500" : "border-gray-300")} placeholder="Enter your full name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input {...register('phone')} type="tel" className={cn("w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600", errors.phone ? "border-red-500" : "border-gray-300")} placeholder="10-digit mobile number" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address (Optional)</label>
                    <input {...register('email')} type="email" className={cn("w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600", errors.email ? "border-red-500" : "border-gray-300")} placeholder="For booking confirmation" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  
                  {serviceType !== 'Sightseeing Tour' && serviceType !== 'Corporate' && serviceType !== 'Wedding' && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Any Special Requests? (Optional)</label>
                      <textarea {...register('requirements')} rows={3} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600" placeholder="e.g. Carrier needed, pet friendly, etc." />
                    </div>
                  )}

                  <div className="flex justify-between pt-6 border-t">
                    <button 
                      type="button" 
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-bold transition-colors flex items-center"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
                      ) : (
                        'Submit Booking Request'
                      )}
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && bookingResult && (
                <div className="text-center py-12 px-4">
                  {bookingResult.success ? (
                    <>
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-12 h-12 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Received Successfully!</h2>
                      <p className="text-lg text-gray-600 mb-6">Thank you for choosing KanpurCabs. We have received your booking request.</p>
                      
                      <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto mb-8 border border-gray-200">
                        <p className="text-sm text-gray-500 mb-1">Your Booking Reference</p>
                        <p className="text-2xl font-mono font-bold text-blue-700">{bookingResult.bookingId}</p>
                      </div>
                      
                      <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                        Our team will contact you shortly on <strong>{watchedFields.phone}</strong> to confirm the vehicle availability and provide the exact quote.
                      </p>
                      
                      <Link href="/" className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors">
                        Return to Home
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">❌</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Submission Failed</h2>
                      <p className="text-red-600 mb-8">{bookingResult.message}</p>
                      <button 
                        onClick={() => setStep(2)}
                        className="bg-blue-700 text-white px-8 py-3 rounded-md font-medium"
                      >
                        Try Again
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            
            {/* Summary Card */}
            {step < 3 && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-blue-900 text-lg mb-4 pb-3 border-b border-blue-200">Booking Summary</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-blue-700">Service:</span>
                    <span className="font-medium text-gray-900 text-right">{watchedFields.serviceType}</span>
                  </li>
                  {watchedFields.travelDate && (
                    <li className="flex justify-between">
                      <span className="text-blue-700">Date:</span>
                      <span className="font-medium text-gray-900 text-right">{watchedFields.travelDate}</span>
                    </li>
                  )}
                  {watchedFields.vehicleType && (
                    <li className="flex justify-between">
                      <span className="text-blue-700">Vehicle:</span>
                      <span className="font-medium text-gray-900 text-right">{watchedFields.vehicleType}</span>
                    </li>
                  )}
                </ul>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-xs text-blue-600 italic">
                    * This is an enquiry. Final booking is confirmed only after our executive contacts you with availability and exact pricing.
                  </p>
                </div>
              </div>
            )}

            {/* Contact Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Need Help?</h3>
              <div className="space-y-4">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call Us</p>
                    <p className="font-bold">+91 98765 43210</p>
                  </div>
                </a>
                <a href="mailto:info@kanpurcabs.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email Us</p>
                    <p className="font-bold text-sm">info@kanpurcabs.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Working Hours</p>
                    <p className="font-bold text-sm">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Verified & Professional Drivers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Clean & Well-Maintained Cars</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Transparent Pricing, No Hidden Charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">On-Time Pickup Guarantee</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}

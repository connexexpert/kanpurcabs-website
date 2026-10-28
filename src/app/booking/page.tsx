'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, BookingFormData } from '@/lib/validations';
import PageHero from '@/components/ui/PageHero';
import { CheckCircle2, Loader2, Mail, Clock, ShieldCheck, MapPin, PhoneCall, Bike, Car } from 'lucide-react';
import { cn, SITE_CONFIG, getPhoneLink } from '@/lib/utils';
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
      vehicleType: 'Sedan',
      tripType: 'Round Trip',
      sourcePage: 'booking',
      sourceSection: 'booking-form',
    }
  });

  const serviceType = watch('serviceType');
  const watchedFields = watch();

  // Load query params on mount
  useEffect(() => {
    const qService = searchParams.get('service') || searchParams.get('serviceType') || searchParams.get('type');
    if (qService) {
      if (qService === 'bike_rental' || qService === 'bike') {
        setValue('serviceType', 'Bike Rental');
        setValue('vehicleType', 'Activa 6G');
      } else if (qService === 'local_rental' || qService === 'local') {
        setValue('serviceType', 'Local Rental');
      } else if (qService === 'outstation') {
        setValue('serviceType', 'Outstation');
      } else if (qService === 'sightseeing' || qService === 'tour') {
        setValue('serviceType', 'Sightseeing Tour');
      } else if (qService === 'corporate') {
        setValue('serviceType', 'Corporate');
      }
    }
    
    const fields = ['tripType', 'pickup', 'from', 'drop', 'to', 'destination', 'date', 'returnDate', 'package', 'duration', 'vehicle', 'vehicleType'];
    fields.forEach(field => {
      const val = searchParams.get(field);
      if (val) {
        if (field === 'pickup' || field === 'from') setValue('pickupLocation', val);
        else if (field === 'drop' || field === 'to' || field === 'destination') setValue('dropLocation', val);
        else if (field === 'date') setValue('travelDate', val);
        else if (field === 'package' || field === 'duration') setValue('packageDuration', val);
        else if (field === 'vehicle' || field === 'vehicleType') setValue('vehicleType', val);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Area in Kanpur *</label>
              <select {...register('pickupLocation')} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 bg-white">
                <option value="Civil Lines">Civil Lines</option>
                <option value="Swaroop Nagar">Swaroop Nagar</option>
                <option value="Kakadeo">Kakadeo</option>
                <option value="Kidwai Nagar">Kidwai Nagar</option>
                <option value="Mall Road">Mall Road</option>
                <option value="Kalyanpur">Kalyanpur / IIT Kanpur</option>
                <option value="Govind Nagar">Govind Nagar</option>
                <option value="Chakeri">Chakeri</option>
                <option value="Other">Other Area in Kanpur</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Package Duration *</label>
              <select {...register('packageDuration')} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 bg-white">
                <option value="4hr/40km">4 Hours / 40 KMs (Starting ₹1,200)</option>
                <option value="8hr/80km">8 Hours / 80 KMs (Starting ₹2,000)</option>
                <option value="12hr/120km">12 Hours / 120 KMs (Starting ₹2,800)</option>
              </select>
            </div>
          </div>
        );

      case 'Bike Rental':
        return (
          <div className="space-y-4 bg-orange-50/60 p-4 rounded-xl border border-orange-200">
            <div className="flex items-center gap-2 text-xs font-bold text-accent-700 uppercase tracking-wider">
              <Bike className="w-4 h-4" /> Self-Drive Two-Wheeler Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-800">Kanpur Pickup Hub *</label>
                <select {...register('pickupLocation')} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-accent-500 bg-white">
                  <option value="Civil Lines Hub">Civil Lines Hub (Near Green Park)</option>
                  <option value="Swaroop Nagar Hub">Swaroop Nagar Hub (Near Rave 3)</option>
                  <option value="Kakadeo Hub">Kakadeo Hub (Coaching Center Area)</option>
                  <option value="Kalyanpur Hub">Kalyanpur (Near IIT Kanpur Gate)</option>
                  <option value="Kidwai Nagar Hub">Kidwai Nagar (South Kanpur Hub)</option>
                  <option value="Doorstep Delivery">Doorstep Delivery in Kanpur (+₹100)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-800">Rental Duration *</label>
                <select {...register('packageDuration')} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-accent-500 bg-white">
                  <option value="4 Hours">4 Hours (₹250 - ₹600)</option>
                  <option value="8 Hours">8 Hours / Half Day (₹400 - ₹950)</option>
                  <option value="12 Hours">12 Hours / Full Day (₹500 - ₹1,200)</option>
                  <option value="24 Hours">24 Hours / 1 Day (₹650 - ₹1,500)</option>
                  <option value="Weekly (7 Days)">7 Days / Weekly Pass (₹3,800+)</option>
                </select>
              </div>
            </div>
            <p className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-orange-100 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Complimentary sanitized ISI helmet included. Original Driving License required upon vehicle pickup.</span>
            </p>
          </div>
        );

      case 'Outstation':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Trip Type</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="Round Trip" {...register('tripType')} />
                  <span className="font-medium text-slate-800">Round Trip</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="One Way" {...register('tripType')} />
                  <span className="font-medium text-slate-800">One Way Drop</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Pickup City / Area in Kanpur *</label>
                <input {...register('pickupLocation')} defaultValue="Kanpur" placeholder="Pickup Area in Kanpur" className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Destination City *</label>
                <input {...register('dropLocation')} placeholder="E.g. Lucknow, Agra, Ayodhya, Varanasi" className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              {watchedFields.tripType === 'Round Trip' && (
                <div>
                  <label className="block text-sm font-medium mb-1">Return Date</label>
                  <input type="date" {...register('returnDate')} min={watchedFields.travelDate || new Date().toISOString().split('T')[0]} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600" />
                </div>
              )}
            </div>
          </>
        );

      case 'Sightseeing Tour':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Select Sightseeing Package *</label>
              <select {...register('requirements')} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600 bg-white">
                <option value="Bithoor Pilgrimage Tour">Bithoor Pilgrimage Tour (Half Day)</option>
                <option value="Kanpur City Heritage Tour">Kanpur Heritage & Zoo Tour (Full Day)</option>
                <option value="Holy Temples of Kanpur">Holy Temples of Kanpur (JK Temple, Panki, ISKCON)</option>
                <option value="Ayodhya & Prayagraj Package">Ayodhya & Prayagraj Sangam (2 Days)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Number of Passengers *</label>
              <input type="number" {...register('passengers')} defaultValue={4} min="1" max="26" className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>
        );

      default:
        return (
          <div>
            <label className="block text-sm font-medium mb-1">Corporate / Special Requirements</label>
            <textarea {...register('requirements')} rows={3} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-600" placeholder="Please describe number of vehicles, monthly contract or travel details..." />
          </div>
        );
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      <PageHero 
        title="Book Your Car or Bike in Kanpur" 
        subtitle="Quick, transparent reservation with instant confirmation & zero hidden fees"
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Form Area */}
          <div className="flex-grow lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              
              {/* Progress Steps */}
              {step < 3 && (
                <div className="flex items-center mb-8 pb-6 border-b border-slate-200">
                  <div className={cn("flex flex-col items-center", step >= 1 ? "text-primary-800" : "text-slate-400")}>
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold mb-1.5 shadow-sm", step >= 1 ? "bg-primary-900 text-white" : "bg-slate-100")}>1</div>
                    <span className="text-xs sm:text-sm font-bold">Service & Vehicle</span>
                  </div>
                  <div className={cn("flex-grow h-1 mx-4 rounded", step >= 2 ? "bg-primary-800" : "bg-slate-200")} />
                  <div className={cn("flex flex-col items-center", step >= 2 ? "text-primary-800" : "text-slate-400")}>
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold mb-1.5 shadow-sm", step >= 2 ? "bg-primary-900 text-white" : "bg-slate-100")}>2</div>
                    <span className="text-xs sm:text-sm font-bold">Contact & Confirm</span>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Step 1: Choose Service & Details</h2>
                    <p className="text-slate-500 text-xs sm:text-sm">Select whether you need a chauffeured car or a self-drive bike in Kanpur.</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1.5">Service Type *</label>
                    <select {...register('serviceType')} className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-600 bg-white font-semibold text-slate-800">
                      <option value="Local Rental">🚗 Local Car Rental (Hourly within Kanpur)</option>
                      <option value="Bike Rental">🏍️ Bike & Scooter Rental (Self-Drive in Kanpur)</option>
                      <option value="Outstation">🛣️ Outstation Cabs (Intercity One-Way & Round Trip)</option>
                      <option value="Sightseeing Tour">🏛️ Kanpur Sightseeing & Tour Packages</option>
                      <option value="Corporate">💼 Corporate Travel & Monthly Retainer</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Travel / Rental Date *</label>
                      <input type="date" {...register('travelDate')} min={new Date().toISOString().split('T')[0]} className={cn("w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary-600", errors.travelDate ? "border-red-500" : "border-slate-300")} />
                      {errors.travelDate && <p className="text-red-500 text-xs mt-1">{errors.travelDate.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Time (Optional)</label>
                      <input type="time" {...register('travelTime')} className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-600" />
                    </div>
                  </div>

                  <ServiceSpecificFields />

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {serviceType === 'Bike Rental' ? 'Preferred Two-Wheeler Model' : 'Preferred Car Category'}
                    </label>
                    <select {...register('vehicleType')} className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-600 bg-white">
                      {serviceType === 'Bike Rental' ? (
                        <>
                          <option value="Honda Activa 6G">Honda Activa 6G (₹400/day)</option>
                          <option value="TVS Jupiter 125">TVS Jupiter 125 (₹450/day)</option>
                          <option value="Hero Splendor Plus">Hero Splendor Plus (₹400/day)</option>
                          <option value="Honda Shine 125">Honda Shine 125 (₹500/day)</option>
                          <option value="Bajaj Pulsar 150">Bajaj Pulsar 150 (₹650/day)</option>
                          <option value="Royal Enfield Classic 350">Royal Enfield Classic 350 (₹1,100/day)</option>
                        </>
                      ) : (
                        <>
                          <option value="Hatchback (Swift / i20)">Hatchback (Maruti Swift / i20)</option>
                          <option value="Sedan (Dzire / Aura)">Sedan (Maruti Dzire / Hyundai Aura)</option>
                          <option value="SUV (Ertiga / Scorpio)">SUV (Maruti Ertiga / Mahindra Scorpio)</option>
                          <option value="Innova Crysta">Premium MPV (Toyota Innova Crysta)</option>
                          <option value="Tempo Traveller">Tempo Traveller (12 - 17 Seater)</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-slate-100">
                    <button 
                      type="button" 
                      onClick={() => {
                        if (watchedFields.travelDate) setStep(2);
                        else {
                          handleSubmit(() => {})();
                        }
                      }}
                      className="bg-primary-900 hover:bg-primary-950 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md"
                    >
                      Continue to Step 2
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Step 2: Contact Details</h2>
                    <p className="text-slate-500 text-xs sm:text-sm">We will contact you immediately to confirm your booking and send vehicle details.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input {...register('name')} className={cn("w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary-600", errors.name ? "border-red-500" : "border-slate-300")} placeholder="Your full name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Phone Number *</label>
                      <input {...register('phone')} type="tel" className={cn("w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary-600", errors.phone ? "border-red-500" : "border-slate-300")} placeholder="10-digit mobile number" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address (Optional)</label>
                    <input {...register('email')} type="email" className={cn("w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary-600", errors.email ? "border-red-500" : "border-slate-300")} placeholder="For receipt & confirmation" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Any Specific Requests or Notes? (Optional)</label>
                    <textarea {...register('requirements')} rows={3} className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-600" placeholder="e.g. Extra helmet needed, GST invoice required, pickup landmark..." />
                  </div>

                  <div className="flex justify-between pt-6 border-t border-slate-100">
                    <button 
                      type="button" 
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border border-slate-300 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Back
                    </button>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md flex items-center"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting Request...</>
                      ) : (
                        'Confirm & Send Booking Request'
                      )}
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && bookingResult && (
                <div className="text-center py-10 px-4">
                  {bookingResult.success ? (
                    <>
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">Booking Request Received!</h2>
                      <p className="text-base text-slate-600 mb-6">Thank you for choosing KanpurCabs. Your request is registered.</p>
                      
                      <div className="bg-slate-50 p-5 rounded-xl max-w-sm mx-auto mb-6 border border-slate-200">
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Booking Reference ID</p>
                        <p className="text-2xl font-mono font-bold text-primary-900">{bookingResult.bookingId}</p>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-8 max-w-md mx-auto">
                        Our executive will call you shortly on <strong>{watchedFields.phone}</strong> to confirm your vehicle availability, pickup landmark, and pricing.
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/" className="bg-primary-900 hover:bg-primary-950 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                          Back to Home
                        </Link>
                        <Link href="/pricing" className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                          View Rate Chart
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                        ⚠️
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Submission Error</h2>
                      <p className="text-red-600 mb-6 text-sm">{bookingResult.message}</p>
                      <button 
                        onClick={() => setStep(2)}
                        className="bg-primary-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm"
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
              <div className="bg-primary-950 text-white rounded-2xl p-6 shadow-md border border-primary-900">
                <h3 className="font-bold text-base mb-4 pb-3 border-b border-primary-800 text-accent-400 uppercase tracking-wider text-xs">
                  Booking Summary
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-400">Service:</span>
                    <span className="font-bold text-white text-right">{watchedFields.serviceType}</span>
                  </li>
                  {watchedFields.travelDate && (
                    <li className="flex justify-between">
                      <span className="text-slate-400">Date:</span>
                      <span className="font-medium text-white text-right">{watchedFields.travelDate}</span>
                    </li>
                  )}
                  {watchedFields.vehicleType && (
                    <li className="flex justify-between">
                      <span className="text-slate-400">Vehicle:</span>
                      <span className="font-medium text-accent-300 text-right">{watchedFields.vehicleType}</span>
                    </li>
                  )}
                </ul>
                <div className="mt-4 pt-4 border-t border-primary-800/80">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ✓ Zero upfront payment required for enquiry. Pay after trip or at vehicle pickup.
                  </p>
                </div>
              </div>
            )}

            {/* Need Direct Assistance Card (DriverSuvidha pattern) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-4">Direct Assistance</h3>
              <div className="space-y-4 text-sm">
                <a href={getPhoneLink(SITE_CONFIG.phone)} className="flex items-center gap-3 text-slate-700 hover:text-primary-900 group">
                  <div className="w-10 h-10 bg-blue-50 text-primary-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-900 group-hover:text-white transition-colors">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Call Us 24/7</p>
                    <p className="font-bold text-slate-900">{SITE_CONFIG.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-slate-700 hover:text-primary-900 group">
                  <div className="w-10 h-10 bg-orange-50 text-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email Enquiry</p>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">{SITE_CONFIG.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-4">Why KanpurCabs?</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Sanitized & regularly serviced cars and two-wheelers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Professional background-verified chauffeurs for car trips</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Transparent tariff structure with zero hidden overtime fees</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Complimentary helmets & insurance on all bike rentals</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}

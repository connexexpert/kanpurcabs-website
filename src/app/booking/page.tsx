'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, BookingFormData } from '@/lib/validations';
import PageHero from '@/components/ui/PageHero';
import {
  CheckCircle2,
  Loader2,
  Clock,
  ShieldCheck,
  MapPin,
  PhoneCall,
  Bike,
  Car,
  AlertCircle,
  UserCheck,
  Compass,
  Moon,
  Sparkles,
} from 'lucide-react';
import { cn, SITE_CONFIG, getPhoneLink } from '@/lib/utils';
import Link from 'next/link';

export default function BookingPageWrapper() {
  return (
    <Suspense
      fallback={
        <main className="bg-slate-50 min-h-screen pb-16">
          <PageHero title="Hire a Verified Driver" subtitle="Loading driver hire form..." />
          <div className="container mx-auto px-4 py-12 flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
          </div>
        </main>
      }
    >
      <BookingPage />
    </Suspense>
  );
}

function BookingPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<{
    success: boolean;
    bookingId?: string;
    message?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: 'Local Hourly Car Driver',
      vehicleType: 'Sedan (Manual)',
      tripType: 'Round Trip',
      pickupLocation: 'Civil Lines, Kanpur',
      packageDuration: '8hr',
      sourcePage: 'booking',
      sourceSection: 'driver-booking-form',
    },
  });

  const serviceType = watch('serviceType');
  const watchedFields = watch();

  // Load query params on mount
  useEffect(() => {
    const qService =
      searchParams.get('service') || searchParams.get('serviceType') || searchParams.get('type');
    if (qService) {
      if (qService.toLowerCase().includes('bike') || qService.toLowerCase().includes('rider')) {
        setValue('serviceType', 'Two-Wheeler & Bike Rider');
        setValue('vehicleType', 'Scooter (Automatic)');
        setValue('packageDuration', '2hr_quick');
      } else if (qService.toLowerCase().includes('outstation')) {
        setValue('serviceType', 'Outstation Trip Driver');
        setValue('packageDuration', 'outstation_sameday');
      } else if (qService.toLowerCase().includes('monthly')) {
        setValue('serviceType', 'Monthly Personal Chauffeur');
        setValue('packageDuration', 'monthly_8hr');
      } else if (qService.toLowerCase().includes('night')) {
        setValue('serviceType', 'Night Party & Safe Drop Driver');
      } else {
        setValue('serviceType', 'Local Hourly Car Driver');
      }
    }

    const fields = [
      'tripType',
      'pickup',
      'from',
      'drop',
      'to',
      'destination',
      'date',
      'travelDate',
      'package',
      'duration',
      'packageDuration',
      'vehicle',
      'vehicleType',
    ];
    fields.forEach((field) => {
      const val = searchParams.get(field);
      if (val) {
        if (field === 'pickup' || field === 'from') setValue('pickupLocation', val);
        else if (field === 'drop' || field === 'to' || field === 'destination')
          setValue('dropLocation', val);
        else if (field === 'date' || field === 'travelDate') setValue('travelDate', val);
        else if (field === 'package' || field === 'duration' || field === 'packageDuration')
          setValue('packageDuration', val);
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
      setBookingResult({
        success: false,
        message: 'Failed to submit driver request. Please call our Kanpur dispatch desk directly.',
      });
      setStep(3);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ServiceSpecificFields = () => {
    switch (serviceType) {
      case 'Local Hourly Car Driver':
      case 'Local Rental':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                Pickup Area in Kanpur *
              </label>
              <select
                {...register('pickupLocation')}
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 bg-white text-xs sm:text-sm"
              >
                <option value="Civil Lines, Kanpur">Civil Lines</option>
                <option value="Swaroop Nagar, Kanpur">Swaroop Nagar</option>
                <option value="Kakadeo, Kanpur">Kakadeo</option>
                <option value="Kidwai Nagar, Kanpur">Kidwai Nagar</option>
                <option value="Mall Road, Kanpur">Mall Road</option>
                <option value="Kalyanpur / IIT Kanpur">Kalyanpur / IIT Gate</option>
                <option value="Govind Nagar, Kanpur">Govind Nagar</option>
                <option value="Gumti No. 5, Kanpur">Gumti No. 5</option>
                <option value="Shyam Nagar, Kanpur">Shyam Nagar</option>
                <option value="Other Area in Kanpur">Other Area in Kanpur</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                Driver Duty Package *
              </label>
              <select
                {...register('packageDuration')}
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 bg-white text-xs sm:text-sm font-medium"
              >
                <option value="4hr">4 Hours Local Duty — ₹400 (Overtime ₹80/hr)</option>
                <option value="8hr">8 Hours Full Day Duty — ₹700 (Popular)</option>
                <option value="12hr">12 Hours Extended Duty — ₹950 (Overtime ₹100/hr)</option>
              </select>
            </div>
          </div>
        );

      case 'Two-Wheeler & Bike Rider':
      case 'Bike Rental':
        return (
          <div className="space-y-4 bg-orange-50/60 p-4 rounded-xl border border-orange-200">
            <div className="flex items-center gap-2 text-xs font-bold text-accent-700 uppercase tracking-wider">
              <Bike className="w-4 h-4" /> Two-Wheeler Rider On-Demand Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Pickup Area in Kanpur *
                </label>
                <input
                  {...register('pickupLocation')}
                  placeholder="E.g. Kakadeo, Swaroop Nagar, Mall Road"
                  className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-500 bg-white text-xs sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Rider Package *
                </label>
                <select
                  {...register('packageDuration')}
                  className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-500 bg-white text-xs sm:text-sm font-medium"
                >
                  <option value="2hr_quick">2 Hours Task Rider — ₹199 (Overtime ₹50/hr)</option>
                  <option value="4hr_half">4 Hours Half Day — ₹349 (Popular)</option>
                  <option value="8hr_full">8 Hours Full Day — ₹599</option>
                </select>
              </div>
            </div>
            <p className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-orange-100 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                Our rider will arrive on time with a valid commercial DL to pilot your personal scooter or motorcycle safely.
              </span>
            </p>
          </div>
        );

      case 'Outstation Trip Driver':
      case 'Outstation':
        return (
          <>
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                Outstation Trip Duration
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm">
                  <input type="radio" value="Same-Day Return" {...register('tripType')} />
                  <span className="font-semibold text-slate-800">Same-Day Return (₹1,000/day + ₹250 DA)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm">
                  <input type="radio" value="Multi-Day / Stay" {...register('tripType')} />
                  <span className="font-semibold text-slate-800">Multi-Day Stay (₹1,200/day + ₹400 Stay DA)</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Pickup Area in Kanpur *
                </label>
                <input
                  {...register('pickupLocation')}
                  defaultValue="Civil Lines, Kanpur"
                  placeholder="Pickup Area in Kanpur"
                  className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Destination City *
                </label>
                <input
                  {...register('dropLocation')}
                  placeholder="E.g. Lucknow, Ayodhya, Delhi, Varanasi, Agra"
                  className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                  required
                />
              </div>
              {watchedFields.tripType === 'Multi-Day / Stay' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    Expected Return Date
                  </label>
                  <input
                    type="date"
                    {...register('returnDate')}
                    min={watchedFields.travelDate || new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                  />
                </div>
              )}
            </div>
          </>
        );

      case 'Monthly Personal Chauffeur':
      case 'Corporate':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                Monthly Duty Plan (26 Days) *
              </label>
              <select
                {...register('packageDuration')}
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 bg-white text-xs sm:text-sm font-medium"
              >
                <option value="monthly_8hr">8 Hours Daily Plan — ₹15,000 / month</option>
                <option value="monthly_10hr">10 Hours Daily Plan — ₹18,000 / month (Popular)</option>
                <option value="monthly_12hr">12 Hours Comprehensive Plan — ₹21,000 / month</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                Pickup Residence / Office in Kanpur *
              </label>
              <input
                {...register('pickupLocation')}
                placeholder="E.g. Swaroop Nagar, Civil Lines"
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                required
              />
            </div>
          </div>
        );

      case 'Night Party & Safe Drop Driver':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                Event / Banquet Hall Location in Kanpur *
              </label>
              <input
                {...register('pickupLocation')}
                placeholder="E.g. Landmark Hotel, Mall Road or Banquet Hall"
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                Drop Residence in Kanpur *
              </label>
              <input
                {...register('dropLocation')}
                placeholder="Your home address for safe drop"
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                required
              />
            </div>
          </div>
        );

      default:
        return (
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
              Specific Driver Requirements
            </label>
            <textarea
              {...register('requirements')}
              rows={3}
              className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
              placeholder="Describe vehicle model, timing, or any specific chauffeur preferences..."
            />
          </div>
        );
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      <PageHero
        title="Hire a Verified Driver in Kanpur"
        subtitle="Prompt doorstep chauffeur & rider dispatch for your personal car and two-wheeler — 100% police verified"
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Form Area */}
          <div className="flex-grow lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              {/* Progress Steps */}
              {step < 3 && (
                <div className="flex items-center mb-8 pb-6 border-b border-slate-200">
                  <div
                    className={cn(
                      'flex flex-col items-center',
                      step >= 1 ? 'text-primary-800' : 'text-slate-400'
                    )}
                  >
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold mb-1.5 shadow-sm text-sm',
                        step >= 1 ? 'bg-primary-900 text-white' : 'bg-slate-100'
                      )}
                    >
                      1
                    </div>
                    <span className="text-xs sm:text-sm font-bold">Duty & Vehicle</span>
                  </div>
                  <div
                    className={cn(
                      'flex-grow h-1 mx-4 rounded',
                      step >= 2 ? 'bg-primary-800' : 'bg-slate-200'
                    )}
                  />
                  <div
                    className={cn(
                      'flex flex-col items-center',
                      step >= 2 ? 'text-primary-800' : 'text-slate-400'
                    )}
                  >
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold mb-1.5 shadow-sm text-sm',
                        step >= 2 ? 'bg-primary-900 text-white' : 'bg-slate-100'
                      )}
                    >
                      2
                    </div>
                    <span className="text-xs sm:text-sm font-bold">Address & Contact</span>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">
                      Step 1: Choose Driver Service & Vehicle
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      Select your driver duty type and specify the vehicle you will provide.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                      Service Type *
                    </label>
                    <select
                      {...register('serviceType')}
                      className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 bg-white font-bold text-slate-800 text-xs sm:text-sm"
                    >
                      <option value="Local Hourly Car Driver">
                        Local Hourly Car Driver (4h, 8h, 12h in Kanpur)
                      </option>
                      <option value="Outstation Trip Driver">
                        Outstation Highway Driver (Lucknow, Delhi, Ayodhya, Varanasi)
                      </option>
                      <option value="Monthly Personal Chauffeur">
                        Monthly Permanent Chauffeur (26 Days Contract)
                      </option>
                      <option value="Two-Wheeler & Bike Rider">
                        Two-Wheeler & Bike Rider on Demand (Starts @ ₹199)
                      </option>
                      <option value="Night Party & Safe Drop Driver">
                        Late Night Party & Safe Drop Driver
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Duty Date *
                      </label>
                      <input
                        type="date"
                        {...register('travelDate')}
                        min={new Date().toISOString().split('T')[0]}
                        className={cn(
                          'w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm',
                          errors.travelDate ? 'border-red-500' : 'border-slate-300'
                        )}
                      />
                      {errors.travelDate && (
                        <p className="text-red-500 text-xs mt-1">{errors.travelDate.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Driver Reporting Time
                      </label>
                      <input
                        type="time"
                        {...register('travelTime')}
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <ServiceSpecificFields />

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Your Vehicle Type & Transmission *
                    </label>
                    <select
                      {...register('vehicleType')}
                      className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 bg-white text-xs sm:text-sm"
                    >
                      {serviceType === 'Two-Wheeler & Bike Rider' || serviceType === 'Bike Rental' ? (
                        <>
                          <option value="Scooter (Activa / Jupiter / Access) - Automatic">
                            Scooter (Honda Activa, TVS Jupiter, Access) — Automatic
                          </option>
                          <option value="Commuter Motorcycle (Splendor / Shine) - Manual">
                            Commuter Motorcycle (Hero Splendor, Shine, Platina) — Manual
                          </option>
                          <option value="Sports Motorcycle (Pulsar / Apache) - Manual">
                            Sports Motorcycle (Bajaj Pulsar, TVS Apache) — Manual
                          </option>
                          <option value="Cruiser Motorcycle (Royal Enfield Bullet/Classic) - Manual">
                            Cruiser Motorcycle (Royal Enfield Classic 350) — Manual
                          </option>
                        </>
                      ) : (
                        <>
                          <option value="Hatchback (Swift / i10 / WagonR) - Manual">
                            Hatchback (Maruti Swift, i10, WagonR, Tiago) — Manual
                          </option>
                          <option value="Hatchback (Swift / i10 / Baleno) - Automatic AMT/CVT">
                            Hatchback (Swift, i20, Baleno) — Automatic (AMT/CVT)
                          </option>
                          <option value="Sedan (Dzire / Aura / City) - Manual">
                            Sedan (Maruti Dzire, Aura, Honda City, Ciaz) — Manual
                          </option>
                          <option value="Sedan (Dzire / City / Verna) - Automatic">
                            Sedan (Honda City, Dzire, Verna) — Automatic (CVT/AT)
                          </option>
                          <option value="SUV / MPV (Innova Crysta / Ertiga) - Manual">
                            SUV / MPV (Toyota Innova Crysta, Ertiga, Scorpio) — Manual
                          </option>
                          <option value="SUV (Innova / Fortuner / XUV700) - Automatic">
                            SUV (Innova Crysta, Fortuner, XUV700) — Automatic
                          </option>
                          <option value="Luxury Car (BMW / Audi / Mercedes) - Automatic">
                            Luxury Car (BMW, Audi, Mercedes, Jaguar) — Dual-Clutch / AT
                          </option>
                          <option value="Commercial Tempo Traveller (12-17 Seater)">
                            Commercial Passenger Vehicle (Force Tempo Traveller 12-17s)
                          </option>
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
                      className="bg-primary-900 hover:bg-primary-950 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md text-xs sm:text-sm"
                    >
                      Continue to Step 2
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">
                      Step 2: Pickup Address & Contact Details
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      Our Kanpur dispatch desk will call you immediately to confirm driver arrival.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        className={cn(
                          'w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm',
                          errors.name ? 'border-red-500' : 'border-slate-300'
                        )}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Mobile Phone Number *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className={cn(
                          'w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm',
                          errors.phone ? 'border-red-500' : 'border-slate-300'
                        )}
                        placeholder="10-digit mobile number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                        placeholder="For booking confirmation receipt"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Doorstep Address / Landmark in Kanpur *
                      </label>
                      <input
                        {...register('pickupLocation')}
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                        placeholder="House no, apartment, street, landmark"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Special Notes / Specific Chauffeur Requests (Optional)
                    </label>
                    <textarea
                      {...register('requirements')}
                      rows={2}
                      className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-800 text-xs sm:text-sm"
                      placeholder="e.g. Elderly passenger in car, manual transmission skill required, Hindi/English speaking..."
                    />
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
                    <p className="flex items-center gap-2 font-medium text-slate-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      100% Police Verified Chauffeur Guarantee
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Customer provides vehicle and fuel. Driver duty tariff is settled directly upon duty completion.
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-slate-600 font-bold text-xs hover:text-slate-900"
                    >
                      &larr; Back to Step 1
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary-900 hover:bg-primary-950 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md flex items-center gap-2 text-xs sm:text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting Request...
                        </>
                      ) : (
                        'Confirm & Dispatch Driver'
                      )}
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && bookingResult && (
                <div className="text-center py-8">
                  {bookingResult.success ? (
                    <div className="max-w-md mx-auto space-y-4">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        Driver Request Received!
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Thank you for booking with KanpurDrivers. Our dispatch coordinator is assigning your verified driver.
                      </p>

                      {bookingResult.bookingId && (
                        <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                          <span className="text-[11px] text-slate-500 uppercase block font-medium">
                            Booking Reference ID
                          </span>
                          <span className="text-lg font-mono font-extrabold text-primary-900">
                            {bookingResult.bookingId}
                          </span>
                        </div>
                      )}

                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-xs text-blue-900 text-left space-y-2">
                        <div className="font-bold flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-primary-800" /> What Happens Next:
                        </div>
                        <p>1. Our dispatch desk will call you within 10 minutes to verify your location.</p>
                        <p>2. You will receive the driver&apos;s photo, contact number, and police ID via WhatsApp/SMS.</p>
                        <p>3. Uniformed driver arrives at your Kanpur doorstep in 45-60 minutes.</p>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                          href="/"
                          className="px-6 py-2.5 bg-primary-900 text-white rounded-xl font-bold text-xs hover:bg-primary-950 transition-colors"
                        >
                          Return Home
                        </Link>
                        <a
                          href={getPhoneLink(SITE_CONFIG.phone)}
                          className="px-6 py-2.5 border border-slate-300 text-slate-800 rounded-xl font-bold text-xs hover:bg-slate-50 transition-colors"
                        >
                          Call Dispatch: {SITE_CONFIG.phone}
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-md mx-auto space-y-4">
                      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <AlertCircle className="w-10 h-10" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Request Error</h2>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {bookingResult.message || 'Failed to submit driver request.'}
                      </p>
                      <button
                        onClick={() => setStep(2)}
                        className="px-6 py-2.5 bg-primary-900 text-white rounded-xl font-bold text-xs hover:bg-primary-950"
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Quick Summary & Tariff Guidance */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Verified Driver Standards
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Police Verified:</strong> Clean local police background checks and identity record.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Customer Car Policy:</strong> Service executed on customer&apos;s personal vehicle.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Punctual Arrival:</strong> 45-60 minute doorstep arrival anywhere in Kanpur.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Transparent Billing:</strong> Zero hidden commissions or surge charges.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-950 text-white p-6 rounded-2xl shadow-sm border border-primary-900">
              <span className="text-accent-400 font-bold uppercase tracking-wider text-[10px] block mb-1">
                Standard Tariff Card
              </span>
              <h4 className="font-bold text-base mb-3">Popular Driver Tariffs</h4>

              <div className="space-y-2 text-xs border-t border-white/10 pt-3">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-300">Local Car Driver (4h)</span>
                  <strong className="text-accent-400">₹400</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-300">Local Car Driver (8h)</span>
                  <strong className="text-accent-400">₹700</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-300">Outstation Return</span>
                  <strong className="text-accent-400">₹1,000 / day</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-300">Monthly Chauffeur (8h)</span>
                  <strong className="text-accent-400">₹15,000 / mo</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-300">Bike Rider on Demand (2h)</span>
                  <strong className="text-accent-400">₹199</strong>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10">
                <a
                  href={getPhoneLink(SITE_CONFIG.phone)}
                  className="w-full py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl text-center block text-xs transition-colors"
                >
                  Need Help? Call {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

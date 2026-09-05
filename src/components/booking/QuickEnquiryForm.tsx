'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Simplified schema for quick enquiry
const quickEnquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid 10-digit number'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  travelDate: z.string().min(1, 'Date is required'),
  requirements: z.string().optional(),
});

type QuickEnquiryFormData = z.infer<typeof quickEnquirySchema>;

interface QuickEnquiryFormProps {
  sourcePage: string;
  sourceSection: string;
  serviceType?: string;
  title?: string;
  carId?: string;
  tourPackageId?: string;
  className?: string;
}

export default function QuickEnquiryForm({
  sourcePage,
  sourceSection,
  serviceType = 'General',
  title = 'Quick Enquiry',
  carId,
  tourPackageId,
  className
}: QuickEnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuickEnquiryFormData>({
    resolver: zodResolver(quickEnquirySchema),
  });

  const onSubmit = async (data: QuickEnquiryFormData) => {
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          serviceType,
          sourcePage,
          sourceSection,
          ...(carId && { requirements: `Car ID: ${carId}. \n${data.requirements || ''}` }),
          ...(tourPackageId && { requirements: `Tour ID: ${tourPackageId}. \n${data.requirements || ''}` }),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Enquiry sent successfully! We will contact you soon.' });
        reset();
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md border border-gray-100", className)}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      
      {status.type === 'success' && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-md border border-green-200">
          {status.message}
        </div>
      )}
      
      {status.type === 'error' && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200">
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input
            {...register('name')}
            className={cn("w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent", errors.name ? "border-red-500" : "border-gray-300")}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            {...register('phone')}
            type="tel"
            className={cn("w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent", errors.phone ? "border-red-500" : "border-gray-300")}
            placeholder="10-digit mobile number"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
          <input
            {...register('email')}
            type="email"
            className={cn("w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent", errors.email ? "border-red-500" : "border-gray-300")}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date *</label>
          <input
            {...register('travelDate')}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className={cn("w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent", errors.travelDate ? "border-red-500" : "border-gray-300")}
          />
          {errors.travelDate && <p className="text-red-500 text-xs mt-1">{errors.travelDate.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements</label>
          <textarea
            {...register('requirements')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
            placeholder="Any specific requirements?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Send Enquiry'
          )}
        </button>
      </form>
    </div>
  );
}

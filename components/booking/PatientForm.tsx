"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

// Zod schema for patient booking form
export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be under 100 characters"),
  email: z.string().email("Please enter a valid email address").max(254, "Email must be under 254 characters"),
  phone: z.string().min(6, "Phone number is too short").max(20, "Phone number must be under 20 characters"),
  notes: z.string().max(2000, "Notes must be under 2000 characters").optional().or(z.literal("")),
  website: z.string().max(100).optional() // Honeypot
});

export type BookingFormData = z.infer<typeof bookingSchema>;

type PatientFormProps = {
  initialValues: Partial<BookingFormData>;
  onSubmitSuccess: (data: BookingFormData) => Promise<void>;
  onBack: () => void;
};

export function PatientForm({ initialValues, onSubmitSuccess, onBack }: PatientFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: initialValues.name ?? "",
      email: initialValues.email ?? "",
      phone: initialValues.phone ?? "",
      notes: initialValues.notes ?? "",
      website: ""
    }
  });

  async function onFormSubmit(data: BookingFormData) {
    if (data.website) {
      // Spam honeypot triggered
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      await onSubmitSuccess(data);
    } catch {
      setSubmitError("Failed to book your appointment. Please check your connection and try again.");
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <h3 className="text-lg font-semibold text-dark">Your Information</h3>
        <p className="text-sm text-gray-mid">Please provide contact details to confirm your appointment</p>
      </div>

      {submitError && (
        <div className="rounded-base bg-gold/10 p-4 text-sm text-gold-soft border border-gold/20" role="alert">
          {submitError}
        </div>
      )}

      {/* Honeypot Field */}
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" {...register("website")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-dark" htmlFor="name">
            Full Name *
          </label>
          <input
            className={cn(
              "focus-ring w-full rounded-base border bg-cream px-3 py-2.5 text-sm",
              errors.name ? "border-gold" : "border-black/10"
            )}
            id="name"
            placeholder="Sarah Jenkins"
            type="text"
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-gold">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-dark" htmlFor="email">
            Email Address *
          </label>
          <input
            className={cn(
              "focus-ring w-full rounded-base border bg-cream px-3 py-2.5 text-sm",
              errors.email ? "border-gold" : "border-black/10"
            )}
            id="email"
            placeholder="sarah@example.com"
            type="email"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-gold">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1 sm:col-span-2">
          <label className="text-xs font-semibold text-dark" htmlFor="phone">
            Phone Number *
          </label>
          <input
            className={cn(
              "focus-ring w-full rounded-base border bg-cream px-3 py-2.5 text-sm",
              errors.phone ? "border-gold" : "border-black/10"
            )}
            id="phone"
            placeholder="(512) 555-0193"
            type="tel"
            {...register("phone")}
          />
          {errors.phone && <p className="text-xs text-gold">{errors.phone.message}</p>}
        </div>

        {/* Notes */}
        <div className="space-y-1 sm:col-span-2">
          <label className="text-xs font-semibold text-dark" htmlFor="notes">
            Special Requests / Goals
          </label>
          <textarea
            className={cn(
              "focus-ring w-full rounded-base border bg-cream px-3 py-2.5 text-sm min-h-[100px] resize-y",
              errors.notes ? "border-gold" : "border-black/10"
            )}
            id="notes"
            placeholder="Let us know what you want to achieve or if you have any questions."
            {...register("notes")}
          />
          {errors.notes && <p className="text-xs text-gold">{errors.notes.message}</p>}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          className="focus-ring text-sm font-semibold text-gray-mid transition hover:text-dark disabled:opacity-50"
          disabled={submitting}
          onClick={onBack}
          type="button"
        >
          Back
        </button>
        <button
          className="focus-ring inline-flex items-center justify-center rounded-base bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep disabled:opacity-50"
          disabled={submitting}
          type="submit"
        >
          {submitting ? "Securing Your Spot..." : "Book Consultation"}
        </button>
      </div>
    </form>
  );
}

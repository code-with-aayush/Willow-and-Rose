"use client";

import { useEffect, useState } from "react";
import { services, clinic } from "@/lib/data";

type BookingPayload = {
  treatment: string;
  clinician: string;
  date: string;
  time: string;
  patient: {
    name: string;
    email: string;
    phone: string;
    notes?: string;
  };
};

function formatClinician(id: string): string {
  if (id === "claire") return "Claire Whitmore, NP-C";
  if (id === "maya") return "Maya Torres, RN";
  return "No Preference (Any Clinician)";
}

function formatService(id: string): string {
  const found = services.find((s) => s.id === id);
  return found ? found.name : "Free Medical Aesthetics Consultation";
}

export function ThankYouSummary() {
  const [booking, setBooking] = useState<BookingPayload | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("latest_booking");
      if (stored) {
        setBooking(JSON.parse(stored) as BookingPayload);
      }
    } catch {
      // Fail silently and use default placeholders
    }
  }, []);

  const serviceName = booking ? formatService(booking.treatment) : "Free Medical Aesthetics Consultation";
  const clinicianName = booking ? formatClinician(booking.clinician) : "Claire Whitmore, NP-C";
  const appointmentDate = booking ? `${booking.date} at ${booking.time}` : "Same-week slot (Pending confirmation)";
  const patientName = booking?.patient.name || "Valued Patient";
  const patientEmail = booking?.patient.email || clinic.email;

  return (
    <div className="mt-10 overflow-hidden rounded-large bg-white p-7 text-left text-dark shadow-lift">
      <p className="text-eyebrow text-brand-green">
        <span className="text-gold">✦</span> Appointment Summary
      </p>
      <dl className="mt-5 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="text-eyebrow text-gray-mid">Patient Name</dt>
          <dd className="mt-2 text-sm font-semibold text-dark">{patientName}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-gray-mid">Selected Service</dt>
          <dd className="mt-2 text-sm font-semibold text-dark">{serviceName}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-gray-mid">Specialist</dt>
          <dd className="mt-2 text-sm font-semibold text-dark">{clinicianName}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-gray-mid">Date & Time</dt>
          <dd className="mt-2 text-sm font-semibold text-dark">{appointmentDate}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-gray-mid">Location</dt>
          <dd className="mt-2 text-sm font-semibold text-dark">{clinic.address}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-gray-mid">Contact Email</dt>
          <dd className="mt-2 text-sm font-semibold text-dark">{patientEmail}</dd>
        </div>
      </dl>
    </div>
  );
}

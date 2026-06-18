"use client";

import Image from "next/image";
import { Check, User } from "lucide-react";
import { cn } from "@/lib/utils";

export type Clinician = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const clinicians: Clinician[] = [
  {
    id: "claire",
    name: "Claire Whitmore, NP-C",
    role: "Lead Injector & Co-Founder",
    bio: "Board-certified Nurse Practitioner with 10 years in aesthetic medicine, specializing in natural cosmetic injectables.",
    image: "/images/team-claire.png"
  },
  {
    id: "maya",
    name: "Maya Torres, RN",
    role: "Laser & Skin Specialist",
    bio: "Registered nurse specializing in medical-grade facials, skin rejuvenation, and advanced laser treatments.",
    image: "/images/team-maya.png"
  }
];

type ClinicianSelectProps = {
  selectedId: string;
  onSelect: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export function ClinicianSelect({ selectedId, onSelect, onNext, onBack }: ClinicianSelectProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-dark">Choose a Specialist</h3>
        <p className="text-sm text-gray-mid">Select a provider or choose no preference to see all times</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* No Preference Option */}
        <button
          className={cn(
            "focus-ring group relative flex flex-col items-center justify-center rounded-large border p-5 text-center transition duration-200 min-h-[200px]",
            selectedId === "any"
              ? "border-brand-green bg-brand-light/40 shadow-soft"
              : "border-black/10 bg-white hover:border-brand-green/50 hover:shadow-card"
          )}
          onClick={() => onSelect("any")}
          type="button"
        >
          <span
            className={cn(
              "inline-flex h-14 w-14 items-center justify-center rounded-full transition-colors",
              selectedId === "any" ? "bg-brand-green text-white" : "bg-brand-light text-brand-green"
            )}
          >
            <User size={28} />
          </span>
          <h4 className="mt-4 font-display text-base font-semibold text-dark">No Preference</h4>
          <p className="mt-2 text-xs leading-5 text-gray-mid">
            Show available times for all clinicians to find the earliest slot
          </p>
          {selectedId === "any" && (
            <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-white animate-fade-up">
              <Check size={14} />
            </span>
          )}
        </button>

        {/* Clinicians */}
        {clinicians.map((clinician) => {
          const isSelected = selectedId === clinician.id;

          return (
            <button
              className={cn(
                "focus-ring group relative flex flex-col items-center rounded-large border p-5 text-center transition duration-200",
                isSelected
                  ? "border-brand-green bg-brand-light/40 shadow-soft"
                  : "border-black/10 bg-white hover:border-brand-green/50 hover:shadow-card"
              )}
              key={clinician.id}
              onClick={() => onSelect(clinician.id)}
              type="button"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-brand-green/20">
                <Image
                  alt={clinician.name}
                  className="object-cover"
                  fill
                  sizes="80px"
                  src={clinician.image}
                />
              </div>
              <h4 className="mt-4 font-display text-base font-semibold text-dark">{clinician.name}</h4>
              <p className="text-xs font-medium text-brand-green">{clinician.role}</p>
              <p className="mt-2 text-xs leading-5 text-gray-mid line-clamp-3">{clinician.bio}</p>
              {isSelected && (
                <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-white animate-fade-up">
                  <Check size={14} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between pt-4">
        <button
          className="focus-ring text-sm font-semibold text-gray-mid transition hover:text-dark"
          onClick={onBack}
          type="button"
        >
          Back
        </button>
        <button
          className="focus-ring inline-flex items-center justify-center rounded-base bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep disabled:opacity-50"
          disabled={!selectedId}
          onClick={onNext}
          type="button"
        >
          Continue to Date & Time
        </button>
      </div>
    </div>
  );
}

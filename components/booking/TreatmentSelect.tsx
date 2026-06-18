"use client";

import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

type TreatmentSelectProps = {
  selectedId: string;
  onSelect: (id: string) => void;
  onNext: () => void;
};

export function TreatmentSelect({ selectedId, onSelect, onNext }: TreatmentSelectProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-dark">Select a Treatment</h3>
        <p className="text-sm text-gray-mid">Choose the service you are interested in discussing</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedId === service.id;

          return (
            <button
              className={cn(
                "focus-ring group relative flex flex-col justify-between rounded-large border p-5 text-left transition duration-200",
                isSelected
                  ? "border-brand-green bg-brand-light/40 shadow-soft"
                  : "border-black/10 bg-white hover:border-brand-green/50 hover:shadow-card"
              )}
              key={service.id}
              onClick={() => onSelect(service.id)}
              type="button"
            >
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                      isSelected ? "bg-brand-green text-white" : "bg-brand-light text-brand-green"
                    )}
                  >
                    <Icon size={20} />
                  </span>
                  {isSelected && (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-white animate-fade-up">
                      <Check size={14} />
                    </span>
                  )}
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold text-dark">{service.name}</h4>
                <p className="mt-2 text-xs leading-5 text-gray-mid line-clamp-3">{service.body}</p>
              </div>
              <p className="mt-4 text-xs font-semibold text-brand-green">{service.price}</p>
            </button>
          );
        })}
      </div>

      <div className="flex justify-end pt-4">
        <button
          className="focus-ring inline-flex items-center justify-center rounded-base bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep disabled:opacity-50"
          disabled={!selectedId}
          onClick={onNext}
          type="button"
        >
          Continue to Clinician
        </button>
      </div>
    </div>
  );
}

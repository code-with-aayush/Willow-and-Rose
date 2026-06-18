"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TreatmentSelect } from "./TreatmentSelect";
import { ClinicianSelect } from "./ClinicianSelect";
import { DateTimeSelect } from "./DateTimeSelect";
import { PatientForm, type BookingFormData } from "./PatientForm";
import { services } from "@/lib/data";

type BookingFlowProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const stepsInfo = [
  { num: 1, label: "Treatment" },
  { num: 2, label: "Specialist" },
  { num: 3, label: "Time" },
  { num: 4, label: "Details" }
];

function getInitialService(paramVal?: string | string[]): string {
  if (!paramVal) return "";
  const val = String(paramVal).toLowerCase();
  const found = services.find((s) => s.id === val || s.name.toLowerCase().includes(val));
  return found ? found.id : "";
}

export function BookingFlow({ searchParams }: BookingFlowProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState("");
  const [clinician, setClinician] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientInfo, setPatientInfo] = useState<Partial<BookingFormData>>({});

  useEffect(() => {
    if (searchParams) {
      const initialService = getInitialService(searchParams.service);
      if (initialService) {
        setTreatment(initialService);
        setStep(2);
      }
      setPatientInfo({
        name: typeof searchParams.name === "string" ? searchParams.name : "",
        email: typeof searchParams.email === "string" ? searchParams.email : ""
      });
    }
  }, [searchParams]);

  async function handleFormSubmit(data: BookingFormData) {
    const payload = {
      treatment,
      clinician,
      date,
      time,
      patient: data
    };

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error("booking_failed");
    }

    localStorage.setItem("latest_booking", JSON.stringify(payload));
    router.push("/thank-you");
  }

  return (
    <div className="rounded-large bg-white p-6 shadow-card md:p-8">
      {/* Progress Tracker */}
      <nav aria-label="Progress" className="mb-8 border-b border-black/5 pb-4">
        <ul className="flex justify-between items-center text-xs">
          {stepsInfo.map((s) => {
            const isActive = step === s.num;
            const isCompleted = step > s.num;
            return (
              <li className="flex items-center gap-2" key={s.num}>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                    isActive
                      ? "bg-brand-green text-white"
                      : isCompleted
                      ? "bg-brand-light text-brand-green"
                      : "bg-cream text-gray-mid border border-black/10"
                  }`}
                >
                  {s.num}
                </span>
                <span
                  className={`font-semibold hidden sm:inline ${
                    isActive ? "text-dark" : "text-gray-mid"
                  }`}
                >
                  {s.label}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Steps Content */}
      <div className="min-h-[350px]">
        {step === 1 && (
          <TreatmentSelect
            onNext={() => setStep(2)}
            onSelect={setTreatment}
            selectedId={treatment}
          />
        )}
        {step === 2 && (
          <ClinicianSelect
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
            onSelect={setClinician}
            selectedId={clinician}
          />
        )}
        {step === 3 && (
          <DateTimeSelect
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
            onSelectDate={setDate}
            onSelectTime={setTime}
            selectedDate={date}
            selectedTime={time}
          />
        )}
        {step === 4 && (
          <PatientForm
            initialValues={patientInfo}
            onBack={() => setStep(3)}
            onSubmitSuccess={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
}

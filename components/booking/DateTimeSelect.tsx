"use client";

import { useMemo } from "react";
import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type DateTimeSelectProps = {
  selectedDate: string;
  selectedTime: string;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
};

// Generates next 10 valid business days starting from tomorrow
function getUpcomingDays(startDate: Date): Date[] {
  const days: Date[] = [];
  const current = new Date(startDate);

  while (days.length < 10) {
    current.setDate(current.getDate() + 1);
    const dayOfWeek = current.getDay();
    // 0 is Sunday, which we filter out (closed)
    if (dayOfWeek !== 0) {
      days.push(new Date(current));
    }
  }
  return days;
}

export function DateTimeSelect({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onNext,
  onBack
}: DateTimeSelectProps) {
  const upcomingDays = useMemo(() => getUpcomingDays(new Date()), []);

  // Determine available time slots based on the day of the week
  const slots = useMemo(() => {
    if (!selectedDate) return [];
    const dateObj = new Date(selectedDate);
    const isSaturday = dateObj.getDay() === 6;

    if (isSaturday) {
      return ["10:00 AM", "11:30 AM", "1:00 PM"];
    }
    return ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
  }, [selectedDate]);

  function handleDateClick(dateStr: string) {
    onSelectDate(dateStr);
    onSelectTime(""); // Reset time when date changes
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-dark">Select Date & Time</h3>
        <p className="text-sm text-gray-mid">Choose your preferred consultation time</p>
      </div>

      <div className="space-y-4">
        {/* Date Selector */}
        <div>
          <span className="flex items-center gap-2 text-xs font-semibold text-brand-green uppercase tracking-wider mb-3">
            <Calendar size={14} /> 1. Select Date
          </span>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {upcomingDays.map((date) => {
              const dateString = date.toDateString();
              const isSelected = selectedDate === dateString;
              const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
              const dayNum = date.getDate();
              const month = date.toLocaleDateString("en-US", { month: "short" });

              return (
                <button
                  className={cn(
                    "focus-ring flex flex-col items-center justify-center min-w-[70px] h-[88px] shrink-0 rounded-large border transition-all duration-200",
                    isSelected
                      ? "border-brand-green bg-brand-green text-white shadow-soft"
                      : "border-black/10 bg-white text-dark hover:border-brand-green/50"
                  )}
                  key={dateString}
                  onClick={() => handleDateClick(dateString)}
                  type="button"
                >
                  <span className={cn("text-[10px] uppercase font-bold", isSelected ? "text-white/80" : "text-gray-mid")}>
                    {weekday}
                  </span>
                  <span className="text-xl font-semibold mt-1">{dayNum}</span>
                  <span className={cn("text-[10px] font-medium", isSelected ? "text-white/80" : "text-gray-mid")}>
                    {month}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selector */}
        {selectedDate && (
          <div className="animate-fade-up">
            <span className="flex items-center gap-2 text-xs font-semibold text-brand-green uppercase tracking-wider mb-3">
              <Clock size={14} /> 2. Select Time
            </span>
            <div className="flex flex-wrap gap-2">
              {slots.map((slot) => {
                const isSelected = selectedTime === slot;
                return (
                  <button
                    className={cn(
                      "focus-ring rounded-full px-4 py-2.5 text-xs font-semibold shadow-card transition-colors duration-200",
                      isSelected
                        ? "bg-brand-green text-white"
                        : "bg-white text-dark border border-black/10 hover:border-brand-green/50"
                    )}
                    key={slot}
                    onClick={() => onSelectTime(slot)}
                    type="button"
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        )}
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
          disabled={!selectedDate || !selectedTime}
          onClick={onNext}
          type="button"
        >
          Continue to Information
        </button>
      </div>
    </div>
  );
}

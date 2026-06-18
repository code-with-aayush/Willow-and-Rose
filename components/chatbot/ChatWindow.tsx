"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/navigation";
import { CalendarDays, Leaf, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import NextLink from "next/link";

type ChatMessage = {
  sender: "willow" | "user";
  text: string;
};

type ChatWindowProps = {
  onClose: () => void;
};

const serviceReplies = ["Botox & Fillers", "Laser Treatments", "Skin Rejuvenation", "Body Contouring"];
const quickReplies = ["Book a Consultation", "Learn About Treatments", "Pricing & FAQs"];

function detectBooking(text: string): boolean {
  const t = text.toLowerCase();
  return t.includes("book") || t.includes("appointment") || t.includes("consult");
}

function mapTreatmentId(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("botox") || t.includes("filler")) return "botox";
  if (t.includes("laser")) return "laser";
  if (t.includes("skin") || t.includes("facial") || t.includes("rejuvenation")) return "skin";
  if (t.includes("body") || t.includes("contouring")) return "body";
  return "botox";
}

function getFAQReply(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("botox")) {
    return "Botox starts at $12/unit. Most patients need 20-40 units depending on the area. Your NP will give you an exact quote at your free consultation — no surprises!";
  }
  if (t.includes("filler")) {
    return "Dermal fillers start at $550/syringe. We'll recommend exactly what's needed — never more than necessary.";
  }
  if (t.includes("free") || t.includes("cost") && t.includes("consult")) {
    return "100% free, no credit card required. Come in, meet our team, ask every question you have, and decide from there.";
  }
  if (t.includes("natural") || t.includes("unnatural") || t.includes("done")) {
    return "That's our #1 concern too — and our patients love us for it. We specialise in subtle, natural-looking results. We'd rather do less and have you come back than overdo it.";
  }
  if (t.includes("hour") || t.includes("location") || t.includes("address")) {
    return "We're at 2847 South Lamar Blvd, Austin, TX 78704. Hours are Mon-Fri 9am-6pm and Sat 10am-3pm.";
  }
  return "I can help with booking, treatment info, pricing, hours, location, or FAQs. What would you like to know?";
}

export function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "willow",
      text: "Hi there! I'm Willow. Welcome to Willow & Rose. Are you looking to book a consultation, learn about our treatments, or something else?"
    }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [bookingState, setBookingState] = useState<"idle" | "treatment" | "name" | "email" | "done">("idle");
  const [treatment, setTreatment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function processBooking(trimmed: string) {
    if (bookingState === "treatment") {
      const selectedId = mapTreatmentId(trimmed);
      setTreatment(selectedId);
      setBookingState("name");
      return "Perfect. Can I grab your name and email so we can confirm your spot? What is your full name?";
    }
    if (bookingState === "name") {
      setName(trimmed);
      setBookingState("email");
      return `Got it, ${trimmed}! And what is your email address?`;
    }
    if (bookingState === "email") {
      setEmail(trimmed);
      setBookingState("done");
      return `Thanks, ${name}! I have pre-filled your details. Click the button below to choose your consultation time on our calendar.`;
    }
    return "";
  }

  function getReply(trimmed: string): string {
    if (bookingState !== "idle") {
      return processBooking(trimmed);
    }
    if (detectBooking(trimmed)) {
      setBookingState("treatment");
      return "Great! Let's get you booked. What treatment are you interested in?";
    }
    return getFAQReply(trimmed);
  }

  function sendMessage(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;

    setMessages((current) => [...current, { sender: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const replyText = getReply(trimmed);
      setMessages((current) => [...current, { sender: "willow", text: replyText }]);
      setTyping(false);
    }, 700);
  }

  return (
    <section
      aria-label="Chat with Willow"
      className="flex h-[min(540px,calc(100vh-120px))] w-[min(380px,calc(100vw-40px))] flex-col overflow-hidden rounded-large bg-white shadow-lift"
    >
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-green to-brand-deep px-4 py-4 text-white">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-gold-soft/40">
              <Leaf className="text-gold-soft" size={18} />
            </span>
            <div>
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                Chat with Willow
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-soft" />
              </h2>
              <p className="text-xs text-white/80">Typically replies in seconds</p>
            </div>
          </div>
          <button
            aria-label="Close chat"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={onClose}
            type="button"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto bg-cream p-4">
        {messages.map((msg, index) => (
          <div
            className={cn("flex items-end gap-2", msg.sender === "user" ? "justify-end" : "justify-start")}
            key={`${msg.sender}-${index}`}
          >
            {msg.sender === "willow" && (
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-sage text-white">
                <Leaf size={13} />
              </span>
            )}
            <p
              className={cn(
                "max-w-[78%] rounded-large px-4 py-3 text-sm leading-5",
                msg.sender === "user"
                  ? "rounded-br-sm bg-brand-green text-white shadow-soft"
                  : "rounded-bl-sm bg-white text-dark shadow-card"
              )}
            >
              {msg.text}
            </p>
          </div>
        ))}

        {typing && (
          <div className="flex items-end gap-2">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-sage text-white">
              <Leaf size={13} />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-large rounded-bl-sm bg-white px-4 py-3 shadow-card">
              {[0, 1, 2].map((i) => (
                <span
                  className="inline-block h-1.5 w-1.5 animate-bounce-soft rounded-full bg-brand-green"
                  key={i}
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        {!typing && bookingState === "treatment" && (
          <div className="flex flex-wrap gap-2 pl-9">
            {serviceReplies.map((reply) => (
              <button
                className="focus-ring rounded-full border border-brand-green/30 bg-white px-3 py-2 text-xs font-semibold text-brand-green shadow-card transition hover:bg-brand-green hover:text-white"
                key={reply}
                onClick={() => sendMessage(reply)}
                type="button"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {!typing && bookingState === "idle" && messages.length === 1 && (
          <div className="flex flex-wrap gap-2 pl-9">
            {quickReplies.map((reply) => (
              <button
                className="focus-ring rounded-full border border-brand-green/30 bg-white px-3 py-2 text-xs font-semibold text-brand-green shadow-card transition hover:bg-brand-green hover:text-white"
                key={reply}
                onClick={() => sendMessage(reply)}
                type="button"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {!typing && bookingState === "done" && (
          <div className="pl-9 py-2 animate-fade-up">
            <NextLink
              className="focus-ring inline-flex items-center gap-2 rounded-base bg-gold px-4 py-2.5 text-xs font-bold text-dark shadow-soft transition hover:bg-gold-soft"
              href={`/book?service=${treatment}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`}
              onClick={onClose}
            >
              <CalendarDays size={14} />
              Open Consultation Calendar
            </NextLink>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Footer input */}
      <div className="border-t border-black/10 bg-white p-3">
        <NextLink
          className="mb-3 flex items-center justify-center gap-2 rounded-base bg-brand-light px-3 py-2.5 text-xs font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
          href="/book"
          onClick={onClose}
        >
          <CalendarDays size={15} />
          Show available consultation times
        </NextLink>
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
        >
          <input
            aria-label="Message Willow"
            className="focus-ring min-w-0 flex-1 rounded-base border border-black/10 bg-cream px-3 py-2.5 text-sm"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about treatments..."
            value={input}
          />
          <button
            aria-label="Send message"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-base bg-brand-green text-white transition hover:bg-brand-deep disabled:opacity-50"
            disabled={!input.trim() || typing}
            type="submit"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

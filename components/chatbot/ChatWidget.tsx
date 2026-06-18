"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Bot, CalendarDays, MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Leaf } from "@/components/shared/Ornament";
import { cn } from "@/lib/utils";

type ChatMessage = {
  sender: "willow" | "user";
  text: string;
};

const quickReplies = ["Book a Consultation", "Learn About Treatments", "Pricing & FAQs"];

function getReply(input: string) {
  const text = input.toLowerCase();
  if (text.includes("book") || text.includes("appointment") || text.includes("consult")) {
    return "Great! Let's get you booked. What treatment are you interested in? I can also take you straight to our booking calendar.";
  }
  if (text.includes("botox")) {
    return "Botox starts at $12/unit. Most patients need 20-40 units depending on the area. Your NP will give you an exact quote at your free consultation — no surprises!";
  }
  if (text.includes("filler")) {
    return "Dermal fillers start at $550/syringe. We'll recommend exactly what's needed — never more than necessary.";
  }
  if (text.includes("free")) {
    return "100% free, no credit card required. Come in, meet our team, ask every question you have, and decide from there.";
  }
  if (text.includes("natural") || text.includes("unnatural") || text.includes("done")) {
    return "That's our #1 concern too — and our patients love us for it. We specialise in subtle, natural-looking results. We'd rather do less and have you come back than overdo it.";
  }
  if (text.includes("price") || text.includes("pricing") || text.includes("cost")) {
    return "Botox starts at $12/unit, fillers from $550/syringe, facials from $125, laser from $175, and body contouring from $350. Your consultation quote is always free.";
  }
  if (text.includes("hour") || text.includes("location") || text.includes("address")) {
    return "We're at 2847 South Lamar Blvd, Austin, TX 78704. Hours are Mon-Fri 9am-6pm and Sat 10am-3pm.";
  }
  return "I can help with booking, treatment info, pricing, hours, location, or FAQs. What would you like to know?";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "willow",
      text: "Hi there! I'm Willow. Welcome to Willow & Rose. Are you looking to book a consultation, learn about our treatments, or something else?"
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const voiceflowProjectId = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID;
  const hasVoiceflow = Boolean(voiceflowProjectId && voiceflowProjectId !== "xxxxxxxxxxxx");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!open) setTeaser(true);
    }, 8000);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, typing]);

  const serviceReplies = useMemo(
    () => ["Botox & Fillers", "Laser Treatments", "Skin Rejuvenation", "Body Contouring"],
    []
  );

  function sendMessage(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;
    setMessages((current) => [...current, { sender: "user", text: trimmed }]);
    setInput("");
    setTeaser(false);
    setTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { sender: "willow", text: getReply(trimmed) }]);
      setTyping(false);
    }, 700);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {teaser && !open ? (
        <button
          className="focus-ring group relative max-w-[280px] rounded-large bg-white p-4 pr-12 text-left text-sm leading-5 text-dark shadow-lift"
          onClick={() => {
            setOpen(true);
            setTeaser(false);
          }}
          type="button"
        >
          Hi! I'm Willow — happy to help you book or answer treatment questions.{" "}
          <span aria-hidden className="text-brand-green">→</span>
          <span
            aria-hidden
            className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white"
          />
        </button>
      ) : null}

      {open ? (
        <section
          aria-label="Chat with Willow"
          className="flex h-[min(540px,calc(100vh-120px))] w-[min(380px,calc(100vw-40px))] flex-col overflow-hidden rounded-large bg-white shadow-lift"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-green to-brand-deep px-4 py-4 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl"
            />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-gold-soft/40">
                  <Leaf className="text-gold-soft" size={18} />
                </span>
                <div>
                  <h2 className="flex items-center gap-2 text-sm font-semibold">
                    Chat with Willow
                    <span
                      aria-hidden
                      className="inline-block h-1.5 w-1.5 rounded-full bg-gold-soft"
                      title="Online"
                    />
                  </h2>
                  <p className="text-xs text-white/80">Typically replies in seconds</p>
                </div>
              </div>
              <button
                aria-label="Close chat"
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                onClick={() => setOpen(false)}
                type="button"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {hasVoiceflow ? (
            <div className="flex flex-1 items-center justify-center p-5 text-center text-sm text-gray-mid">
              Voiceflow project configured. The production embed can mount here with project ID{" "}
              {voiceflowProjectId}.
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-3 overflow-y-auto bg-cream p-4">
                {messages.map((message, index) => (
                  <div
                    className={cn(
                      "flex items-end gap-2",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                    key={`${message.sender}-${index}`}
                  >
                    {message.sender === "willow" ? (
                      <span
                        aria-hidden
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-sage text-white"
                      >
                        <Leaf size={13} />
                      </span>
                    ) : null}
                    <p
                      className={cn(
                        "max-w-[78%] rounded-large px-4 py-3 text-sm leading-5",
                        message.sender === "user"
                          ? "rounded-br-sm bg-brand-green text-white shadow-soft"
                          : "rounded-bl-sm bg-white text-dark shadow-card"
                      )}
                    >
                      {message.text}
                    </p>
                  </div>
                ))}
                {typing ? (
                  <div className="flex items-end gap-2">
                    <span
                      aria-hidden
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-sage text-white"
                    >
                      <Leaf size={13} />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-large rounded-bl-sm bg-white px-4 py-3 shadow-card">
                      {[0, 1, 2].map((i) => (
                        <span
                          aria-hidden
                          className="inline-block h-1.5 w-1.5 animate-bounce-soft rounded-full bg-brand-green"
                          key={i}
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </span>
                  </div>
                ) : null}
                {messages.length === 1 ? (
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
                ) : null}
                {messages.some((message) => message.text.toLowerCase().includes("what treatment")) &&
                !typing ? (
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
                ) : null}
                <div ref={bottomRef} />
              </div>
              <div className="border-t border-black/10 bg-white p-3">
                <Link
                  className="mb-3 flex items-center justify-center gap-2 rounded-base bg-brand-light px-3 py-2.5 text-xs font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
                  href="/book"
                >
                  <CalendarDays aria-hidden size={15} />
                  Show available consultation times
                </Link>
                <form
                  className="flex gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    sendMessage(input);
                  }}
                >
                  <input
                    aria-label="Message Willow"
                    className="focus-ring min-w-0 flex-1 rounded-base border border-black/10 bg-cream px-3 py-2.5 text-sm"
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask about treatments..."
                    value={input}
                  />
                  <button
                    aria-label="Send message"
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-base bg-brand-green text-white transition hover:bg-brand-deep disabled:opacity-50"
                    disabled={!input.trim() || typing}
                    type="submit"
                  >
                    <Send aria-hidden size={16} />
                  </button>
                </form>
              </div>
            </>
          )}
        </section>
      ) : null}

      <div className="relative">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full border border-gold/50 animate-pulse-ring"
        />
        <Button
          ariaLabel={open ? "Close Willow chat" : "Open Willow chat"}
          className="relative h-16 w-16 rounded-full p-0 shadow-lift ring-2 ring-gold/30 ring-offset-2 ring-offset-cream"
          onClick={() => {
            setOpen((value) => !value);
            setTeaser(false);
          }}
        >
          {open ? (
            <X aria-hidden size={22} />
          ) : (
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-deep text-white">
              <MessageCircle aria-hidden size={24} />
              <span className="absolute right-2 top-2 inline-flex h-3 w-3 items-center justify-center rounded-full bg-gold ring-2 ring-cream">
                <Leaf aria-hidden className="text-white" size={7} />
              </span>
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}

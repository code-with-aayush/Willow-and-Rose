"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Bot, CalendarDays, MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/shared/Button";
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
  }, [messages, open]);

  const serviceReplies = useMemo(() => ["Botox & Fillers", "Laser Treatments", "Skin Rejuvenation", "Body Contouring"], []);

  function sendMessage(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;
    setMessages((current) => [
      ...current,
      { sender: "user", text: trimmed },
      { sender: "willow", text: getReply(trimmed) }
    ]);
    setInput("");
    setTeaser(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {teaser && !open ? (
        <button
          className="focus-ring max-w-[260px] rounded-large bg-white p-4 text-left text-sm leading-5 text-dark shadow-lg"
          onClick={() => {
            setOpen(true);
            setTeaser(false);
          }}
          type="button"
        >
          Hi there! I'm Willow. Want help choosing a treatment or booking a free consult?
        </button>
      ) : null}

      {open ? (
        <section
          aria-label="Chat with Willow"
          className="flex h-[min(520px,calc(100vh-120px))] w-[min(360px,calc(100vw-40px))] flex-col overflow-hidden rounded-large bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between bg-brand-green px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Bot aria-hidden="true" size={19} />
              </span>
              <div>
                <h2 className="text-sm font-semibold">Chat with Willow</h2>
                <p className="text-xs text-white/80">Typically replies in seconds</p>
              </div>
            </div>
            <button aria-label="Close chat" className="focus-ring rounded-base p-2" onClick={() => setOpen(false)} type="button">
              <X size={18} />
            </button>
          </div>

          {hasVoiceflow ? (
            <div className="flex flex-1 items-center justify-center p-5 text-center text-sm text-gray-mid">
              Voiceflow project configured. The production embed can mount here with project ID {voiceflowProjectId}.
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-3 overflow-y-auto bg-cream p-4">
                {messages.map((message, index) => (
                  <div
                    className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                    key={`${message.sender}-${index}`}
                  >
                    <p
                      className={cn(
                        "max-w-[82%] rounded-large px-4 py-3 text-sm leading-5",
                        message.sender === "user" ? "bg-brand-green text-white" : "bg-white text-dark shadow-card"
                      )}
                    >
                      {message.text}
                    </p>
                  </div>
                ))}
                {messages.length === 1 ? (
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <button
                        className="focus-ring rounded-full bg-white px-3 py-2 text-xs font-semibold text-brand-green shadow-card"
                        key={reply}
                        onClick={() => sendMessage(reply)}
                        type="button"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                ) : null}
                {messages.some((message) => message.text.toLowerCase().includes("what treatment")) ? (
                  <div className="flex flex-wrap gap-2">
                    {serviceReplies.map((reply) => (
                      <button
                        className="focus-ring rounded-full bg-white px-3 py-2 text-xs font-semibold text-brand-green shadow-card"
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
                  className="mb-3 flex items-center justify-center gap-2 rounded-base bg-brand-light px-3 py-2 text-xs font-semibold text-brand-green"
                  href="/book"
                >
                  <CalendarDays aria-hidden="true" size={15} />
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
                    className="focus-ring min-w-0 flex-1 rounded-base border border-black/10 px-3 py-2 text-sm"
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask about treatments..."
                    value={input}
                  />
                  <button
                    aria-label="Send message"
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-base bg-brand-green text-white"
                    type="submit"
                  >
                    <Send aria-hidden="true" size={16} />
                  </button>
                </form>
              </div>
            </>
          )}
        </section>
      ) : null}

      <Button
        ariaLabel={open ? "Close Willow chat" : "Open Willow chat"}
        className="h-14 w-14 rounded-full p-0 shadow-lg"
        onClick={() => {
          setOpen((value) => !value);
          setTeaser(false);
        }}
      >
        {open ? <X aria-hidden="true" size={22} /> : <MessageCircle aria-hidden="true" size={22} />}
      </Button>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, Leaf } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { ChatWindow } from "./ChatWindow";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!open) setTeaser(true);
    }, 8000);
    return () => window.clearTimeout(timer);
  }, [open]);

  function handleTeaserClick() {
    setOpen(true);
    setTeaser(false);
  }

  function handleToggleClick() {
    setOpen((prev) => !prev);
    setTeaser(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {teaser && !open && (
        <button
          className="focus-ring group relative max-w-[280px] rounded-large bg-white p-4 pr-12 text-left text-sm leading-5 text-dark shadow-lift animate-fade-up"
          onClick={handleTeaserClick}
          type="button"
        >
          Hi! I'm Willow — happy to help you book or answer treatment questions.{" "}
          <span aria-hidden className="text-brand-green">→</span>
          <span
            aria-hidden
            className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white"
          />
        </button>
      )}

      {open && <ChatWindow onClose={() => setOpen(false)} />}

      <div className="relative">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full border border-gold/50 animate-pulse-ring"
        />
        <Button
          ariaLabel={open ? "Close Willow chat" : "Open Willow chat"}
          className="relative h-16 w-16 rounded-full p-0 shadow-lift ring-2 ring-gold/30 ring-offset-2 ring-offset-cream"
          onClick={handleToggleClick}
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

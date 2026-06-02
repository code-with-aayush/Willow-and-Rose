import {
  Award,
  BadgeCheck,
  CalendarDays,
  Facebook,
  HeartHandshake,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Syringe,
  Wand2,
  Zap
} from "lucide-react";

export const clinic = {
  name: "Willow & Rose",
  fullName: "Willow & Rose Medical Aesthetics",
  address: "2847 South Lamar Blvd, Austin, TX 78704",
  phone: "(512) 555-0193",
  email: "hello@willowandrose.com",
  hours: "Mon-Fri 9am-6pm · Sat 10am-3pm"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" }
];

export const trustItems = [
  { icon: Star, text: "4.9 patient rating" },
  { icon: ShieldCheck, text: "NP-led treatments" },
  { icon: CalendarDays, text: "Same-week appts" },
  { icon: HeartHandshake, text: "Free consults" }
];

export const whyUs = [
  {
    icon: BadgeCheck,
    title: "Clinically trained, not just certified",
    body: "Every treatment is performed by a licensed Nurse Practitioner with 8+ years of aesthetic experience."
  },
  {
    icon: Sparkles,
    title: "Results that look like you",
    body: "We're obsessed with natural-looking outcomes. Subtlety is the point."
  },
  {
    icon: MessageCircle,
    title: "No-pressure consultations, always free",
    body: "Come in, ask everything, and decide what's right for you. No obligation, ever."
  }
];

export const services = [
  {
    id: "botox",
    icon: Syringe,
    name: "Botox & Fillers",
    image: "/images/service-botox.png",
    price: "From $12/unit · Fillers from $550/syringe",
    body: "Soften lines, restore volume, and wake up looking like a well-rested version of yourself. Our injectors are known for a light touch and results that people notice — but can't quite place.",
    who: "Best for softening expression lines, restoring facial volume, lip balance, and a refreshed look without obvious tells.",
    popular: ["Botox", "Dysport", "Lip filler", "Cheek filler", "Smile line correction"]
  },
  {
    id: "laser",
    icon: Zap,
    name: "Laser Treatments",
    image: "/images/service-laser.png",
    price: "From $175/session",
    body: "From laser hair removal to skin resurfacing and pigmentation correction — our medical-grade lasers are safe for all skin tones and dialed in by our clinical team for your specific concerns.",
    who: "Ideal for unwanted hair, pigmentation, sun damage, uneven texture, and patients who want visible results with a clinical plan.",
    popular: ["Laser hair removal", "IPL photofacial", "Pigment correction", "Skin resurfacing"]
  },
  {
    id: "skin",
    icon: Wand2,
    name: "Skin Rejuvenation",
    image: "/images/service-facial.png",
    price: "From $125/treatment",
    body: "HydraFacials, chemical peels, microneedling — treatments that go beyond what a regular spa can offer. Your skin will thank you, and so will your mirror.",
    who: "For dullness, breakouts, fine lines, texture, pores, and anyone ready for a smarter routine backed by medical-grade care.",
    popular: ["HydraFacial", "Chemical peels", "Microneedling", "Dermaplaning", "Custom skin plans"]
  },
  {
    id: "body",
    icon: Award,
    name: "Body Contouring",
    image: "/images/service-body.png",
    price: "From $350/session",
    body: "Non-surgical fat reduction and skin tightening that actually works. No downtime, no scalpels — just technology that helps your body look the way you work hard for it to.",
    who: "Designed for stubborn areas, post-weight-loss tightening, and patients who want a non-surgical option with no downtime.",
    popular: ["Fat reduction", "Skin tightening", "Treatment mapping", "Maintenance plans"]
  }
];

export const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin TX",
    quote:
      "I was terrified of looking 'done.' My nurse practitioner completely understood that. Three months later, I look like a refreshed version of myself. I get compliments constantly and I never tell people what I did."
  },
  {
    name: "Jessica T.",
    location: "Round Rock TX",
    quote:
      "I've been to three other med spas in Austin and Willow & Rose is on another level. They actually listened and didn't try to upsell me."
  },
  {
    name: "Priya K.",
    location: "Cedar Park TX",
    quote:
      "I came in for laser hair removal and ended up trying microneedling too. Both were painless. The team made me feel completely at ease."
  }
];

export const stats = [
  { value: "300+", label: "patients cared for" },
  { value: "4.9", label: "average rating" },
  { value: "8+", label: "years experience" },
  { value: "Same week", label: "appointments" }
];

export const faqItems = [
  {
    question: "Is the consultation really free?",
    answer:
      "100% free, no credit card required. Come in, meet our team, ask every question you have, and decide from there."
  },
  {
    question: "How much is Botox?",
    answer:
      "Botox starts at $12/unit. Most patients need 20-40 units depending on the area. Your NP will give you an exact quote at your free consultation — no surprises!"
  },
  {
    question: "How much are fillers?",
    answer:
      "Dermal fillers start at $550/syringe. We'll recommend exactly what's needed — never more than necessary."
  },
  {
    question: "How soon can I get an appointment?",
    answer: "Usually within the same week! Want me to show you available times right now?"
  },
  {
    question: "Will I look unnatural?",
    answer:
      "That's our #1 concern too — and our patients love us for it. We specialise in subtle, natural-looking results. We'd rather do less and have you come back than overdo it."
  },
  {
    question: "Where are you located?",
    answer: "We're located at 2847 South Lamar Blvd, Austin, TX 78704."
  }
];

export const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook }
];

import Link from "next/link";
import { clinic, navLinks, services, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-3xl">{clinic.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            Warm, no-pressure medical aesthetics in the heart of Austin.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  aria-label={social.label}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-green"
                  href={social.href}
                  key={social.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden="true" size={18} />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Quick links</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {[...navLinks, { href: "/book", label: "Book" }].map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {services.map((service) => (
              <li key={service.id}>
                <Link className="transition hover:text-white" href={`/services#${service.id}`}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Contact</h2>
          <address className="mt-5 space-y-3 text-sm not-italic leading-6 text-white/80">
            <p>{clinic.address}</p>
            <p>
              <a className="transition hover:text-white" href={`tel:${clinic.phone.replace(/[^0-9]/g, "")}`}>
                {clinic.phone}
              </a>
            </p>
            <p>
              <a className="transition hover:text-white" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </p>
            <p>{clinic.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Willow & Rose Medical Aesthetics. Portfolio demo.</p>
          <p>Appointments available same week</p>
        </div>
      </div>
    </footer>
  );
}

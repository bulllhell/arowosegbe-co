import { Link } from "react-router-dom";
import {
  RiPhoneLine,
  RiWhatsappLine,
  RiMailLine,
  RiMapPinLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

const QUICK_LINKS = [
  { label: "Home",        to: "/" },
  { label: "Services",    to: "/services" },
  { label: "About",       to: "/about" },
  { label: "Make a Request", to: "/request" },
];

const SERVICES_SHORT = [
  "Land Sales",
  "Property Sales",
  "Construction",
  "Renovation",
  "Caretaker Services",
  "Site Planning",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white">

      {/* ── Main footer body ── */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col leading-none mb-4">
              <span className="font-display text-2xl font-bold text-white">
                Arowosegbe
              </span>
              <span className="text-[10px] font-body font-medium tracking-[0.18em] text-brand-orange uppercase">
                & Co. Properties
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mt-3 max-w-xs">
              A personal, professional property service you can trust. Land, builds, renovations — handled with care.
            </p>

            {/* Social / contact icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="tel:+2348139043515"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange transition-colors"
                aria-label="Call"
              >
                <RiPhoneLine size={15} />
              </a>
              <a
                href="https://wa.me/2348139043515"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange transition-colors"
                aria-label="WhatsApp"
              >
                <RiWhatsappLine size={15} />
              </a>
              <a
                href="mailto:arowosegbetosin22@gmail.com"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-brand-orange hover:border-brand-orange transition-colors"
                aria-label="Email"
              >
                <RiMailLine size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-brand-orange transition-colors flex items-center gap-1.5 group"
                  >
                    <RiArrowRightUpLine
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES_SHORT.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-white/70 hover:text-brand-orange transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <RiPhoneLine size={15} className="text-brand-orange mt-0.5 shrink-0" />
                <a href="tel:+2348139043515" className="text-sm text-white/70 hover:text-white transition-colors">
                  +234 813 904 3515
                </a>
              </li>
              <li className="flex items-start gap-3">
                <RiWhatsappLine size={15} className="text-brand-orange mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/2348139043515"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <RiMailLine size={15} className="text-brand-orange mt-0.5 shrink-0" />
                <a href="mailto:arowosegbetosin22@gmail.com" className="text-sm text-white/70 hover:text-white transition-colors break-all">
                  arowosegbetosin22@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <RiMapPinLine size={15} className="text-brand-orange mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="container-max px-5 md:px-10 lg:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {year} Arowosegbe & Co. Properties. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with care for a professional you can trust.
          </p>
        </div>
      </div>

    </footer>
  );
}
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiWhatsappLine } from "react-icons/ri";

// Stagger container
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">

      {/* ── Background layers ── */}
      {/* Warm gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F3] via-[#FEF1E6] to-[#FDF8F3]" />

      {/* Large decorative circle — top right */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-orange/8 blur-3xl pointer-events-none" />

      {/* Small accent circle — bottom left */}
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-brand-orange/6 blur-2xl pointer-events-none" />

      {/* Thin diagonal decorative lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#E8620A" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 container-max section-padding w-full pt-32 md:pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-brand-orange" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
                Lagos, Nigeria
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] font-bold text-brand-charcoal"
            >
              Property Made{" "}
              <span className="italic text-gradient">Personal.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={item}
              className="mt-6 text-base md:text-lg text-brand-stone/80 leading-relaxed font-light"
            >
              Land, construction, renovation, caretaking — one trusted professional
              handles it all. Tell me what you need and I'll take it from there.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mt-10">
              <Link
                to="/request"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/25 hover:-translate-y-0.5 text-sm"
              >
                Make a Request
                <RiArrowRightLine size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-brand-border bg-white/60 backdrop-blur-sm hover:bg-white text-brand-charcoal font-medium px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
              >
                View Services
              </Link>
            </motion.div>

            {/* WhatsApp nudge */}
            <motion.div variants={item} className="flex items-center gap-2 mt-8">
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-orange transition-colors"
              >
                <RiWhatsappLine size={16} className="text-green-500" />
                Or message me on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Visual card stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Back card */}
            <div className="absolute top-6 right-6 w-72 h-80 rounded-3xl bg-brand-orange/10 border border-brand-orange/15 rotate-3" />

            {/* Front card */}
            <div className="relative w-72 h-80 rounded-3xl bg-white shadow-2xl shadow-brand-charcoal/10 border border-brand-border overflow-hidden -rotate-1">
              {/* Card header */}
              <div className="bg-brand-orange px-6 pt-6 pb-8">
                <p className="text-white/70 text-xs uppercase tracking-widest font-medium">
                  New Request
                </p>
                <h3 className="text-white font-display text-xl font-semibold mt-1">
                  3-Bedroom Land
                </h3>
                <p className="text-white/80 text-sm mt-1">Lagos Mainland</p>
              </div>

              {/* Card body */}
              <div className="px-6 py-5 space-y-3">
                {[
                  ["Budget",   "₦8M – ₦12M"],
                  ["Timeline", "Within 3 months"],
                  ["Purpose",  "Personal use"],
                  ["Status",   "Under Review"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-xs text-brand-muted">{label}</span>
                    <span className={`text-xs font-medium ${label === "Status" ? "text-brand-orange" : "text-brand-charcoal"}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-brand-orangeLight" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-brand-border"
            >
              <p className="text-xs text-brand-muted">Response time</p>
              <p className="text-sm font-semibold text-brand-charcoal">Within 24 hrs</p>
            </motion.div>
          </motion.div>

        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest uppercase text-brand-muted">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-brand-orange to-transparent"
          />
        </motion.div>

      </div>
    </section>
  );
}
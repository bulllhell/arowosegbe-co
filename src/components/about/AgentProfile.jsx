import { motion } from "framer-motion";
import { RiMapPinLine, RiVerifiedBadgeLine } from "react-icons/ri";
import { AGENT } from "@/lib/constants";

const STATS = [
  { value: "10+",  label: "Years Experience"    },
  { value: "200+", label: "Projects Completed"  },
  { value: "98%",  label: "Client Satisfaction" },
];

export default function AgentProfile() {
  return (
    <section className="relative pt-32 pb-0 md:pt-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-[#FEF1E6] to-brand-cream" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container-max section-padding pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-brand-orange" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
                About Me
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-brand-charcoal leading-tight">
              A name you can{" "}
              <span className="italic text-brand-orange">trust.</span>
            </h1>

            <p className="mt-5 text-brand-stone/70 text-lg leading-relaxed font-light">
              I'm a Lagos-based property professional with over a decade of hands-on
              experience in land sales, construction, renovation, and property management.
            </p>

            {/* Verified badge */}
            <div className="flex items-center gap-2 mt-5">
              <RiVerifiedBadgeLine size={18} className="text-brand-orange" />
              <span className="text-sm font-medium text-brand-charcoal">
                Licensed Property Agent — Lagos State
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <RiMapPinLine size={18} className="text-brand-orange" />
              <span className="text-sm text-brand-stone/70">{AGENT.location}</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white border border-brand-border rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-brand-orange">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-brand-muted mt-1 uppercase tracking-wide font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Photo frame */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 border border-brand-border">
              {/* Replace this div with a real <img> tag when you have a photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-brand-orange/20 border-2 border-brand-orange/30 flex items-center justify-center mx-auto mb-3">
                    <span className="font-display text-4xl font-bold text-brand-orange">A</span>
                  </div>
                  <p className="text-sm text-brand-muted">Agent Photo Here</p>
                  <p className="text-xs text-brand-muted/60 mt-1">Replace with real image</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-brand-border"
            >
              <p className="text-xs text-brand-muted mb-0.5">Available for</p>
              <p className="text-sm font-semibold text-brand-charcoal">New Projects</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-600 font-medium">Accepting requests</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
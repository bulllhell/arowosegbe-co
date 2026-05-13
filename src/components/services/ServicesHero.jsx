import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-[#FEF1E6] to-brand-cream" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container-max section-padding py-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-brand-orange" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
              What I Offer
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-brand-charcoal leading-tight">
            Every property service,{" "}
            <span className="italic text-brand-orange">under one roof.</span>
          </h1>
          <p className="mt-5 text-brand-stone/70 text-lg leading-relaxed font-light max-w-xl">
            From finding land to building on it, maintaining it, or managing it
            for you — I handle the full spectrum personally.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              to="/request"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white font-medium px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-0.5"
            >
              Make a Request
            </Link>
            <a
              href="#services-grid"
              className="text-sm text-brand-muted hover:text-brand-orange transition-colors underline underline-offset-4"
            >
              Browse all services ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
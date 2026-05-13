import { motion } from "framer-motion";
import RequestForm from "@/components/request/RequestForm";

export default function Request() {
  return (
    <section className="min-h-screen bg-brand-cream pt-28 md:pt-36">
      <div className="container-max section-padding pt-0">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-orange" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
              Get Started
            </span>
            <span className="w-8 h-px bg-brand-orange" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight">
            Tell me what you need.
            <br />
            <span className="italic text-brand-orange">I'll handle the rest.</span>
          </h1>
          <p className="mt-4 text-brand-stone/70 text-base leading-relaxed">
            Fill in a few details below and I'll personally reach out within
            24 hours to discuss your options.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <RequestForm />
        </motion.div>

      </div>
    </section>
  );
}
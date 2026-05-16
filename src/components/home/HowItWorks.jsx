import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiFileTextLine,
  RiSearchEyeLine,
  RiPhoneLine,
} from "react-icons/ri";

const STEPS = [
  {
    icon: RiFileTextLine,
    number: "01",
    title: "Submit Your Request",
    desc: "Fill in a short form describing what you need — property type, budget, location, timeline. No account needed.",
  },
  {
    icon: RiSearchEyeLine,
    number: "02",
    title: "I Review & Reach Out",
    desc: "Within 24 hours, I personally review your request and contact you to discuss options and next steps.",
  },
  {
    icon: RiPhoneLine,
    number: "03",
    title: "We Work Together",
    desc: "Whether it's finding a property, planning a build, or managing your site — I handle it so you don't have to.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-brand-charcoal relative overflow-hidden grain-overlay">
      {/* Background circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-orange/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-orange" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
              How It Works
            </span>
            <span className="w-8 h-px bg-brand-orange" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Simple. Personal.{" "}
            <span className="italic text-brand-orange">Reliable.</span>
          </h2>
          <p className="mt-4 text-white/50 leading-relaxed">
            No browsing through endless listings. Just tell me what you need.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[33%] w-[17%] h-px bg-gradient-to-r from-brand-orange/30 to-transparent pointer-events-none" />
          <div className="hidden md:block absolute top-10 right-[33%] w-[17%] h-px bg-gradient-to-l from-brand-orange/30 to-transparent pointer-events-none" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-brand-orange/15 border border-brand-orange/25 flex items-center justify-center">
                  <step.icon size={28} className="text-brand-orange" />
                </div>
                {/* Step number badge */}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-orange flex items-center justify-center text-[10px] font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            to="/request"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-medium px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-0.5 text-sm"
          >
            Start Your Request
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
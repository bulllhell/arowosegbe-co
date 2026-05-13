import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiMapPin2Line,
  RiBuilding2Line,
  RiBuildingLine,
  RiToolsLine,
  RiShieldCheckLine,
  RiDraftLine,
} from "react-icons/ri";

const PILLARS = [
  {
    icon: RiMapPin2Line,
    title: "Land & Property Sales",
    desc: "Verified plots and properties across Lagos and beyond. I handle the legwork so you don't have to.",
  },
  {
    icon: RiBuilding2Line,
    title: "Construction & Building",
    desc: "New builds from foundation to finishing. Quality materials, honest timelines, no surprises.",
  },
  {
    icon: RiToolsLine,
    title: "Renovation & Contracting",
    desc: "From a single room to a full property overhaul. Skilled craftsmen, supervised by me personally.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Caretaker & Maintenance",
    desc: "Your property is in safe hands when you're away. Regular checks, prompt repairs, full reports.",
  },
  {
    icon: RiBuildingLine,
    title: "Project Supervision",
    desc: "I oversee construction and renovation projects to ensure they run on time, on spec, on budget.",
  },
  {
    icon: RiDraftLine,
    title: "Site Planning",
    desc: "Smart layout design for your land or existing structure. Maximise value before you build.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhatIDo() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-xl mb-14"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-orange" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
              What I Do
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight">
            Every property need,{" "}
            <span className="italic text-brand-orange">one address.</span>
          </h2>
          <p className="mt-4 text-brand-stone/70 leading-relaxed">
            Whether you're buying land, building from scratch, or need someone
            to keep an eye on your investment — I've got you covered.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-brand-border bg-brand-cream hover:bg-white hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/8 transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:scale-105 transition-all duration-300">
                <pillar.icon
                  size={20}
                  className="text-brand-orange group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-brand-charcoal mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-brand-stone/70 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-orange hover:text-brand-orangeDark underline underline-offset-4 decoration-brand-orange/40 transition-colors"
          >
            See all 10 services →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
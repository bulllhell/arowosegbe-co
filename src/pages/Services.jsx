import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard  from "@/components/services/ServiceCard";
import ServicesCTA  from "@/components/services/ServicesCTA";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <>
      <ServicesHero />

      {/* ── Services grid ── */}
      <section id="services-grid" className="section-padding bg-brand-cream pt-8">
        <div className="container-max">

          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "bg-white border border-brand-border text-brand-stone hover:border-brand-orange/40 hover:text-brand-orange"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      <ServicesCTA />
    </>
  );
}
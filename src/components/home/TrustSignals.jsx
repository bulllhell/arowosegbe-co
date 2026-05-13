import { motion } from "framer-motion";
import { RiDoubleQuotesL, RiStarFill } from "react-icons/ri";

const STATS = [
  { value: "10+",  label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "24h",  label: "Response Time" },
];

const TESTIMONIALS = [
  {
    name: "Tunde Adeyemi",
    role: "Property Buyer, Lagos",
    text: "Working with Arowosegbe & Co was the smoothest property experience I've had. Found my plot within two weeks and the documentation was handled perfectly.",
    rating: 5,
  },
  {
    name: "Chioma Okonkwo",
    role: "Property Investor, Abuja",
    text: "I had a renovation project that three contractors had abandoned. He took it over, supervised every step, and delivered on time. Genuinely impressed.",
    rating: 5,
  },
  {
    name: "Bola Fashola",
    role: "Landlord, Lagos Island",
    text: "The caretaker service has been a lifesaver. My property is well-maintained and I get regular updates even though I live abroad. Highly recommend.",
    rating: 5,
  },
];

export default function TrustSignals() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-max">

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl bg-white border border-brand-border"
            >
              <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-brand-muted font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-orange" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
              What Clients Say
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight">
            Trust is built one{" "}
            <span className="italic text-brand-orange">deal at a time.</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white border border-brand-border rounded-2xl p-6 flex flex-col hover:shadow-lg hover:shadow-brand-orange/8 transition-shadow duration-300"
            >
              {/* Quote icon */}
              <RiDoubleQuotesL size={28} className="text-brand-orange/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <RiStarFill key={j} size={12} className="text-brand-orange" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-brand-stone/80 leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-brand-border pt-4">
                <div className="w-9 h-9 rounded-full bg-brand-orange/15 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-orange">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">{t.name}</p>
                  <p className="text-xs text-brand-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
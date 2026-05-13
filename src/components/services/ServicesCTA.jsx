import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiWhatsappLine, RiArrowRightLine } from "react-icons/ri";
import { AGENT } from "@/lib/constants";

export default function ServicesCTA() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl bg-brand-charcoal overflow-hidden px-8 md:px-16 py-14 md:py-20 text-center grain-overlay"
        >
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange mb-4">
              Don't see exactly what you need?
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight max-w-xl mx-auto">
              Just tell me what you need.{" "}
              <span className="italic text-brand-orange">I'll handle it.</span>
            </h2>
            <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
              Submit a short request form and I'll reach out within 24 hours to
              discuss how I can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/request"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-medium px-8 py-4 rounded-full text-sm transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-0.5"
              >
                Make a Request
                <RiArrowRightLine size={16} />
              </Link>
              <a
                href={`https://wa.me/${AGENT.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full text-sm transition-all duration-200"
              >
                <RiWhatsappLine size={16} className="text-green-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
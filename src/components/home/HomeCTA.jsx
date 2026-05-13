import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiWhatsappLine } from "react-icons/ri";

export default function HomeCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-brand-charcoal overflow-hidden grain-overlay px-8 md:px-16 py-16 md:py-20 text-center"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative ring */}
          <div className="absolute -top-20 -right-20 w-72 h-72 border border-brand-orange/15 rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-brand-orange/10 rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange mb-4">
              Ready to get started?
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl mx-auto">
              Let's find what{" "}
              <span className="italic text-brand-orange">you're looking for.</span>
            </h2>
            <p className="mt-5 text-white/50 max-w-md mx-auto text-base leading-relaxed">
              Submit a request and I'll reach out personally within 24 hours.
              No pressure. No spam. Just results.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/request"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeLight text-white font-medium px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-0.5 text-sm"
              >
                Make a Request
                <RiArrowRightLine size={16} />
              </Link>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-200 text-sm"
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
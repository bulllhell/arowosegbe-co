import { motion } from "framer-motion";
import {
  RiPhoneLine,
  RiWhatsappLine,
  RiMailLine,
  RiMapPinLine,
} from "react-icons/ri";
import { AGENT } from "@/lib/constants";

const CONTACTS = [
  {
    icon: RiPhoneLine,
    label: "Phone",
    value: AGENT.phone,
    href: `tel:${AGENT.phone}`,
  },
  {
    icon: RiWhatsappLine,
    label: "WhatsApp",
    value: "Chat directly",
    href: `https://wa.me/${AGENT.whatsapp}`,
    external: true,
  },
  {
    icon: RiMailLine,
    label: "Email",
    value: AGENT.email,
    href: `mailto:${AGENT.email}`,
  },
  {
    icon: RiMapPinLine,
    label: "Location",
    value: AGENT.location,
    href: null,
  },
];

export default function ContactStrip() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-orange" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
              Get in Touch
            </span>
            <span className="w-8 h-px bg-brand-orange" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-charcoal">
            Let's talk about{" "}
            <span className="italic text-brand-orange">your property.</span>
          </h2>
          <p className="mt-4 text-brand-stone/70 max-w-md mx-auto text-sm leading-relaxed">
            Reach out via any channel below or submit a formal request and I'll
            be in touch within 24 hours.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CONTACTS.map((contact, i) => {
            const Wrapper = contact.href ? "a" : "div";
            const wrapperProps = contact.href
              ? {
                  href: contact.href,
                  ...(contact.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {}),
                }
              : {};

            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-brand-border transition-all duration-300 ${
                    contact.href
                      ? "hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/8 cursor-pointer group"
                      : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-3 group-hover:bg-brand-orange transition-colors duration-300">
                    <contact.icon
                      size={20}
                      className="text-brand-orange group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <p className="text-xs text-brand-muted uppercase tracking-wide font-medium mb-1">
                    {contact.label}
                  </p>
                  <p className="text-sm font-medium text-brand-charcoal">
                    {contact.value}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
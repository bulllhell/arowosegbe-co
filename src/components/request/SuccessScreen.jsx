import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiCheckboxCircleLine,
  RiWhatsappLine,
  RiHomeLine,
} from "react-icons/ri";
import { AGENT } from "@/lib/constants";

export default function SuccessScreen({ formData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-8"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6"
      >
        <RiCheckboxCircleLine size={40} className="text-green-500" />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.45 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-charcoal mb-3">
          Request Received!
        </h2>
        <p className="text-brand-stone/70 text-base max-w-md mx-auto leading-relaxed">
          Thank you{formData?.full_name ? `, ${formData.full_name.split(" ")[0]}` : ""}. I've received your request
          for <span className="font-medium text-brand-charcoal">{formData?.service_type}</span> and
          will reach out within{" "}
          <span className="font-medium text-brand-orange">{AGENT.responseTime}</span>.
        </p>
      </motion.div>

      {/* Summary card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.45 }}
        className="mt-8 bg-brand-cream border border-brand-border rounded-2xl p-5 text-left max-w-sm mx-auto"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-brand-muted mb-3">
          Request Summary
        </p>
        <div className="space-y-2">
          {[
            ["Service",  formData?.service_type],
            ["Location", formData?.city ? `${formData.city}, ${formData.state}` : formData?.state],
            ["Budget",   formData?.budget_range],
            ["Timeline", formData?.timeline],
          ].map(([label, value]) =>
            value ? (
              <div key={label} className="flex justify-between items-start gap-3">
                <span className="text-xs text-brand-muted">{label}</span>
                <span className="text-xs font-medium text-brand-charcoal text-right">{value}</span>
              </div>
            ) : null
          )}
        </div>
      </motion.div>

      {/* What happens next */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.45 }}
        className="mt-6 max-w-sm mx-auto text-left bg-brand-orange/5 border border-brand-orange/15 rounded-2xl p-4"
      >
        <p className="text-xs font-semibold text-brand-charcoal mb-2">What happens next?</p>
        <ul className="space-y-1.5 text-xs text-brand-stone/70">
          <li className="flex items-start gap-2">
            <span className="text-brand-orange mt-0.5">→</span>
            I'll personally review your request
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-orange mt-0.5">→</span>
            I'll call or message you within 24 hours
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-orange mt-0.5">→</span>
            We'll discuss your options and next steps together
          </li>
        </ul>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-wrap justify-center gap-3 mt-8"
      >
        <a
          href={`https://wa.me/${AGENT.whatsapp}?text=${encodeURIComponent(
            `Hi, I just submitted a property request for ${formData?.service_type}. Looking forward to hearing from you.`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20"
        >
          <RiWhatsappLine size={16} />
          Message on WhatsApp
        </a>
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-brand-border bg-white hover:bg-brand-cream text-brand-charcoal font-medium px-6 py-3 rounded-full text-sm transition-all duration-200"
        >
          <RiHomeLine size={16} />
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}
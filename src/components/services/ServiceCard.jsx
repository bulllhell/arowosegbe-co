import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiMapPin2Line, RiHome4Line, RiKey2Line,
  RiBuilding2Line, RiToolsLine, RiHammerLine,
  RiShieldCheckLine, RiEyeLine, RiWrenchLine, RiDraftLine,
  RiArrowRightLine,
} from "react-icons/ri";

const ICON_MAP = {
  RiMapPin2Line, RiHome4Line, RiKey2Line,
  RiBuilding2Line, RiToolsLine, RiHammerLine,
  RiShieldCheckLine, RiEyeLine, RiWrenchLine, RiDraftLine,
};

export default function ServiceCard({ service, index }) {
  const Icon = ICON_MAP[service.icon] || RiHome4Line;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white border border-brand-border rounded-2xl p-6 flex flex-col hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/8 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange group-hover:scale-105 transition-all duration-300">
        <Icon
          size={22}
          className="text-brand-orange group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Content */}
      <h3 className="font-display text-lg font-semibold text-brand-charcoal mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-brand-stone/70 leading-relaxed flex-1">
        {service.fullDesc}
      </p>

      {/* CTA */}
      <Link
        to="/request"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange mt-5 group/link"
      >
        Request this service
        <RiArrowRightLine
          size={14}
          className="transition-transform group-hover/link:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import {
  RiMapPin2Line, RiHome4Line, RiKey2Line,
  RiBuilding2Line, RiToolsLine, RiBuildingLine,
  RiShieldCheckLine, RiEyeLine, RiSettings3Line, RiDraftLine,
} from "react-icons/ri";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = {
  RiMapPin2Line, RiHome4Line, RiKey2Line,
  RiBuilding2Line, RiToolsLine, RiBuildingLine,
  RiShieldCheckLine, RiEyeLine, RiSettings3Line, RiDraftLine,
};

export default function Step1ServiceType({ formData, setFormData }) {
  const selected = formData.service_type;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-charcoal">
          What do you need help with?
        </h2>
        <p className="text-sm text-brand-muted mt-2">
          Select the service that best describes your need.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {SERVICES.map((service, i) => {
          const Icon      = ICON_MAP[service.icon] || RiHome4Line;
          const isSelected = selected === service.title;

          return (
            <motion.button
              key={service.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              onClick={() => setFormData((prev) => ({ ...prev, service_type: service.title }))}
              className={`flex flex-col items-center text-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                isSelected
                  ? "border-brand-orange bg-brand-orange/5 shadow-md shadow-brand-orange/15"
                  : "border-brand-border bg-white hover:border-brand-orange/40 hover:bg-brand-orange/3"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                  isSelected ? "bg-brand-orange" : "bg-brand-orange/10"
                }`}
              >
                <Icon
                  size={18}
                  className={isSelected ? "text-white" : "text-brand-orange"}
                />
              </div>
              <span
                className={`text-xs font-medium leading-tight transition-colors ${
                  isSelected ? "text-brand-orange" : "text-brand-charcoal"
                }`}
              >
                {service.title}
              </span>

              {/* Selected checkmark */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-4 h-4 rounded-full bg-brand-orange flex items-center justify-center"
                >
                  <span className="text-white text-[8px] font-bold">✓</span>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Validation hint */}
      {!selected && (
        <p className="text-xs text-brand-muted mt-4 text-center">
          Please select a service to continue.
        </p>
      )}
    </motion.div>
  );
}
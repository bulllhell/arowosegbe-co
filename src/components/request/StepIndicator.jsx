import { motion } from "framer-motion";
import { RiCheckLine } from "react-icons/ri";

const STEPS = [
  { number: 1, label: "Service"  },
  { number: 2, label: "Details"  },
  { number: 3, label: "Budget"   },
  { number: 4, label: "Contact"  },
];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between relative">

        {/* Progress line background */}
        <div className="absolute top-5 left-0 right-0 h-px bg-brand-border z-0" />

        {/* Progress line fill */}
        <motion.div
          className="absolute top-5 left-0 h-px bg-brand-orange z-0"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {STEPS.map((step) => {
          const isCompleted = currentStep > step.number;
          const isActive    = currentStep === step.number;

          return (
            <div key={step.number} className="flex flex-col items-center gap-2 z-10">
              {/* Circle */}
              <motion.div
                animate={{
                  backgroundColor: isCompleted
                    ? "#E8620A"
                    : isActive
                    ? "#E8620A"
                    : "#ffffff",
                  borderColor: isCompleted || isActive ? "#E8620A" : "#E8E0D8",
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.25 }}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-sm"
              >
                {isCompleted ? (
                  <RiCheckLine size={16} className="text-white" />
                ) : (
                  <span
                    className={`text-sm font-bold ${
                      isActive ? "text-white" : "text-brand-muted"
                    }`}
                  >
                    {step.number}
                  </span>
                )}
              </motion.div>

              {/* Label */}
              <span
                className={`text-[11px] font-medium uppercase tracking-wide transition-colors ${
                  isActive || isCompleted ? "text-brand-orange" : "text-brand-muted"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
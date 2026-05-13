import { motion } from "framer-motion";
import { useState } from "react";
import Select  from "@/components/ui/Select";
import { BUDGET_RANGES, TIMELINES } from "@/lib/constants";

export default function Step3Budget({ formData, setFormData, errors }) {
  const [flexible, setFlexible] = useState(
    formData.budget_range === "flexible"
  );

  const update = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleFlexible = (checked) => {
    setFlexible(checked);
    if (checked) update("budget_range", "flexible");
    else update("budget_range", "");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-charcoal">
          Budget & Timeline
        </h2>
        <p className="text-sm text-brand-muted mt-2">
          Approximate figures are fine — this helps me find the right options for you.
        </p>
      </div>

      {/* Budget */}
      <div className="space-y-3">
        <Select
          label="Budget Range"
          required
          options={BUDGET_RANGES.filter((b) => b.value !== "flexible")}
          value={flexible ? "" : formData.budget_range}
          onChange={(e) => update("budget_range", e.target.value)}
          error={errors?.budget_range}
          placeholder="Select a budget range"
          disabled={flexible}
        />

        {/* Flexible checkbox */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => handleFlexible(!flexible)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
              flexible
                ? "bg-brand-orange border-brand-orange"
                : "border-brand-border group-hover:border-brand-orange/50"
            }`}
          >
            {flexible && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-white text-[10px] font-bold"
              >
                ✓
              </motion.span>
            )}
          </div>
          <span className="text-sm text-brand-stone">
            My budget is flexible / I'm not sure yet
          </span>
        </label>
      </div>

      {/* Budget visual hint */}
      <div className="bg-brand-orange/5 border border-brand-orange/15 rounded-2xl p-4">
        <p className="text-xs text-brand-stone/70 leading-relaxed">
          💡 <span className="font-medium text-brand-charcoal">Don't worry if you're unsure.</span>{" "}
          Budget ranges are just a guide. Once I review your request, I'll let you
          know what's realistic for your goal.
        </p>
      </div>

      {/* Timeline */}
      <Select
        label="Preferred Timeline"
        required
        options={TIMELINES}
        value={formData.timeline}
        onChange={(e) => update("timeline", e.target.value)}
        error={errors?.timeline}
        placeholder="When do you want to get started?"
      />

    </motion.div>
  );
}
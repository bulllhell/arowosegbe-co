import { motion } from "framer-motion";
import { useState } from "react";
import Input from "@/components/ui/Input";
import { RiLockLine } from "react-icons/ri";

export default function Step4Contact({ formData, setFormData, errors }) {
  const [sameAsPhone, setSameAsPhone] = useState(false);

  const update = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSameAsPhone = (checked) => {
    setSameAsPhone(checked);
    if (checked) update("whatsapp", formData.phone);
    else update("whatsapp", "");
  };

  // Keep whatsapp in sync if "same as phone" is ticked
  const handlePhoneChange = (value) => {
    update("phone", value);
    if (sameAsPhone) update("whatsapp", value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-5"
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-charcoal">
          How do I reach you?
        </h2>
        <p className="text-sm text-brand-muted mt-2">
          Your details are private and only used to follow up on your request.
        </p>
      </div>

      {/* Full name */}
      <Input
        label="Full Name"
        required
        placeholder="e.g. Tunde Adeyemi"
        value={formData.full_name}
        onChange={(e) => update("full_name", e.target.value)}
        error={errors?.full_name}
      />

      {/* Phone */}
      <Input
        label="Phone Number"
        required
        type="tel"
        placeholder="e.g. 08012345678"
        value={formData.phone}
        onChange={(e) => handlePhoneChange(e.target.value)}
        error={errors?.phone}
        hint="Nigerian number preferred. Include country code for international."
      />

      {/* WhatsApp */}
      <div className="space-y-2">
        <Input
          label="WhatsApp Number (optional)"
          type="tel"
          placeholder="e.g. 08012345678"
          value={formData.whatsapp}
          onChange={(e) => update("whatsapp", e.target.value)}
          disabled={sameAsPhone}
          hint="Leave blank if same as phone number above."
        />
        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => handleSameAsPhone(!sameAsPhone)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
              sameAsPhone
                ? "bg-brand-orange border-brand-orange"
                : "border-brand-border group-hover:border-brand-orange/50"
            }`}
          >
            {sameAsPhone && (
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
            My WhatsApp number is the same as my phone number
          </span>
        </label>
      </div>

      {/* Email */}
      <Input
        label="Email Address (optional)"
        type="email"
        placeholder="e.g. you@example.com"
        value={formData.email}
        onChange={(e) => update("email", e.target.value)}
        error={errors?.email}
        hint="Optional — useful if you'd prefer email follow-up."
      />

      {/* Consent notice */}
      <div className="flex items-start gap-3 p-4 bg-brand-orange/5 border border-brand-orange/15 rounded-2xl mt-2">
        <RiLockLine size={16} className="text-brand-orange mt-0.5 shrink-0" />
        <p className="text-xs text-brand-stone/70 leading-relaxed">
          By submitting this form, you agree to be contacted regarding your
          property request. Your details will not be shared with third parties
          or used for any other purpose.
        </p>
      </div>
    </motion.div>
  );
}
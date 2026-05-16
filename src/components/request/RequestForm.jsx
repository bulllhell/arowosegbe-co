import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StepIndicator    from "./StepIndicator";
import Step1ServiceType from "./Step1ServiceType";
import Step2Details     from "./Step2Details";
import Step3Budget      from "./Step3Budget";
import Step4Contact     from "./Step4Contact";
import SuccessScreen    from "./SuccessScreen";
import { RiArrowLeftLine, RiArrowRightLine, RiSendPlaneLine } from "react-icons/ri";
import { isEmpty, isValidPhone, isValidEmail } from "@/lib/utils";

// ─── Initial form state ───────────────────────────────────────────────────────
const INITIAL = {
  service_type:     "",
  sub_details:      "",
  budget_range:     "",
  state:            "",
  city:             "",
  purpose:          "",
  timeline:         "",
  full_name:        "",
  phone:            "",
  email:            "",
  whatsapp:         "",
  property_size:    "",
  project_type:     "",
  frequency:        "",
  property_address: "",
};

// ─── Per-step validation ──────────────────────────────────────────────────────
function validate(step, formData) {
  const errors = {};

  if (step === 1) {
    if (isEmpty(formData.service_type))
      errors.service_type = "Please select a service.";
  }

  if (step === 2) {
    if (isEmpty(formData.state))
      errors.state = "Please select a state.";
    if (isEmpty(formData.city))
      errors.city = "Please enter a city or area.";
    if (isEmpty(formData.sub_details))
      errors.sub_details = "Please describe what you need.";
  }

  if (step === 3) {
    if (isEmpty(formData.budget_range))
      errors.budget_range = "Please select a budget range.";
    if (isEmpty(formData.timeline))
      errors.timeline = "Please select a timeline.";
  }

  if (step === 4) {
    if (isEmpty(formData.full_name))
      errors.full_name = "Please enter your full name.";
    if (isEmpty(formData.phone))
      errors.phone = "Please enter your phone number.";
    else if (!isValidPhone(formData.phone))
      errors.phone = "Please enter a valid phone number.";
    if (formData.email && !isValidEmail(formData.email))
      errors.email = "Please enter a valid email address.";
  }

  return errors;
}

// ─── Submit to Supabase ───────────────────────────────────────────────────────
async function submitRequest(formData) {
  // Dynamically import supabase only when needed
  const { supabase } = await import("@/lib/supabase");

  const payload = {
    service_type: formData.service_type,
    sub_details:  formData.sub_details,
    budget_range: formData.budget_range,
    location:     `${formData.city}, ${formData.state}`,
    state:        formData.state,
    city:         formData.city,
    purpose:      formData.purpose          || null,
    timeline:     formData.timeline,
    full_name:    formData.full_name,
    phone:        formData.phone,
    email:        formData.email            || null,
    whatsapp:     formData.whatsapp         || null,
    status:       "new",
  };

  const { error } = await supabase.from("requests").insert([payload]);
  if (error) throw error;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function RequestForm() {
  const [step, setStep]         = useState(1);
  const [formData, setFormData] = useState(INITIAL);
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const TOTAL_STEPS = 4;

  // ── Navigation ──
  const handleNext = () => {
    const errs = validate(step, formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Submit ──
  const handleSubmit = async () => {
    const errs = validate(4, formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setSubmitError("");

    try {
      await submitRequest(formData);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setSubmitError(
        "Something went wrong submitting your request. Please try again or contact us directly on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  // ── Success state ──
  if (submitted) {
    return (
      <div className="max-w-xl mx-auto">
        <SuccessScreen formData={formData} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicator */}
      <StepIndicator currentStep={step} />

      {/* Step content */}
      <div className="bg-white border border-brand-border rounded-3xl p-6 md:p-10 shadow-sm min-h-[420px]">
        <AnimatePresence mode="wait">
          <div key={step}>
            {step === 1 && (
              <Step1ServiceType formData={formData} setFormData={setFormData} />
            )}
            {step === 2 && (
              <Step2Details formData={formData} setFormData={setFormData} errors={errors} />
            )}
            {step === 3 && (
              <Step3Budget formData={formData} setFormData={setFormData} errors={errors} />
            )}
            {step === 4 && (
              <Step4Contact formData={formData} setFormData={setFormData} errors={errors} />
            )}
          </div>
        </AnimatePresence>

        {/* Step 1 service error */}
        {step === 1 && errors.service_type && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-red-500 text-center mt-4"
          >
            {errors.service_type}
          </motion.p>
        )}

        {/* Submit error */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600"
          >
            {submitError}
          </motion.div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-6">
        {/* Back */}
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1}
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-stone hover:text-brand-charcoal disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <RiArrowLeftLine size={16} />
          Back
        </button>

        {/* Step counter */}
        <span className="text-xs text-brand-muted font-medium">
          Step {step} of {TOTAL_STEPS}
        </span>

        {/* Next / Submit */}
        {step < TOTAL_STEPS ? (
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white font-medium px-6 py-3 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-0.5"
          >
            Next
            <RiArrowRightLine size={16} />
          </motion.button>
        ) : (
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white font-medium px-7 py-3 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                Submit Request
                <RiSendPlaneLine size={16} />
              </>
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}
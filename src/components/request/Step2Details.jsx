import { motion } from "framer-motion";
import Input    from "@/components/ui/Input";
import Select   from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { LOCATIONS, PURPOSES } from "@/lib/constants";

// Which services are property-related vs build vs management
const PROPERTY_SERVICES = ["Land Sales", "Property Sales", "House Buying Assistance"];
const BUILD_SERVICES    = ["Construction", "Renovation", "General Contracting", "Site Planning"];
const MGMT_SERVICES     = ["Caretaker Services", "Project Supervision", "Property Maintenance"];

const locationOptions = LOCATIONS.map((l) => ({ value: l, label: l }));
const purposeOptions  = PURPOSES;

export default function Step2Details({ formData, setFormData, errors }) {
  const service = formData.service_type;
  const isProperty = PROPERTY_SERVICES.includes(service);
  const isBuild    = BUILD_SERVICES.includes(service);
  const isMgmt     = MGMT_SERVICES.includes(service);

  const update = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

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
          Tell me more about your need.
        </h2>
        <p className="text-sm text-brand-muted mt-2">
          The more detail you give, the better I can help.
        </p>
      </div>

      {/* ── Property-specific fields ── */}
      {isProperty && (
        <>
          <Select
            label="Preferred Location"
            required
            options={locationOptions}
            value={formData.location}
            onChange={(e) => update("location", e.target.value)}
            error={errors?.location}
            placeholder="Select a location"
          />
          <Select
            label="Purpose"
            required
            options={purposeOptions}
            value={formData.purpose}
            onChange={(e) => update("purpose", e.target.value)}
            error={errors?.purpose}
            placeholder="What is this for?"
          />
          <Input
            label="Property Size (optional)"
            placeholder="e.g. 3 bedrooms, 600 sqm, half plot"
            value={formData.property_size || ""}
            onChange={(e) => update("property_size", e.target.value)}
            hint="Approximate size or bedroom count is fine."
          />
        </>
      )}

      {/* ── Build/renovation fields ── */}
      {isBuild && (
        <>
          <Select
            label="Preferred Location / Site"
            required
            options={locationOptions}
            value={formData.location}
            onChange={(e) => update("location", e.target.value)}
            error={errors?.location}
            placeholder="Where is the site?"
          />
          <Input
            label="Project Type (optional)"
            placeholder="e.g. 4-bedroom duplex, office renovation, bungalow"
            value={formData.project_type || ""}
            onChange={(e) => update("project_type", e.target.value)}
          />
        </>
      )}

      {/* ── Management fields ── */}
      {isMgmt && (
        <>
          <Input
            label="Property Address / Area"
            required
            placeholder="e.g. 12 Adeola Street, Lekki Phase 1"
            value={formData.location}
            onChange={(e) => update("location", e.target.value)}
            error={errors?.location}
          />
          <Select
            label="Service Frequency"
            options={[
              { value: "weekly",    label: "Weekly"        },
              { value: "monthly",   label: "Monthly"       },
              { value: "quarterly", label: "Quarterly"     },
              { value: "one-off",   label: "One-off visit" },
              { value: "ongoing",   label: "Ongoing / as needed" },
            ]}
            value={formData.frequency || ""}
            onChange={(e) => update("frequency", e.target.value)}
            placeholder="How often do you need this?"
          />
        </>
      )}

      {/* ── Free text description (always shown) ── */}
      <Textarea
        label="Describe what you need"
        required
        rows={4}
        placeholder="Give me as much detail as you'd like — what you're looking for, any specific requirements, concerns, or questions."
        value={formData.sub_details}
        onChange={(e) => update("sub_details", e.target.value)}
        error={errors?.sub_details}
        hint="Don't worry about being too detailed — more is better."
      />
    </motion.div>
  );
}
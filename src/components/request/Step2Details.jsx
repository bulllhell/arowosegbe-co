import { motion } from "framer-motion";
import Input    from "@/components/ui/Input";
import Select   from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { LOCATIONS, PURPOSES } from "@/lib/constants";

const PROPERTY_SERVICES = ["Land Sales", "Property Sales", "House Buying Assistance"];
const BUILD_SERVICES    = ["Construction", "Renovation", "General Contracting", "Site Planning"];
const MGMT_SERVICES     = ["Caretaker Services", "Project Supervision", "Property Maintenance"];

const stateOptions   = LOCATIONS.map((l) => ({ value: l, label: l }));
const purposeOptions = PURPOSES;

// ── Reusable State + City block ───────────────────────────────────────────────
function LocationFields({ formData, update, errors, stateLabel = "State", cityLabel = "City / Area", cityPlaceholder = "e.g. Lekki, Ikeja, Owerri Central" }) {
  return (
    <div className="space-y-4">
      <Select
        label={stateLabel}
        required
        options={stateOptions}
        value={formData.state || ""}
        onChange={(e) => update("state", e.target.value)}
        error={errors?.state}
        placeholder="Select a state"
      />
      <Input
        label={cityLabel}
        required
        placeholder={cityPlaceholder}
        value={formData.city || ""}
        onChange={(e) => update("city", e.target.value)}
        error={errors?.city}
        hint="Enter the specific city, town, or area within the state."
      />
    </div>
  );
}

export default function Step2Details({ formData, setFormData, errors }) {
  const service    = formData.service_type;
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

      {/* Property-specific fields */}
      {isProperty && (
        <>
          <LocationFields
            formData={formData}
            update={update}
            errors={errors}
            stateLabel="Preferred State"
            cityLabel="Preferred City / Area"
            cityPlaceholder="e.g. Lekki, Maitama, GRA Phase 2"
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

      {/* Build / renovation fields */}
      {isBuild && (
        <>
          <LocationFields
            formData={formData}
            update={update}
            errors={errors}
            stateLabel="State where site is located"
            cityLabel="City / Town / Area"
            cityPlaceholder="e.g. Asaba, Enugu North, Port Harcourt"
          />
          <Input
            label="Project Type (optional)"
            placeholder="e.g. 4-bedroom duplex, office renovation, bungalow"
            value={formData.project_type || ""}
            onChange={(e) => update("project_type", e.target.value)}
          />
        </>
      )}

      {/* Management / caretaker fields */}
      {isMgmt && (
        <>
          <LocationFields
            formData={formData}
            update={update}
            errors={errors}
            stateLabel="State where property is located"
            cityLabel="City / Area / Street"
            cityPlaceholder="e.g. Surulere, Wuse 2, Trans-Amadi"
          />
          <Input
            label="Property Address (optional)"
            placeholder="e.g. 12 Adeola Street"
            value={formData.property_address || ""}
            onChange={(e) => update("property_address", e.target.value)}
            hint="Full address if you are comfortable sharing it."
          />
          <Select
            label="Service Frequency"
            options={[
              { value: "weekly",    label: "Weekly"             },
              { value: "monthly",   label: "Monthly"            },
              { value: "quarterly", label: "Quarterly"          },
              { value: "one-off",   label: "One-off visit"      },
              { value: "ongoing",   label: "Ongoing / as needed"},
            ]}
            value={formData.frequency || ""}
            onChange={(e) => update("frequency", e.target.value)}
            placeholder="How often do you need this?"
          />
        </>
      )}

      {/* Description — always shown */}
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
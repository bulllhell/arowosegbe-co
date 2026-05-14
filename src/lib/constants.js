// ─── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "land-sales",
    title: "Land Sales",
    shortDesc: "Verified plots with clean titles across Lagos and beyond.",
    fullDesc:
      "We help you find and secure verified land with clean documentation — C of O, R of O, or Deed of Assignment. No stories, no middlemen.",
    icon: "RiMapPin2Line",
    category: "property",
  },
  {
    id: "property-sales",
    title: "Property Sales",
    shortDesc: "Residential and commercial properties, personally vetted.",
    fullDesc:
      "From starter homes to investment properties, every listing is personally inspected and verified before it reaches you.",
    icon: "RiHome4Line",
    category: "property",
  },
  {
    id: "house-buying",
    title: "House Buying Assistance",
    shortDesc: "We guide you through every step of buying a home.",
    fullDesc:
      "Not sure where to start? I walk with you from search to signing — inspections, negotiations, documentation, and handover.",
    icon: "RiKey2Line",
    category: "property",
  },
  {
    id: "construction",
    title: "Construction",
    shortDesc: "New builds from foundation to finishing, done right.",
    fullDesc:
      "Full construction management for residential and commercial projects. Quality materials, trusted contractors, and personal supervision.",
    icon: "RiBuilding2Line",
    category: "build",
  },
  {
    id: "renovation",
    title: "Renovation",
    shortDesc: "Transform existing spaces into something new.",
    fullDesc:
      "Interior and exterior renovation handled end-to-end. Whether it's one room or a full property, I supervise every stage.",
    icon: "RiToolsLine",
    category: "build",
  },
  {
    id: "general-contracting",
    title: "General Contracting",
    shortDesc: "Skilled tradesmen coordinated and supervised for you.",
    fullDesc:
      "Need plumbers, electricians, tilers, or painters? I source, vet, and manage the right people for your job.",
    icon: "RiBuildingLine",
    category: "build",
  },
  {
    id: "caretaker",
    title: "Caretaker Services",
    shortDesc: "Your property watched over while you're away.",
    fullDesc:
      "Regular property checks, tenant coordination, minor repairs, and monthly reports — so you stay informed from anywhere.",
    icon: "RiShieldCheckLine",
    category: "management",
  },
  {
    id: "supervision",
    title: "Project Supervision",
    shortDesc: "On-site oversight so your project stays on track.",
    fullDesc:
      "I act as your eyes on the ground — monitoring progress, quality, and timelines on your behalf throughout the project.",
    icon: "RiEyeLine",
    category: "management",
  },
  {
    id: "maintenance",
    title: "Property Maintenance",
    shortDesc: "Routine upkeep and repairs handled promptly.",
    fullDesc:
      "Scheduled or on-demand maintenance for residential and commercial properties. Small issues fixed before they become big problems.",
    icon: "RiSettings3Line",
    category: "management",
  },
  {
    id: "site-planning",
    title: "Site Planning",
    shortDesc: "Smart layout design to maximise your land's value.",
    fullDesc:
      "Before you break ground, plan it right. I help design the optimal layout for your plot — balancing space, access, and regulations.",
    icon: "RiDraftLine",
    category: "build",
  },
];

// ─── Service categories (for filtering) ──────────────────────────────────────
export const SERVICE_CATEGORIES = [
  { id: "all",        label: "All Services" },
  { id: "property",   label: "Property"     },
  { id: "build",      label: "Build & Renovate" },
  { id: "management", label: "Management"   },
];

// ─── Budget ranges ────────────────────────────────────────────────────────────
export const BUDGET_RANGES = [
  { value: "under-2m",    label: "Under ₦2,000,000"              },
  { value: "2m-5m",       label: "₦2,000,000 – ₦5,000,000"      },
  { value: "5m-10m",      label: "₦5,000,000 – ₦10,000,000"     },
  { value: "10m-20m",     label: "₦10,000,000 – ₦20,000,000"    },
  { value: "20m-50m",     label: "₦20,000,000 – ₦50,000,000"    },
  { value: "50m-100m",    label: "₦50,000,000 – ₦100,000,000"   },
  { value: "above-100m",  label: "Above ₦100,000,000"            },
  { value: "flexible",    label: "Flexible / Not sure yet"        },
];

// ─── Timelines ────────────────────────────────────────────────────────────────
export const TIMELINES = [
  { value: "asap",        label: "As soon as possible"   },
  { value: "1-month",     label: "Within 1 month"        },
  { value: "3-months",    label: "Within 3 months"       },
  { value: "6-months",    label: "Within 6 months"       },
  { value: "1-year",      label: "Within a year"         },
  { value: "flexible",    label: "No fixed timeline"     },
];

// ─── Purposes ─────────────────────────────────────────────────────────────────
export const PURPOSES = [
  { value: "personal",    label: "Personal use"          },
  { value: "investment",  label: "Investment"            },
  { value: "resale",      label: "Resale"                },
  { value: "rental",      label: "Rental income"         },
  { value: "business",    label: "Business use"          },
  { value: "other",       label: "Other"                 },
];

// ─── Locations ────────────────────────────────────────────────────────────────
export const LOCATIONS = [
  "Lagos Island",
  "Lagos Mainland",
  "Lekki",
  "Ajah",
  "Victoria Island",
  "Ikoyi",
  "Surulere",
  "Yaba",
  "Ikeja",
  "Ikorodu",
  "Badagry",
  "Epe",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Other / Flexible",
];

// ─── Request statuses ─────────────────────────────────────────────────────────
export const REQUEST_STATUSES = [
  { value: "new",         label: "New",         color: "blue"   },
  { value: "in_review",   label: "In Review",   color: "yellow" },
  { value: "contacted",   label: "Contacted",   color: "orange" },
  { value: "closed",      label: "Closed",      color: "green"  },
];

// ─── Agent contact info ───────────────────────────────────────────────────────
export const AGENT = {
  name:      "Arowosegbe & Co.",
  phone:     "+234 813 904 3515",
  whatsapp:  "2348139043515",
  email:     "arowosegbetosin22@gmail.com",
  location:  "Lagos, Nigeria",
  tagline:   "Property Made Personal.",
  responseTime: "24 hours",
};
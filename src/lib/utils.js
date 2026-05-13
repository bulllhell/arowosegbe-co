// ─── Format date ─────────────────────────────────────────────────────────────
export function formatDate(dateString) {
  if (!dateString) return "—";
  return new Date(dateString).toLocaleDateString("en-NG", {
    day:   "numeric",
    month: "short",
    year:  "numeric",
  });
}

// ─── Format date + time ───────────────────────────────────────────────────────
export function formatDateTime(dateString) {
  if (!dateString) return "—";
  return new Date(dateString).toLocaleString("en-NG", {
    day:    "numeric",
    month:  "short",
    year:   "numeric",
    hour:   "2-digit",
    minute: "2-digit",
  });
}

// ─── Truncate long text ───────────────────────────────────────────────────────
export function truncate(str, maxLength = 60) {
  if (!str) return "";
  return str.length > maxLength ? str.slice(0, maxLength) + "…" : str;
}

// ─── Build WhatsApp URL with pre-filled message ───────────────────────────────
export function buildWhatsAppUrl(phone, name, serviceType) {
  const message = encodeURIComponent(
    `Hi, I'm reaching out regarding a property request from ${name} for: ${serviceType}. How can I help?`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

// ─── Get status color classes ─────────────────────────────────────────────────
export function getStatusColors(status) {
  const map = {
    new:        { bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-200"  },
    in_review:  { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200"},
    contacted:  { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200"},
    closed:     { bg: "bg-green-50",  text: "text-green-700",  border: "border-green-200" },
  };
  return map[status] || map["new"];
}

// ─── Capitalise first letter ──────────────────────────────────────────────────
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ─── Scroll to top ────────────────────────────────────────────────────────────
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ─── Check if value is empty ──────────────────────────────────────────────────
export function isEmpty(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim() === "";
  return false;
}

// ─── Simple phone number validator (Nigerian format) ─────────────────────────
export function isValidPhone(phone) {
  const cleaned = phone.replace(/\s+/g, "").replace(/^0/, "+234");
  return /^\+?[0-9]{10,14}$/.test(cleaned);
}

// ─── Simple email validator ───────────────────────────────────────────────────
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
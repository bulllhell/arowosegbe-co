/**
 * @typedef {Object} Request
 * @property {string}  id
 * @property {string}  created_at
 * @property {string}  service_type
 * @property {string}  sub_details
 * @property {string}  budget_range
 * @property {string}  location
 * @property {string}  purpose
 * @property {string}  timeline
 * @property {string}  full_name
 * @property {string}  phone
 * @property {string}  [email]
 * @property {string}  [whatsapp]
 * @property {string}  status        — "new" | "in_review" | "contacted" | "closed"
 * @property {string}  [agent_notes]
 */

/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} title
 * @property {string} shortDesc
 * @property {string} fullDesc
 * @property {string} icon
 * @property {string} category
 */

/**
 * @typedef {Object} FormData
 * @property {string} service_type
 * @property {string} sub_details
 * @property {string} budget_range
 * @property {string} location
 * @property {string} purpose
 * @property {string} timeline
 * @property {string} full_name
 * @property {string} phone
 * @property {string} email
 * @property {string} whatsapp
 */
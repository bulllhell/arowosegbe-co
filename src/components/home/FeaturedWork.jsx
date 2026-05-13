import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiMapPinLine } from "react-icons/ri";

const PROJECTS = [
  {
    tag: "Land Sale",
    title: "3-Bedroom Plot",
    location: "Ikorodu, Lagos",
    detail: "Verified C-of-O land, secured in 12 days",
    color: "from-amber-700 to-amber-900",
  },
  {
    tag: "Construction",
    title: "5-Unit Block of Flats",
    location: "Lekki Phase 2, Lagos",
    detail: "Delivered 2 weeks ahead of schedule",
    color: "from-stone-700 to-stone-900",
  },
  {
    tag: "Renovation",
    title: "Full Property Overhaul",
    location: "Surulere, Lagos",
    detail: "Complete interior + exterior in 6 weeks",
    color: "from-orange-700 to-orange-900",
  },
];

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-brand-orange" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
                Featured Work
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight">
              Past projects speak{" "}
              <span className="italic text-brand-orange">for themselves.</span>
            </h2>
          </div>
          <Link
            to="/about"
            className="text-sm text-brand-muted hover:text-brand-orange transition-colors underline underline-offset-4 shrink-0"
          >
            Learn more about me →
          </Link>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-default"
            >
              {/* Gradient background (placeholder for real photos) */}
              <div className={`absolute inset-0 bg-gradient-to-b ${project.color}`} />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/10 transition-colors duration-300" />

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-brand-orange text-white text-[10px] font-medium uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="font-display text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 mb-2">
                  <RiMapPinLine size={12} className="text-brand-orange" />
                  <span className="text-xs text-white/70">{project.location}</span>
                </div>
                <p className="text-xs text-white/60">{project.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
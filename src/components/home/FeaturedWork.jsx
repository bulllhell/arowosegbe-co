import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiMapPinLine, RiPlayCircleLine, RiPauseLine } from "react-icons/ri";

const PROJECTS = [
  {
    tag:      "Land Sale",
    title:    "Land for Sale",
    location: "Ikorodu, Lagos",
    detail:   "Verified C-of-O, secured in 12 days",
    video:    "/maxes1.mp4",
  },
  {
    tag:      "Construction",
    title:    "Building on Site",
    location: "Lekki Phase 2, Lagos",
    detail:   "Delivered 2 weeks ahead of schedule",
    video:    "/maxes2.mp4",
  },
  {
    tag:      "Construction",
    title:    "House Build in Progress",
    location: "Surulere, Lagos",
    detail:   "Full supervision from foundation to roof",
    video:    "/maxes3.mp4",
  },
];

function VideoCard({ project, index }) {
  const videoRef  = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const togglePlay = (e) => {
    e.preventDefault();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current && !playing) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current && playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer bg-brand-charcoal shadow-xl shadow-black/10"
    >
      {/* ── Video ── */}
      <video
        ref={videoRef}
        src={project.video}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* ── Gradient overlays ── */}
      {/* Top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent z-10" />
      {/* Bottom fade — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      {/* Hover tint */}
      <div className={`absolute inset-0 bg-brand-orange/10 z-10 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />

      {/* ── Tag — top left ── */}
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-brand-orange text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
          {project.tag}
        </span>
      </div>

      {/* ── Play / Pause button — top right ── */}
      <button
        onClick={togglePlay}
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing
          ? <RiPauseLine size={14} />
          : <RiPlayCircleLine size={14} />
        }
      </button>

      {/* ── Content — bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <h3 className="font-display text-xl font-semibold text-white mb-1.5 leading-tight">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 mb-2">
          <RiMapPinLine size={11} className="text-brand-orange shrink-0" />
          <span className="text-xs text-white/70">{project.location}</span>
        </div>
        {/* Detail — slides up on hover */}
        <div className={`overflow-hidden transition-all duration-300 ${hovered ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}`}>
          <p className="text-xs text-white/50 pt-1 border-t border-white/10">{project.detail}</p>
        </div>
      </div>

      {/* ── Orange bottom accent line ── */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange z-20 transition-all duration-500 ${hovered ? "opacity-100" : "opacity-0"}`} />
    </motion.div>
  );
}

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-max">

        {/* Header */}
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

        {/* Video cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <VideoCard key={project.video} project={project} index={i} />
          ))}
        </div>

        {/* Bottom hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-brand-muted mt-6"
        >
          Hover a card to preview · Click play/pause to control
        </motion.p>

      </div>
    </section>
  );
}
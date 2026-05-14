import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "Services", to: "/services" },
  { label: "About",    to: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { pathname }              = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive
        ? "text-brand-orange"
        : "text-brand-stone hover:text-brand-orange"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-max px-5 md:px-10 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ── */}
            <Link to="/" className="flex flex-col leading-none group">
              <span className="font-display text-xl font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors duration-200">
                Maxprofit
              </span>
              <span className="text-[10px] font-body font-medium tracking-[0.18em] text-brand-orange uppercase">
                & Co. Properties
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* ── CTA + Hamburger ── */}
            <div className="flex items-center gap-3">
              <Link
                to="/request"
                className="hidden md:inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-0.5"
              >
                Make a Request
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden p-2 text-brand-charcoal hover:text-brand-orange transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen
                  ? <RiCloseLine size={24} />
                  : <RiMenu3Line size={24} />
                }
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-brand-cream pt-20 px-5 md:hidden"
          >
            <nav className="flex flex-col gap-2 mt-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block text-2xl font-display font-semibold py-3 border-b border-brand-border transition-colors ${
                        isActive ? "text-brand-orange" : "text-brand-charcoal"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                className="mt-6"
              >
                <Link
                  to="/request"
                  className="block text-center bg-brand-orange text-white text-base font-medium py-4 rounded-2xl hover:bg-brand-orangeDark transition-colors"
                >
                  Make a Request
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
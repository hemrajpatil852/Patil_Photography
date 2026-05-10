import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import pp from "../assets/pp1.png";

const navLinks = [
  { name: "Home",     path: "/" },
  { name: "About",    path: "/about" },
  { name: "Gallery",  path: "/gallery" },
  { name: "Services", path: "/services" },
  { name: "Contact",  path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const location                  = useLocation();

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile on route change */
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Lora&display=swap');
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(8,8,8,0.85)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Top amber line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3">

          {/* ── Logo ── */}
          <Link to="/" className="relative flex items-center gap-3 group">
            <motion.img
              src={pp}
              alt="Patil Photography"
              className="h-12 md:h-14 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const active = isActive(link.path);
              return (
                <li key={i}>
                  <Link
                    to={link.path}
                    onMouseEnter={() => setActiveIdx(i)}
                    onMouseLeave={() => setActiveIdx(null)}
                    className="relative px-4 py-2 flex items-center text-sm font-medium tracking-wide transition-colors duration-300"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: active ? "#fff" : "rgba(255,255,255,0.55)",
                    }}
                  >
                    {/* Hover / active pill */}
                    <AnimatePresence>
                      {(activeIdx === i || active) && (
                        <motion.span
                          layoutId="navPill"
                          className="absolute inset-0 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            background: active
                              ? "rgba(245,158,11,0.12)"
                              : "rgba(255,255,255,0.06)",
                            border: active
                              ? "1px solid rgba(245,158,11,0.25)"
                              : "1px solid rgba(255,255,255,0.08)",
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <span className="relative z-10">{link.name}</span>

                    {/* Active dot */}
                    {active && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://wa.me/918888086250"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-black text-xs font-semibold tracking-wide overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-500" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative z-10">Book Now</span>
            </motion.a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <motion.button
            onClick={() => setIsOpen((o) => !o)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <HiX className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <HiMenu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden"
              style={{
                background: "rgba(8,8,8,0.97)",
                backdropFilter: "blur(24px)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="px-5 pt-4 pb-8 space-y-1">
                {navLinks.map((link, i) => {
                  const active = isActive(link.path);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 rounded-xl transition-colors duration-200"
                        style={{
                          background: active ? "rgba(245,158,11,0.10)" : "transparent",
                          border: active ? "1px solid rgba(245,158,11,0.20)" : "1px solid transparent",
                        }}
                      >
                        <span
                          className="text-sm font-medium"
                          style={{
                            fontFamily: "'Lora', serif",
                            color: active ? "#fff" : "rgba(255,255,255,0.5)",
                          }}
                        >
                          {link.name}
                        </span>
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.07 + 0.1 }}
                  className="pt-4"
                >
                  <a
                    href="https://wa.me/918888086250"
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-black text-sm font-semibold overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-500" />
                    <span className="relative z-10">Book a Session</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default Navbar;
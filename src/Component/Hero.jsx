import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import baground6 from "../assets/baground6.jpg";
import baground1 from "../assets/baground1.jpg";
import baground2 from "../assets/baground2.jpg";

const images = [
  { src: baground6, alt: "Bride & Groom",     label: "Wedding Day"      },
  { src: baground1, alt: "Wedding Ceremony",  label: "Sacred Ceremony"  },
  { src: baground2, alt: "Couple Dance",      label: "First Dance"      },
];

/* stable random particles — computed once */
function useParticles(count = 22) {
  return useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 120,
    })),
  [count]);
}

export default function Hero() {
  const [current, setCurrent]   = useState(0);
  const [dir, setDir]           = useState(1);
  const [paused, setPaused]     = useState(false);
  const particles               = useParticles();
  const timerRef                = useRef(null);

  const go = (d) => {
    setDir(d);
    setCurrent((p) => (p + d + images.length) % images.length);
  };

  /* auto-advance */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(1), 5500);
    return () => clearInterval(timerRef.current);
  }, [paused, current]);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  /* slide variants */
  const variants = {
    enter:  (d) => ({ opacity: 0, scale: 1.08, x: d > 0 ?  40 : -40 }),
    center:       ({ opacity: 1, scale: 1,    x: 0 }),
    exit:   (d) => ({ opacity: 0, scale: 0.96, x: d > 0 ? -40 :  40 }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,400;1,700&family=Lora&display=swap');
        .hero-gradient-text {
          background: linear-gradient(135deg, #fbbf24 0%, #f43f5e 45%, #a855f7 100%);
          background-size: 220% 220%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradShift 6s ease-in-out infinite alternate;
        }
        @keyframes gradShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>

      <section
        id="home"
        className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden bg-black"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* ── Background slideshow ── */}
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-full object-cover"
            />
            {/* Layered gradient — bottom heavy for content legibility */}
            <div className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.30) 40%, rgba(0,0,0,0.20) 70%, rgba(0,0,0,0.55) 100%)",
              }}
            />
            {/* Vignette */}
            <div className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Floating particles ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white/20"
              style={{ width: p.size, height: p.size, left: `${p.left}%`, bottom: -10 }}
              animate={{ y: [0, -(window.innerHeight + 20)], x: [0, p.drift] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        {/* ── Film-frame corner brackets ── */}
        {[
          "top-6 left-6 border-l-2 border-t-2 rounded-tl-sm",
          "top-6 right-6 border-r-2 border-t-2 rounded-tr-sm",
          "bottom-6 left-6 border-l-2 border-b-2 rounded-bl-sm",
          "bottom-6 right-6 border-r-2 border-b-2 rounded-br-sm",
        ].map((cls, i) => (
          <div key={i} className={`absolute w-10 h-10 border-amber-400/30 pointer-events-none ${cls}`} />
        ))}

        {/* ── Slide label — top right ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="absolute top-24 right-8 z-20 text-right"
          >
            <p className="text-[10px] tracking-[0.25em] text-white/30 uppercase mb-0.5">
              {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
            <p className="text-xs tracking-widest text-amber-400/70 uppercase"
              style={{ fontFamily: "'Lora', serif" }}>
              {images[current].label}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Hero Content ── */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/30 bg-black/30 backdrop-blur-sm text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Patil Photography
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mb-6 leading-[0.9] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="block text-white/90 text-5xl md:text-7xl lg:text-8xl font-black">
              Capture Your
            </span>
            <span className="block hero-gradient-text text-6xl md:text-8xl lg:text-9xl font-black italic mt-1">
              Beautiful
            </span>
            <span className="block text-white/85 text-4xl md:text-6xl lg:text-7xl font-black mt-1">
              Moments
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            {["Wedding", "Pre-Wedding", "Events", "Portraits"].map((tag, i, arr) => (
              <span key={tag} className="flex items-center gap-3">
                <span className="text-gray-400 text-sm tracking-wider" style={{ fontFamily: "'Lora', serif" }}>{tag}</span>
                {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-amber-400/50" />}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary */}
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-9 py-4 rounded-full text-black font-bold text-sm tracking-wide overflow-hidden shadow-2xl shadow-amber-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-500" />
              {/* shimmer */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Book Your Session
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>

            {/* Secondary */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.96 }}
              className="px-9 py-4 rounded-full border border-white/20 text-white font-medium text-sm tracking-wide backdrop-blur-sm transition-colors duration-300"
              style={{ fontFamily: "'Lora', serif" }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </div>

        {/* ── Side nav arrows ── */}
        {[
          { label: "prev", d: -1, side: "left-5", icon: "M15 19l-7-7 7-7" },
          { label: "next", d:  1, side: "right-5", icon: "M9 5l7 7-7 7"   },
        ].map(({ label, d, side, icon }) => (
          <motion.button
            key={label}
            onClick={() => go(d)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: d * 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className={`absolute ${side} top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-white transition-colors hover:border-amber-400/40 hover:bg-black/60`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
            </svg>
          </motion.button>
        ))}

        {/* ── Progress indicators ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center"
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
              className="relative rounded-full overflow-hidden transition-all duration-400"
              style={{
                width: i === current ? 32 : 8,
                height: 4,
                background: i === current ? "transparent" : "rgba(255,255,255,0.2)",
              }}
            >
              {i === current && (
                <>
                  <span className="absolute inset-0 bg-white/20 rounded-full" />
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #fbbf24, #f43f5e)",
                      transformOrigin: "left",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5.5, ease: "linear" }}
                  />
                </>
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <motion.span
            className="text-[9px] tracking-[0.3em] text-white/30 uppercase"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-1 h-1 rounded-full bg-amber-400"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </section>
    </>
  );
}
import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import MyPhoto from "../../src/assets/Studio.jpeg";
import MyPhoto1 from "../../src/assets/MyPhoto1.png";
import PatilPhotography from "../../src/assets/PatilPhotography.jpeg";

const images = [MyPhoto, MyPhoto1, PatilPhotography];

const stats = [
  { value: "8+",   label: "Years Experience", color: "#f59e0b" },
  { value: "300+", label: "Happy Clients",     color: "#f43f5e" },
  { value: "350+", label: "Projects Done",     color: "#a78bfa" },
  { value: "12+",  label: "Services Offered",  color: "#34d399" },
];

const highlights = [
  "Wedding & Pre-Wedding Photography",
  "Drone Aerial Cinematography",
  "Cinematic Videography",
  "Destination Weddings",
];

/* ── Image Carousel ── */
function ImagePanel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">

      {/* Stack of background images */}
      {images.map((img, i) => {
        const diff = (i - current + images.length) % images.length;
        if (diff === 0) return null;
        return (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-3xl overflow-hidden"
            animate={{
              rotate: diff === 1 ? 5 : -5,
              scale: diff === 1 ? 0.94 : 0.88,
              opacity: diff === 1 ? 0.45 : 0.2,
              zIndex: diff === 1 ? 1 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </motion.div>
        );
      })}

      {/* Main image */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1, zIndex: 10 }}
          exit={{ opacity: 0, x: direction * -60, scale: 0.96 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          style={{ zIndex: 10 }}
        >
          <img src={images[current]} alt="Patil Photography" className="w-full h-full object-cover" />

          {/* Inner gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Slide counter */}
          <div className="absolute bottom-5 left-6 z-20 flex items-end gap-1">
            <span className="text-white font-bold text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-white/30 text-lg mb-1">/ {String(images.length).padStart(2, "0")}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-amber-400/40 rounded-tl-lg z-20 pointer-events-none" />
      <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-amber-400/40 rounded-tr-lg z-20 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-amber-400/40 rounded-bl-lg z-20 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-amber-400/40 rounded-br-lg z-20 pointer-events-none" />

      {/* Nav buttons */}
      <motion.button
        onClick={() => go(-1)}
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.92 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-white/15 bg-black/50 backdrop-blur-md text-white transition-colors hover:border-amber-400/50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={() => go(1)}
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.92 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-white/15 bg-black/50 backdrop-blur-md text-white transition-colors hover:border-amber-400/50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Dot indicators */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === current ? 28 : 8, background: i === current ? "#f59e0b" : "rgba(255,255,255,0.2)" }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main ── */
function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const inView = useInView(textRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Lora&display=swap');
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="relative py-28 min-h-screen bg-[#080808] overflow-hidden"
      >
        {/* Parallax blobs */}
        <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/[0.04] blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-500/[0.04] blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-violet-500/[0.02] blur-[160px]" />
        </motion.div>

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* ── LEFT — Image ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="pb-10"
            >
              <ImagePanel />
            </motion.div>

            {/* ── RIGHT — Text ── */}
            <div ref={textRef} className="text-white">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
                <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">The Photographer</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold leading-none mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                About{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #f43f5e 50%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Me
                </span>
              </motion.h2>

              {/* Bio paragraphs */}
              {[
                "Hello! I'm a passionate photographer based in Nandurbar, Maharashtra, with over 8 years of professional experience and a formal 2-year photography degree.",
                "I specialise in capturing heartfelt wedding moments, stunning pre-wedding shoots, and breathtaking drone cinematography — blending candid storytelling with artistic composition.",
                "I believe in building genuine relationships with every couple and delivering images that don't just exceed expectations, but become heirlooms.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className={`leading-relaxed mb-4 ${i === 0 ? "text-gray-300 font-medium" : "text-gray-500"} text-sm md:text-base`}
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Highlights list */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-gray-400" style={{ fontFamily: "'Lora', serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="h-px bg-gradient-to-r from-amber-400/40 via-rose-400/20 to-transparent mb-8"
                style={{ transformOrigin: "left" }}
              />

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {stats.map(({ value, label, color }) => (
                  <div
                    key={label}
                    className="group relative rounded-2xl border border-white/[0.06] bg-[#0f0f0f] p-5 text-center overflow-hidden hover:border-white/[0.14] transition-colors duration-300 cursor-default"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background: `radial-gradient(ellipse at center, ${color}18 0%, transparent 70%)` }}
                    />
                    <div
                      className="text-2xl font-bold mb-1 relative z-10"
                      style={{ color, fontFamily: "'Playfair Display', serif" }}
                    >
                      {value}
                    </div>
                    <div className="text-gray-600 text-xs tracking-wide relative z-10">{label}</div>
                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
                    />
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-black text-sm font-semibold tracking-wide overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-500" />
                  <span className="relative z-10">Book a Session</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-colors duration-300"
                >
                  View Services
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
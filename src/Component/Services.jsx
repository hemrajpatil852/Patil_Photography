import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaHeart, FaCameraRetro, FaBirthdayCake, FaBaby,
  FaRing, FaVideo, FaLeaf, FaPaintBrush,
  FaHelicopter, FaBookOpen, FaLandmark, FaGlobe,
} from "react-icons/fa";

const services = [
  { title: "Engagement Shoot",       desc: "Romantic engagement photography with cinematic storytelling.",                    icon: FaRing,        color: "#f43f5e", glow: "rgba(244,63,94,0.3)"   },
  { title: "Mehendi Ceremony",       desc: "Capture colorful mehendi ceremony moments with vibrant emotions.",                icon: FaPaintBrush,  color: "#22c55e", glow: "rgba(34,197,94,0.3)"   },
  { title: "Haldi Ceremony",         desc: "Beautiful yellow-themed haldi ceremony photography full of joy.",                 icon: FaLeaf,        color: "#eab308", glow: "rgba(234,179,8,0.3)"   },
  { title: "Wedding Photography",    desc: "Capture every emotional and unforgettable wedding moment.",                       icon: FaHeart,       color: "#f59e0b", glow: "rgba(245,158,11,0.3)"  },
  { title: "Pre Wedding Shoot",      desc: "Creative and romantic pre-wedding photoshoots at dream locations.",               icon: FaCameraRetro, color: "#fb923c", glow: "rgba(251,146,60,0.3)"  },
  { title: "Cinematic Videography",  desc: "High-quality cinematic wedding and event films.",                                 icon: FaVideo,       color: "#818cf8", glow: "rgba(129,140,248,0.3)" },
  { title: "Drone Photography",      desc: "Professional aerial drone shots for stunning perspectives.",                      icon: FaHelicopter,  color: "#38bdf8", glow: "rgba(56,189,248,0.3)"  },
  { title: "Event Photography",      desc: "Professional photography for birthdays and celebrations.",                        icon: FaBirthdayCake,color: "#c084fc", glow: "rgba(192,132,252,0.3)" },
  { title: "Baby Shower",            desc: "Capture beautiful memories from your baby shower celebration.",                   icon: FaBaby,        color: "#67e8f9", glow: "rgba(103,232,249,0.3)" },
  { title: "Government & Political", desc: "Professional coverage for official ceremonies and public events.",                icon: FaLandmark,    color: "#f87171", glow: "rgba(248,113,113,0.3)" },
  { title: "Album Designing",        desc: "Premium album design crafted beautifully for your memories.",                    icon: FaBookOpen,    color: "#fcd34d", glow: "rgba(252,211,77,0.3)"  },
  { title: "Destination Wedding",    desc: "Capture magical destination weddings across beautiful locations.",                icon: FaGlobe,       color: "#34d399", glow: "rgba(52,211,153,0.3)"  },
];

/* ── Card ── */
function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="service-card group relative"
    >
      {/* Outer glow on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at center, ${service.glow} 0%, transparent 70%)` }}
      />

      {/* Card body */}
      <div className="relative h-full rounded-2xl bg-[#0f0f0f] border border-white/[0.06] group-hover:border-white/[0.14] overflow-hidden transition-colors duration-500 p-7 flex flex-col">

        {/* Subtle inner top sheen */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Number watermark */}
        <span
          className="absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none transition-opacity duration-500"
          style={{ color: service.color, opacity: 0.06, fontFamily: "'Playfair Display', serif" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon circle */}
        <motion.div
          className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
          style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon style={{ color: service.color, fontSize: "1.5rem" }} />
          {/* Icon glow */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
            style={{ background: `${service.color}20` }}
          />
        </motion.div>

        {/* Title */}
        <h3
          className="text-white font-bold text-lg mb-2 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {service.title}
        </h3>

        {/* Divider */}
        <motion.div
          className="h-px mb-3 rounded-full"
          style={{ background: `linear-gradient(to right, ${service.color}60, transparent)` }}
          initial={{ scaleX: 0.2, opacity: 0.3 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: (index % 4) * 0.1 + 0.3 }}
          style2={{ transformOrigin: "left" }}
        />

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1" style={{ fontFamily: "'Lora', serif" }}>
          {service.desc}
        </p>

        {/* Bottom action */}
        <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: service.color }}>
            Learn More
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: service.color }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Bottom bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ background: `linear-gradient(to right, ${service.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

/* ── Section Header ── */
function Header() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="text-center mb-20 relative">
      {/* Ghost word */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.035 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[160px] font-black text-white uppercase pointer-events-none select-none whitespace-nowrap"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Services
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-5"
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
        <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">What We Offer</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-white leading-none relative"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Our{" "}
        <span
          className="italic"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #f43f5e 50%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Services
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-5 text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed relative"
        style={{ fontFamily: "'Lora', serif" }}
      >
        We capture emotions, celebrations, traditions, and unforgettable memories with creativity and cinematic excellence.
      </motion.p>
    </div>
  );
}

/* ── Main ── */
function Services() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Lora&display=swap');
      `}</style>

      <section
        id="services"
        ref={sectionRef}
        className="relative py-28 px-4 sm:px-8 bg-[#080808] overflow-hidden"
      >
        {/* Parallax ambient blobs */}
        <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/[0.04] blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/[0.04] blur-[150px]" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/[0.03] blur-[120px]" />
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

        <div className="relative z-10 max-w-7xl mx-auto">
          <Header />

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {[["12+", "Services"], ["500+", "Events Shot"], ["8+", "Years Experience"], ["100%", "Happy Clients"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>{num}</div>
                <div className="text-gray-600 text-xs tracking-widest uppercase mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <p className="text-gray-600 text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "'Lora', serif" }}>
              Ready to create something beautiful?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-white text-sm font-medium tracking-wide overflow-hidden group border border-white/10"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Book a Session</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;
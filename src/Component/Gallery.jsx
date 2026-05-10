import React, { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

import DestinationWedding from "../assets/DestinationWedding.jpg";
import PreWedding from "../assets/PreWeddingShoot.jpg";
import HaldiCeremony from "../assets/HaldiCeremony.jpg";
import EngagementShot from "../assets/EngagementShot.jpg";
import WeddingPhotography from "../assets/WeddingPhotography.jpg";
import Wedding from "../assets/Wedding.webp";
import Wedding1 from "../assets/Wedding1.webp";
import Wedding2 from "../assets/Wedding2.jpg";

const stories = [
  {
    img: DestinationWedding,
    title: "Akshaya & Riya",
    tag: "Destination Wedding",
    desc: "From College Desks to Wedding Vows — A Story of Love, Laughter & Togetherness",
    year: "2024",
  },
  {
    img: PreWedding,
    title: "Preetam & Tanvi",
    tag: "Pre-Wedding",
    desc: "From the Same Society to Soulmates — A Pune Love Story",
    year: "2024",
  },
  {
    img: HaldiCeremony,
    title: "Anshul & Rachana",
    tag: "Haldi Ceremony",
    desc: "From Pune to Belgavi — A Beautiful Beginning",
    year: "2023",
  },
  {
    img: EngagementShot,
    title: "Rahul & Sneha",
    tag: "Engagement",
    desc: "Two Hearts, One Journey — A Magical Wedding Story",
    year: "2024",
  },
  {
    img: WeddingPhotography,
    title: "Vikram & Aditi",
    tag: "Wedding",
    desc: "A Fairytale Wedding Captured in Beautiful Moments",
    year: "2023",
  },
  {
    img: Wedding,
    title: "Rohan & Pooja",
    tag: "Wedding",
    desc: "From Friendship to Forever — A Love Story",
    year: "2024",
  },
  {
    img: Wedding1,
    title: "Kunal & Meera",
    tag: "Wedding",
    desc: "Two Souls Celebrating Love & Happiness",
    year: "2023",
  },
  {
    img: Wedding2,
    title: "Arjun & Neha",
    tag: "Pre-Wedding",
    desc: "A Celebration of Love, Traditions & Memories",
    year: "2024",
  },
];

/* ─── Individual Story Card ─────────────────────────────────────────── */
function StoryCard({ story, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 4) * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="story-card group relative cursor-pointer"
      style={{ "--index": index }}
    >
      {/* Card shell */}
      <div className="relative overflow-hidden rounded-2xl h-[420px] bg-[#0d0d0d]">

        {/* Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={story.img}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Sheen on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-rose-500/10"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Top tag */}
        <div className="absolute top-4 left-4">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: (index % 4) * 0.12 + 0.3 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase border border-white/20 bg-black/40 backdrop-blur-sm text-amber-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {story.tag}
          </motion.span>
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span className="text-white/30 font-light text-xs tracking-widest">{story.year}</span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Animated divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-amber-400/80 via-rose-400/60 to-transparent mb-4"
            animate={{ scaleX: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.4 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.5 }}
          />

          <h3 className="text-white font-bold text-xl tracking-tight leading-none mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {story.title}
          </h3>

          <motion.p
            className="text-gray-400 text-xs leading-relaxed"
            animate={{ opacity: hovered ? 1 : 0.7, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.3 }}
          >
            {story.desc}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-2 mt-4"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">View Story</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-0 h-0"
          style={{
            borderStyle: "solid",
            borderWidth: "0 0 48px 48px",
            borderColor: "transparent transparent rgba(251,191,36,0.15) transparent",
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Section Header ─────────────────────────────────────────────────── */
function SectionHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="text-center mb-20 relative">
      {/* Large background word */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 0.04, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-black text-white uppercase pointer-events-none select-none whitespace-nowrap"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Stories
      </motion.span>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-5"
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
        <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">
          Our Couples
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-white leading-none relative"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Wedding{" "}
        <span
          className="italic"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #f43f5e 50%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Stories
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-5 text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed relative"
        style={{ fontFamily: "'Lora', serif" }}
      >
        Capturing timeless emotions, traditions, and unforgettable love stories with cinematic elegance.
      </motion.p>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────────────────── */
function Stories() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap');

        .story-card:nth-child(4n+1) { margin-top: 0; }
        .story-card:nth-child(4n+2) { margin-top: 40px; }
        .story-card:nth-child(4n+3) { margin-top: 20px; }
        .story-card:nth-child(4n+4) { margin-top: 60px; }

        @media (max-width: 1024px) {
          .story-card { margin-top: 0 !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full min-h-screen bg-[#080808] py-28 px-4 sm:px-8 overflow-hidden"
      >
        {/* Ambient background blobs — parallax */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/5 blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet-500/3 blur-[160px]" />
        </motion.div>

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeader />

          {/* Stories Grid — staggered offset layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
            {stories.map((story, index) => (
              <StoryCard key={index} story={story} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mt-20"
          >
            <p className="text-gray-500 text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Lora', serif" }}>
              Every love story deserves to be told
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/10 text-white text-sm font-medium tracking-wide overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">View All Stories</span>
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

export default Stories;
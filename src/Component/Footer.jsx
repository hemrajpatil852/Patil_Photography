import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

const navLinks = [
  { name: "Home",     path: "/" },
  { name: "About",    path: "/about" },
  { name: "Gallery",  path: "/gallery" },
  { name: "Services", path: "/services" },
  { name: "Contact",  path: "/contact" },
];

const services = [
  "Wedding Photography",
  "Pre-Wedding Shoot",
  "Cinematic Videography",
  "Drone Photography",
  "Engagement Shoot",
  "Destination Wedding",
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com",                          label: "Instagram", color: "#f43f5e" },
  { icon: FaFacebookF,  href: "https://facebook.com",                          label: "Facebook",  color: "#60a5fa" },
  { icon: FaWhatsapp,   href: "https://wa.me/918888086250",                    label: "WhatsApp",  color: "#34d399" },
  { icon: FaYoutube,    href: "https://www.youtube.com/@patilphotography2852", label: "YouTube",   color: "#f87171" },
];

function FooterCol({ title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="h-px w-5 bg-amber-400/60" />
        <h4
          className="text-[10px] font-semibold tracking-[0.25em] text-amber-400 uppercase"
        >
          {title}
        </h4>
      </div>
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Lora&display=swap');
      `}</style>

      <footer className="relative bg-[#080808] text-white overflow-hidden">

        {/* Top amber line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

        {/* Ambient blobs */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-amber-500/[0.03] blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full bg-rose-500/[0.03] blur-[100px] pointer-events-none" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <h2
                className="text-3xl font-black mb-1 leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Patil
              </h2>
              <h2
                className="text-3xl font-black italic mb-5 leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(135deg, #f59e0b 0%, #f43f5e 60%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Photography
              </h2>

              <p
                className="text-gray-500 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Capturing timeless emotions, traditions, and unforgettable love stories with cinematic elegance since 2017.
              </p>

              {/* Socials */}
              <div className="flex gap-2.5 flex-wrap">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.93 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.07] bg-[#111] transition-colors duration-300"
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${color}45`;
                      e.currentTarget.style.background  = `${color}15`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.background  = "#111";
                    }}
                  >
                    <Icon style={{ color, fontSize: "0.9rem" }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <FooterCol title="Quick Links" delay={0.1}>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="group flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors duration-300"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      <motion.span
                        className="w-4 h-px bg-amber-400/0 group-hover:bg-amber-400/70 transition-colors duration-300"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterCol>

            {/* Services */}
            <FooterCol title="Services" delay={0.2}>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s}>
                    <span
                      className="flex items-center gap-2 text-gray-500 text-sm"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-400/40 flex-shrink-0" />
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </FooterCol>

            {/* Contact */}
            <FooterCol title="Contact" delay={0.3}>
              <ul className="space-y-4">
                {[
                  { icon: "📍", label: "Nandurbar, Maharashtra, India" },
                  { icon: "📞", label: "+91 8888086250", href: "tel:+918888086250" },
                  { icon: "✉️", label: "yp1996yogesh@gmail.com", href: "mailto:yp1996yogesh@gmail.com" },
                ].map(({ icon, label, href }) => {
                  const Tag = href ? "a" : "div";
                  return (
                    <li key={label}>
                      <Tag
                        href={href}
                        className="flex items-start gap-3 text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        <span className="text-base leading-tight mt-px">{icon}</span>
                        <span className="leading-snug">{label}</span>
                      </Tag>
                    </li>
                  );
                })}
              </ul>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/918888086250"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden text-black text-xs font-bold tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-500" />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                />
                <span className="relative z-10">Book a Session</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </FooterCol>
          </div>

          {/* ── Divider ── */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-8" />

          {/* ── Bottom bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <p
              className="text-gray-600 text-xs tracking-wide"
              style={{ fontFamily: "'Lora', serif" }}
            >
              © {year} Patil Photography. All rights reserved.
            </p>

            <p
              className="text-gray-700 text-xs"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Crafted with{" "}
              <span className="text-rose-500">♥</span>
              {" "}in Nandurbar, Maharashtra
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
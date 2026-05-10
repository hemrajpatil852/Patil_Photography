import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

emailjs.init("YOUR_PUBLIC_KEY");

const contactItems = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91 8888086250",
    href: "tel:+918888086250",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.25)",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "yp1996yogesh@gmail.com",
    href: "mailto:yp1996yogesh@gmail.com",
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.25)",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Nandurbar, Maharashtra, India",
    href: null,
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.25)",
  },
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com",                          label: "Instagram", color: "#f43f5e" },
  { icon: FaFacebookF,  href: "https://facebook.com",                          label: "Facebook",  color: "#60a5fa" },
  { icon: FaWhatsapp,   href: "https://wa.me/918888086250",                    label: "WhatsApp",  color: "#34d399" },
  { icon: FaYoutube,    href: "https://www.youtube.com/@patilphotography2852", label: "YouTube",   color: "#f87171" },
];

/* ── Section Header ── */
function Header() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="text-center mb-20 relative">
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.035 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[90px] md:text-[150px] font-black text-white uppercase pointer-events-none select-none whitespace-nowrap"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Contact
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-5"
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
        <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">Get In Touch</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-white leading-none relative"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Contact{" "}
        <span
          className="italic"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #f43f5e 50%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Us
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-5 text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed relative"
        style={{ fontFamily: "'Lora', serif" }}
      >
        Let's capture your beautiful memories together. Reach out for weddings, events, cinematic shoots, and collaborations.
      </motion.p>
    </div>
  );
}

/* ── Contact Info Item ── */
function ContactItem({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;
  const Tag = item.href ? "a" : "div";
  const props = item.href ? { href: item.href } : {};

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tag
        {...props}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center gap-5 rounded-2xl p-4 border border-white/[0.06] bg-[#0f0f0f] overflow-hidden transition-colors duration-300 cursor-pointer block"
        style={{ borderColor: hovered ? `${item.color}40` : undefined }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 transition-opacity duration-400 rounded-2xl"
          style={{ background: `radial-gradient(ellipse at left, ${item.glow} 0%, transparent 70%)`, opacity: hovered ? 1 : 0 }}
        />

        {/* Icon */}
        <div
          className="relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300"
          style={{
            background: `${item.color}15`,
            border: `1px solid ${item.color}30`,
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <Icon style={{ color: item.color, fontSize: "1rem" }} />
        </div>

        <div className="relative z-10">
          <p className="text-gray-600 text-xs tracking-widest uppercase mb-0.5">{item.label}</p>
          <p className="text-white font-medium text-sm" style={{ fontFamily: "'Lora', serif" }}>{item.value}</p>
        </div>

        {/* Right arrow */}
        {item.href && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-auto relative z-10"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            style={{ color: item.color }}
            animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        )}
      </Tag>
    </motion.div>
  );
}

/* ── Form Field ── */
function Field({ as: Tag = "input", label, accent = "#f59e0b", ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      {label && (
        <label
          className="block text-xs font-semibold tracking-widest uppercase mb-2 transition-colors duration-300"
          style={{ color: focused ? accent : "rgb(107 114 128)" }}
        >
          {label}
        </label>
      )}
      <div
        className="relative rounded-xl overflow-hidden transition-all duration-300"
        style={{
          border: `1px solid ${focused ? `${accent}50` : "rgba(255,255,255,0.07)"}`,
          boxShadow: focused ? `0 0 0 3px ${accent}15` : "none",
        }}
      >
        <Tag
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-[#0f0f0f] text-white placeholder:text-gray-700 px-4 py-3.5 outline-none text-sm resize-none"
          style={{ fontFamily: "'Lora', serif" }}
        />
      </div>
    </div>
  );
}

/* ── Main ── */
function Contact() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSending(true);
    setSuccess(null);
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData).then(
      () => { setSuccess(true); setSending(false); setFormData({ name: "", email: "", phone: "", message: "" }); },
      () => { setSuccess(false); setSending(false); }
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Lora&display=swap');
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className="relative min-h-screen py-28 px-4 sm:px-8 bg-[#080808] overflow-hidden"
      >
        {/* Parallax blobs */}
        <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/[0.04] blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/[0.04] blur-[150px]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/[0.03] blur-[120px]" />
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* ── LEFT ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              {/* Info card */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-7">
                <h3
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Reach Out
                </h3>

                <div className="space-y-3">
                  {contactItems.map((item, i) => (
                    <ContactItem key={i} item={item} index={i} />
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-amber-400/30 via-rose-400/20 to-transparent my-7" />

                {/* Socials */}
                <p className="text-gray-600 text-xs tracking-widest uppercase mb-4">Follow Us</p>
                <div className="flex gap-3 flex-wrap">
                  {socials.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/[0.08] bg-[#111] transition-colors duration-300"
                      style={{ "--c": color }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = `${color}50`;
                        e.currentTarget.style.background = `${color}15`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.background = "#111";
                      }}
                    >
                      <Icon style={{ color, fontSize: "1rem" }} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-hidden rounded-2xl border border-white/[0.06] relative"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-amber-400/40 via-rose-400/30 to-transparent z-10" />
                <iframe
                  className="w-full h-[260px] grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                  src="https://www.google.com/maps?q=21.386995,74.254579&z=15&output=embed"
                  loading="lazy"
                  title="Patil Photography Location"
                />
              </motion.div>
            </motion.div>

            {/* ── RIGHT — Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-8 overflow-hidden"
            >
              {/* Top sheen */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send a Message
              </h3>
              <p className="text-gray-600 text-sm mb-8" style={{ fontFamily: "'Lora', serif" }}>
                We'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Your Name *"
                    type="text"
                    name="name"
                    placeholder="Raj Patil"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    accent="#f59e0b"
                  />
                  <Field
                    label="Email Address *"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    accent="#f43f5e"
                  />
                </div>

                <Field
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="+91 9130603602"
                  value={formData.phone}
                  onChange={handleChange}
                  accent="#a78bfa"
                />

                <Field
                  as="textarea"
                  label="Your Message *"
                  name="message"
                  placeholder="Tell us about your event, date, and location..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  accent="#34d399"
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: sending ? 1 : 1.02 }}
                  whileTap={{ scale: sending ? 1 : 0.98 }}
                  className="relative w-full py-4 rounded-xl text-white font-semibold text-sm tracking-wide overflow-hidden transition-opacity duration-300"
                  style={{ opacity: sending ? 0.7 : 1 }}
                >
                  {/* Gradient bg */}
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500" />
                  {/* Shimmer */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {sending ? (
                      <>
                        <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Feedback */}
                {success === true && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent! We'll be in touch soon.
                  </motion.div>
                )}
                {success === false && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-rose-400 text-sm bg-rose-400/10 border border-rose-400/20 rounded-xl px-4 py-3"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
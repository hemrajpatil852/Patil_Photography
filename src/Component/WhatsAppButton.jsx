import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "918888086250";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={`https://wa.me/${PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 overflow-hidden rounded-full shadow-2xl"
      style={{
        boxShadow: hovered
          ? "0 8px 40px rgba(37,211,102,0.35), 0 0 0 1px rgba(37,211,102,0.2)"
          : "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* Outer pulse ring */}
      <span className="absolute inset-0 rounded-full pointer-events-none">
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ border: "2px solid rgba(37,211,102,0.4)" }}
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ border: "2px solid rgba(37,211,102,0.25)" }}
          animate={{ scale: [1, 1.8, 1.8], opacity: [0.4, 0, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        />
      </span>

      {/* Icon circle */}
      <motion.div
        className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full"
        style={{ background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)" }}
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* WhatsApp SVG inline — no external request */}
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2.667C8.64 2.667 2.669 8.636 2.667 16a13.277 13.277 0 001.783 6.656L2.667 29.333l6.84-1.794A13.29 13.29 0 0016.004 29.333C23.365 29.333 29.333 23.364 29.333 16S23.365 2.667 16.004 2.667zm0 24.267a11.003 11.003 0 01-5.6-1.533l-.4-.24-4.053 1.067 1.08-3.947-.267-.413A10.963 10.963 0 015.04 16c0-6.053 4.92-10.973 10.965-10.973S26.96 9.947 26.96 16 22.043 26.934 16.004 26.934zm6.027-8.214c-.333-.16-1.947-.96-2.24-1.067-.294-.106-.507-.16-.72.16-.213.32-.827 1.067-.987 1.28-.16.214-.32.24-.613.08-.293-.16-1.253-.467-2.387-1.467-.88-.787-1.48-1.76-1.653-2.053-.173-.294-.013-.454.133-.6.12-.12.293-.32.44-.48.147-.16.2-.267.293-.454.094-.187.04-.347-.027-.507-.066-.16-.72-1.747-.987-2.4-.253-.614-.52-.534-.72-.547-.187-.013-.4-.013-.613-.013-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.32 1.36.52 1.827.667.773.24 1.467.2 2.027.12.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.134-.293-.214-.627-.374z"/>
        </svg>

        {/* Shimmer */}
        <motion.span
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
        />
      </motion.div>

      {/* Expandable label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
            style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(12px)" }}
          >
            <div className="px-4 pr-5 flex flex-col justify-center whitespace-nowrap">
              <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Chat with us</span>
              <span className="text-white text-sm font-semibold" style={{ fontFamily: "'Lora', serif" }}>
                WhatsApp Us
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
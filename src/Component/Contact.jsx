import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import emailjs from "emailjs-com";

emailjs.init("YOUR_PUBLIC_KEY");

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in Name, Email, and Message fields.");
      return;
    }

    setSending(true);
    setSuccess(null);

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setSending(false);
        },
        () => {
          setSuccess(false);
          setSending(false);
        }
      );
  };

  return (
    <section className="py-25 sm:py-20 md:py-24 bg-gray-50 min-h-screen">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-10 md:mb-16 text-black">
        Contact Us
      </h2>

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Get in Touch
            </h3>
            <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              We’d love to hear from you! Contact us for wedding bookings,
              pre-wedding shoots, and event photography.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:+918888086250"
              className="flex items-center gap-4 bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition"
            >
              <FaPhoneAlt className="text-yellow-500 text-lg sm:text-xl" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600 text-sm sm:text-base">
                  +91 8888086250
                </p>
              </div>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yp1996yogesh@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition"
            >
              <FaEnvelope className="text-yellow-500 text-lg sm:text-xl" />
              <div>
                <p className="font-semibold">Gmail</p>
                <p className="text-gray-600 text-sm sm:text-base">
                  yp1996yogesh@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-yellow-500 text-lg sm:text-xl" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Nandurbar, Maharashtra 425412, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2 flex-wrap">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-pink-500 text-white p-3 rounded-full hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/919130600000"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com/@patilphotography2852"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 text-white p-3 rounded-full hover:scale-110 transition"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Our Location
            </h3>
            <div className="w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg mt-3">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps?q=21.386995,74.254579&z=15&output=embed"
                loading="lazy"
                title="Patil Photography Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-5 md:mb-6">
            Send a Message
          </h3>

          <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full min-h-[120px] sm:min-h-[150px] p-3 sm:p-4 border rounded-lg resize-none focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-yellow-500 text-black py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:scale-105 transition"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {success === true && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="text-red-600 text-sm mt-2">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
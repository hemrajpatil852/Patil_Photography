import React from "react";

function WhatsAppButton() {
  const phoneNumber = "918888086250"; // Include country code (91 for India)
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-15 right-6 flex items-center gap-2 bg-gray-200 text-green-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp icon"
        className="w-7 h-7"
      />
      WhatsApp us
    </a>
  );
}

export default WhatsAppButton;
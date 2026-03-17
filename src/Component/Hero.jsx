import React, { useState, useEffect } from "react";
import baground6 from "../assets/baground6.jpg";
import baground1 from "../assets/baground1.jpg";
import baground2 from "../assets/baground2.jpg";

const images = [
  baground6, // bride & groom
  baground1, // wedding ceremony
  baground2, // couple dance
  baground6, // wedding decor
  baground1, // bride portrait
  baground2, // groom portrait
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-loop through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 pt-40 sm:pt-52 md:pt-64 lg:pt-80 max-w-3xl mx-auto animate-fadeIn">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-wide leading-tight">
          Capture Your
          <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Beautiful Moments
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-10">
          Professional Wedding, Pre-Wedding & Event Photography
        </p>

        {/* <button
          onClick={scrollToContact}
          className="bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-yellow-400 hover:scale-110 transition duration-300"
        >
          Book Your Shoot
        </button> */}
      </div>

      {/* Scroll Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
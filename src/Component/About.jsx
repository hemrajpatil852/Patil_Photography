import React, { useState } from "react";
import MyPhoto from "../../src/assets/Studio.jpeg";
import MyPhoto1 from "../../src/assets/MyPhoto1.png";
import PatilPhotography from "../../src/assets/PatilPhotography.jpeg";

function About() {
  const images = [MyPhoto, MyPhoto1, PatilPhotography];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="about"
      className="py-30 sm:py-20 md:py-24 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Image Section */}
        <div className="relative ">

          {/* Background Images (only next 2) */}
          {images.map((img, index) => {
            const diff = (index - current + images.length) % images.length;

            if (diff === 1 || diff === 2) {
              return (
                <img
                  key={index}
                  src={img}
                  alt="bg"
                  className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-xl transition-all duration-500
          ${diff === 1 ? "rotate-7 scale-95 opacity-60 z-0" : "-rotate-7 scale-90 opacity-40 z-0"}
          `}
                />
              );
            }
            return null;
          })}

          {/* Main Image */}
          <img
            src={images[current]}
            alt="Photographer"
            className="relative z-10 w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl transition duration-500"
          />

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black transition z-20"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black transition z-20"
          >
            ❯
          </button>
        </div>

        {/* Text Section (UNCHANGED) */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-black">
            About Me
          </h2>

          <p className="text-black font-semibold text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            Hello! I’m a passionate photographer based in Mumbai, India, with over 8 years of professional experience and a solid 2-year photography degree completed.
          </p>

          <p className="text-black font-semibold text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            I specialize in capturing heartfelt wedding moments, stunning product shots, appetizing food photography, and breathtaking architecture. My style blends candid storytelling with artistic composition, ensuring every photo tells a unique story.
          </p>

          <p className="text-black font-semibold text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            As an expert in drone photography, I bring a breathtaking aerial perspective to weddings and events that adds a cinematic dimension to your memories. Coupled with my expertise in cinematic shooting and professional editing, I deliver visually stunning narratives that you will cherish forever.
          </p>

          <p className="text-black font-semibold text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            I also understand the dynamics of large wedding celebrations and specialize in capturing candid and joyful moments of wedding relatives and guests - preserving the emotion and atmosphere of every celebration.
          </p>

          <p className="text-black font-semibold text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            My journey began with formal training where I honed technical skills and artistic vision. Since then, I’ve had the privilege to work on diverse projects across India, creating timeless memories for couples and brands alike.
          </p>

          <p className="text-black font-semibold text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            I believe in building strong relationships with my clients, understanding their vision, and delivering images that exceed expectations. Whether it’s an intimate gathering or a grand celebration, my commitment is to make every moment unforgettable.
          </p>

          <p className="text-black font-semibold text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            Outside of photography, I love exploring new cultures, traveling, and experimenting with creative techniques to keep evolving my craft.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center mt-8 md:mt-12">
            <div className="bg-gray-100 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-yellow-400">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                300+
              </h3>
              <p className="text-sm md:text-md font-medium text-gray-700">
                Happy Clients
              </p>
            </div>

            <div className="bg-gray-100 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-yellow-400">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                350+
              </h3>
              <p className="text-sm md:text-md font-medium text-gray-700">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
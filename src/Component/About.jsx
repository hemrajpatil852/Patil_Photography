import React from "react";
import MyPhoto from "../../src/assets/Studio.jpeg";

function About() {
  return (
    <section
      id="about"
      className="py-30 sm:py-20 md:py-24 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Image Section */}
        <div className="relative">
          <img
            src={MyPhoto}
            alt="Photographer"
            className="rounded-2xl md:rounded-3xl shadow-2xl w-full object-cover max-h-[380px] sm:max-h-[450px] md:max-h-[520px]"
          />

          {/* Experience Card */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:-bottom-8 md:-right-8 bg-yellow-400 text-black px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl shadow-xl border-2 md:border-4 border-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
              8+
            </h3>
            <p className="text-xs sm:text-sm md:text-md font-semibold">
              Years of Experience
            </p>
          </div>
        </div>

        {/* Text Section */}
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
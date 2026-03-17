import React from "react";
import MyPhoto from "../../src/assets/Studio.jpeg"; 
function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-r  via-pink-400 to-purple-700  min-h-screen">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image Section */}
        <div className="relative">
          <img
            src={MyPhoto}
            alt="Photographer"
            className="rounded-3xl shadow-2xl w-full object-cover max-h-[520px]"
          />

          {/* Experience Card */}
          <div className="absolute -bottom-8 -right-8 bg-yellow-400 text-black px-8 py-5 rounded-2xl shadow-xl border-4 border-white">
            <h3 className="text-3xl font-extrabold">8+</h3>
            <p className="text-md font-semibold">Years of Experience</p>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-5xl font-extrabold mb-8 bg-black bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-black font-semibold text-lg mb-6 leading-relaxed">
            Hello! I’m a passionate photographer based in Mumbai, India, with over 8 years of professional experience and a solid 2-year photography degree completed.
          </p>

          <p className="text-black font-semibold text-lg mb-6 leading-relaxed">
            I specialize in capturing heartfelt wedding moments, stunning product shots, appetizing food photography, and breathtaking architecture. My style blends candid storytelling with artistic composition, ensuring every photo tells a unique story.
          </p>

          <p className="text-black font-semibold text-lg mb-6 leading-relaxed">
            As an expert in drone photography, I bring a breathtaking aerial perspective to weddings and events that adds a cinematic dimension to your memories. Coupled with my expertise in cinematic shooting and professional editing, I deliver visually stunning narratives that you will cherish forever.
          </p>

          <p className="text-black font-semibold text-lg mb-6 leading-relaxed">
            I also understand the dynamics of large wedding celebrations and specialize in capturing candid and joyful moments of wedding relatives and guests - preserving the emotion and atmosphere of every celebration.
          </p>

          <p className="text-black font-semibold text-lg mb-6 leading-relaxed">
            My journey began with formal training where I honed technical skills and artistic vision. Since then, I’ve had the privilege to work on diverse projects across India, creating timeless memories for couples and brands alike.
          </p>

          <p className="text-black font-semibold text-lg mb-6 leading-relaxed">
            I believe in building strong relationships with my clients, understanding their vision, and delivering images that exceed expectations. Whether it’s an intimate gathering or a grand celebration, my commitment is to make every moment unforgettable.
          </p>

          <p className="text-black font-semibold text-lg mb-6 leading-relaxed">
            Outside of photography, I love exploring new cultures, traveling, and experimenting with creative techniques to keep evolving my craft.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center mt-12">
            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-yellow-400">
              <h3 className="text-3xl font-bold text-yellow-500">300+</h3>
              <p className="text-md font-medium text-gray-700">Happy Clients</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-yellow-400">
              <h3 className="text-3xl font-bold text-yellow-500">350+</h3>
              <p className="text-md font-medium text-gray-700">Projects Completed</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-yellow-400">
              <h3 className="text-3xl font-bold text-yellow-500">10+</h3>
              <p className="text-md font-medium text-gray-700">Industry Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
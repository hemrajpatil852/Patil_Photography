import React from "react";
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
    desc: "From College Desks to Wedding Vows — A Story of Love, Laughter & Togetherness",
  },
  {
    img: PreWedding,
    title: "Preetam & Tanvi",
    desc: "From the Same Society to Soulmates — A Pune Love Story",
  },
  {
    img: HaldiCeremony,
    title: "Anshul & Rachana",
    desc: "From Pune to Belgavi — A Beautiful Beginning",
  },
  {
    img: EngagementShot,
    title: "Rahul & Sneha",
    desc: "Two Hearts, One Journey — A Magical Wedding Story",
  },
  {
    img: WeddingPhotography,
    title: "Vikram & Aditi",
    desc: "A Fairytale Wedding Captured in Beautiful Moments",
  },
  {
    img: Wedding,
    title: "Rohan & Pooja",
    desc: "From Friendship to Forever — A Love Story",
  },
  {
    img: Wedding1,
    title: "Kunal & Meera",
    desc: "Two Souls Celebrating Love & Happiness",
  },
  {
    img: Wedding2,
    title: "Arjun & Neha",
    desc: "A Celebration of Love, Traditions & Memories",
  },
];

function Stories() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-sky-200 via-sky-50 to-white py-16 px-4 sm:px-8">
      <div className="max-w-[1850px] mx-auto">

        <h2 className="text-4xl md:text-5xl text-center bg-black font-extrabold mb-14 bg-clip-text text-transparentmb-12">
          Wedding Stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stories.map((story, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg hover:scale-105 transition-transform duration-500 p-4 flex flex-col items-center"
            >
              <img
                src={story.img}
                alt={story.title}
                className="rounded-2xl w-full h-[250px] sm:h-[280px] lg:h-[300px] object-cover shadow-md"
              />

              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-sky-900 text-center">
                {story.title}
              </h3>

              <p className="mt-2 text-gray-800 text-center text-sm sm:text-base leading-relaxed px-2">
                {story.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stories;
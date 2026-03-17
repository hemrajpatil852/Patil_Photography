import React from "react";

const stories = [
  {
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    title: "Akshaya & Riya",
    desc: "From College Desks to Wedding Vows — A Story of Love, Laughter & Togetherness",
  },
  {
    img: "https://images.unsplash.com/photo-1623091410901-00e2d268901f",
    title: "Preetam & Tanvi",
    desc: "From the Same Society to Soulmates — A Pune Love Story",
  },
  {
    img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92",
    title: "Anshul & Rachana",
    desc: "From Pune to Belgavi — A Beautiful Beginning",
  },
  {
    img: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Rahul & Sneha",
    desc: "Two Hearts, One Journey — A Magical Wedding Story",
  },
  {
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    title: "Vikram & Aditi",
    desc: "A Fairytale Wedding Captured in Beautiful Moments",
  },
  {
    img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    title: "Rohan & Pooja",
    desc: "From Friendship to Forever — A Love Story",
  },
  {
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    title: "Kunal & Meera",
    desc: "Two Souls Celebrating Love & Happiness",
  },
  {
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136",
    title: "Arjun & Neha",
    desc: "A Celebration of Love, Traditions & Memories",
  },
];

function Stories() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r  via-pink-400 to-purple-700  py-16 px-6">
      <div className="max-w-[1850px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stories.map((story, index) => (
            <div key={index} className="group rounded-3xl bg-gradient-to-r  via-pink-400 to-purple-400 ">

              <img
                src={story.img}
                alt={story.title}
                className="rounded-3xl w-full h-[320px] object-cover  shadow-lg group-hover:scale-105 transition duration-500"
              />

              <h3 className="mt-6 text-2xl rounded-3x font-bold  ">
                {story.title}
              </h3>

              <p className="text-gray-800 text-base mt-3 leading-relaxed max-w-[350px]">
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
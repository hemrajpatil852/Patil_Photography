import {
  FaHeart,
  FaCameraRetro,
  FaBirthdayCake,
  FaBaby,
  FaRing,
  FaVideo,
  FaBuilding,
  FaLeaf,
  FaPaintBrush,
  FaHelicopter,
  FaBookOpen,
  FaLandmark,
  FaGlobe
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Engagement Shoot",
      description: "Romantic engagement photography with cinematic style.",
      icon: <FaRing className="text-red-400 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Mehendi Ceremony",
      description: "Capture colorful mehendi ceremony moments.",
      icon: <FaPaintBrush className="text-green-500 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Haldi Ceremony",
      description: "Beautiful yellow-themed haldi ceremony photography.",
      icon: <FaLeaf className="text-yellow-500 text-4xl mx-auto mb-4" />,
    },

    {
      title: "Wedding Photography",
      description: "Capture every emotional and beautiful moment of your wedding day.",
      icon: <FaHeart className="text-pink-500 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Pre Wedding Shoot",
      description: "Creative and romantic pre-wedding photoshoots at amazing locations.",
      icon: <FaCameraRetro className="text-yellow-500 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Cinematic Videography",
      description: "High quality cinematic wedding and event video production.",
      icon: <FaVideo className="text-indigo-500 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Drone Photography",
      description: "Stunning aerial shots using professional drones.",
      icon: <FaHelicopter className="text-blue-500 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Event Photography",
      description: "Professional coverage for birthdays and celebrations.",
      icon: <FaBirthdayCake className="text-purple-500 text-4xl mx-auto mb-4" />,
    },

    {
      title: "Baby Shower",
      description: "Capture joyful moments of your baby shower celebration.",
      icon: <FaBaby className="text-blue-500 text-4xl mx-auto mb-4" />,
    },

    {
      title: "Government & Political Events",
      description: "Professional coverage for government programs, political rallies, and official ceremonies.",
      icon: <FaLandmark className="text-red-600 text-4xl mx-auto mb-4" />,
    },

    {
      title: "Album Designing",
      description: "Premium photo album design for your memories.",
      icon: <FaBookOpen className="text-orange-500 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Destination Wedding",
      description: "Capture your dream wedding at beautiful destinations.",
      icon: <FaGlobe className="text-teal-500 text-4xl mx-auto mb-4" />,
    },
  ];

  return (
    <section id="services" className="py-20  bg-gradient-to-r  via-pink-400 to-purple-700 ">
      <h2 className="text-4xl md:text-5xl text-center bg-black font-extrabold mb-14 bg-clip-text text-transparent">
        Our Services
      </h2>

      <div className="container mx-auto grid  max-w-[1850px] mx-auto  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-2xl shadow-lg p-10 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
          >
            <div className="transform  group-hover:scale-110 transition duration-500">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">{service.title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar.jsx";
import Hero from "./Component/Hero.jsx";
import Gallery from "./Component/Gallery.jsx";
import Services from "./Component/Services.jsx";
import Contact from "./Component/Contact.jsx";
import Footer from "./Component/Footer.jsx";
import About from "./Component/About.jsx";
import Home from "./Component/Home.jsx";
import WhatsAppButton from "./Component/WhatsAppButton.jsx";

function App() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        {/* Home Page */}
        {/* <Route
          path="/"
          element={
            <>
              <Hero />
              <Gallery />
              <Services />
              <Contact />
            </>
          }
        /> */}

        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
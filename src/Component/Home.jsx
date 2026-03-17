import React from 'react';
import Contact from './Contact.jsx';
import Hero from './Hero.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Services from './Services.jsx';  

const Home = () => {
    return (
       <>
        <Hero />
        <Gallery />
        <Services />
        <Contact />
        {/* <Footer /> */}
       </>
    );
};

export default Home;
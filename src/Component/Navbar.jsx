import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-10">

        {/* Animated Gradient Heading */}
        <h1
          className="text-3xl md:text-4xl font-extrabold tracking-wide text-black"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Patil Photography
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-black font-medium text-lg">

          <li>
            <a
              href="/home"
              className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
          </li>

          {/* ✅ About Page Link */}
          <li>
            <Link
              to="/about"
              className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              About Us
            </Link>
          </li>

          <li>
            <a
              href="/gallery"
              className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="/services"
              className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="w-8 h-8 text-black" />
            ) : (
              <HiMenu className="w-8 h-8 text-black" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md">
          <ul className="flex flex-col gap-6 text-center py-6 text-black font-medium">

            <li>
              <Link to="/home" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            {/* ✅ Mobile About Link */}
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/gallery" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
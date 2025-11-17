import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "NGIAB", to: "/" },
    { label: "NRDS", to: "/nrds" },
  ];

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="bg-gray-900 fixed w-full z-50 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">

            {/* Logo Placeholder (optional) */}
            <div className="text-white font-bold text-xl"></div>

            {/* Menu Button */}
            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block uppercase text-xl text-white hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="bg-gray-900 fixed w-full z-50 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">

            {/* Logo Placeholder (optional) */}
            <div className="text-white text-xl font-bold"></div>

            {/* Menu Items */}
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="uppercase text-white hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* GitHub Icon */}
              <a
                href="https://github.com/ciroh-ua/ngiab-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

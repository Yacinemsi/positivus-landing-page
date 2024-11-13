// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between py-6">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src="/assets/Logo-header.svg" alt="logo" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:items-center md:justify-center md:space-x-8 text-sm">
        <Link to="/">About us</Link>
        <Link to="/services">Services</Link>
        <Link to="/use-cases">Use Cases</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/blog">Blog</Link>
        <button className="ml-4 rounded-xl border-black border-1 px-4 py-3">
          Request a quote
        </button>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none text-3xl">
          ☰
        </button>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sidebar Navigation for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-2/3 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside the sidebar */}
        <button
          className="absolute top-4 right-4 text-2xl text-black"
          onClick={closeMenu}
        >
          ✖️
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center mt-16 space-y-6 text-sm">
          <Link to="/" onClick={closeMenu}>
            About us
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/use-cases" onClick={closeMenu}>
            Use Cases
          </Link>
          <Link to="/pricing" onClick={closeMenu}>
            Pricing
          </Link>
          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>
          <button
            onClick={closeMenu}
            className="mt-4 rounded-xl border-black border-1 px-4 py-3"
          >
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

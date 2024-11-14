// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "./Switch";

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
        <div className="dark:hidden w-36 sm:w-56">
          <Link to="/">
            <img src="/assets/Logo-header.svg" alt="logo" />
          </Link>
        </div>

        <div className="hidden dark:block w-36 sm:w-56">
          <Link to="/">
            <img src="/assets/Logo-white-header.svg" alt="logo" />
          </Link>
        </div>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:items-center md:justify-center md:space-x-8 text-sm dark:text-white">
        <Link to="/" className="hover:text-green-light">
          About us
        </Link>
        <Link to="/services" className="hover:text-green-light">
          Services
        </Link>
        <Link to="/use-cases" className="hover:text-green-light">
          Use Cases
        </Link>
        <Link to="/pricing" className="hover:text-green-light">
          Pricing
        </Link>
        <Link to="/blog" className="hover:text-green-light">
          Blog
        </Link>
        <div className="border-b-transparent border-b-4 hover:border-b-black dark:hover:border-b-white rounded-[15px] transition-all duration-200">
          <button className="relative rounded-xl border-black border-1 px-4 py-3 dark:border-white dark:hover:text-black hover:bg-green-light">
            Request a quote
          </button>
        </div>
      </nav>
      {/* Dark Mode Toggle */}
      <div className="hidden md:flex">
        <Switch />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-3xl dark:text-white"
        >
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
        className={`fixed top-0 -right-2 h-full bg-white w-2/3 transform transition-transform duration-300 md:hidden dark:bg-black shadow-md dark:shadow-slate-200 ${
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
        <div className="flex justify-center mt-8 md:hidden">
          <Switch />
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col items-center mt-8 space-y-6 text-sm dark:text-white">
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
            className="mt-4 rounded-xl border-black border-1 px-4 py-3 dark:border-white"
          >
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

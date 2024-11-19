// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "./Switch";
import CustomButton from "./CustomButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-4 border-1 border-solid border-black dark:border-white rounded-xl py-2 px-4  bg-white md:bg-white/70 dark:bg-gray-dark dark:md:bg-gray-dark/70 flex items-center justify-between h-16 mb-10 md:mb-14 md:backdrop-blur-md">
        {/* Logo */}
        <div className="max-w-28">
          <div className="dark:hidden w-full">
            <Link to="/">
              <img src="/assets/Logo-header.svg" alt="logo" />
            </Link>
          </div>

          <div className="hidden dark:block w-full">
            <Link to="/">
              <img src="/assets/Logo-white-header.svg" alt="logo" />
            </Link>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:justify-center md:gap-8 text-sm dark:text-white">
          <Link
            to="/about-us"
            className="relative group overflow-hidden hover:text-green-light"
          >
            <span className="relative z-10 group-hover:text-black">
              About us
            </span>
            <span className="absolute inset-0 bg-green-light transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-0"></span>
          </Link>
          <Link
            to="/services"
            className="relative group overflow-hidden hover:text-green-light"
          >
            <span className="relative z-10 group-hover:text-black">
              Services
            </span>
            <span className="absolute inset-0 bg-green-light transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-0"></span>
          </Link>
          <Link
            to="/use-cases"
            className="relative group overflow-hidden hover:text-green-light"
          >
            <span className="relative z-10 group-hover:text-black">
              Use Cases
            </span>
            <span className="absolute inset-0 bg-green-light transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-0"></span>
          </Link>
          <Link
            to="/pricing"
            className="relative group overflow-hidden hover:text-green-light"
          >
            <span className="relative z-10 group-hover:text-black">
              Pricing
            </span>
            <span className="absolute inset-0 bg-green-light transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-0"></span>
          </Link>
          <Link
            to="/blog"
            className="relative group overflow-hidden hover:text-green-light"
          >
            <span className="relative z-10 group-hover:text-black">Blog</span>
            <span className="absolute inset-0 bg-green-light transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-0"></span>
          </Link>
          <CustomButton
            text="Request a quote"
            classNameDiv="mt-1"
            classNameButton="mt-1"
          />
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
          className={`fixed top-0 -right-2 h-full bg-white w-2/3 transform transition-transform duration-300 md:hidden dark:bg-gray-dark shadow-md dark:shadow-slate-200 ${
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
            <Link
              to="/"
              onClick={closeMenu}
              className="relative group overflow-hidden hover:text-green-light"
            >
              <span className="relative z-10">About us</span>
              <span className="absolute inset-0 bg-green-light transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="relative group overflow-hidden hover:text-green-light"
            >
              <span className="relative z-10">Services</span>
              <span className="absolute inset-0 bg-green-light transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/use-cases"
              onClick={closeMenu}
              className="relative group overflow-hidden hover:text-green-light"
            >
              <span className="relative z-10">Use Cases</span>
              <span className="absolute inset-0 bg-green-light transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/pricing"
              onClick={closeMenu}
              className="relative group overflow-hidden hover:text-green-light"
            >
              <span className="relative z-10">Pricing</span>
              <span className="absolute inset-0 bg-green-light transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/blog"
              onClick={closeMenu}
              className="relative group overflow-hidden hover:text-green-light"
            >
              <span className="relative z-10">Blog</span>
              <span className="absolute inset-0 bg-green-light transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <CustomButton
              text="Request a quote"
              classNameDiv="hover:border-b-black dark:hover:border-b-white"
              classNameButton="hover:bg-green-light dark:border-white dark:hover:text-black"
              onClick={closeMenu}
            />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

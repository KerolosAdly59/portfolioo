"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // ✅ تحميل الثيم من localStorage (Client only)
  useEffect(() => {
    const savedTheme = localStorage.getItem("themeportfolio");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("themeportfolio", theme);
  }, [theme]);

  return (
    <nav className="bg-gradient-to-r from-slate-100 to-slate-300 fixed top-0 w-full z-10 shadow-md dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-700 dark:to-slate-700">
      
      <div className="w-full md:w-[80%] mx-auto px-4 md:px-24 flex justify-between items-center py-4">
        
        {/* Logo */}
        <div className="text-black dark:text-slate-200 font-bold text-lg border-3 border-transparent hover:border-black dark:hover:border-slate-200 transition duration-300 rounded-full p-1">
          <a href="#home" className="text-2xl font-bold font-serif">Kerolos Adly</a>
        </div>

        {/* Toggle Theme */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-transparent border-2 border-white dark:bg-gray-800 md:px-4 px-3 py-0.5 rounded-xl cursor-pointer"
        >
          <i className="fa-solid fa-circle-half-stroke"></i>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black font-medium dark:text-slate-200">
          <li><a href="#home" className="border-3 border-transparent hover:border-black dark:hover:border-slate-200 transition duration-300 rounded-full p-1">Home</a></li>

          <li><a href="#skills" className="border-3 border-transparent hover:border-black dark:hover:border-slate-200 transition duration-300 rounded-full p-1">About</a></li>
          <li><a href="#projects" className="border-3 border-transparent hover:border-black dark:hover:border-slate-200 transition duration-300 rounded-full p-1">Projects</a></li>
          <li><a href="#contact" className="border-3 border-transparent hover:border-black dark:hover:border-slate-200 transition duration-300 rounded-full p-1">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-2xl cursor-pointer dark:text-slate-200"
          >
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="bg-gradient-to-r from-blue-100 to-blue-600 text-black flex flex-col items-center gap-4 py-4 dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-700 dark:to-slate-700">
          
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="border-3 border-transparent dark:text-slate-200 hover:border-black dark:hover:border-slate-200 transition duration-300 rounded-full p-1"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="border-3 border-transparent dark:text-slate-200 hover:border-black dark:hover:border-slate-200 transition duration-300 rounded-full p-1"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="border-3 border-transparent dark:text-slate-200 hover:border-black dark:hover:border-slate-200 transition duration-300 rounded-full p-1"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="border-3 border-transparent dark:text-slate-200 hover:border-black dark:hover:border-slate-200 transition duration-300 rounded-full p-1"
            >
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
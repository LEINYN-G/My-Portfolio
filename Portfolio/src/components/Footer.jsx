"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`
        relative py-10 text-center
        ${theme === "dark"
          ? "bg-black text-gray-400"
          : "bg-gray-200 text-gray-600"}
        transition-colors duration-500
      `}
    >
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px]
        bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40" />

      {/* NK Logo */}
      <div className="mb-4">
        <span
          className="
            text-2xl font-extrabold tracking-widest
            bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500
            bg-clip-text text-transparent
            animate-gradient-text
          "
        >
          NK
        </span>
      </div>

      {/* Copyright */}
      <p className="text-sm">
        © 2025 Nisha Kumari. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-8 mt-5">
        <a
          href="https://github.com/LEINYN-G"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="
            text-2xl transition-all duration-300
            hover:text-green-700 hover:scale-125
          "
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/nisha-722292200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="
            text-2xl transition-all duration-300
            hover:text-cyan-700 hover:scale-125
          "
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

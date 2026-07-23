"use client";
import React, { useState, useEffect } from "react";

export default function Typewriter({ text, delay = 100, infinite = false }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (infinite) {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
      }, 2000);
    }
  }, [currentIndex, delay, text, infinite]);

  return <span>{currentText}</span>;
}

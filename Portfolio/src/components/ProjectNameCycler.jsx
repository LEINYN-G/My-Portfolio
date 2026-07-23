"use client";
import React, { useState, useEffect } from "react";

const ProjectNameCycler = ({
  projectNames = ["Portfolio", "E-commerce", "Personal Website", "Galaxy Animation", "UI", "UX", "Rocket Launch", "AI Chat-web"],
  delay = 2000,
  transitionDuration = 0.8,
}) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!projectNames || projectNames.length === 0) return;

    const cycleText = () => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentProjectIndex(
          (prevIndex) => (prevIndex + 1) % projectNames.length
        );
        setIsVisible(true);
      }, transitionDuration * 1000);
    };

    const interval = setInterval(cycleText, delay + transitionDuration * 1000);
    return () => clearInterval(interval);
  }, [projectNames, delay, transitionDuration]);

  if (!projectNames || projectNames.length === 0) return null;

  return (
    <span
      key={currentProjectIndex}
      className={`inline-block whitespace-nowrap overflow-hidden text-center
        text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
        font-semibold tracking-wide 
        transition-all ease-in-out duration-300
        ${
          isVisible
            ? "animate-fade-slide-in"
            : "animate-fade-slide-out"
        }`}
      style={{
        animationDuration: `${transitionDuration}s`,
      }}
    >
      {projectNames[currentProjectIndex]}
    </span>
  );
};

export default ProjectNameCycler;

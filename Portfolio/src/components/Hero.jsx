"use client";

import React, { useState, useEffect, useRef } from "react";
import GalaxyAnimation from "./GalaxyAnimation";
import ProjectNameCycler from "./ProjectNameCycler";
import Typewriter from "./Typewriter";
import { projects } from "@/data/projects";

export default function Hero() {
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const projectNames = projects.map((p) => p.name);
  const canvasRef = useRef(null);

  // Canvas gradient pulse
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        80 + 30 * Math.sin(t / 40),
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.1
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.8)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.4)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      t += 1.5;
      requestAnimationFrame(render);
    };
    render();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      onMouseEnter={() => setIsHeroHovered(true)}
      onMouseLeave={() => setIsHeroHovered(false)}
      className="
        relative flex flex-col items-center justify-center
        h-[90vh] md:h-screen px-4 sm:px-6 md:px-12
        overflow-hidden bg-black text-center
        animate-fade-in-up
      "
    >
      {/* 🌠 Galaxy Background Animation */}
      <GalaxyAnimation isHeroHovered={isHeroHovered} />

     {/* 💫 Hero Card */}
<div
  className="
    group relative z-10 w-full max-w-[680px] min-h-[250px]

    /* glass base */
    bg-[linear-gradient(135deg,rgba(10,10,20,0.12),rgba(5,5,10,0.04))]
    backdrop-blur-lg
    rounded-[2.5rem]

    px-6 py-10 sm:px-12 sm:py-14
    flex flex-col items-center justify-center

    shadow-[0_0_50px_rgba(168,85,247,0.25)]
    transition-all duration-500 ease-out
  "

  
>

  {/* 🌈 Animated Glow Border */}
<div
  className="
    pointer-events-none absolute inset-0 rounded-[2.5rem]

    before:absolute before:inset-[-2px]
    before:rounded-[2.6rem]

    before:bg-[linear-gradient(
      270deg,
      #22d3ee,
      #6366f1,
      #a855f7,
      #ec4899,
      #facc15,
      #fb923c,
      #22d3ee
    )]

    before:bg-[length:400%_400%]
    before:animate-[rainbow-border_6s_linear_infinite]

    before:blur-md
    before:opacity-70

    mask-border
  "
/>


  <div
  className="
    pointer-events-none absolute inset-0 rounded-[2.5rem]
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    bg-[linear-gradient(135deg,rgba(34,211,238,0.25),rgba(168,85,247,0.25))]
    blur-xl
  "
/>


  <div
  className="
    absolute inset-0 rounded-[2.5rem]
    bg-gradient-to-br from-white/10 via-transparent to-purple-500/10
    opacity-20 pointer-events-none
  "
/>

 <canvas
  ref={canvasRef}
  className="
    absolute inset-0 w-full h-full rounded-[2.5rem]
    opacity-15 mix-blend-screen
    pointer-events-none
  "
/>
{/* ✨ Name */}
<h1
  className="
    relative z-20 font-poppins mb-6
    text-5xl sm:text-6xl md:text-7xl lg:text-8xl
    leading-tight tracking-tight

    bg-gradient-to-r from-indigo-400 via-fuchsia-500 via-pink-500 via-orange-400 to-cyan-400

    bg-[length:300%_300%]
    bg-clip-text text-transparent

    animate-gradient-text
    drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]
  "
>
  <Typewriter
  text="Nisha Kumari"
  speed={80}
  cursor
  />
</h1>



        {/* 🔁 Project Name Cycle */}
        <p className="relative z-20 text-sm sm:text-base md:text-lg text-white/90 drop-shadow mb-6 animate-slide-in-text">
          <ProjectNameCycler projectNames={projectNames} />
        </p>

        {/* 🚀 Buttons */}
        <div className="relative z-20 mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
          {/* Resume */}
          <a
  href="/resume_nisha.pdf"
  download="resume_nisha.pdf"
  className="
    relative inline-flex items-center gap-2
    px-6 sm:px-8 py-3
    rounded-full font-semibold text-base sm:text-lg

    text-white border border-cyan-400
    bg-cyan-500/10

    transition-all duration-300
    hover:bg-cyan-500 hover:text-black
    active:scale-95

    shadow-[0_0_20px_rgba(34,211,238,0.4)]
    hover:shadow-[0_0_35px_rgba(34,211,238,0.9)]

    before:absolute before:inset-0
    before:rounded-full
    before:bg-cyan-400/30
    before:blur-xl
    before:opacity-0
    hover:before:opacity-100
    before:transition-opacity

    animate-fade-in-up
  "
>
  Blue Pill!
  <i className="fas fa-download"></i>
</a>


          {/* Contact */}
   <a
    href="#ask"
    className="
    relative inline-flex items-center gap-2
    px-6 sm:px-8 py-3
    rounded-full font-semibold text-base sm:text-lg

    text-white border border-red-500
    bg-red-500/10

    transition-all duration-300
    hover:bg-red-600
    active:scale-95

    shadow-[0_0_20px_rgba(255,0,51,0.4)]
    hover:shadow-[0_0_35px_rgba(255,0,51,0.9)]

    before:absolute before:inset-0
    before:rounded-full
    before:bg-red-500/30
    before:blur-xl
    before:opacity-0
    hover:before:opacity-100
    before:transition-opacity

    animate-fade-in-up
  "
>
  Red Pill!
  <i className="fas fa-envelope"></i>
</a>

  </div>
 </div>
</section>
  );
}

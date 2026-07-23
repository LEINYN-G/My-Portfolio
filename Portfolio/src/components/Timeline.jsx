"use client";
import { motion } from "framer-motion";
import { Lightbulb, Target, HandCoins, Cog, TrendingUp } from "lucide-react";

const timelineData = [
  { id: 1, title: "Started Coding Journey", desc: "Began with C & C++, solving problems daily.", icon: <Lightbulb /> },
  { id: 2, title: "Competitive Programming", desc: "Practiced DSA & algorithms regularly.", icon: <Target /> },
  { id: 3, title: "AI & ML Projects", desc: "Built CNN models and AI-powered apps.", icon: <HandCoins /> },
  { id: 4, title: "Internship at IITG", desc: "Worked on impactful projects with mentors.", icon: <Cog /> },
  { id: 5, title: "Portfolio & Growth", desc: "Sharing projects and achievements online.", icon: <TrendingUp /> },
  { id: 6, title: "Current -> Research -> Big Data Analytics", desc: "Exploring data-driven insights and solutions.", icon: <TrendingUp /> },
];

import { useEffect, useState } from "react";

const Stars = ({ count = 40 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: count }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, [count]);

  return (
    <>
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-yellow-400 opacity-70 animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </>
  );
};


export default function Timeline() {
  return (
    <section className="relative py-32 overflow-hidden bg-black text-white">
      {/* 🌌 Nebula glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,90,255,0.15),transparent_60%)] -z-10" />

      {/* ✨ Floating stars */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Stars count={60} />
      </div>

      {/* 🌈 Vertical energy beam */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-purple-500 via-cyan-400 to-pink-500 opacity-60 hidden sm:block animate-pulse" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-24
          bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400
          bg-clip-text text-transparent animate-gradient-text"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ✨ My Journey
        </motion.h2>

        <div className="flex flex-col gap-28 relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex flex-col sm:flex-row items-center gap-10 sm:gap-20 ${
                index % 2 === 0 ? "" : "sm:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* 🧲 Icon Core */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                className="
                  relative flex items-center justify-center
                  w-24 h-24 rounded-full
                  bg-[linear-gradient(135deg,rgba(120,80,255,0.9),rgba(60,120,255,0.9))]
                  shadow-[0_0_40px_rgba(140,90,255,0.8)]
                "
              >
                
                <div className="text-4xl">{item.icon}</div>

                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full blur-xl bg-purple-500/30" />

                <span className="absolute -bottom-8 text-sm tracking-widest text-purple-300">
                  0{item.id}
                </span>
              </motion.div>

              {/* 🪐 Floating text */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 160 }}
                className="relative max-w-md text-center sm:text-left"
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-3
                  bg-gradient-to-r from-purple-400 to-cyan-400
                  bg-clip-text text-transparent">
                  {item.title}
                </h3>

                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  {item.desc}
                </p>

                {/* Connector pulse */}
                <span
                  className={`absolute top-1/2 hidden sm:block ${
                    index % 2 === 0 ? "right-[-4rem]" : "left-[-4rem]"
                  } w-16 h-[2px]
                  bg-gradient-to-r from-purple-500 to-cyan-400
                  animate-pulse`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* ✨ Floating Stars */}
<div className="absolute inset-0 z-10 pointer-events-none">
  <Stars count={50} />
</div>
    </section>
  );
}

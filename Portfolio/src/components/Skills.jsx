"use client";

import React from "react";
import {
  Code2,
  Boxes,
  Brain,
  Wrench,
  Monitor,
  BracesIcon,
} from "lucide-react";

/* 🧊 Skill Card */
const SkillCategory = ({ icon: Icon, title, skills, delay }) => {
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
  const rect = cardRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y / rect.height) - 0.5) * -10;
  const rotateY = ((x / rect.width) - 0.5) * 10;

  cardRef.current.style.transform =
    `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

  cardRef.current.style.setProperty("--x", `${x}px`);
  cardRef.current.style.setProperty("--y", `${y}px`);
};


  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{ animationDelay: `${delay}s` }}
      className="
        relative rounded-[2.5rem] p-6 md:p-8
        bg-[linear-gradient(135deg,rgba(6,6,12,0.75),rgba(3,3,8,0.65))]
        backdrop-blur-xl border border-white/10
        transition-all duration-500
        animate-fade-in-up
        shadow-[0_0_60px_rgba(120,60,255,0.15)]
        hover:shadow-[0_0_100px_rgba(255,220,120,0.35)]
        overflow-hidden
      "
    >
      {/* 🧲 magnetic glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 hover:opacity-100 transition-opacity duration-500
          bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,220,120,0.35),transparent_60%)]
        "
      />

      <div className="relative z-10 flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,122,140,0.59)] animate-pulse-slow" />
        <h3
          className="
            text-xl md:text-2xl font-semibold
            bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400
            bg-[length:300%_300%]
            bg-clip-text text-transparent
            animate-gradient-text
          "
        >
          {title}
        </h3>
      </div>

      <div className="relative z-10 flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 0.1}s` }}
            className="
              px-4 py-2 rounded-full
              text-sm md:text-base text-white/90
              bg-white/5 border border-white/10
              hover:bg-white/10
              transition-all duration-300
              animate-glow-float
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};


/* 🧠 Skills Section */
export default function SkillsSection() {
  const categories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        "Deep Learning",
        "NLP",
        "Data Analysis",
        "Big Data Analytics",
        "OpenCV",
        "LangChain",
        "Hugging Face",
      ],
    },
    {
      icon: Monitor,
      title: "Data Structures & Algorithms",
      skills: [
        "Arrays & Linked Lists",
        "Stacks & Queues",
        "Trees & Graphs",
        "Hashing",
        "Recursion",
        "Dynamic Programming",
        "Greedy Algorithms",
        "Sorting & Searching",
      ],
    },
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "MySQL", "R" ],
    },
    {
      icon: Boxes,
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Flask",
        "TensorFlow",
        "PyTorch",
      ],
    },
    {
      icon: Wrench,
      title: "Other Skills",
      skills: ["Git", "SQL", "Debugging", "Problem-solving"],
    },
    {
      icon: Brain,
      title: "Soft Skills",
      skills: [
        "Creativity",
        "Adaptability",
        "Quick Learning",
        "Time Management",
        "Team Collaboration",
      ],
    },
    {
      icon: BracesIcon,
      title: "Languages",
      skills: ["English", "Hindi", "Japanese"],
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative z-10
        py-24 md:py-32
        px-6 md:px-16 lg:px-28
        overflow-hidden
      "
    >
      {/* 🌑 dark magnetic backdrop */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_top,rgba(120,60,255,0.18),transparent_65%)]
          pointer-events-none
        "
      />

      {/* title */}
      <div className="relative text-center mb-20">
        <h2
          className="
            text-4xl md:text-6xl font-extrabold tracking-wide
            bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400
            bg-[length:300%_300%]
            bg-clip-text text-transparent
            animate-gradient-text
            drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]
          "
        >
          Skills
        </h2>
      </div>

      {/* cards */}
      <div className="relative grid gap-10 md:grid-cols-2">
        {categories.map((cat, i) => (
          <SkillCategory key={i} {...cat} delay={i * 0.25} />
        ))}
      </div>
    </section>
  );
}

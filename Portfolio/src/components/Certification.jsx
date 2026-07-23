"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ---------------- DATA ---------------- */

const certificates = [
  { id: 1, title: "Cisco Networking Academy (Introduction to Data Science)", img: "/images/certificates/data_science.jpg" },
  { id: 2, title: "Natural Language Processing (Infosys)", img: "/images/certificates/nlp.jpg" },
  { id: 3, title: "Implicit Biases (Infosys)", img: "/images/certificates/implicit.jpg" },
  { id: 4, title: "Consulting Financial Advisory (Deloitte)", img: "/images/certificates/delloite.jpg" },
  { id: 5, title: "Cybersecurity Essentials (Cisco)", img: "/images/certificates/cybersecurity.jpg" },
  { id: 7, title: "Blockchain and Crypto (Udemy)", img: "/images/certificates/udemy.jpg" },
  { id: 8, title: "Java (certificate of achievement)", img: "/images/certificates/java.jpeg"},
];

const achievements = [
  "Selected as Intern at IIT Guwahati 🎓",
  "Built a CNN model for waste classification 🧠",
  "Developed a Student Community App with AI Bot 🤖",
  "Created Cozy Kitchen Food Blog live 🍴",
  "Trained an Anime Character AI with emotional intelligence 🤖",
];

/* ---------------- STARS ---------------- */

const Stars = ({ count = 40 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }).map(() => ({
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
      }))
    );
  }, [count]);

  return (
    <>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-purple-300/70 animate-twinkle"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </>
  );
};

/* ---------------- COMPONENT ---------------- */

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-28 overflow-hidden bg-black text-white">
      {/* 🌌 Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,90,255,0.18),transparent_60%)] -z-10" />

      {/* ✨ Stars */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Stars count={60} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* ✨ Title */}
        <motion.h2
          className="
            text-4xl sm:text-5xl font-extrabold text-center mb-20
            bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400
            bg-clip-text text-transparent animate-gradient-text
          "
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🏆 Professional Certifications & Achievements
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* ---------------- CERTIFICATES ---------------- */}
          <div>
            <h3 className="text-2xl font-semibold mb-10 flex items-center gap-3 text-purple-300">
              <Award className="w-6 h-6 text-purple-400" /> Certificates
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b15]
                             shadow-[0_0_25px_rgba(0,0,0,0.6)]
                             hover:scale-[1.04] transition-all duration-300 cursor-pointer"
                  onClick={() => setSelected(cert)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                >
                  {/* 🧲 Magnetic glow */}
                  <div
                    className="
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                      transition duration-500 pointer-events-none
                      bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,120,0.35),transparent_60%)]
                    "
                  />

                  <Image
                    src={cert.img}
                    alt={cert.title}
                    width={500}
                    height={350}
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-4 text-center">
                    <p className="text-sm sm:text-base text-gray-300 font-medium">
                      {cert.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---------------- ACHIEVEMENTS ---------------- */}
          <div>
            <h3 className="text-2xl font-semibold mb-10 flex items-center gap-3 text-yellow-300">
              <Trophy className="w-6 h-6 text-yellow-400" /> Achievements
            </h3>

            <ul className="space-y-6">
              {achievements.map((ach, i) => (
                <motion.li
                  key={i}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-[#0b0b15]
                             shadow-[0_0_20px_rgba(0,0,0,0.5)]
                             hover:scale-[1.03] transition-all duration-300"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                >
                  {/* 🧲 Glow */}
                  <div
                    className="
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                      transition duration-500 pointer-events-none
                      bg-[radial-gradient(circle_at_50%_50%,rgba(255,200,120,0.25),transparent_60%)]
                    "
                  />

                  <span className="relative z-10">{ach}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------- MODAL ---------------- */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="bg-[#0b0b15] p-5 rounded-2xl shadow-2xl max-w-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Image
              src={selected.img}
              alt={selected.title}
              width={700}
              height={500}
              className="rounded-xl object-contain"
            />
            <p className="mt-4 text-center text-gray-300">
              {selected.title}
            </p>
          </motion.div>
        </div>
      )}

      {/* ---------------- WHAT I DO ---------------- */}
<div className="mt-36 relative">
  {/* soft divider glow */}
  <div
  className="
    absolute left-1/2 -top-20 w-[2px] h-20 -translate-x-1/2
    bg-gradient-to-b
    from-transparent via-purple-400 to-transparent
    opacity-70
    animate-divider-gradient
  "
/>


  <motion.h3
    className="
      text-4xl sm:text-5xl font-extrabold text-center mb-6
      bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400
      bg-clip-text text-transparent animate-gradient-text
    "
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    What I Do
  </motion.h3>

  <motion.p
    className="text-center text-gray-400 max-w-3xl mx-auto mb-20 text-lg"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    Crafting digital solutions from concept to deployment.
  </motion.p>

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {/* Card 1 */}
    <motion.div
      className="
        group relative p-8 rounded-3xl
        bg-[linear-gradient(135deg,rgba(10,10,20,0.9),rgba(5,5,10,0.85))]
        backdrop-blur-xl border border-white/10
        shadow-[0_0_40px_rgba(140,90,255,0.25)]
        hover:shadow-[0_0_80px_rgba(140,90,255,0.45)]
        transition-all duration-500
      "
      whileHover={{ scale: 1.05 }}
    >
      <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Website Development with React & Next.js
      </h4>
      <p className="text-gray-300 leading-relaxed">
        Professional React & Next.js website development — fast, scalable,
        SEO-friendly, and fully customized to your needs.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="
        group relative p-8 rounded-3xl
        bg-[linear-gradient(135deg,rgba(10,10,20,0.9),rgba(5,5,10,0.85))]
        backdrop-blur-xl border border-white/10
        shadow-[0_0_40px_rgba(90,160,255,0.25)]
        hover:shadow-[0_0_80px_rgba(90,160,255,0.45)]
        transition-all duration-500
      "
      whileHover={{ scale: 1.05 }}
    >
      <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Website to Android App Conversion
      </h4>
      <p className="text-gray-300 leading-relaxed">
        I convert existing websites into native Android applications.
        Fast delivery, smooth backend integration, with optional features
        like notifications and offline support.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      className="
        group relative p-8 rounded-3xl
        bg-[linear-gradient(135deg,rgba(10,10,20,0.9),rgba(5,5,10,0.85))]
        backdrop-blur-xl border border-white/10
        shadow-[0_0_40px_rgba(255,120,200,0.25)]
        hover:shadow-[0_0_80px_rgba(255,120,200,0.45)]
        transition-all duration-500
      "
      whileHover={{ scale: 1.05 }}
    >
      <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
        Android App Development with React Native
      </h4>
      <p className="text-gray-300 leading-relaxed">
        Professional React Native Android app development — fast,
        modern, scalable, and customized for your needs.
      </p>
    </motion.div>
  </div>
</div>

{/* ---------------- STATS LABELS ---------------- */}
<div className="mt-40">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">

    {/* Projects */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h4 className="
        text-5xl sm:text-6xl font-extrabold
        bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400
        bg-clip-text text-transparent animate-gradient-text
      ">
        15+
      </h4>
      <p className="mt-3 text-lg font-semibold text-white">
        Projects Completed
      </p>
      <p className="mt-1 text-sm text-gray-400">
        Successfully delivered projects
      </p>
    </motion.div>

    {/* Clients */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      viewport={{ once: true }}
    >
      <h4 className="
        text-5xl sm:text-6xl font-extrabold
        bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400
        bg-clip-text text-transparent animate-gradient-text
      ">
        3+
      </h4>
      <p className="mt-3 text-lg font-semibold text-white">
        Client Websites
      </p>
      <p className="mt-1 text-sm text-gray-400">
        Professional websites delivered for clients
      </p>
    </motion.div>

    {/* Experience */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h4 className="
        text-5xl sm:text-6xl font-extrabold
        bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400
        bg-clip-text text-transparent animate-gradient-text
      ">
        1.5+
      </h4>
      <p className="mt-3 text-lg font-semibold text-white">
        Years Experience
      </p>
      <p className="mt-1 text-sm text-gray-400">
        Hands-on industry experience
      </p>
    </motion.div>

  </div>
</div>


    </section>
  );
}

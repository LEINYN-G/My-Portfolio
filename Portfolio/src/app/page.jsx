import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";  // ✅ Added
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import AnimatedCursor from "@/components/AnimatedCursor";
import ThemeProvider from "@/components/ThemeProvider";
import ProjectNameCycler from "@/components/ProjectNameCycler";
import VideoModal from "@/components/VideoModal";
import Certifications from "@/components/Certification";
import AskForm from "@/components/AskForm";
/*import AIBox from "@/components/AIBox";
import MentorshipQA from "@/components/MentoshipQA";*/


export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
        <div className="relative z-10">
          <AnimatedCursor />

          {/* HERO SECTION */}
          <section className="w-full">
            <Hero />
          </section>

          {/* MAIN CONTENT */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-10">
            {/* ABOUT SECTION */}
            <section className="bg-gray-900/80 dark:bg-gray-800/90 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
              <About />
            </section>

            {/* SKILLS SECTION */}
            <section className="bg-gray-900/80 dark:bg-gray-800/90 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
              <Skills />
            </section>

            {/* PROJECTS SECTION */}
            <section className="bg-gray-900/80 dark:bg-gray-800/90 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
              <Projects />
            </section>

            {/* TIMELINE SECTION */}
            <section className="bg-gray-900/80 dark:bg-gray-800/90 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
              <Timeline />
            </section>

            {/* CERTIFICATIONS SECTION */}
            <section className="bg-gray-900/80 dark:bg-gray-800/90 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
              <Certifications />
            </section>

            {/* HELP SECTION */}
            
            <section className= "bg-gray-900/80 dark:bg-gray-800/90 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
            <AskForm />             
            </section>        
          </main>

          {/* FOOTER SECTION */}
          <footer className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12">
            <div className="bg-gray-900/80 dark:bg-gray-800/90 rounded-2xl shadow-xl p-6 sm:p-8">
              <Footer />
            </div>
          </footer>

          {/* FLOATING COMPONENTS */}
          <ProjectNameCycler />
          <VideoModal />
        </div>
      </div>
    </ThemeProvider>
  );
}

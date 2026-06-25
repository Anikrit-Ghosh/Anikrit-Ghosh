"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleField from "./ParticleField";
import { ArrowDown, Download, ArrowRight } from "lucide-react";

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const fullText = "AI/ML Developer & Full-Stack Engineer";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setRoleText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    card.style.transform = \`perspective(1000px) rotateX(\${-y / 15}deg) rotateY(\${x / 15}deg) scale3d(1.02, 1.02, 1.02)\`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = \`perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)\`;
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-20">
      <ParticleField />
      
      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="flex flex-col space-y-6"
        >
          <motion.h2 className="text-secondary font-medium tracking-wider text-sm uppercase">
            Welcome to my portfolio
          </motion.h2>
          <motion.h1 className="text-5xl md:text-7xl font-bold font-heading text-primary leading-tight">
            Hi, I'm <span className="text-accent">Anikrit Ghosh</span>
          </motion.h1>
          <motion.h3 className="text-xl md:text-2xl text-muted h-[32px] sm:h-auto">
            {roleText}
            <span className="animate-pulse">|</span>
          </motion.h3>
          <motion.p className="text-muted max-w-lg leading-relaxed text-lg">
            Passionate about building production-ready AI & full-stack applications. Open to internships, freelance, and collaborations.
          </motion.p>
          
          <motion.div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-accent rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="/resume.pdf" download className="group inline-flex items-center justify-center px-8 py-3 font-medium text-white border border-secondary/30 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-all hover:scale-105 active:scale-95 text-nowrap backdrop-blur-sm">
              <span className="flex items-center gap-2">
                Download Resume <Download size={18} />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Tilt Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-[24px] rounded-bl-[80px] rounded-tr-[80px] overflow-hidden transition-transform duration-200 ease-out border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glow effect back */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            {/* Real Image */}
            <div className="absolute inset-2 rounded-[20px] rounded-bl-[76px] rounded-tr-[76px] overflow-hidden bg-background">
              {/* Replace with your image */}
              <img 
                src="/image.png" 
                alt="Anikrit Ghosh" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x600/020617/f97316?text=Photo";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
            </div>

            {/* Inner Border */}
            <div className="absolute inset-2 border border-white/10 rounded-[20px] rounded-bl-[76px] rounded-tr-[76px] pointer-events-none"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs tracking-widest uppercase opacity-70">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

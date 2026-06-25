"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 bg-[#02071a]">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-primary mb-6">
            Let's Build <span className="text-secondary">Something.</span>
          </h2>
          <p className="text-muted text-lg md:text-xl mb-12">
            Open to internships, freelance opportunities, and collaborative projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="mailto:anikritcoding87960@gmail.com"
              className="px-8 py-4 bg-accent text-white font-medium rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)] w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              Say Hello
            </a>
            
            <div className="flex items-center gap-4">
              <SocialLink href="https://github.com/Anikrit-Ghosh" icon={<Github size={24} />} />
              <SocialLink href="https://www.linkedin.com/in/ghosh-anikrit-subroto-26465b36a/" icon={<Linkedin size={24} />} />
              {/* Add Twitter link if valid */}
              <SocialLink href="#" icon={<Twitter size={24} />} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-white/5 border border-white/10 text-muted hover:text-accent hover:border-accent hover:bg-accent/10 transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}

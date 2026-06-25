"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted max-w-xl text-lg">
            A selection of my recent works across AI, Full-Stack development, and system architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-[24px] overflow-hidden bg-secondary/5 border border-white/10 hover:border-accent/30 transition-colors p-8 flex flex-col justify-between ${
                project.highlight ? "md:col-span-2 lg:col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
              style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}
              whileHover={{ rotateX: 2, rotateY: -2, z: 20 }}
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="z-10 relative">
                <h3 className={\`font-bold font-heading text-primary mb-3 \${project.highlight ? "text-4xl" : "text-2xl"}\`}>
                  {project.name}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-white/5 text-primary rounded-[12px] border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="z-10 relative flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

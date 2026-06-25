"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        {/* Header Section */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.id || `project-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-[24px] bg-secondary/5 border border-white/10 hover:border-accent/30 transition-colors p-8 flex flex-col justify-between ${
                project.highlight 
                  ? "md:col-span-2 lg:col-span-2 lg:row-span-2" 
                  : "col-span-1 row-span-1"
              }`}
              style={{ 
                transformStyle: "preserve-3d", 
                perspective: "1000px" 
              }}
              whileHover={{ rotateX: 3, rotateY: -3, z: 10 }}
            >
              {/* Background Glow Overlay - isolated to keep 3D effects crisp */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]" />
              
              {/* Card Header & Body */}
              <div className="z-10 relative">
                <h3 className={`font-bold font-heading text-primary mb-3 tracking-tight ${project.highlight ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                  {project.name}
                </h3>
                <p className={`text-muted text-sm md:text-base leading-relaxed mb-6 ${project.highlight ? "line-clamp-none" : "line-clamp-4"}`}>
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.tech || []).map((techItem, techIndex) => (
                    <span 
                      key={`${project.id || index}-${techItem}-${techIndex}`} 
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-primary rounded-[12px] border border-white/10 whitespace-nowrap"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="z-10 relative flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted hover:text-accent transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted hover:text-accent transition-colors"
                      aria-label="Live Demo"
                    >
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
"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Projects Built", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Months Experience", value: "12+" },
    { label: "GitHub Stars", value: "50+" },
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-background overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="space-y-4 text-muted text-lg leading-relaxed">
            <p>
              I am an AI/ML Developer and Full-Stack Engineer who loves bridging the gap between intelligent algorithms and user-centric web applications.
            </p>
            <p>
              My drive comes from solving complex problems and turning innovative ideas into real, production-ready products. Whether it's training custom neural networks or architecting scalable backend systems, I'm always up for the challenge.
            </p>
            <p className="border-l-2 border-accent pl-4 italic text-primary/80">
              Currently: Building advanced LLM agents and improving my cloud architecture skills.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-secondary/10 border border-white/5 rounded-[24px] p-6 text-center backdrop-blur-sm"
            >
              <h4 className="text-4xl font-bold font-heading text-accent mb-2">{stat.value}</h4>
              <p className="text-muted text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

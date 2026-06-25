"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    role: "AI Developer Intern",
    company: "Tech Innovators",
    duration: "June 2023 - Present",
    points: [
      "Developed a custom RAG-based LLM application.",
      "Optimized database queries decreasing latency by 40%.",
    ],
  },
  {
    role: "Full-Stack Freelancer",
    company: "Various Clients",
    duration: "Jan 2022 - May 2023",
    points: [
      "Built 5+ full-stack web applications using Next.js and Node.js.",
      "Integrated secure payment gateways and authentication.",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
            My <span className="text-accent">Journey</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-1/2">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-accent border-4 border-background pointer-events-none" />
              
              <div className="bg-secondary/5 border border-white/5 rounded-[24px] p-6 text-left">
                <span className="text-sm font-medium text-accent mb-2 block">{item.duration}</span>
                <h3 className="text-2xl font-bold text-primary">{item.role}</h3>
                <h4 className="text-lg text-muted mb-4">{item.company}</h4>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="text-muted text-sm flex items-start">
                      <span className="mr-2 text-accent mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

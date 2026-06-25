"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "AI/ML",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "OpenAI API", "HuggingFace", "Pandas"],
  },
  {
    category: "Full-Stack",
    items: ["React", "Next.js", "Node.js", "Express", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub Actions", "AWS", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#02071a]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-heading text-primary mb-16 text-center"
        >
          My <span className="text-secondary">Arsenal</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="bg-white/5 border border-white/5 rounded-[24px] p-6 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, itemIdx) => (
                  <motion.span
                    key={itemIdx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.2 + itemIdx * 0.05 }}
                    className="px-4 py-2 bg-secondary/20 text-blue-200 text-sm font-medium rounded-[12px] border border-secondary/30"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Technologies() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const techs = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "✨" },
    { name: "Node.js", icon: "🚀" },
    { name: "PostgreSQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
  ]

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <section
      id="technologies"
      ref={ref}
      className="relative py-20 px-4 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Technologies & Tools
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              ref={ref}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
              }}
              className="glass p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-primary/10 transition-colors cursor-pointer group"
            >
              <div className="text-4xl glow group-hover:glow">{tech.icon}</div>
              <p className="text-center font-medium text-foreground/80">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function PhotoSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section
      id="photo"
      ref={ref}
      className="relative py-20 px-4 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="relative float"
        >
          <div className="glass p-2 rounded-3xl hover-glow transition-all">
            <img src="/professional-portrait.png" alt="Profile" className="w-full h-auto rounded-2xl" />
          </div>

          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.div>

        <motion.p
          className="text-center text-foreground/70 mt-8 leading-relaxed text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm a passionate full-stack developer dedicated to creating beautiful, functional web experiences. When I'm
          not coding, you can find me contributing to open-source projects or exploring the latest web technologies.
        </motion.p>
      </div>
    </section>
  )
}

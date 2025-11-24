"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">Full Stack Developer</h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-foreground/70 mb-4 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Creating beautiful, interactive experiences with modern web technologies
        </motion.p>

        <motion.p
          className="text-lg text-foreground/50 mb-12 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          React • Next.js • TypeScript • Framer Motion
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="glass px-8 py-3 rounded-full font-medium text-foreground hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View About Me
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="glass px-8 py-3 rounded-full font-medium text-foreground hover:bg-accent/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center"
        >
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </motion.div>
      </div>
    </section>
  )
}

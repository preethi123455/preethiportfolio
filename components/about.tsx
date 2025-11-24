"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-4 bg-gradient-to-br from-muted/30 via-transparent to-primary/5"
    >
      <div className="max-w-6xl mx-auto">
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
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl hover-glow">
            <h3 className="text-2xl font-bold mb-4 text-primary">Experience</h3>
            <p className="text-foreground/70 leading-relaxed">
              With 5+ years of full-stack development experience, I specialize in building scalable web applications
              using React, Next.js, and Node.js. I've worked with startups and enterprise clients alike.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl hover-glow">
            <h3 className="text-2xl font-bold mb-4 text-accent">Education</h3>
            <p className="text-foreground/70 leading-relaxed">
              Bachelor's degree in Computer Science. Continuous learner with certifications in web development, cloud
              architecture, and UI/UX design.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl hover-glow">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Interests</h3>
            <p className="text-foreground/70 leading-relaxed">
              Passionate about open-source projects, web performance optimization, and mentoring junior developers. In
              my spare time, I explore new frameworks and design patterns.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl hover-glow">
            <h3 className="text-2xl font-bold mb-4 text-primary">Strengths</h3>
            <p className="text-foreground/70 leading-relaxed">
              Frontend architecture, responsive design, performance optimization, team collaboration, and
              problem-solving. I excel at translating complex requirements into elegant solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

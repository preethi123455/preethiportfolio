"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Trophy, Award, Star } from "lucide-react"

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const achievements = [
    {
      icon: Trophy,
      title: "Best Web Application",
      description: "Winner of the 2023 Innovation Hackathon",
    },
    {
      icon: Award,
      title: "Open Source Contributor",
      description: "500+ GitHub contributions recognized",
    },
    {
      icon: Star,
      title: "Tech Speaker",
      description: "Keynote speaker at 5 major conferences",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  }

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-20 px-4 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                ref={ref}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl text-center hover-glow transition-all"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-foreground/60">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

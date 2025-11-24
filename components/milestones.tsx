"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Code, Star, GitBranch, Crown } from "lucide-react"

interface Milestone {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  accentColor: string
}

export default function Milestones() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const milestones: Milestone[] = [
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Began learning web development and fell in love with creating digital experiences.",
      icon: <Code size={20} />,
      color: "bg-slate-100",
      accentColor: "border-primary",
    },
    {
      year: "2021",
      title: "First Project Launched",
      description: "Built and deployed my first full-stack application with MERN stack.",
      icon: <GitBranch size={20} />,
      color: "bg-blue-50",
      accentColor: "border-blue-500",
    },
    {
      year: "2022",
      title: "Freelance Success",
      description: "Started freelancing and completed 20+ projects for various clients.",
      icon: <Briefcase size={20} />,
      color: "bg-purple-50",
      accentColor: "border-purple-500",
    },
    {
      year: "2023",
      title: "Open Source Contributions",
      description: "Contributed to major open source projects and built my own libraries.",
      icon: <Star size={20} />,
      color: "bg-amber-50",
      accentColor: "border-amber-500",
    },
    {
      year: "2024",
      title: "Senior Developer Role",
      description: "Advanced to senior developer position leading technical teams.",
      icon: <Crown size={20} />,
      color: "bg-emerald-50",
      accentColor: "border-emerald-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="relative py-24 px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            My <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-light">
            A journey through key milestones and professional achievements
          </p>
        </motion.div>

        <motion.div
          className="relative"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:transform md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-20">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={itemVariants}
                className={`relative pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"}`}
              >
                <motion.div
                  className={`absolute left-0 md:left-1/2 top-0 w-12 h-12 rounded-full bg-white border-3 ${milestone.accentColor} flex items-center justify-center text-foreground shadow-md md:transform md:-translate-x-1/2 md:-translate-y-1`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {milestone.icon}
                </motion.div>

                <motion.div
                  className={`ml-4 md:ml-0 p-8 rounded-lg border border-slate-200 bg-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md`}
                  whileHover={{
                    y: -4,
                    borderColor: "var(--primary)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-primary tracking-wide uppercase">{milestone.year}</span>
                    <div className="hidden md:block h-0.5 w-8 bg-primary rounded-full" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">{milestone.title}</h3>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

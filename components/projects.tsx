"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and Stripe integration.",
      image: "/ecommerce-dashboard.png",
      tags: ["Next.js", "React", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      image: "/task-management-interface.png",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive analytics dashboard with real-time data visualization and custom reports.",
      image: "/analytics-dashboard-visualization.png",
      tags: ["Next.js", "Chart.js", "TypeScript"],
      github: "#",
      live: "#",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              ref={ref}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl overflow-hidden hover-glow transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/60 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

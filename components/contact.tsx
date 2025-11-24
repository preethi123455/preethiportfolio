"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { type FormEvent, useState } from "react"

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  const socials = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-center text-foreground/60 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have a project in mind or want to collaborate? Let's talk!
        </motion.p>

        <motion.form
          ref={ref}
          onSubmit={handleSubmit}
          className="glass p-8 rounded-2xl space-y-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            required
          />

          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg hover:shadow-lg transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {submitted ? "✓ Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                className="glass p-4 rounded-full text-foreground hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

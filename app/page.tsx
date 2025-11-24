"use client"

import { useState, useEffect } from "react"

export const dynamic = 'force-dynamic'
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Technologies from "@/components/technologies"
import Projects from "@/components/projects"
import Milestones from "@/components/milestones"
import Achievements from "@/components/achievements"
import PhotoSection from "@/components/photo-section"
import Contact from "@/components/contact"
import AnimatedBackground from "@/components/animated-background"
import ProgressBar from "@/components/progress-bar"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      <ProgressBar progress={scrollProgress} />
      <Navigation />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Milestones />
      <Achievements />
      <PhotoSection />
      <Contact />
      <BackToTop />
    </main>
  )
}

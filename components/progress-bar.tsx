"use client"

import { motion } from "framer-motion"

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-50"
      style={{ width: `${progress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.3 }}
    />
  )
}

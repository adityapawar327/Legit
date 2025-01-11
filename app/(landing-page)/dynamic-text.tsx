'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const words = [
  "Digital Presence",
  "Professional Brand",
  "Online Identity",
  "Career Growth"
]

export const DynamicText = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-[90px] sm:h-[120px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute text-blue-600 font-bold bg-yellow-300 px-6 py-2 border-4 border-black"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}


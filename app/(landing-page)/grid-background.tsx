'use client'

import { motion } from "framer-motion"

export const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-30">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="relative h-full border-l-2 border-black">
            {Array.from({ length: 12 }).map((_, j) => (
              <div key={j} className="absolute w-full border-t-2 border-black" style={{ top: `${j * 8.33}%` }} />
            ))}
          </div>
        ))}
      </div>

      {/* Animated Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}


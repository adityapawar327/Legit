'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function EditingSuccess() {
  return (
    <div className="w-80 mx-auto p-6 bg-green-200 border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
        >
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Check className="text-white w-10 h-10" strokeWidth={3} />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-800 font-semibold text-center"
          style={{
            fontFamily: "'Courier New', monospace",
          }}
        >
          Editing Success!
        </motion.div>
      </div>
    </div>
  )
}


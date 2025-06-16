"use client"

import { motion } from "framer-motion"
import { Eye } from "lucide-react"

export function MissionSection() {
  return (
    <section className="min-h-screen bg-[#F5F5F7] pt-16 flex items-center">
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Mission Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 text-center min-h-[85vh] flex flex-col justify-center border border-gray-100"
        >
          {/* Vision Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <span className="text-xs sm:text-sm font-medium text-[#000099] px-4 sm:px-6 py-2 sm:py-3 border border-[#000099] rounded-full tracking-wider uppercase bg-white">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
              Vision
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-12 md:mb-16 leading-tight"
          >
            Delight our Users
          </motion.h1>

          {/* Mission Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light"
          >
            <p className="text-balance font-medium text-gray-700">
              We hope to make our Users relive their special moments instantly.
            </p>
            
            <p className="text-balance">
              A future where capturing and receiving event professional photos is so seamless, it feels like magic. A future where joy is just a tap away, every time.
            </p>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#000099] to-[#000077] rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
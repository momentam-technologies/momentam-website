"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutHeroSection() {
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
          {/* Logo Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#000099] to-[#000077] rounded-xl flex items-center justify-center shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Momentam Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain filter brightness-0 invert"
              />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs sm:text-sm font-medium text-[#000099] mb-6 md:mb-8 tracking-wider uppercase"
          >
            Why We're Doing This
          </motion.p>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-12 md:mb-16 leading-tight"
          >
            Because Moments Don't Wait.
          </motion.h1>

          {/* Mission Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light"
          >
            <p className="text-balance">
              We all know that feeling — the energy of a packed conference, the excitement of showcasing your brand at a buzzing exhibition, the pride of crossing the graduation stage, or the celebration of love and life at a wedding or party. These are the moments that matter in life and at our work.
            </p>
            
            <p className="text-balance">
              But too often, the photos that captured them get lost in the wait, and the feeling quickly fades.
            </p>
            
            <p className="text-balance font-medium text-gray-700">
              We're here to make sure that when you experience a moment worth capturing, the photos are already in your hands. Fast. Effortless. While the feeling is still fresh.
            </p>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#000099] to-[#000077] rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
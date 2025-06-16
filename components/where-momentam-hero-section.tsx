"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const eventTypes = [
  "✅ Conferences & Forums",
  "✅ University Graduations", 
  "✅ Exhibitions & Trade Shows",
  "✅ Weddings, Parties & Social Events",
  "✅ Marathons & Sports Events",
  "✅ School Events",
  "✅ Business Anniversaries & Grand Openings"
]

export function WhereMomentamHeroSection() {
  return (
    <section className="min-h-screen bg-[#F5F5F7] pt-16 flex items-center">
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Where to use Momentam Content Box */}
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

          {/* Subtitle with Location Emoji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6 md:mb-8"
          >
            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border border-[#000099] rounded-full">
              <span className="text-xl sm:text-2xl">📍</span>
              <span className="text-xs sm:text-sm font-medium text-[#000099] tracking-wider uppercase">Where to use Momentam</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-12 md:mb-16 leading-tight"
          >
            Perfect for Every Event.
          </motion.h1>

          {/* Event Types Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12 md:mb-16"
          >
            {eventTypes.map((eventType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-left"
              >
                <p className="text-base sm:text-lg font-medium text-gray-800">
                  {eventType}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex justify-center"
          >
            <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#000099] to-[#000077] rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
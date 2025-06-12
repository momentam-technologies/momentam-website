"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const benefits = [
  "✅ Instant Access to Photos",
  "✅ No Contact Exchange Needed", 
  "✅ Professional Quality Photos",
  "✅ Full Control on Photos you want",
  "✅ Time-Saving - One app, instant results",
  "✅ Perfect for Every Occasion"
]

export function WhyMomentamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen bg-[#E4E9FF] pt-16 flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#E4E9FF] to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#E4E9FF] to-transparent rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        {/* Why Momentam Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto rounded-2xl p-16 md:p-20 lg:p-24 text-center min-h-[85vh] flex flex-col justify-center"
        >
          {/* Logo Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#000099] to-[#000077] rounded-xl flex items-center justify-center shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Momentam Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain filter brightness-0 invert"
              />
            </div>
          </motion.div>

          {/* Subtitle with Heart Emoji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="flex items-center gap-3 px-6 py-3 border border-[#000099] rounded-full">
              <span className="text-2xl">❤️</span>
              <span className="text-sm font-medium text-[#000099] tracking-wider uppercase">Why Momentam</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 leading-tight"
          >
            Built for You.
          </motion.h1>

          {/* Benefits Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300 shadow-sm"
              >
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex justify-center"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#000099] to-[#000077] rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
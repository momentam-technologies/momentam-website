"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
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

export function WhereMomentamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section ref={ref} className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-[#E4E9FF] to-[#000099] rounded-full flex items-center justify-center">
                <span className="text-8xl">📍</span>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-[#000099] rounded-full"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Section Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            >
              Where to use Momentam
            </motion.h2>

            {/* Event Types List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              {eventTypes.map((eventType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <p className="text-lg font-medium text-gray-800">
                    {eventType}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
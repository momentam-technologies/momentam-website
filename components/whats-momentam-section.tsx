"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function WhatsMomentamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section ref={ref} className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-6 py-3 border border-[#000099] rounded-full bg-white"
            >
              <span className="text-2xl">📱</span>
              <span className="text-sm font-medium text-[#000099] tracking-wider uppercase">What's Momentam</span>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A mobile app designed for event attendees who want their high-quality event photos - without the wait, hassle, or need to exchange contact details with photographers.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Built for modern event attendees, Momentam combines speed, simplicity, and convenience — turning real-life experiences into professional photos you can keep, share, and cherish right away.
              </p>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-[#E4E9FF] to-[#000099] rounded-full flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Momentam App"
                  width={120}
                  height={120}
                  className="w-30 h-30 object-contain filter brightness-0 invert"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-[#000099] rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
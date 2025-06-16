"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MakeMoneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleGetStartedClick = () => {
    window.open('https://wa.me/message/3MBI2KT5I4DMI1', '_blank')
  }

  return (
    <section ref={ref} className="min-h-screen bg-white flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/photographer.png"
                alt="Professional photographer with camera equipment"
                fill
                className="object-cover"
              />
              {/* Overlay to simulate the photographer image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/40"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Make Money with Momentam</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Get booked instantly by event attendees. Momentam connects you with real-time opportunities at
              conferences, graduations, weddings. Get paid for doing what you love
            </p>

            <Button 
              onClick={handleGetStartedClick}
              className="bg-[#000099] hover:bg-[#000077] text-white px-8 py-3 rounded-full text-lg border-2 border-[#000099] hover:border-[#000077] transition-all"
            >
              Get started
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

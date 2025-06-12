"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const values = [
  {
    emoji: "👥",
    title: "Employees",
    description: "We are building a workplace where creativity, care, and passion are celebrated.",
    direction: "left"
  },
  {
    emoji: "📸",
    title: "Photographers", 
    description: "We empower our partner photographers with real, consistent work opportunities by connecting them directly to event attendees. Photographers grow their craft, earn, and do what they do best.",
    direction: "right"
  },
  {
    emoji: "❤️",
    title: "Community",
    description: "We're devoted to being a responsible company where we operate by actively engaging with local communities, support positive social initiatives, and aim to drive change that lasts.",
    direction: "left"
  },
  {
    emoji: "⚡",
    title: "Impact",
    description: "We believe in creating positive change that extends beyond our platform, making a meaningful difference in the communities we serve.",
    direction: "right"
  }
]

export function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section ref={ref} className="bg-[#E4E9FF] py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#E4E9FF] to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#E4E9FF] to-transparent rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Impact Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-24"
        >
          <div className="flex items-center gap-3 px-6 py-3 border border-[#000099] rounded-full">
            <span className="text-2xl">🌍</span>
            <span className="text-xl font-bold text-[#000099] tracking-wider uppercase">Impact</span>
          </div>
        </motion.div>

        {/* Values List */}
        <div className="space-y-24 lg:space-y-32">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: value.direction === 'left' ? -100 : 100 }}
              animate={isInView ? 
                { opacity: 1, x: 0 } : 
                { opacity: 0, x: value.direction === 'left' ? -100 : 100 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                value.direction === 'right' ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Icon and Title Side */}
              <div className={`flex items-center gap-6 ${
                value.direction === 'right' ? 'md:col-start-2 md:justify-end md:text-right' : 'md:justify-start'
              }`}>
                {/* Animated Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? 
                    { scale: 1, rotate: 0 } : 
                    { scale: 0, rotate: 180 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: "spring", bounce: 0.4 }}
                  className="w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-3xl flex items-center justify-center shadow-lg border border-gray-100"
                >
                  <span className="text-4xl">{value.emoji}</span>
                </motion.div>

                {/* Title */}
                <div className={value.direction === 'right' ? 'md:order-first' : ''}>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? 
                      { opacity: 1, y: 0 } : 
                      { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                  >
                    {value.title}
                  </motion.h3>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? 
                      { width: 48 } : 
                      { width: 0 }
                    }
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    className="h-1 bg-gradient-to-r from-[#000099] to-[#000077] rounded-full"
                  />
                </div>
              </div>

              {/* Description Side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? 
                  { opacity: 1, y: 0 } : 
                  { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                className={`${
                  value.direction === 'right' ? 'md:col-start-1 md:text-right' : ''
                }`}
              >
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
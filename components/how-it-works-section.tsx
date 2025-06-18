"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "1",
    title: "Sign up & Book a Photographer",
    description:
      "Download the Momentam app, sign up and book a photographer to capture your moments in the events including conference, graduation, exhibitions",
  },
  {
    number: "2",
    title: "Select a package and see prices",
    description: "Before confirming, select the number of photos you want and see the price for that package",
  },
  {
    number: "3",
    title: "Smile, let the photographer do the magic",
    description: "Confirm the package and you will get your photos ready to the app all while still at the event",
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentStep, setCurrentStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <section ref={ref} className="min-h-screen bg-[#E4E9FF] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How it Works</h2>
          <p className="text-lg text-gray-600">Discover how Momentam makes photo sharing effortless</p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {isMobile ? (
            // Mobile/Tablet: Single card with optimized transitions
            <div className="col-span-1 md:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ 
                    opacity: 0, 
                    x: 50
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -50
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut"
                  }}
                  className="bg-white rounded-3xl p-8 shadow-lg ring-4 ring-[#000099] shadow-2xl bg-gradient-to-br from-blue-50 to-white"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 p-2 ring-2 ring-[#000099] ring-offset-2 shadow-lg">
                    <Image
                      src="/images/logo.png"
                      alt="Momentam Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Step Number */}
                  <div className="text-6xl font-bold mb-6 text-[#000099]">
                    {steps[currentStep].number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-[#000099]">
                    {steps[currentStep].title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {steps[currentStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            // Desktop: All cards visible
            steps.map((step, index) => {
              const isHighlighted = hoveredStep === index
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -10,
                    transition: { duration: 0.1, ease: "easeOut" }
                  }}
                  className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-0 cursor-pointer transform hover:shadow-2xl ${
                    isHighlighted ? "ring-4 ring-[#000099] shadow-2xl bg-gradient-to-br from-blue-50 to-white" : ""
                  } hover:ring-4 hover:ring-[#000099] hover:bg-gradient-to-br hover:from-blue-50 hover:to-white`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setHoveredStep(index)}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 p-2 transition-all duration-150 ${
                      isHighlighted ? "ring-2 ring-[#000099] ring-offset-2 shadow-lg" : ""
                    }`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Momentam Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  {/* Step Number */}
                  <motion.div 
                    className={`text-6xl font-bold mb-6 transition-colors duration-150 ${
                      isHighlighted ? "text-[#000099]" : "text-gray-900"
                    }`}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 }
                    }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className={`text-xl font-bold mb-4 transition-colors duration-150 ${
                      isHighlighted ? "text-[#000099]" : "text-gray-900"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.1 }
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })
          )}
        </div>

        {/* Navigation Arrows and Step indicator dots for mobile/tablet */}
        <div className="md:hidden">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mb-6 mt-8">
            <button
              onClick={prevStep}
              className="w-12 h-12 rounded-full border-2 border-[#000099] bg-white flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-colors duration-200 shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextStep}
              className="w-12 h-12 rounded-full bg-[#000099] text-white flex items-center justify-center hover:bg-[#000077] transition-colors duration-200 shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <span className="text-sm text-gray-600 ml-2">
              {currentStep + 1} of {steps.length}
            </span>
          </div>

          {/* Step indicator dots */}
          <div className="flex justify-center gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentStep ? "bg-[#000099]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

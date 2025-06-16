"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Download, Camera, Smartphone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { handleSmartDownload } from "@/lib/download-utils"
import { DownloadModal } from "./download-modal"

export function GetAppSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showModal, setShowModal] = useState(false)

  const handleDownloadClick = () => {
    const shouldShowModal = handleSmartDownload()
    if (shouldShowModal) {
      setShowModal(true)
    }
  }

  const handlePhotographerAppClick = () => {
    const message = "Hi! I'm interested in the Momentam Photographer App. Please send me the download link when it's available."
    const whatsappUrl = `https://wa.me/message/3MBI2KT5I4DMI1?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section ref={ref} className="bg-[#F5F5F7] py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#F0F0F7] to-transparent rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#F0F0F7] to-transparent rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get the App
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Download Momentam and start capturing your event memories in seconds
          </p>
        </motion.div>

        {/* App Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Momentam App */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group h-full"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 h-full flex flex-col">
              {/* App Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#000099] to-[#000077] rounded-2xl flex items-center justify-center shadow-lg">
                  <Image
                    src="/images/logo.png"
                    alt="Momentam Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* App Info */}
              <div className="text-center mb-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Momentam App</h3>
                <p className="text-gray-600 mb-6 leading-relaxed min-h-[3rem]">
                  For event attendees. Book photographers and get your photos in seconds.
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-8">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <Smartphone className="w-4 h-4 text-[#000099]" />
                    <span>Photo delivery in seconds</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <Download className="w-4 h-4 text-[#000099]" />
                    <span>No contact exchange needed</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="mt-auto">
                <Button 
                  onClick={handleDownloadClick}
                  className="w-full bg-[#000099] hover:bg-[#000077] text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 group-hover:shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Photographer App */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group h-full"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 h-full flex flex-col">
              {/* App Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                  <Image
                    src="/images/momentam icon studio.png"
                    alt="Momentam Studio Logo"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain rounded-2xl"
                  />
                </div>
              </div>

              {/* App Info */}
              <div className="text-center mb-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Photographer App</h3>
                <p className="text-gray-600 mb-6 leading-relaxed min-h-[3rem]">
                  For photographers. Manage bookings and deliver photos seamlessly.
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-8">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <Camera className="w-4 h-4 text-[#000099]" />
                    <span>Professional tools</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <Smartphone className="w-4 h-4 text-[#000099]" />
                    <span>Easy booking management</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="mt-auto">
                <Button 
                  onClick={handlePhotographerAppClick}
                  className="w-full bg-[#000099] hover:bg-[#000077] text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 group-hover:shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <DownloadModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </section>
  )
}

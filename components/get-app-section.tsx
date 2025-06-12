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
            Download Momentam and start capturing your event memories instantly
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
                  For event attendees. Book photographers and get your photos instantly.
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-8">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <Smartphone className="w-4 h-4 text-[#000099]" />
                    <span>Instant photo delivery</span>
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
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <Camera className="w-10 h-10 text-white" />
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
                    <Camera className="w-4 h-4 text-gray-700" />
                    <span>Professional tools</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <Smartphone className="w-4 h-4 text-gray-700" />
                    <span>Easy booking management</span>
                  </div>
                </div>
              </div>

              {/* Coming Soon Badge */}
              <div className="mt-auto">
                <div className="w-full bg-gray-100 text-gray-500 py-4 rounded-2xl text-lg font-semibold text-center">
                  Coming Soon
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Available on iOS and Android
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>iOS</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5665 0-.9726-.4061-.9726-.9726s.4061-.9726.9726-.9726.9726.4061.9726.9726-.4061.9726-.9726.9726zm-11.046 0c-.5665 0-.9726-.4061-.9726-.9726s.4061-.9726.9726-.9726.9726.4061.9726.9726-.4061.9726-.9726.9726zm11.405-6.7222c-.3672-.8007-.9726-1.4061-1.7733-1.7733l.8007-1.4061c.1017-.1628.0407-.3672-.1221-.4689-.1628-.1017-.3672-.0407-.4689.1221l-.8007 1.4061c-.6104-.2444-1.2818-.3672-1.9532-.3672s-1.3428.1228-1.9532.3672l-.8007-1.4061c-.1017-.1628-.3061-.2238-.4689-.1221-.1628.1017-.2238.3061-.1221.4689l.8007 1.4061c-.8007.3672-1.4061.9726-1.7733 1.7733H17.882zm-3.0579 2.0346h-5.6497c-.2444 0-.4689.2037-.4689.4689v8.1877c0 1.0132.8211 1.8343 1.8343 1.8343h2.9358c1.0132 0 1.8343-.8211 1.8343-1.8343V11.0227c0-.2652-.2037-.4689-.4689-.4689z"/>
              </svg>
              <span>Android</span>
            </div>
          </div>
        </motion.div>
      </div>

      <DownloadModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </section>
  )
}

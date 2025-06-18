"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Smartphone, ArrowRight } from "lucide-react"
import Image from "next/image"
import { detectDevice, generateSmartQRCodeUrl } from "@/lib/download-utils"

export function DownloadPageClient() {
  const [device, setDevice] = useState<string>('desktop')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Detect device and immediately redirect mobile users
    const detectedDevice = detectDevice()
    setDevice(detectedDevice)
    
    // Immediate redirect for mobile devices
    if (detectedDevice === 'android' || detectedDevice === 'ios') {
      // For mobile devices, redirect to app stores
      if (detectedDevice === 'ios') {
        window.location.href = 'https://apps.apple.com/app/momentam'
      } else {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.momentam'
      }
      return
    }
    
    // Only show page for desktop users
    setIsLoading(false)
  }, [])

  // Desktop-only message since mobile users are redirected immediately
  const getDesktopMessage = () => {
    return {
      title: "Download Momentam",
      subtitle: "Scan the QR code with your phone to download",
      icon: <Smartphone className="w-8 h-8 text-[#000099]" />
    }
  }

  const desktopMessage = getDesktopMessage()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#000099] to-[#000077] rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Image
              src="/images/logo.png"
              alt="Momentam Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain filter brightness-0 invert"
            />
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#F0F0F7] to-transparent rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#F0F0F7] to-transparent rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full"
        >
          {/* Main Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#000099] to-[#000077] rounded-2xl flex items-center justify-center shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Momentam Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain filter brightness-0 invert"
                />
              </div>
            </motion.div>

            {/* Desktop message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex justify-center mb-4">
                {desktopMessage.icon}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {desktopMessage.title}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {desktopMessage.subtitle}
              </p>
            </motion.div>

            {/* Single Smart QR Code - matches download-modal.tsx */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-6 sm:mb-8"
            >
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-4 inline-block">
                <Image
                  src={generateSmartQRCodeUrl(180)}
                  alt="Download Momentam App QR Code"
                  width={180}
                  height={180}
                  className="w-full h-auto max-w-[160px] sm:max-w-[180px]"
                />
              </div>
            </motion.div>
          </div>

          {/* Back to website link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mt-8"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#000099] transition-colors text-sm"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Momentam website
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 
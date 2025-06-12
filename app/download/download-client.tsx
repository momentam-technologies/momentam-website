"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Download, Smartphone, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { handleSmartDownload, detectDevice } from "@/lib/download-utils"
import { DownloadModal } from "@/components/download-modal"

export function DownloadPageClient() {
  const [showModal, setShowModal] = useState(false)
  const [device, setDevice] = useState<string>('desktop')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Detect device and immediately redirect mobile users
    const detectedDevice = detectDevice()
    setDevice(detectedDevice)
    
    // Immediate redirect for mobile devices
    if (detectedDevice === 'android' || detectedDevice === 'ios') {
      handleSmartDownload()
      return
    }
    
    // Only show page for desktop users
    setIsLoading(false)
  }, [])

  const handleDownloadClick = () => {
    const shouldShowModal = handleSmartDownload()
    if (shouldShowModal) {
      setShowModal(true)
    }
  }

  // Desktop-only message since mobile users are redirected immediately
  const getDesktopMessage = () => {
    return {
      title: "Download Momentam",
      subtitle: "Scan the QR code with your phone to download the app",
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

            {/* App Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">What is Momentam?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Book photographers at events and get your photos instantly on your phone. 
                  No contact exchange needed - just scan, book, and receive!
                </p>
              </div>
            </motion.div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                onClick={handleDownloadClick}
                className="w-full bg-[#000099] hover:bg-[#000077] text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Show QR Codes
              </Button>
            </motion.div>

            {/* QR Code instruction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-6"
            >
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Smartphone className="w-4 h-4" />
                <span>Click the button above to view QR codes</span>
              </div>
            </motion.div>

            {/* Manual redirect option */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-6 pt-6 border-t border-gray-100"
            >
              <p className="text-xs text-gray-500 mb-3">
                Available on iOS and Android
              </p>
              <div className="flex justify-center items-center gap-4">
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>iOS</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5665 0-.9726-.4061-.9726-.9726s.4061-.9726.9726-.9726.9726.4061.9726.9726-.4061.9726-.9726.9726zm-11.046 0c-.5665 0-.9726-.4061-.9726-.9726s.4061-.9726.9726-.9726.9726.4061.9726.9726-.4061.9726-.9726.9726zm11.405-6.7222c-.3672-.8007-.9726-1.4061-1.7733-1.7733l.8007-1.4061c.1017-.1628.0407-.3672-.1221-.4689-.1628-.1017-.3672-.0407-.4689.1221l-.8007 1.4061c-.6104-.2444-1.2818-.3672-1.9532-.3672s-1.3428.1228-1.9532.3672l-.8007-1.4061c-.1017-.1628-.3061-.2238-.4689-.1221-.1628.1017-.2238.3061-.1221.4689l.8007 1.4061c-.8007.3672-1.4061.9726-1.7733 1.7733H17.882zm-3.0579 2.0346h-5.6497c-.2444 0-.4689.2037-.4689.4689v8.1877c0 1.0132.8211 1.8343 1.8343 1.8343h2.9358c1.0132 0 1.8343-.8211 1.8343-1.8343V11.0227c0-.2652-.2037-.4689-.4689-.4689z"/>
                  </svg>
                  <span>Android</span>
                </div>
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

      <DownloadModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  )
} 
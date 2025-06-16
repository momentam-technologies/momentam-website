"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Smartphone } from "lucide-react"
import Image from "next/image"
import { generateSmartQRCodeUrl } from "@/lib/download-utils"
import { useEffect } from "react"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-6 sm:p-8 max-w-xs sm:max-w-md w-full mx-4 relative my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#000099] to-[#000077] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Image
                src="/images/logo.png"
                alt="Momentam Logo"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter brightness-0 invert"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Download Momentam</h2>
            <p className="text-sm sm:text-base text-gray-600">Scan the QR code with your phone to download</p>
          </div>

          {/* Single Smart QR Code */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-4 inline-block">
              <Image
                src={generateSmartQRCodeUrl(180)}
                alt="Download Momentam App QR Code"
                width={180}
                height={180}
                className="w-full h-auto max-w-[160px] sm:max-w-[180px]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 
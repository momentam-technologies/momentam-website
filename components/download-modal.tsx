"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Smartphone } from "lucide-react"
import Image from "next/image"
import { APP_LINKS, generateQRCodeUrl } from "@/lib/download-utils"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative"
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
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#000099] to-[#000077] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Image
                src="/images/logo.png"
                alt="Momentam Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain filter brightness-0 invert"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Download Momentam</h2>
            <p className="text-gray-600">Scan the QR code with your phone to download</p>
          </div>

          {/* QR Codes */}
          <div className="grid grid-cols-2 gap-6">
            {/* Android */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-xl p-4 mb-3">
                <Image
                  src={generateQRCodeUrl(APP_LINKS.android, 150)}
                  alt="Android QR Code"
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5665 0-.9726-.4061-.9726-.9726s.4061-.9726.9726-.9726.9726.4061.9726.9726-.4061.9726-.9726.9726zm-11.046 0c-.5665 0-.9726-.4061-.9726-.9726s.4061-.9726.9726-.9726.9726.4061.9726.9726-.4061.9726-.9726.9726zm11.405-6.7222c-.3672-.8007-.9726-1.4061-1.7733-1.7733l.8007-1.4061c.1017-.1628.0407-.3672-.1221-.4689-.1628-.1017-.3672-.0407-.4689.1221l-.8007 1.4061c-.6104-.2444-1.2818-.3672-1.9532-.3672s-1.3428.1228-1.9532.3672l-.8007-1.4061c-.1017-.1628-.3061-.2238-.4689-.1221-.1628.1017-.2238.3061-.1221.4689l.8007 1.4061c-.8007.3672-1.4061.9726-1.7733 1.7733H17.882zm-3.0579 2.0346h-5.6497c-.2444 0-.4689.2037-.4689.4689v8.1877c0 1.0132.8211 1.8343 1.8343 1.8343h2.9358c1.0132 0 1.8343-.8211 1.8343-1.8343V11.0227c0-.2652-.2037-.4689-.4689-.4689z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">Android</span>
              </div>
              <p className="text-xs text-gray-500">Google Play Store</p>
            </div>

            {/* iOS */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-xl p-4 mb-3">
                <Image
                  src={generateQRCodeUrl(APP_LINKS.ios, 150)}
                  alt="iOS QR Code"
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">iOS</span>
              </div>
              <p className="text-xs text-gray-500">App Store</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-[#000099] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">How to scan:</p>
                <p className="text-xs text-gray-600">
                  Open your phone's camera app and point it at the QR code. Tap the notification that appears to download the app.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 
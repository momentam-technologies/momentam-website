"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { handleSmartDownload } from "@/lib/download-utils"
import { DownloadModal } from "./download-modal"

export function HeroSection() {
  const [showModal, setShowModal] = useState(false)

  const handleDownloadClick = () => {
    const shouldShowModal = handleSmartDownload()
    if (shouldShowModal) {
      setShowModal(true)
    }
  }

  return (
    <section className="bg-[#F5F5F7] pt-32 pb-0">
      {/* Hero Content */}
      <div className="px-6 md:px-12 pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Don't Wait For Your Event Photos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Attending an event? Download the Momentam app, book a photographer, and get your photos in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              onClick={handleDownloadClick}
              className="bg-[#000099] hover:bg-[#000077] text-white px-8 py-3 rounded-full text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
            <Link href="/learn-more" className="flex items-center text-gray-700 hover:text-[#000099] transition-colors text-lg underline decoration-[#000099] underline-offset-4 decoration-2">
              Learn more
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Phone Mockups - At bottom of section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative max-w-6xl mx-auto px-6 md:px-12"
      >
        <div className="flex justify-center items-end">
          <Image
            src="/images/hero-phones.png"
            alt="Momentam App Screenshots"
            width={800}
            height={600}
            className="w-full h-auto max-w-4xl"
            priority
          />
        </div>
      </motion.div>
      
      <DownloadModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { handleSmartDownload } from "@/lib/download-utils"
import { DownloadModal } from "./download-modal"

export function Header() {
  const [showModal, setShowModal] = useState(false)

  const handleDownloadClick = () => {
    const shouldShowModal = handleSmartDownload()
    if (shouldShowModal) {
      setShowModal(true)
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-company-name.png"
            alt="Momentam"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            href="/about" 
            className="text-[#000099] hover:text-[#000077] transition-colors font-medium"
          >
            About Us
          </Link>
          <Button 
            onClick={handleDownloadClick}
            className="bg-[#000099] hover:bg-[#000077] text-white px-6 py-2 rounded-full"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </nav>
      
      <DownloadModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </motion.header>
  )
}

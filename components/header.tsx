"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { handleSmartDownload } from "@/lib/download-utils"
import { DownloadModal } from "./download-modal"

export function Header() {
  const [showModal, setShowModal] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleDownloadClick = () => {
    const shouldShowModal = handleSmartDownload()
    if (shouldShowModal) {
      setShowModal(true)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
      >
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo-company-name.png"
              alt="Momentam"
              width={150}
              height={40}
              className="h-7 md:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/about" 
              className="text-[#000099] hover:text-[#000077] transition-colors font-medium text-sm lg:text-base"
            >
              About Us
            </Link>
            <Button 
              onClick={handleDownloadClick}
              className="bg-[#000099] hover:bg-[#000077] text-white px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-4">
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className="block text-[#000099] hover:text-[#000077] transition-colors font-medium py-2 text-base"
            >
              About Us
            </Link>
            <Button 
              onClick={() => {
                handleDownloadClick()
                closeMobileMenu()
              }}
              className="w-full bg-[#000099] hover:bg-[#000077] text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </motion.div>
      </motion.header>
      
      <DownloadModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  )
}

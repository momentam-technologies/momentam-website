"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/3MBI2KT5I4DMI1', '_blank')
  }

  return (
    <section ref={ref} className="bg-[#E4E9FF] py-20">
      <div className="w-full px-6 md:px-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/images/logo-company-name.png"
              alt="Momentam"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Column */}
              <div className="space-y-4 text-left">
                <Link href="/about" className="block text-[#000099] hover:text-[#000077] transition-colors">
                  About Us
                </Link>
                <button onClick={handleWhatsAppClick} className="block text-[#000099] hover:text-[#000077] transition-colors text-left">
                  Join our Photographer Community
                </button>
                <button onClick={handleWhatsAppClick} className="block text-[#000099] hover:text-[#000077] transition-colors text-left">
                  Career
                </button>
                <a href="https://sites.google.com/view/momentam/home" target="_blank" rel="noopener noreferrer" className="block text-[#000099] hover:text-[#000077] transition-colors">
                  Privacy Policy
                </a>
              </div>

              {/* Right Column */}
              <div className="space-y-2 text-right md:justify-self-end md:text-right text-left">
                <h4 className="font-bold text-gray-900 mb-4">Momentam Limited</h4>
                <p className="text-gray-600">info@momentam.io</p>
                <p className="text-gray-600">+255 761 920 220</p>
                <p className="text-gray-600">Unit 84, Block 52, Plot 172</p>
                <p className="text-gray-600">Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="https://www.facebook.com/momentamapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/momentam_app?igsh=ZGs2djZ2cG01bWlp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/momentamapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/message/3MBI2KT5I4DMI1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@momentamapp?_t=ZM-8xAUMNofcLI&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center border-t border-gray-200 pt-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">Copyright Momentam Limited. 2024- 2025 All Rights Reserved</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">English</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

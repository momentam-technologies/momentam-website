"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "0px" })

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/3MBI2KT5I4DMI1', '_blank')
  }

  return (
    <section ref={ref} className="bg-[#E4E9FF] py-20">
      <div className="w-full px-6 md:px-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/images/logo-company-name.png"
              alt="Momentam"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
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
              <div className="space-y-2 text-left md:text-right md:justify-self-end">
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-12"
        >
          <div className="max-w-6xl mx-auto">
            {/* Top white line */}
            <div className="w-full h-px bg-white mb-8"></div>
            
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://www.facebook.com/share/14NX1pzkq4e/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/momentam_app?igsh=ZGs2djZ2cG01bWlp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/message/3MBI2KT5I4DMI1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/momentam/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@momentamapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@momentamapp?_t=ZM-8xAUMNofcLI&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-[#000099] rounded-full flex items-center justify-center text-[#000099] hover:bg-[#000099] hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            
            {/* Bottom white line */}
            <div className="w-full h-px bg-white"></div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="text-center border-t border-gray-200 pt-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p className="text-sm text-gray-500">Copyright Momentam Limited. 2024- 2025 All Rights Reserved</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

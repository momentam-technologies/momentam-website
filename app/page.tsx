"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { GetAppSection } from "@/components/get-app-section"
import { HeroSection } from "@/components/hero-section"
import { MakeMoneySection } from "@/components/make-money-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  useEffect(() => {
    try {
      // iOS-safe smooth scrolling with better browser detection
      if (typeof window !== 'undefined') {
        // Check if CSS.supports is available and smooth scrolling is supported
        if ('CSS' in window && CSS.supports && CSS.supports('scroll-behavior', 'smooth')) {
      document.documentElement.style.scrollBehavior = "smooth"
    }

        // iOS-specific fixes with safer user agent detection
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        
        if (isIOS) {
          // Prevent iOS viewport height issues
          const setViewportHeight = () => {
            const vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
          }
          
          setViewportHeight()
          window.addEventListener('resize', setViewportHeight)
          window.addEventListener('orientationchange', setViewportHeight)
          
          // Fix iOS input zoom with more precise viewport handling
    const viewport = document.querySelector('meta[name="viewport"]')
          if (viewport) {
            viewport.setAttribute(
              'content', 
              'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
            )
          }
          
          return () => {
            window.removeEventListener('resize', setViewportHeight)
            window.removeEventListener('orientationchange', setViewportHeight)
          }
        }
      }
    } catch (error) {
      // Silently handle any errors to prevent iOS crashes
      console.warn('iOS compatibility setup failed:', error)
    }

    return () => {
      try {
      if (typeof window !== 'undefined' && document.documentElement.style.scrollBehavior) {
        document.documentElement.style.scrollBehavior = "auto"
        }
      } catch (error) {
        console.warn('Cleanup failed:', error)
      }
    }
  }, [])

  return (
    <main className="overflow-x-hidden min-h-screen min-h-[100vh] min-h-[calc(var(--vh,1vh)*100)]">
      <Header />
      <HeroSection />
      <MakeMoneySection />
      <HowItWorksSection />
      <GetAppSection />
      <FooterSection />
    </main>
  )
}

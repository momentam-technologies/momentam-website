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
    // iOS-safe smooth scrolling
    if (typeof window !== 'undefined' && 'CSS' in window && CSS.supports('scroll-behavior', 'smooth')) {
      document.documentElement.style.scrollBehavior = "smooth"
    }

    // Prevent iOS zoom on input focus
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport && /iPhone|iPad|iPod/.test(navigator.userAgent)) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no')
    }

    return () => {
      if (typeof window !== 'undefined' && document.documentElement.style.scrollBehavior) {
        document.documentElement.style.scrollBehavior = "auto"
      }
    }
  }, [])

  return (
    <main className="overflow-x-hidden min-h-screen">
      <Header />
      <HeroSection />
      <MakeMoneySection />
      <HowItWorksSection />
      <GetAppSection />
      <FooterSection />
    </main>
  )
}

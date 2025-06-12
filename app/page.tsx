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
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <MakeMoneySection />
      <HowItWorksSection />
      <GetAppSection />
      <FooterSection />
    </main>
  )
}

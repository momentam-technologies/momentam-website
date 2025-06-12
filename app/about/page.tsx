import { Header } from "@/components/header"
import { AboutHeroSection } from "@/components/about-hero-section"
import { MissionSection } from "@/components/mission-section"
import { ValuesSection } from "@/components/values-section"
import { GetAppSection } from "@/components/get-app-section"
import { FooterSection } from "@/components/footer-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHeroSection />
      <MissionSection />
      <ValuesSection />
      <GetAppSection />
      <FooterSection />
    </main>
  )
} 
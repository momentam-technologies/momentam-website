import { Header } from "@/components/header"
import { AboutHeroSection } from "@/components/about-hero-section"
import { MissionSection } from "@/components/mission-section"
import { ValuesSection } from "@/components/values-section"
import { GetAppSection } from "@/components/get-app-section"
import { FooterSection } from "@/components/footer-section"

export default function AboutPage() {
  return (
    <>
      {/* Fixed Header - stays at top */}
      <Header />
      
      {/* Scrollable Main Content - scrolls behind header */}
      <main className="min-h-screen">
        <AboutHeroSection />
        <MissionSection />
        <ValuesSection />
        <GetAppSection />
        <FooterSection />
      </main>
    </>
  )
} 
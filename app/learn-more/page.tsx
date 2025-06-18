import { Header } from "@/components/header"
import { LearnMoreHeroSection } from "@/components/learn-more-hero-section"
import { WhereMomentamHeroSection } from "@/components/where-momentam-hero-section"
import { WhyMomentamSection } from "@/components/why-momentam-section"
import { GetAppSection } from "@/components/get-app-section"
import { FooterSection } from "@/components/footer-section"

export default function LearnMorePage() {
  return (
    <>
      {/* Fixed Header - stays at top */}
      <Header />
      
      {/* Scrollable Main Content - scrolls behind header */}
      <main className="min-h-screen">
        <LearnMoreHeroSection />
        <WhereMomentamHeroSection />
        <WhyMomentamSection />
        <GetAppSection />
        <FooterSection />
      </main>
    </>
  )
} 
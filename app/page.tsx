import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import WorkShowcase from "@/components/work-showcase"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <BackgroundGradient />
      <FloatingElements />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkShowcase />
      <PortfolioSection />
      <TestimonialsSection />
      <SocialSection />
      <Footer />
    </main>
  )
}

import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"

// Lazy-load below-the-fold components to reduce initial JS bundle
const FlavorCarousel = dynamic(
  () => import("@/components/flavor-carousel").then(mod => ({ default: mod.FlavorCarousel })),
  { ssr: true }
)
const ActivationsSection = dynamic(
  () => import("@/components/activations-section").then(mod => ({ default: mod.ActivationsSection })),
  { ssr: true }
)
const Footer = dynamic(
  () => import("@/components/footer").then(mod => ({ default: mod.Footer })),
  { ssr: true }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FlavorCarousel />

      <ActivationsSection />
      <Footer />
    </main>
  )
}

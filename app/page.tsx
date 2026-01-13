"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Gallery from "@/components/gallery"
import ConsultationCTA from "@/components/consultation-cta"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {isLoaded && (
        <>
          <Hero />
          <Services />
          <WhyChooseUs />
          <Gallery />
          <ConsultationCTA />
          <Testimonials />
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </main>
  )
}

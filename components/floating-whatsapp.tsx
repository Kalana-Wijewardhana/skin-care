"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://wa.me/94766034211?text=Hi%20Skin%20care%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center gap-3">
        {isHovered && (
          <div className="bg-background text-foreground px-4 py-3 rounded-full shadow-lg whitespace-nowrap text-sm font-medium animate-fade-in-left">
            How can we help you?
          </div>
        )}
        <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-glow">
          <MessageCircle className="w-7 h-7" />
        </div>
      </div>
    </a>
  )
}

export default FloatingWhatsApp

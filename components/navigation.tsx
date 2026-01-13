"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Updated brand name to "Skin care" */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-foreground">Skin care</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Reviews
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slide-up">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="#home"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center font-medium hover:shadow-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

"use client"

import Link from "next/link"
import { Facebook, Twitter, MessageCircle, MapPin, Phone, Mail, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">L</span>
              </div>
              <span className="font-bold text-lg">Lavish</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Premium skincare and wellness treatments for timeless beauty and confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-background/70 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/70 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-background/70 hover:text-background transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-background/70">212/6A, Puttalam Road, Kurunegala</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-background/70">077 6 600 300</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-background/70">info@lavish.lk</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://web.facebook.com/lavishskinwellness/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/20 hover:bg-primary text-background hover:text-primary-foreground rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/20 hover:bg-secondary text-background hover:text-secondary-foreground rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/94776600300"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-background/20 hover:bg-green-500 text-background hover:text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-background/10 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-background/70 mb-6">Get exclusive tips and special offers delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background text-foreground rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-background/70">
          <p>&copy; 2025 Lavish Skin Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

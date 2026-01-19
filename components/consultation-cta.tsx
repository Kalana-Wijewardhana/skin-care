"use client"

import { useInView } from "react-intersection-observer"
import { Play } from "lucide-react"
import { useState } from "react"

const ConsultationCTA = () => {
  const [showVideo, setShowVideo] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div ref={ref} className={`${inView ? "animate-slide-up" : ""}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {!showVideo ? (
                <div className="relative">
                  <img
                    src="/luxurious-spa-facial-treatment-professional-skinca.jpg"
                    alt="Consultation with Dr. Harshani Gunarathna"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
                  >
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <Play className="w-10 h-10 text-primary-foreground fill-primary-foreground ml-1" />
                    </div>
                  </button>
                </div>
              ) : (
                <iframe
                  className="w-full aspect-video"
                  src="/intro.mp4"
                  title="Dr. Harshani Gunarathna - Consultation Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Content Section */}
          <div>
            <span className="text-primary font-semibold text-sm">CONSULTATION</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
              Meet Our Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Dr. Harshani Gunarathna
              </span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Dr. Harshani Gunarathna
Your certified aesthetic doctor for personalized unisex skincare.
MBBS, SLMC Reg. No. 36755 | Fellowship in Aesthetic Medicine, (IISAMED India) Dr.
              Harshani Gunarathna brings world-class expertise to every treatment.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Personalized Assessment</p>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive skin analysis to create your perfect treatment plan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Expert Guidance</p>
                  <p className="text-muted-foreground text-sm">
                    Professional recommendations based on years of dermatological experience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Optimal Results</p>
                  <p className="text-muted-foreground text-sm">
                    Proven treatments and protocols to achieve your beauty goals
                  </p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto">
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationCTA


"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown, Play, RefreshCw } from "lucide-react"

const Hero = () => {
  const [offset, setOffset] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleVideoEnd = () => {
    setVideoEnded(true)
  }

  const replayVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setVideoEnded(false)
    }
  }

  const closeVideo = () => {
    setShowVideo(false)
    setVideoEnded(false)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background" />

      {/* Subtle radial gradient accent */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--primary), transparent)",
          filter: "blur(60px)",
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
              Premium Skincare Solutions
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Timeless{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">Beauty</span> Starts
            Here
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of luxury and medical expertise. Expert treatments for acne, anti-aging, and
            skin rejuvenation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg">
              Book Consultation
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 text-lg">
              Explore Services
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 relative">
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden shadow-2xl animate-float">
              {!showVideo ? (
                <div className="relative w-full h-full">
                  <img
                    src="/luxurious-spa-facial-treatment-professional-skinca.jpg"
                    alt="Premium skincare treatment in luxury clinic"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
                  >
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                    </div>
                  </button>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/intro.mp4"
                    title="Skin care - Skincare Treatment Video"
                    autoPlay
                    controls={!videoEnded}
                    playsInline
                    onEnded={handleVideoEnd}
                    onError={() => {
                      console.error("Video failed to load")
                      setShowVideo(false)
                    }}
                  />
                  
                  {videoEnded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 gap-4 backdrop-blur-sm">
                      <button
                        onClick={replayVideo}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        <RefreshCw className="w-5 h-5" />
                        Replay Video
                      </button>
                      <button
                        onClick={closeVideo}
                        className="px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm hover:scale-105 transition-transform"
                      >
                        Back to Thumbnail
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero
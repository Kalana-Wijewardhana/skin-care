"use client"

import { useInView } from "react-intersection-observer"
import { useState } from "react"

const galleryItems = [
  {
    before: "/before-after-wrinkles-before.jpg",
    after: "/before-after-wrinkles-before.jpg",
    title: "Acne Treatment",
    description: "Clear, blemish-free skin in 6 weeks",
  },
  {
    before: "/male-before-after-elevens-botox-treatment1.jpg",
    after: "/male-before-after-elevens-botox-treatment1.jpg",
    title: "Anti-Aging Treatment",
    description: "Reduced wrinkles and improved texture",
  },
  {
    before: "/before-after-wrinkles-before.jpg",
    after: "/before-after-wrinkles-before.jpg",
    title: "Pigmentation Removal",
    description: "Even skin tone and radiant complexion",
  },
  {
    before: "/male-before-after-elevens-botox-treatment1.jpg",
    after: "/male-before-after-elevens-botox-treatment1.jpg",
    title: "Skin Brightening",
    description: "Luminous glow and improved radiance",
  },
]

interface GalleryCardProps {
  before: string;
  after: string;
  title: string;
  description: string;
  index: number;
}

const GalleryCard = ({ before, after, title, description, index }: GalleryCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className="group cursor-pointer"
      style={{
        animation: inView ? `slideUp 0.6s ease-out ${index * 0.1}s forwards` : "none",
        opacity: inView ? 1 : 0,
      }}
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square relative">
          <img
            src={isHovered ? after : before}
            alt={isHovered ? `After ${title}` : `Before ${title}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                isHovered ? "bg-accent text-accent-foreground" : "bg-primary/20 text-primary"
              }`}
            >
              {isHovered ? "AFTER" : "BEFORE"}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? "animate-slide-up" : ""}`}>
          <span className="text-primary font-semibold text-sm">TRANSFORMATIONS</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">
            Real Results,{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
              Real Transformations
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hover over images to see our stunning before and after results. Your transformation starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

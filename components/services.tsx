"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Sparkles, Zap, Droplets, Wind, Scissors, Heart, Shield, Gift } from "lucide-react"

const services = [
  {
    id: "acne-pigmentation",
    icon: Sparkles,
    title: "Acne & Pigmentation",
    description: "Clear, radiant skin with gentle care to fade blemishes and reduce dark spots.",
    image: "/acne-treatment-clear-skin-dermatology.jpg",
  },
  {
    id: "botox-fillers",
    icon: Heart,
    title: "Botox & Fillers",
    description: "Enhance and rejuvenate with natural-looking results that restore youthful contours.",
    image: "/botox-anti-wrinkle-injectable-treatment.jpg",
  },
  {
    id: "hair-treatments",
    icon: Scissors,
    title: "Hair Treatments",
    description: "Nourish, strengthen, and restore for healthier, fuller, and more vibrant hair.",
    image: "/hair-treatment-scalp-care-professional.jpg",
  },
  {
    id: "laser-hair-removal",
    icon: Zap,
    title: "Laser Hair Removal",
    description: "Advanced technology for silky-smooth skin that lasts. Safe for all skin types.",
    image: "/laser-hair-removal-smooth-skin.jpg",
  },
  {
    id: "fat-reduction",
    icon: Wind,
    title: "Fat Reduction",
    description: "Non-invasive body contouring to sculpt, define, and enhance natural contours.",
    image: "/body-sculpting-contouring-treatment.jpg",
  },
  {
    id: "anti-aging",
    icon: Droplets,
    title: "Anti-Aging",
    description: "Reduce wrinkles, boost collagen, and enhance your natural glow with advanced treatments.",
    image: "/anti-aging-collagen-skin-rejuvenation.jpg",
  },
  {
    id: "scar-treatment",
    icon: Shield,
    title: "Scar Treatment",
    description: "Fade scars and smooth stretch marks to restore skin texture and confidence.",
    image: "/scar-treatment-skin-texture-resurfacing.jpg",
  },
  {
    id: "bridal-packages",
    icon: Gift,
    title: "Bridal Packages",
    description: "Glow with confidence on your special day with customized beauty enhancements.",
    image: "/bridal-beauty-package-glow-wedding.jpg",
  },
]

interface ServiceCardProps {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard = ({ id, icon: Icon, title, description, image, index }: ServiceCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className="group"
      style={{
        animation: inView ? `slideUp 0.6s ease-out ${index * 0.1}s forwards` : "none",
        opacity: inView ? 1 : 0,
      }}
    >
      <Link href={`/services/${id}`}>
        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer">
          <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
          <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            Learn More →
          </div>
        </div>
      </Link>
    </div>
  )
}

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? "animate-slide-up" : ""}`}>
          {/* <span className="text-primary font-semibold text-sm">WHAT WE OFFER</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
            Smile with the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              reflection of the glow
            </span>
          </h2> */}
          <span className="text-primary font-semibold text-sm">WHAT WE OFFER</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
            Smile with the{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
              reflection of the glow
            </span>
          </h2>
         
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive skincare and wellness treatments tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

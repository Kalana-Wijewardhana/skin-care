"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { CheckCircle2, Award, Users, Zap } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle2,
    title: "Safe Treatments",
    description: "Latest technology and proven methodologies for optimal safety.",
    image: "/safe-modern-clinic-equipment.png",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Led by Dr. Nathalie Herath with international certifications.",
    image: "/professional-dermatologist-expert-consultation.png",
  },
  {
    id: "advanced-equipment",
    icon: Zap,
    title: "Advanced Equipment",
    description: "State-of-the-art facilities and cutting-edge treatment technology.",
    image: "/advanced-skincare-laser-equipment.jpg",
    link: "/features/advanced-equipment",
  },
  {
    id: "personalized-care",
    icon: Users,
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your specific needs.",
    image: "/personalized-skincare-consultation-care.png",
    link: "/features/personalized-care",
  },
]

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? "animate-slide-up" : ""}`}>
          <span className="text-primary font-semibold text-sm">WHY CHOOSE US</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-3">
            Because it feels great in a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">glowing skin</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((reason, index) => {
            const isClickable = reason.link
            const CardContent = (
              <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={reason.image || "/placeholder.svg"}
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors w-fit">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{reason.description}</p>
                  {isClickable && (
                    <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-2">Learn More →</div>
                  )}
                </div>
              </div>
            )

            return (
              <div
                key={index}
                className="group cursor-pointer"
                style={{
                  animation: inView ? `slideUp 0.6s ease-out ${index * 0.1}s forwards` : "none",
                  opacity: inView ? 1 : 0,
                }}
              >
                {isClickable ? <Link href={reason.link}>{CardContent}</Link> : CardContent}
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 text-center border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Skin?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Schedule your consultation with our experts today and discover the difference professional care can make.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

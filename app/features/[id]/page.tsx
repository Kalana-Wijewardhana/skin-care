"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Zap } from "lucide-react"

const featureDetails = {
  "advanced-equipment": {
    title: "Advanced Equipment & Technology",
    subtitle: "State-of-the-Art Innovation",
    description:
      "We invest in the latest medical-grade equipment and technology to ensure you receive cutting-edge treatments with the best possible results.",
    image: "/advanced-skincare-laser-equipment.jpg",
    equipment: [
      {
        name: "Laser Technology",
        description:
          "Advanced lasers for hair removal, scar treatment, and skin rejuvenation with precision and minimal discomfort.",
      },
      {
        name: "Radiofrequency Systems",
        description: "RF technology for skin tightening, collagen stimulation, and non-invasive fat reduction.",
      },
      {
        name: "Microneedling Devices",
        description: "Professional-grade microneedling for collagen induction therapy and skin texture improvement.",
      },
      {
        name: "Ultrasound Technology",
        description: "Focused ultrasound for fat reduction and skin lifting without surgery.",
      },
      {
        name: "Chemical Peel Systems",
        description: "Medical-grade peels for acne treatment, pigmentation reduction, and skin renewal.",
      },
      {
        name: "LED Light Therapy",
        description: "Therapeutic light wavelengths for healing, anti-aging, and collagen production.",
      },
    ],
    benefits: [
      "FDA-approved and clinically tested equipment",
      "Minimal side effects and downtime",
      "Faster and more effective results",
      "Greater precision and safety",
      "Regular equipment maintenance and updates",
      "Doctor-operated for maximum effectiveness",
    ],
  },
  "personalized-care": {
    title: "Personalized Treatment Plans",
    subtitle: "Care Tailored to You",
    description:
      "Every skin is unique. Our specialists create customized treatment plans based on your specific needs, skin type, and goals.",
    image: "/personalized-skincare-consultation-care.jpg",
    process: [
      {
        step: "Comprehensive Consultation",
        description: "In-depth discussion of your concerns, goals, and medical history.",
      },
      {
        step: "Skin Analysis",
        description: "Advanced skin diagnostic tools to assess your skin condition thoroughly.",
      },
      {
        step: "Treatment Planning",
        description: "Dr. Herath creates a personalized roadmap tailored to your needs.",
      },
      {
        step: "Progressive Monitoring",
        description: "Regular follow-ups and adjustments to optimize your results.",
      },
      {
        step: "Maintenance Program",
        description: "Long-term care plan to maintain and enhance your results.",
      },
    ],
    benefits: [
      "Expert dermatological consultation",
      "Customized treatment protocols",
      "Flexible scheduling and options",
      "Regular progress monitoring",
      "Adjustments based on your feedback",
      "Combination treatments for better results",
      "Long-term support and guidance",
      "Preventive care strategies",
    ],
  },
}

export default function FeatureDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const feature = featureDetails[id as keyof typeof featureDetails]

  if (!feature) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Feature not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img src={feature.image || "/placeholder.svg"} alt={feature.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <span className="text-accent font-semibold text-sm mb-2 block">Our Commitment</span>
            <h1 className="text-5xl font-bold mb-2">{feature.title}</h1>
            <p className="text-xl text-gray-200">{feature.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-foreground">About This Feature</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{feature.description}</p>

            {id === "advanced-equipment" ? (
              <>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Our Equipment</h3>
                <div className="space-y-6">
                  {feature.equipment?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all"
                    >
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.name}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-8 text-foreground">Our Process</h3>
                <div className="space-y-6">
                  {feature.process?.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{item.step}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-card rounded-2xl border border-border p-8 sticky top-28">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Key Benefits</h3>
              </div>

              <div className="space-y-4 mb-8">
                {feature.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <button className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </button>

              <p className="text-sm text-muted-foreground text-center mt-4">Discuss how this can benefit you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Users } from "lucide-react"

const serviceDetails = {
  "acne-pigmentation": {
    title: "Acne & Pigmentation Treatment",
    subtitle: "Clear, Radiant Skin Awaits",
    description: "Advanced treatments to eliminate acne and fade pigmentation for a flawless complexion.",
    image: "/acne-treatment-clear-skin-dermatology.jpg",
    benefits: [
      "Targets active acne and reduces inflammation",
      "Fades acne scars and post-inflammatory hyperpigmentation",
      "Evens out skin tone and improves texture",
      "Prevents future breakouts with advanced technology",
      "Suitable for all skin types",
      "Results visible within 3-6 weeks",
    ],
    procedure:
      "Our specialists use cutting-edge laser and chemical peel technologies combined with personalized skincare routines to address acne at its root cause.",
    duration: "4-6 weeks (multiple sessions)",
    price: "Starts from LKR 5,000 per session",
  },
  "botox-fillers": {
    title: "Botox & Fillers",
    subtitle: "Restore Youthful Contours",
    description: "Natural-looking enhancements to reduce wrinkles and restore volume.",
    image: "/botox-anti-wrinkle-injectable-treatment.jpg",
    benefits: [
      "Smooths dynamic wrinkles and expression lines",
      "Restores lost volume for a youthful appearance",
      "Non-surgical with minimal downtime",
      "Results appear within 3-7 days",
      "Long-lasting effects (3-4 months)",
      "Customizable for natural-looking results",
    ],
    procedure:
      "Expert injectors place precise amounts of premium products to enhance your natural features without looking overdone.",
    duration: "Results visible in 3-7 days, full effect in 2 weeks",
    price: "Starts from LKR 15,000",
  },
  "hair-treatments": {
    title: "Hair Treatments & Restoration",
    subtitle: "Healthy, Vibrant Hair",
    description: "Comprehensive solutions for hair health, growth, and restoration.",
    image: "/hair-treatment-scalp-care-professional.jpg",
    benefits: [
      "Promotes healthy hair growth",
      "Strengthens hair follicles",
      "Reduces hair fall and breakage",
      "Restores natural shine and luster",
      "Addresses scalp conditions",
      "Long-lasting results",
    ],
    procedure: "Combination of advanced treatments including PRP therapy, laser therapy, and specialized scalp care.",
    duration: "3-4 months for visible results",
    price: "Starts from LKR 8,000 per session",
  },
  "laser-hair-removal": {
    title: "Laser Hair Removal",
    subtitle: "Smooth Skin That Lasts",
    description: "Advanced laser technology for permanent hair reduction on all body areas.",
    image: "/laser-hair-removal-smooth-skin.jpg",
    benefits: [
      "Permanent reduction of 80-90% of hair",
      "Safe for all skin types and body areas",
      "Fast treatment sessions",
      "No ingrown hairs or irritation",
      "Results visible after 3-4 sessions",
      "Smooth skin for years",
    ],
    procedure: "State-of-the-art laser technology precisely targets hair follicles while protecting surrounding skin.",
    duration: "6-8 sessions (4-6 weeks apart)",
    price: "Starts from LKR 5,000 per session",
  },
  "fat-reduction": {
    title: "Fat Reduction & Body Contouring",
    subtitle: "Sculpt Your Silhouette",
    description: "Non-invasive body sculpting to reduce fat and define natural contours.",
    image: "/body-sculpting-contouring-treatment.jpg",
    benefits: [
      "Reduces localized fat deposits",
      "Non-invasive with no surgery",
      "No downtime required",
      "Tightens and tones the skin",
      "Natural-looking results",
      "Permanent fat cell reduction",
    ],
    procedure:
      "Advanced radiofrequency and cooling technology safely reduces fat cells without harming surrounding tissue.",
    duration: "4-6 sessions for optimal results",
    price: "Starts from LKR 10,000 per session",
  },
  "anti-aging": {
    title: "Anti-Aging Treatments",
    subtitle: "Turn Back Time",
    description: "Comprehensive anti-aging solutions to reduce wrinkles and restore youthful glow.",
    image: "/anti-aging-collagen-skin-rejuvenation.jpg",
    benefits: [
      "Boosts collagen production",
      "Reduces fine lines and wrinkles",
      "Improves skin elasticity and firmness",
      "Enhances natural glow",
      "Provides long-lasting results",
      "Prevents future aging signs",
    ],
    procedure: "Multi-faceted approach combining lasers, injectables, and specialized skincare.",
    duration: "Results improve over 3-6 months",
    price: "Starts from LKR 8,000 per session",
  },
  "scar-treatment": {
    title: "Scar & Stretch Mark Treatment",
    subtitle: "Fade Your Scars",
    description: "Advanced treatments to minimize the appearance of scars and stretch marks.",
    image: "/scar-treatment-skin-texture-resurfacing.jpg",
    benefits: [
      "Significantly reduces scar appearance",
      "Smooths stretch marks",
      "Improves skin texture",
      "Promotes collagen remodeling",
      "Suitable for old and new scars",
      "Natural skin tone restoration",
    ],
    procedure: "Combination of laser resurfacing, microneedling, and specialized treatments tailored to scar type.",
    duration: "6-12 sessions for optimal results",
    price: "Starts from LKR 6,000 per session",
  },
  "bridal-packages": {
    title: "Bridal Beauty Packages",
    subtitle: "Glow on Your Special Day",
    description: "Customized pre-wedding packages to ensure you look radiant on your wedding day.",
    image: "/bridal-beauty-package-glow-wedding.jpg",
    benefits: [
      "Customized treatment plan",
      "Skin brightening and clarification",
      "Hair treatments and restoration",
      "Body treatments included",
      "Stress-free preparation",
      "Guaranteed confidence on your big day",
    ],
    procedure:
      "Comprehensive plan starting 3 months before your wedding with personalized facial, hair, and body treatments.",
    duration: "3 months pre-wedding program",
    price: "Customized packages from LKR 50,000",
  },
}

export default function ServiceDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const service = serviceDetails[id as keyof typeof serviceDetails]

  if (!service) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
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
        <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <span className="text-accent font-semibold text-sm mb-2 block">Our Service</span>
            <h1 className="text-5xl font-bold mb-2">{service.title}</h1>
            <p className="text-xl text-gray-200">{service.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-foreground">About This Treatment</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{service.description}</p>

            <h3 className="text-2xl font-bold mb-6 text-foreground">How It Works</h3>
            <p className="text-muted-foreground mb-12 text-lg">{service.procedure}</p>

            <h3 className="text-2xl font-bold mb-8 text-foreground">Key Benefits</h3>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-card rounded-2xl border border-border p-8 sticky top-28">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Treatment Details</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Duration</span>
                  </div>
                  <p className="text-muted-foreground ml-8">{service.duration}</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Price Range</span>
                  </div>
                  <p className="text-muted-foreground ml-8">{service.price}</p>
                </div>
              </div>

              <button className="w-full mt-8 px-6 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book Consultation
              </button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Contact us to discuss your specific needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

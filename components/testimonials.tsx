"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Treatment: Anti-Aging",
    image: "SJ",
    rating: 5,
    text: "The transformation is incredible! My fine lines have significantly reduced and my skin texture is so much smoother. Dr. Herath's expertise is unmatched. I feel 10 years younger!",
    bgImage: "/happy-woman-glowing-skin-satisfied.jpg",
  },
  {
    name: "Priya Patel",
    role: "Treatment: Acne & Pigmentation",
    image: "PP",
    rating: 5,
    text: "Outstanding service! I struggled with acne scars for years. After just 3 sessions, they've faded dramatically. The team is professional, caring, and truly listens to your concerns.",
    bgImage: "/woman-beautiful-skin-treatment-results.jpg",
  },
  {
    name: "Emma Davis",
    role: "Treatment: Botox & Fillers",
    image: "ED",
    rating: 5,
    text: "Best decision ever! The results are so natural and beautiful. Everyone keeps asking me what I did differently. I highly recommend Lavish Skin Wellness to anyone considering treatments.",
    bgImage: "/skincare-results-before-after-beautiful.jpg",
  },
  {
    name: "Olivia Martinez",
    role: "Treatment: Laser Hair Removal",
    image: "OM",
    rating: 5,
    text: "Professional, welcoming, and results-driven. I've had 4 sessions and I'm already seeing amazing improvements. My skin is smoother than ever and I'm so confident now!",
    bgImage: "/radiant-face-skin-glow-confidence.jpg",
  },
  {
    name: "Jessica Chen",
    role: "Treatment: Hair Restoration",
    image: "JC",
    rating: 5,
    text: "I was skeptical at first, but the hair treatment has been life-changing! My hair is thicker, shinier, and so much healthier. The personalized care plan they created for me was perfect.",
    bgImage: "/happy-woman-glowing-skin-satisfied.jpg",
  },
  {
    name: "Michelle Torres",
    role: "Treatment: Bridal Package",
    image: "MT",
    rating: 5,
    text: "I felt absolutely stunning on my wedding day! Their bridal package prepared my skin perfectly. Every detail was thought through, and I looked radiant in all my photos.",
    bgImage: "/woman-beautiful-skin-treatment-results.jpg",
  },
  {
    name: "Rachel Williams",
    role: "Treatment: Fat Reduction",
    image: "RW",
    rating: 5,
    text: "The non-invasive body contouring results exceeded my expectations. I've lost inches in areas I was self-conscious about. Highly professional and results-oriented team!",
    bgImage: "/skincare-results-before-after-beautiful.jpg",
  },
  {
    name: "Lisa Anderson",
    role: "Treatment: Scar Treatment",
    image: "LA",
    rating: 5,
    text: "After my accident, I was devastated about the scarring. Dr. Herath's scar treatment has made such a difference. My confidence is back and I'm so grateful!",
    bgImage: "/radiant-face-skin-glow-confidence.jpg",
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToSlide = (index) => {
    setCurrent(index)
    setAutoplay(false)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? "animate-slide-up" : ""}`}>
          <span className="text-primary font-semibold text-sm">TESTIMONIALS</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-3">
            What our clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">say about us</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="relative h-96 sm:h-full overflow-hidden rounded-3xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full rounded-3xl overflow-hidden">
                  <div className="hidden md:block relative">
                    <img
                      src={testimonial.bgImage || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
                  </div>

                  <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 h-full flex flex-col justify-between hover:shadow-xl transition-shadow">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-lg text-foreground italic mb-6 flex-grow">"{testimonial.text}"</p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold text-sm">{testimonial.image}</span>
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="p-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-primary" : "w-2 bg-muted"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

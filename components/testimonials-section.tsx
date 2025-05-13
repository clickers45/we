"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      id: 1,
      content:
        "45Clickers transformed our raw footage into a stunning promotional video that perfectly captured our brand's essence. Their attention to detail and creative vision exceeded our expectations.",
      author: "J*** S.",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      content:
        "Working with 45Clickers has been a game-changer for my YouTube channel. Their editing style is dynamic, engaging, and has helped me increase my audience retention significantly.",
      author: "A*** T.",
      role: "Content Creator",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      content:
        "The team at 45Clickers delivered our wedding highlights video with such emotion and artistry. They captured moments we didn't even know happened and created a cinematic masterpiece.",
      author: "M*** & L***",
      role: "Newlyweds",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 8000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(nextSlide, 8000)
    }
  }

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear what our clients have to say about our video editing services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-purple-500/20">
            <Quote className="h-20 w-20" />
          </div>

          <div className="absolute -bottom-10 -right-10 text-blue-500/20 transform rotate-180">
            <Quote className="h-20 w-20" />
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

            <div className="relative">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-gray-300 italic mb-8">"{testimonials[currentIndex].content}"</p>

                <div className="flex items-center justify-center">
                  <div className="mr-4">
                    <img
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-white">{testimonials[currentIndex].author}</h4>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                prevSlide()
                resetInterval()
              }}
              className="border-gray-700 hover:bg-gray-800 text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    resetInterval()
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                nextSlide()
                resetInterval()
              }}
              className="border-gray-700 hover:bg-gray-800 text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

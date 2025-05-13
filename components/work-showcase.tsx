"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: "all", label: "All" },
    { id: "reel", label: "Reel" },
    { id: "cinematic", label: "Cinematic" },
    { id: "youtube", label: "YouTube Edit" },
    { id: "ad", label: "Ad Edit" },
  ]

  const videos = [
    {
      id: 1,
      title: "Mountain Adventure",
      category: "cinematic",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Product Review",
      category: "youtube",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Dance Choreography",
      category: "reel",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Brand Commercial",
      category: "ad",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Travel Vlog",
      category: "youtube",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Fashion Showcase",
      category: "cinematic",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Cooking Tutorial",
      category: "youtube",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Fitness Routine",
      category: "reel",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filteredVideos = activeCategory === "all" ? videos : videos.filter((video) => video.category === activeCategory)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -current.clientWidth : current.clientWidth
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work Speaks{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Louder</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Browse through our collection of edited videos across different categories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 border-transparent"
                    : "border-gray-700 hover:border-gray-600 text-gray-300"
                }
              `}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-gray-700 hover:bg-black/70 md:-left-5"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory"
          >
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="min-w-[300px] md:min-w-[400px] snap-start"
              >
                <div className="relative group rounded-xl overflow-hidden border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

                  <div className="aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-black/60 p-3 rounded-full">
                      <Play className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-gray-700 hover:bg-black/70 md:-right-5"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

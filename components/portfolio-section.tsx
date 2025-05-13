"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "cinematic", label: "Cinematic" },
    { id: "youtube", label: "YouTube" },
    { id: "reels", label: "Reels" },
    { id: "corporate", label: "Corporate" },
  ]

  const projects = [
    {
      id: 1,
      title: "Cinematic Travel Film",
      category: "cinematic",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Tech Review Video",
      category: "youtube",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Product Showcase",
      category: "corporate",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Dance Choreography",
      category: "reels",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Cooking Tutorial",
      category: "youtube",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Wedding Highlights",
      category: "cinematic",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Corporate Event",
      category: "corporate",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Fashion Reel",
      category: "reels",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "Music Video",
      category: "cinematic",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portfolio{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our diverse collection of video projects across different categories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 border-transparent"
                    : "border-gray-700 hover:border-gray-600 text-gray-300"
                }
              `}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="bg-black/60 p-3 rounded-full">
                        <Play className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300 capitalize">{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6"
            size="lg"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

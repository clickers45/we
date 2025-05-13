"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Play } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return

      const { left, top, width, height } = videoRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      videoRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
    }

    const handleMouseLeave = () => {
      if (!videoRef.current) return
      videoRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"
    }

    const element = videoRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
            <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let's Take Editing to the{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Next Level
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-xl md:text-2xl text-gray-300 mb-8">
              With{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Powerful Visuals</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-500/30 -z-10"></span>
              </span>{" "}
              and{" "}
              <span className="relative inline-block">
                <span className="relative z-10">AI Precision</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/30 -z-10"></span>
              </span>
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 py-6"
                size="lg"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800 font-medium px-6 py-6"
                size="lg"
              >
                Download Portfolio
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative transition-transform duration-300 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-10"></div>

              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-20">
                    BEFORE
                  </span>
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Before editing"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <span className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-2 py-1 rounded z-20">
                    AFTER
                  </span>
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="After editing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

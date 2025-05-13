"use client"

import { motion } from "framer-motion"
import { Youtube, Instagram, Film, Video } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Youtube className="h-10 w-10" />,
      title: "YouTube Video Editing",
      description:
        "Professional editing for YouTube content creators with engaging intros, smooth transitions, and optimized pacing.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Instagram className="h-10 w-10" />,
      title: "Reels & Short-Form Content",
      description:
        "Eye-catching short-form videos optimized for vertical viewing with trending effects and seamless loops.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Social Media Management",
      description: "Consistent video content creation and optimization for all your social media platforms.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Film className="h-10 w-10" />,
      title: "Cinematic Travel & Vlog Editing",
      description: "Stunning cinematic color grading, visual effects, and storytelling for premium video content.",
      gradient: "from-teal-500 to-green-500",
    },
  ]

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
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of video editing services to meet all your creative needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              <div className="relative h-full p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 group-hover:translate-y-[-5px] overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="mb-4 text-white">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                  <div
                    className={`absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-r ${service.gradient} rotate-45 translate-x-1/2 translate-y-1/2 opacity-50`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

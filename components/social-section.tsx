"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Youtube, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialSection() {
  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      handle: "@45clickers",
      color: "from-pink-500 to-purple-500",
      url: "#",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      handle: "45Clickers",
      color: "from-blue-500 to-cyan-500",
      url: "#",
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      name: "YouTube",
      handle: "45Clickers",
      color: "from-red-500 to-pink-500",
      url: "#",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      name: "WhatsApp",
      handle: "Channel",
      color: "from-green-500 to-teal-500",
      url: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">📲 Stay Connected with </span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              45Clickers
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow us on social media for updates, behind-the-scenes content, and more
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              variants={item}
              whileHover={{ y: -5, scale: 1.03 }}
              className="block"
            >
              <div className="relative p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${social.color}`}></div>

                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${social.color} mr-4`}>{social.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold">{social.name}</h3>
                    <p className="text-gray-400">{social.handle}</p>
                  </div>
                </div>

                <div className="absolute -bottom-1 -right-1 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-8 py-6 text-lg"
            size="lg"
          >
            Let's Collaborate
            <MessageSquare className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

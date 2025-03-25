"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Khushi Arora"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-primary/50 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Social Media Strategist</h3>

            <p className="text-muted-foreground mb-4">
              Pursuing an MSc in Digital Marketing from Newcastle University, I have gained practical experience across
              4+ roles in Social Media Marketing, Content Ideation, Campaign Management and Community Building.
            </p>

            <p className="text-muted-foreground mb-4">
              I've had the opportunity to work on a diverse range of projects, including website content, social media
              posts, blogs, ads, scripts etc. Throughout these projects, I've collaborated with different departments,
              managing multiple content initiatives simultaneously.
            </p>

            <p className="text-muted-foreground mb-6">
              I excel at crafting engaging brand stories that enhance brand visibility and resonate with audiences
              across various platforms. My experience has refined my ability to create high-impact content that grabs
              attention and delivers results.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-pink-500/20 text-pink-700 dark:text-pink-300 hover:bg-pink-500/30">
                Social Media Marketing
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-300 hover:bg-purple-500/30">
                Content Creation
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-500/30">
                Campaign Management
              </Badge>
              <Badge className="bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/30">
                Community Building
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://www.linkedin.com/in/khushiarora1/" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


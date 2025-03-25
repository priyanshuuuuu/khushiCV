"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Fashion Brand",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Khushi transformed our social media presence completely. Her strategic approach and creative content ideas helped us connect with our audience in ways we never thought possible. Our engagement has increased by 200% since working with her.",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "Tech Startup",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Working with Khushi was a game-changer for our brand. She understood our vision immediately and translated it into a social media strategy that resonated with our target audience. Her attention to detail and data-driven approach delivered exceptional results.",
  },
  {
    name: "Priya Patel",
    role: "CEO",
    company: "Lifestyle Blog",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Khushi's content creation skills are unmatched. She has a unique ability to capture the essence of our brand and create content that truly engages our community. Her work has been instrumental in growing our online presence.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">What my clients say about working with me.</p>
        </motion.div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <Card className="bg-gradient-to-r from-pink-500/5 to-purple-500/5 border-none shadow-md">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-4 border-background">
                      <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                      <AvatarFallback>
                        {testimonials[current].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1.5">
                      <Quote className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl italic mb-6 relative">
                    <span className="text-primary text-4xl absolute -top-4 -left-2 opacity-20">"</span>
                    {testimonials[current].content}
                    <span className="text-primary text-4xl absolute -bottom-10 -right-2 opacity-20">"</span>
                  </blockquote>

                  <div>
                    <div className="font-semibold">{testimonials[current].name}</div>
                    <div className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                      <span>{testimonials[current].role}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
                      <span>{testimonials[current].company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-4" : "bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={next} className="rounded-full" aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


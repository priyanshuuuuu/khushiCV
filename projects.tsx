"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, X } from "lucide-react"
import Image from "next/image"

const categories = [
  { value: "all", label: "All" },
  { value: "social", label: "Social Media" },
  { value: "content", label: "Content Creation" },
  { value: "campaign", label: "Campaigns" },
  { value: "community", label: "Community" },
]

const projects = [
  {
    title: "Fashion Brand Social Media Revamp",
    category: "social",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Instagram", "Facebook", "Content Strategy"],
    description:
      "Complete overhaul of social media presence for a fashion brand, resulting in 200% increase in engagement and 150% growth in followers over 6 months.",
  },
  {
    title: "Lifestyle Blog Content Creation",
    category: "content",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Blog Writing", "SEO", "Visual Content"],
    description:
      "Created a content strategy and produced weekly blog posts and social media content for a lifestyle brand, focusing on wellness, fashion, and travel topics.",
  },
  {
    title: "Product Launch Campaign",
    category: "campaign",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Campaign Strategy", "Content Creation", "Analytics"],
    description:
      "Developed and executed a multi-platform social media campaign for a product launch, achieving 300% ROI and exceeding sales targets by 25%.",
  },
  {
    title: "Community Building for Tech Startup",
    category: "community",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Community Management", "Engagement", "Growth"],
    description:
      "Built an engaged online community for a tech startup, implementing strategies that increased active members by 180% and improved retention rates.",
  },
  {
    title: "Influencer Marketing Campaign",
    category: "campaign",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Influencer Collaboration", "Campaign Management", "ROI Tracking"],
    description:
      "Managed an influencer marketing campaign across Instagram and TikTok, coordinating with 15+ influencers and achieving 250% return on marketing spend.",
  },
  {
    title: "Social Media Audit & Strategy",
    category: "social",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Audit", "Strategy Development", "Competitive Analysis"],
    description:
      "Conducted a comprehensive social media audit for a retail brand and developed a 12-month strategy to improve performance across all platforms.",
  },
]

export default function Projects() {
  const [category, setCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category)

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of my recent work across various industries and platforms.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setCategory}>
          <TabsList className="mx-auto flex justify-center">
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                layout
              >
                <Card
                  className="overflow-hidden cursor-pointer group h-full"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/20 text-white border-none">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject?.title}</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-md">
              <Image
                src={selectedProject?.image || "/placeholder.svg"}
                alt={selectedProject?.title || "Project"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 my-4">
              {selectedProject?.tags.map((tag, i) => (
                <Badge key={i}>{tag}</Badge>
              ))}
            </div>
            <p className="text-muted-foreground">{selectedProject?.description}</p>
            <div className="flex justify-end mt-4">
              <Button className="gap-2">
                View Project
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import {
  Instagram,
  Facebook,
  Twitter,
  PenTool,
  BarChart,
  Users,
  TrendingUp,
  Search,
  Mail,
  Globe,
  FileText,
  Briefcase,
  Layers,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    category: "Digital Marketing",
    items: [
      { name: "Google Ads", icon: <Search className="h-4 w-4" />, value: 90 },
      { name: "Meta Business Suite", icon: <Facebook className="h-4 w-4" />, value: 95 },
      { name: "SEO & Website Management", icon: <Globe className="h-4 w-4" />, value: 85 },
      { name: "Google Analytics", icon: <BarChart className="h-4 w-4" />, value: 85 },
      { name: "SEMrush", icon: <Search className="h-4 w-4" />, value: 80 },
    ],
  },
  {
    category: "Social Media & Content",
    items: [
      { name: "Content Creation", icon: <PenTool className="h-4 w-4" />, value: 95 },
      { name: "Social Media Management", icon: <Instagram className="h-4 w-4" />, value: 95 },
      { name: "Hootsuite", icon: <Twitter className="h-4 w-4" />, value: 90 },
      { name: "Asana", icon: <Layers className="h-4 w-4" />, value: 85 },
      { name: "Campaign Management", icon: <TrendingUp className="h-4 w-4" />, value: 90 },
      { name: "Community Building", icon: <Users className="h-4 w-4" />, value: 90 },
    ],
  },
  {
    category: "Design & Tools",
    items: [
      { name: "Canva", icon: <PenTool className="h-4 w-4" />, value: 95 },
      { name: "Figma", icon: <PenTool className="h-4 w-4" />, value: 85 },
      { name: "Adobe Creative Suite", icon: <PenTool className="h-4 w-4" />, value: 80 },
      { name: "CapCut", icon: <PenTool className="h-4 w-4" />, value: 90 },
      { name: "Microsoft Office", icon: <FileText className="h-4 w-4" />, value: 95 },
    ],
  },
  {
    category: "CRM & Email Marketing",
    items: [
      { name: "Hubspot", icon: <Users className="h-4 w-4" />, value: 85 },
      { name: "Mailchimp", icon: <Mail className="h-4 w-4" />, value: 90 },
      { name: "Cross-functional Collaboration", icon: <Briefcase className="h-4 w-4" />, value: 90 },
      { name: "Social Media Analytics", icon: <BarChart className="h-4 w-4" />, value: 95 },
      { name: "KPI Tracking", icon: <TrendingUp className="h-4 w-4" />, value: 90 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I've developed expertise across various digital marketing tools and platforms, allowing me to create
            comprehensive strategies that deliver results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
                  <div className="space-y-6">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            {skill.icon}
                            <span>{skill.name}</span>
                          </div>
                          <span className="text-sm font-medium">{skill.value}%</span>
                        </div>
                        <Progress
                          value={skill.value}
                          className="h-2"
                          indicatorClassName={
                            skill.value >= 90
                              ? "bg-gradient-to-r from-pink-500 to-purple-500"
                              : skill.value >= 80
                                ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                                : "bg-gradient-to-r from-blue-500 to-indigo-500"
                          }
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">English</div>
                    <div className="text-sm text-muted-foreground">Fluent</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Hindi</div>
                    <div className="text-sm text-muted-foreground">Native</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          <Card className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border-pink-500/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold text-pink-500">2+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold text-purple-500">12+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border-indigo-500/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold text-indigo-500">5+</h3>
              <p className="text-muted-foreground">Roles</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-500">4+</h3>
              <p className="text-muted-foreground">Platforms Mastered</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}


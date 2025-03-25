"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Social Media Marketing Assistant",
    company: "Newcastle University",
    location: "Newcastle upon Tyne, UK",
    period: "February 2025 - Present",
    description: "Managing and developing brand-consistent social media content across multiple platforms.",
    responsibilities: [
      "Managed and developed brand-consistent social media content across 2+ social media platforms, increasing audience engagement by 40% through strategic use of interactive posts, videos, and stories.",
      "Implemented analytics-based content optimization strategies showcasing student work, events, and research, leading to a 35% rise in reach and a 50% boost in post interactions.",
      "Conducted data-driven analysis of KPIs to refine content strategy, resulting in a 25% increase in followers and stronger audience engagement for the School of Arts and Cultures.",
      "Collaborated with internal stakeholders to ensure aligned messaging and achievement of marketing objectives.",
    ],
  },
  {
    title: "Social Media Campaign Associate",
    company: "Lorrigo Logistics & Services",
    location: "New Delhi, India",
    period: "March 2024 - May 2024",
    description: "Designed and executed multi-platform social media campaigns in collaboration with external agencies.",
    responsibilities: [
      "Designed and executed multi-platform social media campaigns in collaboration with external agencies, increasing brand awareness by 40% and expanding follower base to 10,000+ through targeted content and influencer partnerships.",
      "Developed strategic influencer partnerships to expand market reach and leveraged analytics to optimize campaign performance.",
    ],
  },
  {
    title: "Marketing Executive",
    company: "The First Parents",
    location: "New Delhi, India",
    period: "December 2023 - March 2024",
    description: "Developed and executed social media campaigns and optimized website content for SEO.",
    responsibilities: [
      "Developed and executed social media campaigns, increasing engagement by 30% and achieving over 15,000 views through consistent updates and audience-driven content strategies.",
      "Optimised website content for SEO, improving search engine rankings and driving a 20% increase in organic traffic, while ensuring seamless integration with social media campaigns for enhanced visibility.",
    ],
  },
  {
    title: "Social Media Marketing Executive",
    company: "TravClan",
    location: "New Delhi, India",
    period: "May 2023 - August 2024",
    description: "Developed lifestyle and travel-focused content for multiple social media platforms.",
    responsibilities: [
      "Developed lifestyle and travel-focused content for 4+ social media platforms, driving a 30% increase in engagement and a 20% boost in followers by optimising content and analysing performance metrics for regional and international campaigns.",
      "Utilized CRM systems to track campaign performance and optimize marketing strategies.",
      "Supported website management and email marketing campaigns, resulting in a 25% increase in website traffic and a 15% growth in open email rates, enhancing overall digital presence.",
    ],
  },
  {
    title: "Founder & Social Media Marketing Executive",
    company: "AestheticGenz",
    location: "New Delhi, India",
    period: "November 2021 - November 2023",
    description: "Created and implemented content strategies for fashion-focused social media campaigns.",
    responsibilities: [
      "Created and implemented a content calendar for fashion-focused social media campaigns aligning with seasonal trends, product launches, and marketing campaigns, maximizing audience impact, resulting in a 50% increase in website traffic.",
      "Created and analyzed performance metrics to optimize campaign ROI.",
      "Implemented community engagement tactics, responding to queries and fostering a loyal online customer base.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey in social media marketing and content creation.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 border-l-4 border-primary">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <Badge className="mb-2">{experience.period}</Badge>
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{experience.description}</p>

                    <div>
                      <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {experience.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


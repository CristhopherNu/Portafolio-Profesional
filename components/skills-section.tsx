"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Database, BarChart3, Palette, FileSpreadsheet, GitBranch, Network, Building2 } from "lucide-react"
import { useRef, useState } from "react"

const skillCategories = [
  {
    icon: Code,
    title: "Desarrollo Frontend",
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    hoverColor: "hover:bg-blue-500/20",
    skills: ["React & Next.js", "Figma"],
  },
  {
    icon: Database,
    title: "Bases de Datos",
    color: "bg-green-500/10 text-green-600 border-green-200",
    hoverColor: "hover:bg-green-500/20",
    skills: ["SQL Server", "MySQL", "Supabase"],
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    color: "bg-purple-500/10 text-purple-600 border-purple-200",
    hoverColor: "hover:bg-purple-500/20",
    skills: ["Power BI", "Tableau", "Excel"],
  },
  {
    icon: Palette,
    title: "Diseño & Creatividad",
    color: "bg-pink-500/10 text-pink-600 border-pink-200",
    hoverColor: "hover:bg-pink-500/20",
    skills: ["Canva", "Figma"],
  },
  {
    icon: FileSpreadsheet,
    title: "Productividad",
    color: "bg-orange-500/10 text-orange-600 border-orange-200",
    hoverColor: "hover:bg-orange-500/20",
    skills: ["Microsoft Office", "Excel"],
  },
  {
    icon: GitBranch,
    title: "Control de Versiones",
    color: "bg-gray-500/10 text-gray-600 border-gray-200",
    hoverColor: "hover:bg-gray-500/20",
    skills: ["Github", "Jira"],
  },
  {
    icon: Network,
    title: "Redes & Infraestructura",
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
    hoverColor: "hover:bg-cyan-500/20",
    skills: ["Cisco Packet Tracer"],
  },
  {
    icon: Building2,
    title: "Gestión de Proyectos",
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
    hoverColor: "hover:bg-indigo-500/20",
    skills: ["Jira", "Microsoft Office"],
  },
]

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Herramientas & Tecnologías
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dominio de herramientas modernas para desarrollo, análisis de datos, diseño y gestión de proyectos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                className={`h-64 transition-all duration-300 cursor-pointer border-2 ${category.hoverColor} hover:shadow-xl hover:shadow-primary/5 backdrop-blur-sm bg-background/90 group`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex flex-col items-center gap-4 text-center">
                    <motion.div
                      className={`p-4 rounded-2xl ${category.color} transition-all duration-300`}
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-8 h-8" />
                    </motion.div>
                    <span className="text-lg font-semibold leading-tight">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs font-medium px-3 py-1 bg-muted/50 hover:bg-muted transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "13+", label: "Herramientas" },
              { number: "8", label: "Categorías" },
              { number: "100%", label: "Dedicación" },
              { number: "24/7", label: "Aprendizaje" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

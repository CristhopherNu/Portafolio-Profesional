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
      className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-5">
        <div className="absolute top-5 sm:top-10 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-xl sm:blur-2xl" />
        <div className="absolute top-1/2 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-lg sm:blur-xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent px-4">
            Herramientas & Tecnologías
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Dominio de herramientas modernas para desarrollo, análisis de datos, diseño y gestión de proyectos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                className={`h-56 sm:h-64 transition-all duration-300 cursor-pointer border-2 ${category.hoverColor} hover:shadow-xl hover:shadow-primary/5 backdrop-blur-sm bg-background/90 group`}
              >
                <CardHeader className="pb-3 sm:pb-4 p-3 sm:p-6">
                  <CardTitle className="flex flex-col items-center gap-2 sm:gap-4 text-center">
                    <motion.div
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${category.color} transition-all duration-300`}
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.div>
                    <span className="text-sm sm:text-base md:text-lg font-semibold leading-tight text-center">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 p-3 sm:p-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
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
                          className="text-xs font-medium px-2 sm:px-3 py-1 bg-muted/50 hover:bg-muted transition-colors duration-200"
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
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
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
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
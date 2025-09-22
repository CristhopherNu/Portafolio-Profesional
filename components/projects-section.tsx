"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import { useRef } from "react"

const projects = [
  {
    title: "Huellas de Amor",
    description:
      "Plataforma web para la Fundación Huellas de Amor, dedicada al rescate y cuidado de perros y gatos abandonados o en situación de vulnerabilidad. La plataforma facilita la adopción responsable, donaciones y voluntariado para ayudar a estos animales a encontrar un hogar lleno de amor.",
    image: "/img/HuellasdeAmor.png", // Imagen que refleje el proyecto de rescate animal
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/CristhopherNu/Huellas-de-amor",
    liveUrl: "https://cristhophernu.github.io/Huellas-de-amor/",
    stars: 124,
    forks: 32,

    // Información adicional específica del proyecto
    features: [
      "Sistema de adopciones en línea",
      "Galería de animales disponibles",
      "Portal de donaciones",
      "Gestión de voluntarios",
      "Historias de éxito",
      "Sistema de contacto y seguimiento",
    ],

    // Botones de acción
    buttons: {
      preview: {
        text: "Vista Previa",
        url: "https://cristhophernu.github.io/Huellas-de-amor/",
        icon: "Eye",
      },
      demo: {
        text: "Ver Demo",
        url: "https://cristhophernu.github.io/Huellas-de-amor/",
        icon: "ExternalLink",
      },
      code: {
        text: "Ver Código",
        url: "https://github.com/CristhopherNu/Huellas-de-amor",
        icon: "Github",
      },
    },

    // Categoría del proyecto
    category: "Impacto Social",
    tags: ["Adopción", "Rescate Animal", "ONG", "Voluntariado", "Donaciones"],
  },
  {
    title: "POS de Honduras",
    description:
      "Página web desarrollada para POS de Honduras, mostrando información de productos y servicios ofrecidos, con diseño responsivo y experiencia de usuario optimizada.",
    image: "/img/posdehonduras.png", // Imagen representativa de tu proyecto
    technologies: ["HTML", "CSS", "JavaScript", "Wordpress"], // Tecnologías que usaste
    githubUrl: "", // Lo dejas vacío si no tienes el repositorio
    liveUrl: "https://www.posdehonduras.com/",
    stars: 55,
    forks: 70,

    features: ["Diseño responsivo", "Interfaz amigable", "Galería de productos", "Información de contacto"],

    buttons: {
      preview: {
        text: "Vista Previa",
        url: "https://www.posdehonduras.com/",
        icon: "Eye",
      },
      demo: {
        text: "Ver Demo",
        url: "https://www.posdehonduras.com/",
        icon: "ExternalLink",
      },
      code: {
        text: "Ver Código",
        url: "",
        icon: "Github",
      },
    },

    category: "Proyectos Web",
    tags: ["HTML", "CSS", "JavaScript", "Web", "Wordpress"],
  },
  {
    title: "Milca's Store",
    description:
      "Página web desarrollada para Milca's store, mostrando información de productos y servicios ofrecidos, con diseño responsivo y experiencia de usuario optimizada.",
    image: "/img/Milcas.png", // Imagen representativa de tu proyecto
    technologies: ["HTML", "CSS", "JavaScript"], // Tecnologías que usaste
    githubUrl: "https://github.com/CristhopherNu/Tienda-Milcas",
    liveUrl: "https://cristhophernu.github.io/Tienda-Milcas/",
    stars: 18,
    forks: 20,

    features: ["Diseño responsivo", "Interfaz amigable", "Galería de productos", "Información de contacto"],

    buttons: {
      preview: {
        text: "Vista Previa",
        url: "https://cristhophernu.github.io/Tienda-Milcas/",
        icon: "Eye",
      },
      demo: {
        text: "Ver Demo",
        url: "https://cristhophernu.github.io/Tienda-Milcas/",
        icon: "ExternalLink",
      },
      code: {
        text: "Ver Código",
        url: "https://github.com/CristhopherNu/Tienda-Milcas",
        icon: "Github",
      },
    },

    category: "Proyectos Web",
    tags: ["HTML", "CSS", "JavaScript", "Web"],
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-muted/30 relative overflow-hidden"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 right-1/4 w-40 h-40 sm:w-72 sm:h-72 bg-secondary/30 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-5 sm:bottom-10 left-1/3 w-32 h-32 sm:w-56 sm:h-56 bg-primary/30 rounded-full blur-xl sm:blur-2xl" />
        <div className="absolute top-1/3 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-secondary/20 rounded-full blur-lg sm:blur-xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">Proyectos Destacados</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Una selección de mis proyectos más relevantes disponibles en GitHub
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-primary/20 group backdrop-blur-sm bg-background/90">
                <div className="relative overflow-hidden rounded-t-lg">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-36 sm:h-44 md:h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="p-3 sm:p-4 border-b">
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      size="sm"
                      variant="default"
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm flex-1 max-w-[120px]"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </a>
                    </Button>

                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild className="flex-1 max-w-[120px] bg-transparent">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <CardHeader className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg sm:text-xl leading-tight">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground flex-shrink-0">
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span className="hidden xs:inline">{project.stars}</span>
                        <span className="xs:hidden text-xs">{project.stars}</span>
                      </motion.div>
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <GitFork className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span className="hidden xs:inline">{project.forks}</span>
                        <span className="xs:hidden text-xs">{project.forks}</span>
                      </motion.div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="outline" className="text-xs px-2 py-0.5 sm:px-2.5 sm:py-1">
                          {tech}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        ></motion.div>
      </div>
    </motion.section>
  )
}

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
  description: "Plataforma web para la Fundación Huellas de Amor, dedicada al rescate y cuidado de perros y gatos abandonados o en situación de vulnerabilidad. La plataforma facilita la adopción responsable, donaciones y voluntariado para ayudar a estos animales a encontrar un hogar lleno de amor.",
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
    "Sistema de contacto y seguimiento"
  ],
  
  // Botones de acción
  buttons: {
    preview: {
      text: "Vista Previa",
      url: "https://cristhophernu.github.io/Huellas-de-amor/",
      icon: "Eye"
    },
    demo: {
      text: "Ver Demo",
      url: "https://cristhophernu.github.io/Huellas-de-amor/",
      icon: "ExternalLink"
    },
    code: {
      text: "Ver Código",
      url: "https://github.com/CristhopherNu/Huellas-de-amor",
      icon: "Github"
    }
  },
  
  // Categoría del proyecto
  category: "Impacto Social",
  tags: ["Adopción", "Rescate Animal", "ONG", "Voluntariado", "Donaciones"]
}, 
  {
  title: "POS de Honduras",
  description: "Página web desarrollada para POS de Honduras, mostrando información de productos y servicios ofrecidos, con diseño responsivo y experiencia de usuario optimizada.",
  image: "/img/POSdeHonduras.png", // Imagen representativa de tu proyecto
  technologies: ["HTML", "CSS", "JavaScript","Wordpress"], // Tecnologías que usaste
  githubUrl: "", // Lo dejas vacío si no tienes el repositorio
  liveUrl: "https://www.posdehonduras.com/",
  stars: 55,
  forks: 70,
  
  features: [
    "Diseño responsivo",
    "Interfaz amigable",
    "Galería de productos",
    "Información de contacto"
  ],
  
  buttons: {
    preview: {
      text: "Vista Previa",
      url: "https://www.posdehonduras.com/",
      icon: "Eye"
    },
    demo: {
      text: "Ver Demo",
      url: "https://www.posdehonduras.com/",
      icon: "ExternalLink"
    },
    code: {
      text: "Ver Código",
      url: "",
      icon: "Github"
    }
  },
  
  category: "Proyectos Web",
  tags: ["HTML", "CSS", "JavaScript", "Web","Wordpress"]
},
 {
  title: "Milca's Store",
  description: "Página web desarrollada para Milca's store, mostrando información de productos y servicios ofrecidos, con diseño responsivo y experiencia de usuario optimizada.",
  image: "/img/milcas.png", // Imagen representativa de tu proyecto
  technologies: ["HTML", "CSS", "JavaScript"], // Tecnologías que usaste
  githubUrl: "https://github.com/CristhopherNu/Huellas-de-amor",
  liveUrl: "https://cristhophernu.github.io/Tienda-Milcas/",
  stars: 18,
  forks: 20,
  
  features: [
    "Diseño responsivo",
    "Interfaz amigable",
    "Galería de productos",
    "Información de contacto"
  ],
  
  buttons: {
    preview: {
      text: "Vista Previa",
      url: "https://cristhophernu.github.io/Tienda-Milcas/",
      icon: "Eye"
    },
    demo: {
      text: "Ver Demo",
      url: "https://cristhophernu.github.io/Tienda-Milcas/",
      icon: "ExternalLink"
    },
    code: {
      text: "Ver Código",
      url: "https://github.com/CristhopherNu/Tienda-Milcas",
      icon: "Github"
    }
  },
  
  category: "Proyectos Web",
  tags: ["HTML", "CSS", "JavaScript", "Web"]
}


  
 

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
    <motion.section ref={ref} style={{ y }} className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-primary/30 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis proyectos más relevantes disponibles en GitHub
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20 group backdrop-blur-sm bg-background/90">
                <div className="relative overflow-hidden rounded-t-lg">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Código
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <Star className="w-3 h-3" />
                        {project.stars}
                      </motion.div>
                      <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <GitFork className="w-3 h-3" />
                        {project.forks}
                      </motion.div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="outline" className="text-xs">
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
          className="text-center mt-12"
        >
         
        </motion.div>
      </div>
    </motion.section>
  )
}

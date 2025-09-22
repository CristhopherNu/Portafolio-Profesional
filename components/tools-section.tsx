"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code2, GitBranch, Cloud, Container, Palette, Terminal, Database, Smartphone } from "lucide-react"

const toolCategories = [
  {
    icon: Code2,
    title: "IDEs & Editores",
    tools: ["VS Code", "IntelliJ IDEA", "PyCharm", "Vim", "Sublime Text"],
  },
  {
    icon: GitBranch,
    title: "Control de Versiones",
    tools: ["Git", "GitHub", "GitLab", "Bitbucket", "GitHub Actions"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tools: ["AWS", "Google Cloud", "Vercel", "Netlify", "Heroku"],
  },
  {
    icon: Container,
    title: "Contenedores & Orquestación",
    tools: ["Docker", "Kubernetes", "Docker Compose", "Podman"],
  },
  {
    icon: Database,
    title: "Herramientas de BD",
    tools: ["pgAdmin", "MongoDB Compass", "Redis CLI", "DBeaver", "Prisma"],
  },
  {
    icon: Terminal,
    title: "Terminal & CLI",
    tools: ["Zsh", "Oh My Zsh", "tmux", "Homebrew", "npm/yarn"],
  },
  {
    icon: Palette,
    title: "Diseño & UI/UX",
    tools: ["Figma", "Adobe XD", "Sketch", "Canva", "Framer"],
  },
  {
    icon: Smartphone,
    title: "Desarrollo Móvil",
    tools: ["React Native", "Flutter", "Expo", "Android Studio", "Xcode"],
  },
]

export function ToolsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Herramientas & Tecnologías</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológico y herramientas que utilizo en mi día a día
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="w-4 h-4 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tool}
                      </Badge>
                    ))}
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


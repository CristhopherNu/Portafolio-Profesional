"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, Send, Linkedin, Instagram, Clock, Users, Briefcase } from "lucide-react"
import { useState } from "react"

export function ProfessionalContact() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    message: "",
  })

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: "Email Profesional",
      value: "cristhophernunez3@gmail.com",
      description: "Respuesta en 24 horas",
      color: "bg-blue-500",
      href: "mailto:cristhophernunez3@gmail.com",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/Cristopher Nuñez",
      description: "Perfil profesional",
      color: "bg-blue-600",
      href: "https://www.linkedin.com/in/cristophernu%C3%B1ez/",
    },
    {
      id: "instagram",
      icon: Instagram,
      title: "Instagram",
      value: "Cristopher Nuñez",
      description: "Contenido técnico",
      color: "bg-pink-500",
      href: "https://instagram.com/tuusuario",
    },
  ]

  const expertise = [
    "React & Next.js",
    "SQL Server",
    "Power BI",
    "Excel",
    "Figma",
    "MySQL",
    "Canva",
    "Tableau",
    "Microsoft Office",
    "Jira",
    "Github",
    "Supabase",
    "Cisco Packet Tracer",
    "Wordpress",
    "HTML & CSS",
    "JavaScript",
  ]

  const stats = [
    { number: "15+", label: "Proyectos Completados" },
    { number: "1+", label: "Años de Experiencia" },
    { number: "13+", label: "Tecnologías Dominadas" },
    { number: "100%", label: "Satisfacción Cliente" },
  ]

  const phoneNumber = "(504) 87934720"
  const handlePhoneClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = `tel:${phoneNumber}`
    }
  }

  const handleEmailClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "mailto:cristhophernunez3@gmail.com"
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = `
Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Posición: ${formData.position}

Mensaje:
${formData.message}
    `

    const mailtoLink = `mailto:cristhophernunez3@gmail.com?subject=Oportunidad Laboral - ${formData.company}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      position: "",
      message: "",
    })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Disponible para Oportunidades
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            ¿Me Quieres Contratar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Manejo diversas herramientas tecnológicas y tengo experiencia en implementar soluciones escalables. Mi enfoque integral me permite adaptarme a distintos entornos y necesidades, 
          más allá del desarrollo de software. Estoy listo para aportar valor y contribuir al crecimiento de tu equipo.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Conectemos
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <motion.div
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      onHoverStart={() => setHoveredCard(method.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                      className="cursor-pointer"
                      onClick={() => window.open(method.href, "_blank")}
                    >
                      <Card className="p-4 hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-0">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 ${method.color} rounded-lg text-white`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold">{method.title}</p>
                              <p className="text-sm text-primary">{method.value}</p>
                              <p className="text-xs text-muted-foreground">{method.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Habilidades Técnicas</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Contactame</h3>
                  <p className="text-muted-foreground">
                    Cuéntame sobre la oportunidad y cómo puedo contribuir a tu equipo
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre Completo *
                      </label>
                      <Input
                        id="name"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Corporativo *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Cristhophernunez3@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        placeholder="Nombre de la empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="position" className="text-sm font-medium">
                        Tu Posición
                      </label>
                      <Input
                        id="position"
                        placeholder="Ej: HR Manager, CTO, etc."
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Detalles de la Oportunidad *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Describe el rol, tecnologías requeridas, modalidad de trabajo, y cualquier detalle relevante..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50"
                      required
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full gap-2 py-6 text-lg font-semibold  from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
                    >
                      <Send className="w-5 h-5" />
                      Enviar Propuesta
                    </Button>
                  </motion.div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Respuesta garantizada en 24 horas
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8  from-primary/10 to-secondary/10 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">¿Listo para Potenciar tu Equipo?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Con experiencia comprobada en tecnologías modernas y metodologías ágiles, estoy preparado para contribuir
            desde el primer día.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="gap-2 bg-transparent" onClick={handlePhoneClick}>
              <Phone className="w-4 h-4" />
              {phoneNumber}
            </Button>
            <Button className="gap-2" onClick={handleEmailClick}>
              <Mail className="w-4 h-4" />
              Contactar Ahora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

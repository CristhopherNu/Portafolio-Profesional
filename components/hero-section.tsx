"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, MapPin, ChevronDown, Code, Rocket, Zap, Coffee } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Estados para elementos dinámicos
  const [currentSkill, setCurrentSkill] = useState(0)
  const [currentFact, setCurrentFact] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Arrays de contenido dinámico
  const skills = ["React & Next.js", "SQL server", "Power Bi", "Excel","Figma","MysqL", "Canva","Tableau","Microsoft Office","Jira","Github","Supabase","cisco Packet Tracer","Wordpress","Seo"]
  const facts = [
    { icon: <Code className="w-3 h-3 sm:w-4 sm:h-4" />, text: "2+ años Trabajando Con Herramientas" },
    { icon: <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />, text: "15+ proyectos completados" },
    { icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Junior" },
    { icon: <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />, text: "Adicto al café ☕" }
  ]

  // Efectos de transformación
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Efecto para cambiar skills automáticamente
  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 2500)

    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length)
    }, 3000)

    return () => {
      clearInterval(skillInterval)
      clearInterval(factInterval)
    }
  }, [skills.length, facts.length])

  // Efecto para seguir el mouse (solo en desktop)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Funciones para los botones
  const handleDownloadCV = () => {
    // Crea un enlace temporal para descargar el CV
    const link = document.createElement('a');
    link.download = 'Cristopher-Nuñez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden"
    >
      {/* Cursor personalizado - solo visible en desktop */}
      <motion.div
        className="fixed w-4 h-4 sm:w-6 sm:h-6 bg-primary/20 rounded-full pointer-events-none z-50 mix-blend-multiply hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      {/* Contenedor principal centrado con padding adaptativo */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div style={{ scale }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center relative z-10">
          {/* Profile Image responsivo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
            className="flex justify-center order-1 lg:order-1"
          >
            <div className="relative">
              {/* Ring orbitante - adaptativo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 border-2 border-dashed border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1 sm:inset-2 w-58 h-58 sm:w-68 sm:h-68 md:w-76 md:h-76 border border-secondary/20 rounded-full"
              />

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl relative z-10"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src="/img/Fotoperfil.png"
                    alt="Perfil profesional"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay con efecto de brillo */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                  />
                </div>
              </motion.div>

              {/* Badge "Disponible" - responsivo */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 sm:-top-12 right-4 sm:right-8 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-2xl backdrop-blur-sm border border-white z-20"
              >
                <Badge variant="secondary" className="text-xs sm:text-sm font-bold bg-white/95 text-green-700 shadow-lg px-2 sm:px-4 py-1 sm:py-2">
                  🟢 Disponible
                </Badge>
              </motion.div>

              {/* Badge con dato dinámico - responsivo */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 sm:-bottom-16 left-2 sm:left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 z-20"
              >
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold px-2 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                  {facts[currentFact].icon}
                  <span className="text-white whitespace-nowrap text-xs sm:text-sm">{facts[currentFact].text}</span>
                </div>
              </motion.div>

              {/* Badge adicional - responsivo */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  x: [0, -3, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 sm:-top-8 -left-8 sm:-left-12 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg sm:rounded-xl shadow-2xl backdrop-blur-sm border border-white/20 z-20"
              >
                <div className="flex items-center gap-1 sm:gap-2 text-xs font-semibold px-2 sm:px-3 py-1 sm:py-2 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-300 rounded-full animate-pulse" />
                  <span className="text-white whitespace-nowrap text-xs">Innovando</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content responsivo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
            className="space-y-6 sm:space-y-8 w-full order-2 lg:order-2"
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Badge de ubicación responsivo */}
              <motion.div 
                whileHover={{ scale: 1.05, x: 10 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                <Badge
                  variant="outline"
                  className="text-xs sm:text-sm w-fit border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                >
                  <MapPin className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  Tegucigalpa, Honduras
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs sm:text-sm w-fit border-green-500/30 bg-green-500/5 hover:bg-green-500/10 transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1 sm:mr-2 animate-pulse" />
                  Remoto
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs sm:text-sm w-fit border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-1 sm:mr-2 animate-pulse" />
                  Presencial
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text leading-tight tracking-tight break-words"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  textShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                Cristopher Núñez
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-semibold tracking-wide"
              >
                Ingeniero en Ciencias de la Computación
              </motion.h2>

              {/* Skill rotativo - responsivo */}
              <motion.div
                className="flex flex-wrap items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                <span className="text-muted-foreground text-sm sm:text-base md:text-lg">Herramientas Utilizadas</span>
                <motion.span
                  key={currentSkill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-sm sm:text-base md:text-lg"
                >
                  {skills[currentSkill]}
                </motion.span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg font-medium"
              >
                Apasionado por la tecnología en todas sus formas, me interesa entender cómo funciona y cómo puede transformar la manera en que trabajamos y nos conectamos. 
                Busco siempre aprender y aplicar soluciones tecnológicas de manera efectiva.
              </motion.p>

              {/* Stats rápidas - responsivo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="flex flex-wrap gap-4 sm:gap-6 py-2 sm:py-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">1+</span>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium">Años de experiencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">15+</span>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium">Proyectos completados</span>
                </div>
              </motion.div>
            </div>

            {/* Botones responsivos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <a href="mailto:Cristhophernunez3@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 bg-transparent border-2 border-primary/30 hover:border-primary hover:bg-primary/5 shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-black font-semibold"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Contáctame
                </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/pdf/CV Cristopher-Nuñez-Web-Master.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadCV}
                  className="w-full sm:w-auto gap-2 bg-transparent border-2 border-primary/30 hover:border-primary hover:bg-primary/5 shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Descargar CV
                </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Social links responsivos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center sm:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4 pb-4 sm:pb-8"
            >
              {[
                { 
                  icon: Linkedin, 
                  color: "hover:text-blue-600", 
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/cristophernuñez" 
                },
                { 
                  icon: Mail, 
                  color: "hover:text-red-500", 
                  label: "Email",
                  href: "mailto:Cristhophernunez3@gmail.com" 
                }
              ].map(({ icon: Icon, color, label, href }, index) => (
                <motion.div 
                  key={label}
                  whileHover={{ scale: 1.15, rotate: index % 2 === 0 ? 8 : -8 }} 
                  whileTap={{ scale: 0.9 }}
                  className="group"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(href, '_blank')}
                    className={`hover:bg-primary/10 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg w-10 h-10 sm:w-12 sm:h-12 ${color}`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator responsivo */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 z-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xs text-muted-foreground font-medium tracking-wide hidden sm:block"
        >
          Descubre más sobre mí
        </motion.p>
        <motion.div
          animate={{
            y: [0, 8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="group cursor-pointer"
        >
          <div className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10">
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary/80 transition-colors" />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
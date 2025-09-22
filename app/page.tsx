import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
//import { ToolsSection } from "@/components/tools-section"
import { ProjectsSection } from "@/components/projects-section"
import { ProfessionalContact } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div className="space-y-8">
        <SkillsSection />
        <ProjectsSection />
          <div className="-mt-30"></div>
        <ProfessionalContact />
      </div>
    </main>
  )
}

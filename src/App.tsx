import { Layout } from './components/layout/Layout'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { EngineeringProofSection } from './components/sections/EngineeringProofSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EngineeringProofSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  )
}

export default App

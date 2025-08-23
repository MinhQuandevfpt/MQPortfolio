import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import HelperSection from './components/HelperSection'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import { motion } from 'framer-motion'

function App() {
 

  return (
    <motion.main 
      className="font-body overflow-x-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <NavbarMain />
      <HeroMain />
      <motion.div 
        className='mt-12'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <SubHeroSection />
      </motion.div>
      <AboutMeMain />
      <SkillsMain/>
      <ExperienceMain />
      <ProjectsMain />
      <HelperSection/> 

    </motion.main>
  )
}

export default App

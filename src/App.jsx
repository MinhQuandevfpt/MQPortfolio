import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import HelperSection from './components/HelperSection'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import SkillsMain from './components/skillsSection/SkillsMain'

function App() {
 

  return (
    <main className="font-body overflow-x-hidden relative">
      <NavbarMain />
      <HeroMain />
      <div className='mt-12'>
      <SubHeroSection />
      </div>
      <AboutMeMain />
      <SkillsMain/>
      <ExperienceMain />
      <HelperSection/> 

    </main>
  )
}

export default App

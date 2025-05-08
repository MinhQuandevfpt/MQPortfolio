import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperiences from './AllExperiences'

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
        <ExperienceText/>
        <ExperienceTop/>
        <div className="w-full h-1 mt-14 bg-[#406bf7] lg:block sm:hidden "></div>
        <AllExperiences/>
    </div>
  )
}

export default ExperienceMain
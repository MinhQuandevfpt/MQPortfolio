import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperiences from './AllExperiences'
import { FadeInUp } from '../AnimationWrapper'

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 mt-32 sm:mt-20 lg:mt-5">
        <FadeInUp delay={0.2}>
          <ExperienceText/>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <ExperienceTop/>
        </FadeInUp>
        <FadeInUp delay={0.6} className="w-full h-1 mt-16 sm:mt-12 lg:mt-14 bg-[#406bf7] lg:block sm:hidden ">
        </FadeInUp>
        <FadeInUp delay={0.8} className="mt-12 sm:mt-8 lg:mt-6">
          <AllExperiences/>
        </FadeInUp>
    </div>
  )
}

export default ExperienceMain
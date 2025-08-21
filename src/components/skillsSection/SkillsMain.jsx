import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import { FadeInUp } from '../AnimationWrapper'



const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden -mt-28">
       
          <FadeInUp delay={0.2}>
            <SkillsText />
          </FadeInUp>
       
        <FadeInUp delay={0.4} className='mt-16 translate-y-0 sm:-translate-y-20 lg:translate-y-5 transition-all'>
          <AllSkills />
        </FadeInUp>
        
      </div>
    </div>
  )
}

export default SkillsMain
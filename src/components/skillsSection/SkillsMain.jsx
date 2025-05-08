import SkillsText from './SkillsText'
import AllSkills from './AllSkills'



const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden -mt-28">
       
          <SkillsText />
       
        <div className='mt-16 translate-y-0 sm:-translate-y-20 lg:translate-y-5 transition-all'>
          <AllSkills />
        </div>
        
      </div>
    </div>
  )
}

export default SkillsMain
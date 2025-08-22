import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center translate-y-0 sm:translate-y-0 lg:translate-y-1 transition-all mt-4 sm:mt-0 lg:mt-4">
        <ExperienceTopLeft/>
        <ExperienceTopMiddle/>
        <ExperienceTopRight/>
    </div>
  )
}

export default ExperienceTop
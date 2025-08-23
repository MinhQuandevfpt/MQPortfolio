import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'
import { FadeInLeft, FadeInRight } from '../AnimationWrapper'

const AboutMeMain = () => {
  return (
    <div id="about" className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
        <FadeInLeft delay={0.2}>
            <AboutMeText />
        </FadeInLeft>
        <FadeInRight delay={0.4}>
            <AboutMeImage />
        </FadeInRight>
    

    </div>
  )
}

export default AboutMeMain
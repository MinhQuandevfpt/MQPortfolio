import HeroPic from './HeroPic'
import HeroText from './HeroText'
import { FadeInLeft, FadeInRight } from '../AnimationWrapper'


const HeroMain = () => {
    return (
        <div className=" pt-40 pb-16">
            <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
                <FadeInLeft delay={0.2}>
                    <HeroText />
                </FadeInLeft>
                <FadeInRight delay={0.4} className='mt-20'>
                    <HeroPic />
                </FadeInRight>

             

            </div>
        </div>
    )
}

export default HeroMain
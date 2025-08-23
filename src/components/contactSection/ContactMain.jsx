import ContactText from './ContactText'
import ContactContent from './ContactContent'
import { FadeInUp } from '../AnimationWrapper'

const ContactMain = () => {
  return (
    <div id="contact" className="max-w-[1200px] mx-auto px-4 mt-32 sm:mt-20 lg:mt-16 pb-20">
        <FadeInUp delay={0.2}>
          <ContactText/>
        </FadeInUp>
        <FadeInUp delay={0.4} className="mt-16 sm:mt-12 lg:mt-14">
          <ContactContent/>
        </FadeInUp>
    </div>
  )
}

export default ContactMain

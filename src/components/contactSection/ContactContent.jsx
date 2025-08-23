import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import { StaggerContainer, StaggerItem } from '../AnimationWrapper'

const ContactContent = () => {
  return (
    <StaggerContainer className="grid lg:grid-cols-2 gap-12 items-start">
      <StaggerItem>
        <ContactInfo />
      </StaggerItem>
      <StaggerItem>
        <ContactForm />
      </StaggerItem>
    </StaggerContainer>
  )
}

export default ContactContent

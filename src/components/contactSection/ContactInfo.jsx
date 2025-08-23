import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      info: "quankontum55555@gmail.com",
      link: "mailto:quankontum55555@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      info: "+84 342 065 777",
      link: "tel:+84342065777"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      info: "Ho Chi Minh City, Vietnam",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub", 
      url: "https://github.com/MinhQuandevfpt",
      color: "hover:text-gray-700 dark:hover:text-white"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      url: "https://twitter.com/yourhandle",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      name: "Instagram",
      url: "https://instagram.com/yourhandle",
      color: "hover:text-pink-500"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Let's <span className="text-blue-400">Connect</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and development.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <a
            key={index}
            href={detail.link}
            className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              {detail.icon}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                {detail.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {detail.info}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Follow Me
        </h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Response
        </h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-500">24h</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-500">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

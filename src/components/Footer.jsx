import { FaHeart, FaReact, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">TTMQ</h3>
            <p className="text-gray-300 leading-relaxed">
              Front-End Developer & Course Instructor passionate about creating amazing web experiences 
              with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>ttmq.dev@gmail.com</p>
              <p>Ho Chi Minh City, Vietnam</p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://github.com/yourusername" 
                  className="hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  className="hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Built With */}
          <div className="flex flex-wrap items-center justify-center space-x-6 mb-6">
            <span className="text-gray-400 text-sm">Built with:</span>
            <div className="flex items-center space-x-2">
              <FaReact className="text-blue-400" />
              <span className="text-sm text-gray-300">React</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiTailwindcss className="text-cyan-400" />
              <span className="text-sm text-gray-300">Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHeart className="text-red-400" />
              <span className="text-sm text-gray-300">Passion</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} TTMQ Portfolio. All rights reserved.</p>
            <p className="mt-1">
              Made with <FaHeart className="inline text-red-400 mx-1" /> in Vietnam
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

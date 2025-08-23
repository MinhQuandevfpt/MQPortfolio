import { useState, useRef } from 'react'
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../../config/emailjs'

const ContactForm = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Check if EmailJS is configured
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      console.error('EmailJS not configured properly')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }
    
    try {
      // Gửi email thông qua EmailJS
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,   // Service ID
        emailjsConfig.templateId,  // Template ID  
        form.current,              // Form reference
        emailjsConfig.publicKey    // Public Key
      )
      
      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      console.error('Email sending failed:', error.text)
      setSubmitStatus('error')
      
      // Reset error status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Send Me a <span className="text-orange-400">Message</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </div>

      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaUser className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Subject Field */}
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <FaComment className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Your Message"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed scale-95'
              : 'bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 transform hover:scale-105 active:scale-95'
          } text-white shadow-lg hover:shadow-xl`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending Email...</span>
            </>
          ) : (
            <>
              <FaPaperPlane className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="text-center p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
            <p className="font-semibold">✅ Message sent successfully!</p>
            <p className="text-sm">Thank you for contacting me. I'll get back to you within 24 hours.</p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="text-center p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
            <p className="font-semibold">❌ Failed to send message</p>
            <p className="text-sm">Please try again or contact me directly via email.</p>
          </div>
        )}
      </form>

      {/* Form Features */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaEnvelope className="text-blue-500 text-sm" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Secure</p>
          </div>
          <div>
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaPaperPlane className="text-green-500 text-sm" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Fast Reply</p>
          </div>
          <div>
            <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaUser className="text-orange-500 text-sm" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Personal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

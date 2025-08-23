// EmailJS Configuration - Uses environment variables for security
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
}

// Validate configuration on import
if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
  console.error('❌ EmailJS configuration missing! Please check your .env file.')
  console.log('Required environment variables:')
  console.log('- VITE_EMAILJS_SERVICE_ID')
  console.log('- VITE_EMAILJS_TEMPLATE_ID') 
  console.log('- VITE_EMAILJS_PUBLIC_KEY')
}

// Email template variables mapping
// Đảm bảo rằng các tên biến này khớp với template trong EmailJS
export const templateParams = {
  from_name: 'name',      // Tên người gửi
  from_email: 'email',    // Email người gửi  
  subject: 'subject',     // Chủ đề
  message: 'message',     // Nội dung tin nhắn
  to_name: 'TTMQ',       // Tên người nhận (bạn)
  reply_to: 'email'       // Email để reply
}

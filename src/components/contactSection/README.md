# Contact Section

## Cấu trúc thư mục:
- `ContactMain.jsx` - Component chính của phần contact
- `ContactText.jsx` - Tiêu đề và mô tả phần contact
- `ContactContent.jsx` - Layout container cho info và form
- `ContactInfo.jsx` - Thông tin liên hệ và social links
- `ContactForm.jsx` - Form liên hệ với validation

## Features:

### 🎨 **UI/UX Design:**
- **Responsive layout** 2 cột desktop, 1 cột mobile
- **Modern gradient** backgrounds và shadows
- **Smooth animations** với Framer Motion
- **Interactive elements** với hover effects
- **Dark mode support** hoàn chỉnh

### 📞 **Contact Information:**
- **Email, Phone, Location** với icons
- **Social media links** (LinkedIn, GitHub, Twitter, Instagram)
- **Quick stats** (Response time, Satisfaction rate)
- **Interactive cards** với hover animations

### 📝 **Contact Form:**
- **Full validation** cho tất cả fields
- **Interactive icons** trong input fields
- **Loading states** khi submit
- **Success messages** sau khi gửi
- **Form features** badges (Secure, Fast Reply, Personal)

### 🎯 **Interactive Elements:**
- **Clickable contact cards** với links
- **Social media buttons** với target="_blank"
- **Form submission** với loading animation
- **Hover effects** trên tất cả interactive elements

## Cách tùy chỉnh:

### 1. Cập nhật thông tin liên hệ:
Chỉnh sửa `contactDetails` trong `ContactInfo.jsx`:
```javascript
const contactDetails = [
  {
    icon: <FaEnvelope className="text-2xl" />,
    title: "Email",
    info: "your-email@gmail.com",
    link: "mailto:your-email@gmail.com"
  },
  // ...
]
```

### 2. Cập nhật social links:
Chỉnh sửa `socialLinks` trong `ContactInfo.jsx`:
```javascript
const socialLinks = [
  {
    icon: <FaLinkedin className="text-xl" />,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    color: "hover:text-blue-600"
  },
  // ...
]
```

### 3. Tích hợp với backend:
Trong `ContactForm.jsx`, thay thế phần `handleSubmit` để gửi data đến API:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  } catch (error) {
    setSubmitStatus('error')
  }
  
  setIsSubmitting(false)
}
```

## Responsive Breakpoints:
- **Desktop (lg)**: 1024px+ - 2 cột layout
- **Tablet (md)**: 768px+ - 1 cột với spacing tốt
- **Mobile (sm)**: 640px+ - Full width, compact layout

## Icons sử dụng:
- `react-icons/fa` - Font Awesome icons
- `react-icons/si` - Simple Icons

## Animations:
- **StaggerContainer/StaggerItem** - Stagger animations
- **FadeInUp** - Fade in từ dưới lên
- **Hover transitions** - Transform và color changes
- **Loading spinners** - Cho form submission

# EmailJS Setup Guide

## 📧 Cấu hình EmailJS cho Contact Form

### 1. Tạo tài khoản EmailJS:
- Truy cập: https://www.emailjs.com/
- Đăng ký tài khoản miễn phí
- Xác nhận email

### 2. Tạo Email Service:
- Vào **Email Services** → **Add New Service**
- Chọn **Gmail** (hoặc provider khác)
- Kết nối với email của bạn
- Copy **Service ID** (ví dụ: `service_9cli3wd`)

### 3. Tạo Email Template:
- Vào **Email Templates** → **Create New Template**
- Thiết kế template với các biến:
  ```
  From: {{from_name}} <{{from_email}}>
  Subject: Portfolio Contact: {{subject}}
  
  Hello TTMQ,
  
  You have a new message from your portfolio website:
  
  Name: {{from_name}}
  Email: {{from_email}}
  Subject: {{subject}}
  
  Message:
  {{message}}
  
  ---
  Sent from your portfolio contact form
  ```
- Copy **Template ID** (ví dụ: `template_m2z1snv`)

### 4. Lấy Public Key:
- Vào **Account** → **General**
- Copy **Public Key** (ví dụ: `4_mio_D_vSty0NlYZ`)

### 5. Cập nhật cấu hình:
Chỉnh sửa file `/src/config/emailjs.js`:
```javascript
export const emailjsConfig = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id', 
  publicKey: 'your_public_key'
}
```

### 6. Kiểm tra Template Variables:
Đảm bảo các tên biến trong template khớp với form fields:
- `{{from_name}}` ← input name="name"
- `{{from_email}}` ← input name="email"  
- `{{subject}}` ← input name="subject"
- `{{message}}` ← textarea name="message"

### 7. Test email:
- Điền form trên website
- Kiểm tra email của bạn
- Xem trong EmailJS Dashboard > Logs

## 🔧 Troubleshooting:

### Lỗi thường gặp:
1. **Template không tìm thấy**: Kiểm tra Template ID
2. **Service không hoạt động**: Kiểm tra Service ID và connection
3. **Public Key sai**: Kiểm tra trong Account settings
4. **CORS error**: EmailJS tự động handle, không cần config thêm

### Debugging:
- Mở DevTools Console để xem logs
- Kiểm tra Network tab xem có request đến EmailJS không
- Xem EmailJS Dashboard > Logs để track emails

### Rate Limits (Free plan):
- 200 emails/tháng
- 50 emails/ngày
- Đủ cho portfolio website

## 🚀 Features đã implement:

✅ **Form validation** - Required fields  
✅ **Loading states** - Spinner khi gửi  
✅ **Success/Error handling** - Messages cho user  
✅ **Form reset** - Clear form sau khi gửi thành công  
✅ **Responsive design** - Hoạt động trên mọi device  
✅ **Config file** - Dễ dàng thay đổi settings  

## 📝 Email Template Variables:

Khi user gửi form, bạn sẽ nhận email với format:
```
From: [Tên người gửi] <[email người gửi]>
Subject: Portfolio Contact: [subject từ form]

Nội dung sẽ bao gồm:
- Tên người gửi
- Email người gửi  
- Subject
- Message đầy đủ
```

Bây giờ contact form đã sẵn sàng nhận tin nhắn thực tế! 🎉

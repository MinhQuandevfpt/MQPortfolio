# 🔐 Environment Variables Setup

## Tại sao sử dụng Environment Variables?

✅ **An toàn**: Keys không bị lộ khi push code lên GitHub  
✅ **Linh hoạt**: Có thể thay đổi keys mà không sửa code  
✅ **Best practice**: Chuẩn trong industry  
✅ **Team-friendly**: Mỗi developer có keys riêng  

## 📁 File Structure

```
Portfolio/
├── .env                 # ← Keys thật (GIT IGNORE)
├── .env.example         # ← Template public
├── .gitignore           # ← Đã thêm .env vào ignore
└── src/config/emailjs.js # ← Sử dụng env variables
```

## 🚀 Cách Setup

### 1. Copy template:
```bash
cp .env.example .env
```

### 2. Điền keys thật vào .env:
```env
VITE_EMAILJS_SERVICE_ID=service_9cli3wd
VITE_EMAILJS_TEMPLATE_ID=template_m2z1snv
VITE_EMAILJS_PUBLIC_KEY=4_mio_D_vSty0NlYZ
```

### 3. Restart dev server:
```bash
npm run dev
```

## 🛡️ Security Features

### ✅ Git Protection:
- `.env` được ignore bởi Git
- Chỉ `.env.example` được track
- Keys không bao giờ lên GitHub

### ✅ Runtime Validation:
- Check keys khi app khởi động
- Error message rõ ràng nếu thiếu keys
- Graceful handling khi config sai

### ✅ Development Safety:
- Console warnings nếu missing config
- Form vẫn hoạt động (chỉ không gửi email)
- Clear error messages cho developers

## 🔄 Deployment

### Vercel:
```bash
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID  
vercel env add VITE_EMAILJS_PUBLIC_KEY
```

### Netlify:
Site Settings → Environment Variables → Add:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## 🚨 Important Notes

1. **KHÔNG commit file .env**
2. **Luôn dùng VITE_ prefix** cho Vite projects
3. **Restart server** sau khi thay đổi .env
4. **Share .env.example** với team, KHÔNG share .env

## 🔍 Troubleshooting

### Lỗi "EmailJS not configured":
1. Check file `.env` có tồn tại không
2. Check các tên biến có đúng không
3. Restart `npm run dev`

### Console errors:
- Mở DevTools Console
- Tìm messages từ emailjs.js
- Follow hướng dẫn trong error messages

Bây giờ keys của bạn được bảo vệ 100%! 🛡️

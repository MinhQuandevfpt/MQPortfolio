# Projects Section

## Cấu trúc thư mục:
- `ProjectsMain.jsx` - Component chính của phần projects
- `ProjectsText.jsx` - Tiêu đề và mô tả phần projects
- `AllProjects.jsx` - Hiển thị tất cả projects (Featured và Other)
- `SingleProject.jsx` - Component cho từng project riêng lẻ
- `ProjectsStats.jsx` - Thống kê về projects

## Cách sử dụng:

### 1. Thêm projects mới:
Chỉnh sửa mảng `projects` trong file `AllProjects.jsx`:

```javascript
{
    title: "Tên Project",
    description: "Mô tả project...",
    image: "/images/projects/project-name.jpg", // Đặt ảnh trong public/images/projects/
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/yourusername/repo",
    featured: true // true nếu muốn hiển thị trong Featured Projects
}
```

### 2. Thêm ảnh projects:
- Đặt ảnh trong thư mục `public/images/projects/`
- Kích thước khuyến nghị: 800x600px hoặc tỷ lệ 4:3
- Format: JPG, PNG, WebP

### 3. Tùy chỉnh thống kê:
Chỉnh sửa mảng `stats` trong file `ProjectsStats.jsx`

## Features:
- ✅ Responsive design (Desktop, Tablet, Mobile)
- ✅ Chia thành Featured Projects và Other Projects
- ✅ Hover effects và animations
- ✅ Links đến live demo và source code
- ✅ Technology tags
- ✅ Error handling cho ảnh
- ✅ Dark mode support
- ✅ Smooth scrolling navigation
- ✅ Project statistics section

## Responsive Breakpoints:
- Desktop (lg): 1024px+
- Tablet (md): 768px+
- Mobile (sm): 640px+

# 📍 Google Maps Integration

## Tính năng Contact Links

### 📧 Email:
- **Link**: `mailto:quankontum55555@gmail.com`
- **Action**: Mở ứng dụng email mặc định
- **Target**: `_self` (cùng tab)

### 📞 Phone:
- **Link**: `tel:+84342065777`
- **Action**: Mở ứng dụng gọi điện (mobile) hoặc app gọi (desktop)
- **Target**: `_self` (cùng tab)

### 📍 Location:
- **Link**: Google Maps URL với tọa độ cụ thể
- **Action**: Mở Google Maps trong tab mới
- **Target**: `_blank` (tab mới)
- **Features**: Icon ↗ để chỉ ra external link

## 🗺️ Cách tùy chỉnh Location

### 1. Sử dụng locations có sẵn:
```javascript
import { locations } from '../../utils/maps'

// Ho Chi Minh City
locations.hoChiMinhCity.url

// District 1
locations.district1.url
```

### 2. Tạo custom location:
```javascript
import { createGoogleMapsUrl } from '../../utils/maps'

// Chỉ với tên địa chỉ
const url = createGoogleMapsUrl("Landmark 81, Ho Chi Minh City")

// Với tọa độ chính xác
const url = createGoogleMapsUrl("Your Address", 10.7758439, 106.7017555)
```

### 3. Cập nhật contactDetails:
```javascript
{
  icon: <FaMapMarkerAlt className="text-2xl" />,
  title: "Location",
  info: "Your Custom Address",
  link: "https://www.google.com/maps/...",
  external: true
}
```

## 🔧 Lấy tọa độ của địa chỉ

### Cách 1: Google Maps
1. Mở Google Maps
2. Tìm địa chỉ của bạn
3. Right-click → "What's here?"
4. Copy tọa độ từ popup

### Cách 2: Google Maps URL
1. Tìm địa chỉ trên Google Maps
2. Click "Share" → "Embed a map"
3. Copy tọa độ từ URL

### Cách 3: GPS apps
- Sử dụng app GPS trên điện thoại
- Đứng tại địa chỉ và lấy tọa độ

## 📱 Behavior trên các thiết bị

### Desktop:
- **Email**: Mở Outlook/Mail app
- **Phone**: Mở Skype/Teams/calling app
- **Location**: Mở Google Maps trong browser

### Mobile:
- **Email**: Mở Gmail/Mail app
- **Phone**: Mở Phone app để gọi trực tiếp
- **Location**: Mở Google Maps app với directions

## 🎨 UI Features

### Visual Indicators:
- ✅ **Gradient icons** cho mỗi contact method
- ✅ **Hover animations** (scale, translate)
- ✅ **External link icon** (↗) cho Google Maps
- ✅ **Color transitions** khi hover

### Accessibility:
- ✅ **Proper href attributes** cho screen readers
- ✅ **Semantic HTML** với anchor tags
- ✅ **Target="_blank"** với rel="noopener noreferrer"

## 🔄 Customization Options

### Thêm contact method mới:
```javascript
{
  icon: <FaWhatsapp className="text-2xl" />,
  title: "WhatsApp",
  info: "+84 342 065 777",
  link: "https://wa.me/84342065777",
  external: true
}
```

### Thay đổi styling:
- Colors: Sửa gradient trong `bg-gradient-to-r`
- Animations: Điều chỉnh `transition-all duration-300`
- Layout: Thay đổi `space-x-4` và `p-4`

Bây giờ contact section hoạt động hoàn hảo với mọi loại liên hệ! 🎯

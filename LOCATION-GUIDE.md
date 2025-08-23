# 🗺️ Hướng dẫn thay đổi Location

## 📍 Cách thay đổi địa chỉ cực kỳ đơn giản!

### File cần sửa: `/src/config/personal.js`

## 🚀 Cách 1: Thành phố có sẵn

```javascript
// Hiện tại (Ho Chi Minh City)
export const myLocation = locations.current

// Đổi sang Hà Nội
export const myLocation = locations.hanoi

// Đổi sang Đà Nẵng  
export const myLocation = locations.danang

// Đổi sang Cần Thơ
export const myLocation = locations.cantho
```

## 🎯 Cách 2: Địa chỉ bất kỳ

```javascript
// Thành phố khác
export const myLocation = locations.custom("Nha Trang, Việt Nam")
export const myLocation = locations.custom("Vũng Tàu, Việt Nam") 
export const myLocation = locations.custom("Hải Phòng, Việt Nam")

// Địa chỉ chi tiết
export const myLocation = locations.custom("Landmark 81, Ho Chi Minh City")
export const myLocation = locations.custom("123 Nguyễn Huệ, Quận 1, TP.HCM")

// Địa chỉ quốc tế
export const myLocation = locations.custom("New York, USA")
export const myLocation = locations.custom("Tokyo, Japan")
```

## 🎯 Cách 3: Với tọa độ chính xác

```javascript
// Landmark 81 với tọa độ chính xác
export const myLocation = locations.custom(
  "Landmark 81, Ho Chi Minh City",
  10.7943,  // latitude
  106.7212  // longitude
)

// Nhà của bạn với GPS
export const myLocation = locations.custom(
  "Nhà của tôi", 
  10.123456,  // latitude từ GPS
  106.789012  // longitude từ GPS
)
```

## 📝 Ví dụ thực tế:

### Scenario 1: Bạn chuyển từ HCM về Hà Nội
```javascript
// Từ:
export const myLocation = locations.current  // Ho Chi Minh City

// Thành:
export const myLocation = locations.hanoi    // Hà Nội
```

### Scenario 2: Bạn ở Nha Trang
```javascript
export const myLocation = locations.custom("Nha Trang, Khánh Hòa, Việt Nam")
```

### Scenario 3: Bạn có địa chỉ cụ thể
```javascript
export const myLocation = locations.custom("Saigon Centre, Quận 1, TP.HCM")
```

## 🔧 Làm sao để lấy tọa độ?

### Cách 1: Google Maps
1. Mở Google Maps
2. Tìm địa chỉ của bạn  
3. Right-click → "What's here?"
4. Copy lat, lng từ popup

### Cách 2: GPS trên điện thoại
1. Mở app Maps/GPS
2. Đứng tại địa chỉ
3. Copy tọa độ hiển thị

## ✨ Kết quả:

Sau khi thay đổi:
1. **Save file** `/src/config/personal.js`
2. **Refresh browser** 
3. **Click vào Location** → Google Maps sẽ mở đúng địa chỉ mới! 

## 🎯 Lợi ích của hệ thống này:

✅ **Không cần code** - Chỉ sửa 1 dòng  
✅ **Linh hoạt 100%** - Bất kỳ địa chỉ nào  
✅ **Tự động** - Google Maps tự tìm location  
✅ **Chính xác** - Có thể dùng GPS coordinates  
✅ **Dễ maintain** - Tất cả config ở một chỗ  

Bây giờ bạn có thể thay đổi location trong 30 giây! 🚀

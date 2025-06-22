# 🍜 Bống Xinh - Vietnamese Food Delivery

![Bống Xinh Logo](https://img.shields.io/badge/Bống%20Xinh-Vietnamese%20Food-FF6B35?style=for-the-badge&logo=restaurant&logoColor=white)

**Bống Xinh** là một website đặt hàng thức ăn trực tuyến chuyên về món ăn truyền thống Việt Nam, tập trung vào **Trà Tắc** và **Mì Đặc Biệt**.

## ✨ Tính năng nổi bật

### 🎨 **Giao diện hiện đại**
- Design responsive, tương thích mọi thiết bị
- Màu sắc chuyên nghiệp: Primary (#FF6B35), Secondary (#2E294E)
- Typography đẹp với font Inter
- UI/UX tối ưu cho trải nghiệm người dùng

### 🎬 **Hiệu ứng mượt mà**
- **Scroll animations** với React Spring
- **Intersection Observer** cho performance tối ưu
- **Staggered animations** cho menu items
- **Dynamic header** thay đổi theo scroll
- **Image modal** với backdrop blur
- **Smooth transitions** 60fps

### 📱 **Tính năng tương tác**
- **Fixed Call Button** - Gọi ngay dễ dàng
- **Image lightbox** - Xem ảnh món ăn chi tiết
- **Smooth scroll navigation** - Điều hướng mượt mà
- **Contact form** - Gửi tin nhắn trực tiếp
- **Responsive design** - Hoạt động trên mọi thiết bị

## 🛠️ Công nghệ sử dụng

### **Frontend Framework**
- **Next.js 15.3.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety

### **Styling & Animation**
- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **React Spring 10.0.1** - Physics-based animations
- **React Intersection Observer 9.16.0** - Viewport detection

### **Development Tools**
- **PostCSS 8.5.6** - CSS preprocessing
- **Autoprefixer 10.4.21** - CSS vendor prefixes
- **ESLint** - Code linting

## 🚀 Cài đặt và chạy dự án

### **Yêu cầu hệ thống**
- Node.js 18+ 
- npm hoặc yarn
- Git

### **Clone repository**
```bash
git clone https://github.com/huyduc1602/bong-xinh-food-delivery.git
cd bong-xinh-food-delivery
```

### **Cài đặt dependencies**
```bash
npm install
# hoặc
yarn install
```

### **Chạy development server**
```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📁 Cấu trúc thư mục

```
bong-xinh-food-delivery/
├── public/
│   └── images/
│       ├── tra-tac.jpeg    # Hình ảnh trà tắc
│       └── mi.jpeg         # Hình ảnh mì đặc biệt
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Trang chủ
│   └── styles/
│       └── globals.css     # Global styles
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.ts      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Các trang và sections

### **Homepage Sections**
1. **Header** - Navigation với sticky effect
2. **Hero** - Giới thiệu thương hiệu với animations
3. **Menu** - Showcase các món ăn đặc biệt
4. **About** - Câu chuyện về Bống Xinh
5. **Call to Action** - Kêu gọi đặt hàng
6. **Contact** - Thông tin liên hệ và form
7. **Footer** - Links và thông tin bổ sung

### **Tính năng đặc biệt**
- **Image Modal**: Click ảnh món ăn để xem full-screen
- **Dynamic Header**: Thay đổi style khi scroll
- **Smooth Animations**: Fade in effects khi scroll
- **Call Button**: Fixed position, luôn có thể gọi

## 🎨 Design System

### **Colors**
```css
Primary: #FF6B35    /* Orange chủ đạo */
Secondary: #2E294E  /* Purple đậm */
Accent: #1B998B     /* Teal accent */
Light: #F5F5F5      /* Background sáng */
Dark: #1A1A1A       /* Text đậm */
```

### **Typography**
- **Font family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### **Animations**
- **Duration**: 300ms - 600ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Performance**: GPU accelerated với transform3d

## 📋 Scripts có sẵn

```bash
# Development
npm run dev          # Chạy development server

# Production
npm run build        # Build cho production
npm run start        # Chạy production server

# Code Quality
npm run lint         # Chạy ESLint
```

## 🎉 Demo

**Live Demo**: [https://your-demo-link.vercel.app](https://your-demo-link.vercel.app)

### **Screenshots**

#### 🏠 **Homepage Hero**
- Hero section với gradient background
- Typography đẹp và call-to-action buttons

#### 🍜 **Menu Section**
- Grid layout responsive
- Image hover effects
- Modal xem ảnh chi tiết

#### 📞 **Contact Section**
- Form liên hệ đẹp
- Thông tin contact đầy đủ
- Animations staggered

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm thông tin.

## 👥 Tác giả

**Hoàng Huy Đức**
- GitHub: [@hoanghuyduc](https://github.com/huyduc1602)
- Email: huyduc1602@gmail.com

## 🙏 Acknowledgments

- **Next.js team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework  
- **React Spring** - Beautiful animations library
- **Vercel** - Deployment platform

---

## 📞 Liên hệ

**Bống Xinh Restaurant**
- 📍 Address: An Đào, Trâu Quỳ, Gia Lâm, Hà Nội
- ☎️ Phone: +84 123 456 789
- ✉️ Email: contact@buihuyen.com
- 🕒 Hours: 8:00 - 22:00 hàng ngày

---

<div align="center">
  <strong>🍜 Khám phá hương vị đậm đà của trà tắc và mì truyền thống Việt Nam! 🍜</strong>
</div>

#!/bin/bash

# 🎯 Git Setup Script for Bống Xinh Project
# Tự động khởi tạo Git repository và thực hiện commit đầu tiên

echo "🚀 Khởi tạo Git repository cho Bống Xinh..."

# Kiểm tra xem đã có git chưa
if [ -d ".git" ]; then
    echo "⚠️  Git repository đã tồn tại!"
    read -p "Bạn có muốn tiếp tục? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    # Khởi tạo git repository
    git init
    echo "✅ Đã khởi tạo Git repository"
fi

# Thêm tất cả files vào staging
echo "📁 Thêm files vào staging..."
git add .

# Kiểm tra status
echo "📋 Git status:"
git status --short

# Commit đầu tiên
echo "💾 Thực hiện commit đầu tiên..."
git commit -m "🎉 Initial commit: Vietnamese Food Delivery Website

✨ Features implemented:
- Next.js 15 with TypeScript and App Router
- Tailwind CSS 4 for modern styling
- React Spring animations for smooth interactions
- Responsive design for all devices
- Image modal functionality with backdrop blur
- Smooth scroll effects and viewport animations
- Contact form with validation
- Professional UI/UX with custom color scheme
- SEO optimized with proper metadata
- Performance optimized with lazy loading

🎯 Tech Stack:
- Frontend: Next.js, React 19, TypeScript
- Styling: Tailwind CSS 4, Custom CSS animations
- Animations: React Spring, Intersection Observer
- Images: Next.js Image optimization
- Build: PostCSS, Autoprefixer

🍜 Restaurant Focus:
- Trà Tắc (Lemon Tea) - 15,000đ
- Mì Đặc Biệt (Special Noodles) - 30,000đ
- Location: An Đào, Trâu Quỳ, Gia Lâm, Hà Nội"

echo "✅ Commit đầu tiên hoàn thành!"

# Hướng dẫn thêm remote repository
echo ""
echo "🔗 Để thêm remote repository, chạy lệnh:"
echo "git remote add origin https://github.com/YOUR_USERNAME/do-an-bui-huyen.git"
echo "git branch -M main"
echo "git push -u origin main"

echo ""
echo "📚 Đọc thêm hướng dẫn Git trong file: GIT_INSTRUCTIONS.md"
echo "📖 Đọc README để hiểu về dự án: README.md"

echo ""
echo "🎉 Setup hoàn thành! Happy coding! 🎉"

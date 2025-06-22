# 🔧 Git Instructions - Bống Xinh Project

Hướng dẫn sử dụng Git cho dự án **Bống Xinh Vietnamese Food Delivery**

## 🚀 Khởi tạo Repository

### **1. Khởi tạo Git repository**
```bash
# Khởi tạo git trong thư mục dự án
git init

# Thêm remote repository (thay your-username bằng username thực tế)
git remote add origin https://github.com/your-username/do-an-bui-huyen.git
```

### **2. Commit đầu tiên**
```bash
# Thêm tất cả files vào staging
git add .

# Commit với message mô tả
git commit -m "🎉 Initial commit: Vietnamese Food Delivery Website

✨ Features:
- Next.js 15 with TypeScript
- Tailwind CSS 4 for styling
- React Spring animations
- Responsive design
- Image modal functionality
- Smooth scroll effects
- Contact form
- Professional UI/UX"

# Push lên remote repository
git push -u origin main
```

## 🌟 Workflow Development

### **Git Flow Pattern**

#### **1. Feature Development**
```bash
# Tạo branch mới cho feature
git checkout -b feature/menu-enhancement
git checkout -b feature/contact-form
git checkout -b feature/animations
git checkout -b hotfix/image-loading

# Làm việc và commit
git add .
git commit -m "✨ Add image modal functionality"

# Push feature branch
git push origin feature/menu-enhancement
```

#### **2. Commit Message Convention**
```bash
# ✨ New feature
git commit -m "✨ Add smooth scroll animations"

# 🐛 Bug fix  
git commit -m "🐛 Fix image loading issue in menu section"

# 💄 UI/Style changes
git commit -m "💄 Improve button hover effects"

# ⚡ Performance improvements
git commit -m "⚡ Optimize image loading with lazy loading"

# 🎨 Code structure
git commit -m "🎨 Refactor component structure"

# 📱 Responsive design
git commit -m "📱 Improve mobile responsiveness"

# 🔧 Configuration
git commit -m "🔧 Update Tailwind config for custom colors"

# 📝 Documentation
git commit -m "📝 Update README with deployment instructions"
```

## 🔄 Daily Development Commands

### **Cập nhật code từ remote**
```bash
# Pull latest changes từ main branch
git pull origin main

# Fetch tất cả branches
git fetch --all

# Merge main vào feature branch
git checkout feature/your-feature
git merge main
```

### **Commit và Push changes**
```bash
# Xem status hiện tại
git status

# Add specific files
git add src/app/page.tsx
git add src/styles/globals.css

# Hoặc add tất cả
git add .

# Commit với message mô tả rõ ràng
git commit -m "💄 Enhance menu card animations and hover effects"

# Push lên remote
git push origin feature/your-feature
```

### **Merge Feature vào Main**
```bash
# Checkout về main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge feature branch
git merge feature/menu-enhancement

# Push merged code
git push origin main

# Xóa feature branch đã merge (optional)
git branch -d feature/menu-enhancement
git push origin --delete feature/menu-enhancement
```

## 🎯 Các Scenarios Thường Gặp

### **1. Tạo branch mới từ main**
```bash
git checkout main
git pull origin main
git checkout -b feature/new-animation
```

### **2. Stash changes tạm thời**
```bash
# Lưu changes tạm thời
git stash

# Xem list stash
git stash list

# Apply stash gần nhất
git stash pop

# Apply stash cụ thể
git stash apply stash@{0}
```

### **3. Undo changes**
```bash
# Undo file chưa stage
git checkout -- src/app/page.tsx

# Undo tất cả changes chưa stage
git checkout .

# Undo last commit (giữ lại changes)
git reset HEAD~1

# Undo last commit (xóa hoàn toàn)
git reset --hard HEAD~1
```

### **4. View commit history**
```bash
# Xem log đẹp
git log --oneline --graph --decorate

# Xem changes của commit cụ thể
git show [commit-hash]

# Xem difference giữa branches
git diff main feature/menu-enhancement
```

## 📋 Pre-commit Checklist

Trước khi commit, hãy kiểm tra:

### **✅ Code Quality**
```bash
# Chạy linter
npm run lint

# Build thành công
npm run build

# Test trên development
npm run dev
```

### **✅ Files to commit**
```bash
# Kiểm tra files sẽ được commit
git diff --cached

# Đảm bảo không commit files không cần thiết
# (đã có trong .gitignore)
```

### **✅ Commit message**
- Sử dụng emoji cho dễ đọc
- Mô tả rõ ràng thay đổi
- Không quá dài (< 72 characters cho title)

## 🚀 Deployment với Git

### **Production Deployment**
```bash
# Ensure on main branch
git checkout main
git pull origin main

# Create release tag
git tag -a v1.0.0 -m "🚀 Release v1.0.0: Initial production release"
git push origin v1.0.0

# Deploy (if using Vercel)
# Vercel sẽ tự động deploy khi push lên main branch
```

### **Staging Deployment**
```bash
# Create staging branch
git checkout -b staging
git push origin staging

# Vercel sẽ tạo staging URL cho branch này
```

## 🔍 Troubleshooting

### **Merge Conflicts**
```bash
# Khi có conflict, xem files bị conflict
git status

# Edit files để resolve conflicts
# Sau đó add và commit
git add .
git commit -m "🔧 Resolve merge conflicts"
```

### **Large Files (.gitignore không hoạt động)**
```bash
# Remove from git cache
git rm -r --cached node_modules/
git rm -r --cached .next/

# Add to .gitignore và commit
git add .gitignore
git commit -m "🔧 Fix .gitignore for node_modules and .next"
```

### **Reset to specific commit**
```bash
# Soft reset (giữ lại changes)
git reset --soft [commit-hash]

# Hard reset (xóa tất cả changes)
git reset --hard [commit-hash]
```

## 📚 Best Practices

### **1. Branch Naming**
```bash
feature/menu-enhancement
feature/contact-form-validation
hotfix/image-loading-bug
refactor/component-structure
style/responsive-improvements
```

### **2. Commit Frequency**
- Commit thường xuyên với changes nhỏ
- Mỗi commit nên có một mục đích rõ ràng
- Không commit code đang broken

### **3. Remote Repository**
- Luôn pull trước khi push
- Sử dụng feature branches
- Code review trước khi merge vào main

---

## 🤝 Team Collaboration

### **Code Review Process**
```bash
# Tạo Pull Request trên GitHub
# 1. Push feature branch
git push origin feature/your-feature

# 2. Tạo PR trên GitHub UI
# 3. Request review từ team members
# 4. Merge sau khi approved
```

### **Sync với team**
```bash
# Fetch all remote branches
git fetch --all

# List all branches (local + remote)
git branch -a

# Checkout branch của team member để review
git checkout origin/feature/teammate-feature
```

---

<div align="center">
  <strong>🎯 Happy Coding with Git! 🎯</strong>
</div>

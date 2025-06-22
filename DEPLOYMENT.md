# 🚀 Deployment Guide - Bống Xinh

Hướng dẫn deploy website **Bống Xinh Vietnamese Food Delivery** lên các platforms phổ biến.

## 🌐 Vercel (Recommended)

### **Quick Deploy**
```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy từ thư mục dự án
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your personal account
# - Link to existing project? No
# - Project name: do-an-bui-huyen
# - Directory: ./
# - Override settings? No
```

### **Automatic Deployment với GitHub**
1. Push code lên GitHub repository
2. Truy cập [vercel.com](https://vercel.com)
3. Connect với GitHub account
4. Import repository `do-an-bui-huyen`
5. Vercel sẽ tự động detect Next.js và deploy

### **Custom Domain**
```bash
# Thêm custom domain
vercel domains add yourdomain.com
vercel domains add www.yourdomain.com

# Point domain to Vercel
# Add DNS records:
# Type: A, Name: @, Value: 76.76.19.61
# Type: CNAME, Name: www, Value: cname.vercel-dns.com
```

## 🔥 Netlify

### **Deploy từ Git**
```bash
# Build command
npm run build

# Publish directory
out

# Environment variables (nếu có)
# NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### **Netlify.toml Configuration**
```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## ☁️ AWS Amplify

### **Setup**
```bash
# Cài đặt Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure

# Initialize project
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

## 🐳 Docker Deployment

### **Dockerfile**
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]
```

### **Deploy với Docker**
```bash
# Build image
docker build -t bong-xinh-app .

# Run container
docker run -p 3000:3000 bong-xinh-app

# Deploy to DockerHub
docker tag bong-xinh-app yourusername/bong-xinh-app
docker push yourusername/bong-xinh-app
```

## 🌊 DigitalOcean App Platform

### **App Spec (app.yaml)**
```yaml
name: bong-xinh
services:
- name: web
  source_dir: /
  github:
    repo: your-username/do-an-bui-huyen
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  routes:
  - path: /
```

## 📊 Performance Optimization

### **Before Deploy Checklist**

#### **1. Build Optimization**
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Optimize images
# Already using Next.js Image component ✅
```

#### **2. Environment Variables**
```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://bongxinh.com
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
```

#### **3. SEO & Meta Tags**
```typescript
// src/app/layout.tsx
export const metadata = {
  title: 'Bống Xinh - Vietnamese Food Delivery',
  description: 'Khám phá hương vị đậm đà của trà tắc và mì truyền thống Việt Nam',
  keywords: 'vietnamese food, tra tac, mi dac biet, food delivery',
  openGraph: {
    title: 'Bống Xinh - Vietnamese Food Delivery',
    description: 'Đặt hàng trực tuyến - Trà tắc và Mì đặc biệt',
    url: 'https://bongxinh.com',
    siteName: 'Bống Xinh',
    images: ['/images/og-image.jpg'],
  }
}
```

## 🔍 Monitoring & Analytics

### **Google Analytics**
```typescript
// Install gtag
npm install gtag

// Add to layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
      <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
    </html>
  )
}
```

### **Vercel Analytics**
```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🚀 Production URLs

### **Live Sites**
- **Production**: https://bongxinh.vercel.app
- **Staging**: https://bongxinh-staging.vercel.app
- **Preview**: Auto-generated per PR

### **Status Pages**
- **Vercel**: https://vercel.com/status
- **Netlify**: https://www.netlifystatus.com

## 🔐 Security

### **Headers Configuration**
```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### **HTTPS Redirect**
```javascript
// Automatic với Vercel, Netlify
// Custom domains sẽ tự động có SSL certificate
```

---

## 📞 Support

Nếu gặp vấn đề khi deploy:

1. **Check build logs** trên platform
2. **Verify environment variables**
3. **Test local build**: `npm run build && npm start`
4. **Check Next.js docs**: https://nextjs.org/docs/deployment

---

<div align="center">
  <strong>🚀 Happy Deploying! 🚀</strong>
</div>

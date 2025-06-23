# 🤖 GitHub Copilot Instructions for Bống Xinh Food Delivery Project

## 📋 Project Context for AI / Ngữ cảnh dự án cho AI

**Bống Xinh** is a Vietnamese food delivery website built with modern web technologies. When providing code suggestions or fixes, GitHub Copilot should understand this context and maintain consistency with the project's architecture and coding standards.

**Bống Xinh** là một website đặt hàng thức ăn Việt Nam được xây dựng với các công nghệ web hiện đại. Khi đưa ra gợi ý code hoặc sửa lỗi, GitHub Copilot cần hiểu ngữ cảnh này và duy trì tính nhất quán với kiến trúc và tiêu chuẩn coding của dự án.

## 🛠️ Technology Stack / Công nghệ sử dụng

### Core Technologies / Công nghệ cốt lõi
- **Next.js 15.3.4** - React framework with server-side rendering / Framework React với render phía server
- **React 19.1.0** - Frontend library / Thư viện frontend
- **TypeScript 5.8.3** - Type safety / Đảm bảo kiểu dữ liệu
- **Tailwind CSS 4.1.10** - Utility-first CSS framework / Framework CSS tiện ích

### Animation & UI Libraries / Thư viện hoạt hình và giao diện
- **@react-spring/web 10.0.1** - Spring-physics based animations / Hoạt hình dựa trên vật lý lò xo
- **react-intersection-observer 9.16.0** - Efficient scroll-triggered animations / Hoạt hình kích hoạt khi cuộn hiệu quả

### Build Tools / Công cụ build
- **PostCSS 8.5.6** - CSS processing / Xử lý CSS
- **Autoprefixer 10.4.21** - CSS vendor prefixes / Tiền tố CSS của các trình duyệt

## 🛠️ Technology Stack & Coding Guidelines / Công nghệ và hướng dẫn coding

### Core Technologies / Công nghệ cốt lõi
- **Next.js 15.3.4** - App Router, SSR, file-based routing / App Router, SSR, routing dựa trên file
- **React 19.1.0** - Functional components, hooks, concurrent features / Component function, hooks, tính năng concurrent
- **TypeScript 5.8.3** - Strict typing, interface definitions / Typing nghiêm ngặt, định nghĩa interface
- **Tailwind CSS 4.1.10** - Utility classes, responsive design / Class tiện ích, thiết kế responsive

### Animation & UI Libraries / Thư viện hoạt hình và giao diện
- **@react-spring/web 10.0.1** - Physics-based animations, smooth transitions / Hoạt hình dựa trên vật lý, chuyển tiếp mượt
- **react-intersection-observer 9.16.0** - Scroll-triggered animations, lazy loading / Hoạt hình khi cuộn, lazy loading

## 🎯 AI Code Generation Guidelines / Hướng dẫn tạo code cho AI

### 1. Component Structure / Cấu trúc Component

```typescript
// ✅ PREFERRED: Functional components with TypeScript / ƯU TIÊN: Component function với TypeScript
interface MenuCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  isVegetarian?: boolean;
  spicyLevel?: 1 | 2 | 3;
}

export const MenuCard: React.FC<MenuCardProps> = ({ 
  id, 
  title, 
  price, 
  image, 
  description,
  isVegetarian = false,
  spicyLevel = 1 
}) => {
  // Component logic here / Logic component ở đây
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* JSX content / Nội dung JSX */}
    </div>
  );
};

// ❌ AVOID: Class components / TRÁNH: Class component
```

### 2. Styling Conventions / Quy ước styling

```typescript
// ✅ PREFERRED: Tailwind utility classes / ƯU TIÊN: Class tiện ích Tailwind
<div className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
  {/* Content / Nội dung */}
</div>

// ✅ CONDITIONAL STYLING: Use template literals / STYLING CÓ ĐIỀU KIỆN: Sử dụng template literals
<button 
  className={`
    px-4 py-2 rounded-md font-medium transition-all duration-200
    ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}
    ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
  `}
>

// ❌ AVOID: Inline styles or CSS modules / TRÁNH: Inline style hoặc CSS modules
```

### 3. Animation Patterns / Mẫu hoạt hình

```typescript
// ✅ PREFERRED: React Spring for animations / ƯU TIÊN: React Spring cho hoạt hình
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export const AnimatedCard: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 300, friction: 30 }
  });

  return (
    <animated.div ref={ref} style={animation}>
      {/* Animated content / Nội dung có hoạt hình */}
    </animated.div>
  );
};

// ✅ STAGGERED ANIMATIONS: For lists / HOẠT HÌNH THEO CẤP: Cho danh sách
const items = useTrail(menuItems.length, {
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateY(0px)' : 'translateY(20px)',
  config: { tension: 300, friction: 30 }
});
```

### 4. Data Fetching & State Management / Lấy dữ liệu và quản lý state

```typescript
// ✅ PREFERRED: Next.js patterns / ƯU TIÊN: Mẫu Next.js
// Server Components for data fetching / Server Component cho việc lấy dữ liệu
export default async function MenuPage() {
  const menuItems = await getMenuItems();
  
  return (
    <div>
      {menuItems.map(item => (
        <MenuCard key={item.id} {...item} />
      ))}
    </div>
  );
}

// Client Components for interactivity / Client Component cho tương tác
'use client';
import { useState, useEffect } from 'react';

export const InteractiveComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<MenuData[]>([]);

  // Use proper loading states / Sử dụng trạng thái loading đúng cách
  const handleFetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/menu');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    } finally {
      setIsLoading(false);
    }
  };
};
```

## 🎨 Design System Guidelines / Hướng dẫn hệ thống thiết kế

### Color Palette / Bảng màu
```typescript
// Primary colors for Vietnamese food theme / Màu chính cho chủ đề thức ăn Việt Nam
const colors = {
  primary: {
    orange: '#FF6B35',    // Main brand color / Màu thương hiệu chính
    darkOrange: '#E55A2B' // Hover states / Trạng thái hover
  },
  secondary: {
    purple: '#2E294E',    // Text and accents / Văn bản và điểm nhấn
    lightPurple: '#3D3558'
  },
  neutral: {
    white: '#FFFFFF',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      500: '#6B7280',
      700: '#374151',
      900: '#111827'
    }
  },
  accent: {
    green: '#10B981',     // Success states / Trạng thái thành công
    red: '#EF4444',       // Error states / Trạng thái lỗi
    yellow: '#F59E0B'     // Warning states / Trạng thái cảnh báo
  }
};

// ✅ USE IN TAILWIND: Apply these colors / SỬ DỤNG TRONG TAILWIND: Áp dụng các màu này
<button className="bg-orange-500 hover:bg-orange-600 text-white">
<div className="text-purple-900 bg-gray-50">
```

### Typography / Typography
```typescript
// ✅ PREFERRED: Font hierarchy / ƯU TIÊN: Phân cấp font
<h1 className="text-4xl md:text-5xl font-bold text-purple-900">    // Main headings / Tiêu đề chính
<h2 className="text-3xl md:text-4xl font-semibold text-purple-800"> // Section headings / Tiêu đề phần
<h3 className="text-2xl md:text-3xl font-medium text-purple-700">   // Subsection headings / Tiêu đề phụ
<p className="text-base md:text-lg text-gray-700 leading-relaxed">  // Body text / Văn bản nội dung
<span className="text-sm text-gray-500">                            // Small text / Văn bản nhỏ

// ✅ RESPONSIVE TYPOGRAPHY: Always include mobile-first approach / TYPOGRAPHY RESPONSIVE: Luôn bao gồm cách tiếp cận mobile-first
```

### Spacing & Layout / Khoảng cách và bố cục
```typescript
// ✅ CONSISTENT SPACING: Use Tailwind spacing scale / KHOẢNG CÁCH NHẤT QUÁN: Sử dụng thang khoảng cách Tailwind
<div className="p-4 md:p-6 lg:p-8">           // Padding tăng dần theo breakpoint
<section className="mb-8 md:mb-12 lg:mb-16">  // Margin bottom responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> // Grid responsive

// ✅ CONTAINER PATTERNS: Standard container widths / MẪU CONTAINER: Chiều rộng container chuẩn
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

## 🔧 Code Quality Standards / Tiêu chuẩn chất lượng code

### TypeScript Best Practices / Thực hành TypeScript tốt nhất

```typescript
// ✅ STRICT TYPING: Always define proper interfaces / TYPING NGHIÊM NGẶT: Luôn định nghĩa interface đúng cách
interface MenuItem {
  id: string;
  name: string;
  nameVi: string;        // Vietnamese name / Tên tiếng Việt
  price: number;
  image: string;
  category: 'drink' | 'noodle' | 'appetizer' | 'dessert';
  description: string;
  descriptionVi: string; // Vietnamese description / Mô tả tiếng Việt
  ingredients: string[];
  allergens?: string[];
  isSpicy: boolean;
  spicyLevel?: 1 | 2 | 3;
  isVegetarian: boolean;
  isAvailable: boolean;
  prepTime: number;      // in minutes / tính bằng phút
}

// ✅ UTILITY TYPES: Use TypeScript utility types / UTILITY TYPES: Sử dụng utility types của TypeScript
type MenuItemCreate = Omit<MenuItem, 'id'>;
type MenuItemUpdate = Partial<Pick<MenuItem, 'name' | 'price' | 'description' | 'isAvailable'>>;

// ✅ ENUMS: For constants with specific values / ENUMS: Cho hằng số với giá trị cụ thể
enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PREPARING = 'preparing',
  READY = 'ready',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}
```

### Error Handling / Xử lý lỗi

```typescript
// ✅ PROPER ERROR HANDLING: With try-catch and user feedback / XỬ LÝ LỖI ĐÚNG CÁCH: Với try-catch và phản hồi người dùng
const handleOrderSubmit = async (orderData: OrderData) => {
  setIsLoading(true);
  setError(null);
  
  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    
    if (!response.ok) {
      throw new Error(`Order failed: ${response.statusText}`);
    }
    
    const order = await response.json();
    setSuccessMessage('Đơn hàng đã được đặt thành công!');
    return order;
    
  } catch (error) {
    console.error('Order submission error:', error);
    setError(error instanceof Error ? error.message : 'Đã xảy ra lỗi khi đặt hàng');
  } finally {
    setIsLoading(false);
  }
};

// ✅ ERROR BOUNDARIES: For React error handling / ERROR BOUNDARIES: Cho xử lý lỗi React
class ErrorBoundary extends React.Component {
  // Implementation / Triển khai
}
```

### Performance Optimization / Tối ưu hiệu suất

```typescript
// ✅ MEMOIZATION: Use React.memo and useMemo appropriately / MEMOIZATION: Sử dụng React.memo và useMemo phù hợp
const MenuCard = React.memo<MenuCardProps>(({ item }) => {
  const formattedPrice = useMemo(() => 
    new Intl.NumberFormat('vi-VN', { 
      style: 'currency', 
      currency: 'VND' 
    }).format(item.price),
    [item.price]
  );
  
  return <div>{/* Component content / Nội dung component */}</div>;
});

// ✅ LAZY LOADING: For heavy components / LAZY LOADING: Cho component nặng
const MenuModal = lazy(() => import('./MenuModal'));

// ✅ IMAGE OPTIMIZATION: Use Next.js Image component / TỐI ƯU HÌNH ẢNH: Sử dụng component Image của Next.js
import Image from 'next/image';

<Image
  src={item.image}
  alt={item.name}
  width={300}
  height={200}
  priority={isAboveFold}
  className="object-cover rounded-lg"
/>
```

## 🌏 Internationalization Guidelines / Hướng dẫn đa ngôn ngữ

### Vietnamese-English Content / Nội dung Việt-Anh

```typescript
// ✅ BILINGUAL CONTENT: Structure for Vietnamese and English / NỘI DUNG SONG NGỮ: Cấu trúc cho tiếng Việt và tiếng Anh
interface BilingualContent {
  vi: string;
  en: string;
}

interface MenuItemI18n {
  name: BilingualContent;
  description: BilingualContent;
  category: BilingualContent;
}

const menuItem: MenuItemI18n = {
  name: {
    vi: "Trà Tắc Bống Xinh",
    en: "Bong Xinh Lemon Tea"
  },
  description: {
    vi: "Trà tắc tươi mát với hương vị đặc trưng của miền Bắc",
    en: "Refreshing lemon tea with authentic Northern Vietnamese flavor"
  },
  category: {
    vi: "Đồ uống",
    en: "Beverages"
  }
};

// ✅ CURRENCY FORMATTING: Vietnamese Dong / ĐỊNH DẠNG TIỀN TỆ: Đồng Việt Nam
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(price);
};
```

## 🎭 Component Patterns / Mẫu Component

### Common UI Patterns / Mẫu giao diện thường dùng

```typescript
// ✅ LOADING STATES: Consistent loading UI / TRẠNG THÁI LOADING: Giao diện loading nhất quán
const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  
  return (
    <div className={`animate-spin rounded-full border-2 border-orange-500 border-t-transparent ${sizeClasses[size]}`} />
  );
};

// ✅ BUTTON VARIANTS: Consistent button styling / BIẾN THỂ BUTTON: Style button nhất quán
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, size, isLoading, children, onClick }) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2';
  
  const variantClasses = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-300',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-200',
    ghost: 'hover:bg-gray-100 text-gray-700 focus:ring-gray-200'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <LoadingSpinner size="sm" /> : children}
    </button>
  );
};
```

### Form Patterns / Mẫu Form

```typescript
// ✅ FORM VALIDATION: Using react-hook-form or similar / VALIDATION FORM: Sử dụng react-hook-form hoặc tương tự
interface OrderFormData {
  customerName: string;
  phone: string;
  address: string;
  notes?: string;
  items: CartItem[];
}

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    phone: '',
    address: '',
    notes: '',
    items: []
  });
  
  const [errors, setErrors] = useState<Partial<OrderFormData>>({});
  
  const validateForm = (): boolean => {
    const newErrors: Partial<OrderFormData> = {};
    
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Vui lòng nhập tên khách hàng';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Form implementation / Triển khai form
};
```

## 🎨 Animation Guidelines / Hướng dẫn hoạt hình

### Performance-First Animations / Hoạt hình ưu tiên hiệu suất

```typescript
// ✅ ENTRANCE ANIMATIONS: Staggered reveals / HOẠT HÌNH VÀO: Hiện ra theo cấp
const MenuGrid: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const springs = useTrail(items.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 300, friction: 30 },
    delay: (index) => index * 100
  });
  
  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {springs.map((style, index) => (
        <animated.div key={items[index].id} style={style}>
          <MenuCard item={items[index]} />
        </animated.div>
      ))}
    </div>
  );
};

// ✅ MICRO-INTERACTIONS: Hover and focus states / TƯƠNG TÁC NHỎ: Trạng thái hover và focus
const InteractiveCard: React.FC = () => {
  const [{ scale, shadow }, api] = useSpring(() => ({
    scale: 1,
    shadow: 0.1,
    config: { tension: 300, friction: 30 }
  }));
  
  return (
    <animated.div
      style={{
        transform: scale.to(s => `scale(${s})`),
        boxShadow: shadow.to(s => `0 ${s * 20}px ${s * 40}px rgba(0,0,0,${s * 0.3})`)
      }}
      onMouseEnter={() => api.start({ scale: 1.05, shadow: 0.3 })}
      onMouseLeave={() => api.start({ scale: 1, shadow: 0.1 })}
      className="cursor-pointer"
    >
      {/* Card content / Nội dung card */}
    </animated.div>
  );
};
```

## 📱 Responsive Design Patterns / Mẫu thiết kế responsive

### Mobile-First Approach / Cách tiếp cận Mobile-First

```typescript
// ✅ RESPONSIVE GRID: Adaptive layouts / GRID RESPONSIVE: Bố cục thích ứng
<div className="
  grid 
  grid-cols-1          /* Mobile: 1 column / Mobile: 1 cột */
  sm:grid-cols-2       /* Small tablet: 2 columns / Tablet nhỏ: 2 cột */
  md:grid-cols-3       /* Medium tablet: 3 columns / Tablet trung: 3 cột */
  lg:grid-cols-4       /* Desktop: 4 columns / Desktop: 4 cột */
  gap-4 sm:gap-6 lg:gap-8
">

// ✅ RESPONSIVE TYPOGRAPHY: Scale with screen size / TYPOGRAPHY RESPONSIVE: Tỷ lệ theo kích thước màn hình
<h1 className="
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
  font-bold text-center
  leading-tight sm:leading-tight md:leading-tight
">

// ✅ RESPONSIVE SPACING: Appropriate margins and padding / KHOẢNG CÁCH RESPONSIVE: Margin và padding phù hợp
<section className="
  px-4 sm:px-6 lg:px-8 xl:px-12
  py-8 sm:py-12 lg:py-16 xl:py-20
  max-w-7xl mx-auto
">
```

## 🚀 Performance Guidelines / Hướng dẫn hiệu suất

### Bundle Optimization / Tối ưu bundle

```typescript
// ✅ CODE SPLITTING: Dynamic imports for heavy components / CODE SPLITTING: Import động cho component nặng
const HeavyModal = dynamic(() => import('./HeavyModal'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

// ✅ TREE SHAKING: Import only what you need / TREE SHAKING: Chỉ import những gì cần
import { useSpring, useTrail } from '@react-spring/web'; // ✅ Named imports / Import có tên
// import * as ReactSpring from '@react-spring/web';     // ❌ Avoid namespace imports / Tránh import namespace

// ✅ PRELOAD CRITICAL RESOURCES: For above-fold content / PRELOAD TÀI NGUYÊN QUAN TRỌNG: Cho nội dung trên fold
<link rel="preload" href="/images/hero-bg.jpg" as="image" />
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="" />
```

## 🧪 Testing Patterns / Mẫu Testing

### Component Testing / Testing Component

```typescript
// ✅ TESTING UTILITIES: Test user interactions / TIỆN ÍCH TESTING: Test tương tác người dùng
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MenuCard } from './MenuCard';

describe('MenuCard', () => {
  const mockMenuItem = {
    id: '1',
    name: 'Trà Tắc',
    price: 25000,
    image: '/images/tra-tac.jpg',
    description: 'Trà tắc tươi mát'
  };
  
  it('should display menu item information correctly', () => {
    render(<MenuCard item={mockMenuItem} />);
    
    expect(screen.getByText('Trà Tắc')).toBeInTheDocument();
    expect(screen.getByText('25.000 ₫')).toBeInTheDocument();
    expect(screen.getByText('Trà tắc tươi mát')).toBeInTheDocument();
  });
  
  it('should handle click events', async () => {
    const mockOnClick = jest.fn();
    render(<MenuCard item={mockMenuItem} onClick={mockOnClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalledWith(mockMenuItem);
    });
  });
});
```

## 📝 Documentation Standards / Tiêu chuẩn tài liệu

### JSDoc Comments / Comment JSDoc

```typescript
/**
 * MenuCard component displays a food item with image, name, price and description
 * Component MenuCard hiển thị món ăn với hình ảnh, tên, giá và mô tả
 * 
 * @param item - Menu item data / Dữ liệu món ăn
 * @param onClick - Callback when card is clicked / Callback khi card được click
 * @param className - Additional CSS classes / Class CSS bổ sung
 * @returns React functional component / Component function React
 * 
 * @example
 * ```tsx
 * <MenuCard 
 *   item={menuItem} 
 *   onClick={(item) => addToCart(item)}
 *   className="hover:shadow-lg"
 * />
 * ```
 */
export const MenuCard: React.FC<MenuCardProps> = ({ item, onClick, className }) => {
  // Component implementation / Triển khai component
};

/**
 * Formats price in Vietnamese Dong currency
 * Định dạng giá tiền theo đồng Việt Nam
 * 
 * @param price - Price in VND / Giá tiền bằng VND
 * @returns Formatted price string / Chuỗi giá đã định dạng
 */
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};
```

## 🔒 Security Guidelines / Hướng dẫn bảo mật

### Input Validation / Validation Input

```typescript
// ✅ SANITIZE USER INPUT: Always validate and sanitize / LÀM SẠCH INPUT NGƯỜI DÙNG: Luôn validate và làm sạch
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential XSS characters / Xóa ký tự có thể XSS
    .substring(0, 255);   // Limit length / Giới hạn độ dài
};

// ✅ VALIDATE PHONE NUMBERS: Vietnamese phone format / VALIDATE SỐ ĐIỆN THOẠI: Định dạng điện thoại Việt Nam
const validateVietnamesePhone = (phone: string): boolean => {
  const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
  return phoneRegex.test(phone);
};

// ✅ ENVIRONMENT VARIABLES: Never expose sensitive data / BIẾN MÔI TRƯỜNG: Không bao giờ để lộ dữ liệu nhạy cảm
// Use NEXT_PUBLIC_ prefix only for client-side data / Chỉ sử dụng tiền tố NEXT_PUBLIC_ cho dữ liệu client-side
const API_URL = process.env.NEXT_PUBLIC_API_URL; // ✅ Safe for client / An toàn cho client
const SECRET_KEY = process.env.SECRET_KEY;       // ✅ Server-only / Chỉ server
```

---

## 🎯 AI Code Completion Preferences / Ưu tiên hoàn thiện code AI

When GitHub Copilot suggests code, prefer these patterns:
Khi GitHub Copilot gợi ý code, ưu tiên những mẫu này:

1. **TypeScript-first** - Always include proper typing / Luôn bao gồm typing đúng cách
2. **Tailwind CSS** - Use utility classes over custom CSS / Sử dụng utility class thay vì CSS tùy chỉnh  
3. **React Spring** - For animations over CSS transitions / Cho hoạt hình thay vì CSS transition
4. **Next.js patterns** - App Router, Server/Client Components / App Router, Server/Client Component
5. **Performance-conscious** - Memoization, lazy loading, optimization / Memoization, lazy loading, tối ưu hóa
6. **Accessibility** - ARIA labels, semantic HTML / Nhãn ARIA, HTML ngữ nghĩa
7. **Vietnamese context** - Bilingual content, VND currency / Nội dung song ngữ, tiền tệ VND
8. **Mobile-first** - Responsive design patterns / Mẫu thiết kế responsive

---

**Project**: Bống Xinh Food Delivery  
**Tech Stack**: Next.js 15 + React 19 + TypeScript + Tailwind CSS + React Spring  
**Domain**: Vietnamese Food Delivery / Đặt hàng thức ăn Việt Nam  
**Updated**: June 23, 2025 / Cập nhật: 23 tháng 6, 2025

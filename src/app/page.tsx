"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSpring, useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Home() {
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll for header background
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation hooks
    const [heroRef, heroInView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const [menuRef, menuInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const [aboutRef, aboutInView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const [contactRef, contactInView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    // Hero animations with enhanced timing
    const heroAnimation = useSpring({
        opacity: heroInView ? 1 : 0,
        transform: heroInView ? 'translateY(0px)' : 'translateY(50px)',
        config: { mass: 1, tension: 280, friction: 60 },
        delay: 200
    });

    const heroButtonsAnimation = useSpring({
        opacity: heroInView ? 1 : 0,
        transform: heroInView ? 'translateY(0px)' : 'translateY(30px)',
        config: { mass: 1, tension: 280, friction: 60 },
        delay: 600
    });

    // Menu items animation trail
    const menuItems = [
        { src: '/images/tra-tac.jpeg', alt: 'Trà Tắc - Lemon Tea', title: 'Trà Tắc', price: '15,000đ', badge: 'Bán chạy' },
        { src: '/images/mi.jpeg', alt: 'Mì Đặc Biệt - Special Noodles', title: 'Mì Đặc Biệt', price: '30,000đ', badge: 'Đặc sản' }
    ];

    const menuTrail = useTrail(menuItems.length, {
        opacity: menuInView ? 1 : 0,
        transform: menuInView ? 'translateY(0px)' : 'translateY(50px)',
        config: { mass: 1, tension: 280, friction: 60 },
        delay: 200
    });

    // About section animation
    const aboutAnimation = useSpring({
        opacity: aboutInView ? 1 : 0,
        transform: aboutInView ? 'translateY(0px)' : 'translateY(40px)',
        config: { mass: 1, tension: 280, friction: 60 },
        delay: 100
    });

    // Contact section animation
    const contactAnimation = useSpring({
        opacity: contactInView ? 1 : 0,
        transform: contactInView ? 'translateY(0px)' : 'translateY(40px)',
        config: { mass: 1, tension: 280, friction: 60 }
    });

    // Contact info staggered animation
    const contactInfoItems = [
        { icon: '📍', text: 'An Đào, Trâu Quỳ, Gia Lâm, Hà Nội' },
        { icon: '📞', text: '+84 123 456 789' },
        { icon: '✉️', text: 'contact@buihuyen.com' },
        { icon: '🕒', text: 'Mở cửa: 8:00 - 22:00 hàng ngày' }
    ];

    const contactInfoTrail = useTrail(contactInfoItems.length, {
        opacity: contactInView ? 1 : 0,
        transform: contactInView ? 'translateX(0px)' : 'translateX(-20px)',
        config: { mass: 1, tension: 280, friction: 60 },
        delay: contactInView ? 400 : 0
    });

    const openModal = (src: string, alt: string) => {
        setSelectedImage({ src, alt });
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <main>
            {/* Header */}
            <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
                    : 'bg-white/80 backdrop-blur-md shadow-sm py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className={`font-bold text-primary transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'
                            }`}>
                            Bống <span className="text-secondary">Xinh</span>
                        </a>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-dark hover:text-primary transition-colors">
                            Trang chủ
                        </a>
                        <a href="#menu" className="text-dark hover:text-primary transition-colors">
                            Thực đơn
                        </a>
                        <a href="#about" className="text-dark hover:text-primary transition-colors">
                            Về chúng tôi
                        </a>
                        <a href="#contact" className="text-dark hover:text-primary transition-colors">
                            Liên hệ
                        </a>
                    </nav>

                    <div className="hidden md:block">
                        <a href="tel:+84123456789" className={`btn btn-primary transition-all duration-300 ${scrolled ? 'text-sm px-4 py-2' : 'text-base px-5 py-3'
                            }`}>
                            Đặt hàng ngay
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <animated.div style={heroAnimation} className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
                            Bống <span className="text-primary">Xinh</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Khám phá hương vị đậm đà của trà tắc và mì truyền thống Việt Nam
                        </p>
                    </animated.div>
                    <animated.div style={heroButtonsAnimation} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#menu" className="btn btn-primary text-lg px-8 py-4">
                            Xem thực đơn
                        </a>
                        <a href="tel:+84123456789" className="btn btn-secondary text-lg px-8 py-4">
                            Gọi đặt hàng
                        </a>
                    </animated.div>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" ref={menuRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-secondary mb-4">Thực Đơn Đặc Biệt</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Khám phá những món ăn đặc trưng của chúng tôi
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {menuTrail.map((style, index) => {
                            const item = menuItems[index];
                            return (
                                <animated.div
                                    key={index}
                                    style={style}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div
                                        className="relative h-80 overflow-hidden cursor-pointer group"
                                        onClick={() => openModal(item.src, item.alt)}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                                        <div className="absolute top-3 right-3 z-10">
                                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                                {item.badge}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/90 text-gray-800 px-4 py-2 rounded-full font-semibold">
                                                🔍 Xem chi tiết
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-2xl font-bold text-secondary">{item.title}</h3>
                                            <span className="text-2xl font-bold text-primary">{item.price}</span>
                                        </div>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {item.title === 'Trà Tắc'
                                                ? 'Trà tắc tươi, thanh mát với vị chua ngọt hài hòa. Thức uống giải nhiệt tuyệt vời cho ngày nắng nóng.'
                                                : 'Mì tươi được chế biến theo công thức truyền thống, kết hợp với các loại topping đa dạng và nước dùng đậm đà.'
                                            }
                                        </p>

                                        <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
                                            Đặt ngay
                                        </button>
                                    </div>
                                </animated.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" ref={aboutRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <animated.div style={aboutAnimation} className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-secondary mb-8">Về Chúng Tôi</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <h3 className="text-2xl font-semibold text-secondary mb-4">Câu chuyện của Bống Xinh</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Bống Xinh ra đời từ tình yêu với ẩm thực truyền thống Việt Nam. Chúng tôi mong muốn mang đến cho khách hàng những trải nghiệm ẩm thực đậm đà,
                                    gợi nhớ về hương vị tuổi thơ và sự ấm áp của gia đình.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Với đội ngũ đầu bếp giàu kinh nghiệm và nguyên liệu tươi ngon được chọn lọc kỹ càng,
                                    mỗi món ăn tại Bống Xinh đều được chế biến với tất cả tình yêu và sự tận tâm.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl">
                                <div className="text-center">
                                    <div className="text-4xl mb-4">🏪</div>
                                    <h4 className="text-xl font-semibold text-secondary mb-2">Cam kết chất lượng</h4>
                                    <p className="text-gray-600">
                                        Nguyên liệu tươi ngon • Chế biến tận tâm • Phục vụ chu đáo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6">
                            Đặt Hàng Ngay Hôm Nay!
                        </h2>
                        <p className="text-xl mb-8 text-white/80">
                            Gọi ngay để thưởng thức những món ăn ngon nhất tại Bống Xinh
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+84123456789" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                                📞 Gọi ngay: +84 123 456 789
                            </a>
                            <a href="#menu" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
                                Xem thực đơn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" ref={contactRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <animated.div style={contactAnimation} className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-secondary mb-4">Liên Hệ</h2>
                            <p className="text-gray-600 text-lg">
                                Hãy liên hệ với chúng tôi để đặt món hoặc biết thêm thông tin
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold text-secondary mb-6">Thông tin liên hệ</h3>
                                <div className="space-y-4">
                                    {contactInfoTrail.map((style, index) => (
                                        <animated.div
                                            key={index}
                                            style={style}
                                            className="flex items-center space-x-3"
                                        >
                                            <span className="text-primary text-xl">{contactInfoItems[index].icon}</span>
                                            <span className="text-gray-600">{contactInfoItems[index].text}</span>
                                        </animated.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-secondary mb-6">Gửi tin nhắn</h3>
                                <form className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Họ và tên"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Số điện thoại"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder="Tin nhắn"
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                                    >
                                        Gửi tin nhắn
                                    </button>
                                </form>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-secondary text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Bống Xinh</h3>
                            <p className="text-gray-300 mb-4">
                                Mang đến cho bạn những món ăn đậm chất truyền thống Việt Nam với hương vị tuyệt vời.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Trang chủ</a></li>
                                <li><a href="#menu" className="text-gray-300 hover:text-white transition-colors">Thực đơn</a></li>
                                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Về chúng tôi</a></li>
                                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Liên hệ</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
                            <div className="space-y-2 text-gray-300">
                                <p>📍 123 Đường ABC, Quận 1, TP.HCM</p>
                                <p>📞 +84 123 456 789</p>
                                <p>✉️ contact@buihuyen.com</p>
                                <p>🕒 Mở cửa: 8:00 - 22:00 hàng ngày</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Bống Xinh. Tất cả quyền được bảo lưu.</p>
                    </div>
                </div>
            </footer>

            {/* Call Now Button - Fixed Position */}
            <div className="fixed right-6 bottom-6 z-50">
                <a
                    href="tel:+84123456789"
                    className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center space-x-2"
                >
                    <span className="text-2xl">📞</span>
                    <span className="hidden group-hover:block text-sm font-medium">Gọi ngay</span>
                </a>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
                        <div
                            className="relative w-full h-full max-h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain rounded-lg"
                                priority
                            />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-lg transition-all duration-300 hover:scale-110"
                        >
                            ×
                        </button>

                        {/* Image Caption */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg">
                            {selectedImage.alt}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation hooks
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [menuRef, menuInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [contactRef, contactInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Hero animations with enhanced timing
  const heroTitleAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translateY(0px)" : "translateY(50px)",
    config: { mass: 1, tension: 200, friction: 50 },
    delay: 200,
  });

  const heroSubtitleAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translateY(0px)" : "translateY(30px)",
    config: { mass: 1, tension: 200, friction: 50 },
    delay: 800,
  });

  const heroDescriptionAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translateY(0px)" : "translateY(30px)",
    config: { mass: 1, tension: 200, friction: 50 },
    delay: 1200,
  });

  const heroButtonsAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translateY(0px)" : "translateY(30px)",
    config: { mass: 1, tension: 200, friction: 50 },
    delay: 1600,
  });

  // Menu items animation trail
  const menuItems = [
    {
      src: "/images/tra-tac.jpeg",
      alt: "Trà Tắc - Lemon Tea",
      title: "Trà Tắc",
      price: "15,000đ",
      badge: "Bán chạy",
    },
    {
      src: "/images/mi.jpeg",
      alt: "Mì Đặc Biệt - Special Noodles",
      title: "Mì Đặc Biệt",
      price: "30,000đ",
      badge: "Đặc sản",
    },
  ];

  const menuTrail = useTrail(menuItems.length, {
    opacity: menuInView ? 1 : 0,
    transform: menuInView ? "translateY(0px)" : "translateY(50px)",
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 200,
  });

  // About section animation
  const aboutAnimation = useSpring({
    opacity: aboutInView ? 1 : 0,
    transform: aboutInView ? "translateY(0px)" : "translateY(40px)",
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 100,
  });

  // Contact section animation
  const contactAnimation = useSpring({
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? "translateY(0px)" : "translateY(40px)",
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Contact info staggered animation
  const contactInfoItems = [
    { icon: "📍", text: "An Đào, Trâu Quỳ, Gia Lâm, Hà Nội" },
    { icon: "📞", text: "+84 972 744 027 hoặc  +84 187 098 005" },
    { icon: "✉️", text: "contact@buihuyen.com" },
    { icon: "🕒", text: "Mở cửa: 8:00 - 22:00 hàng ngày" },
  ];

  const contactInfoTrail = useTrail(contactInfoItems.length, {
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? "translateX(0px)" : "translateX(-20px)",
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 400,
  });
  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  // Phone popup functions / Hàm xử lý popup số điện thoại
  const openPhonePopup = () => {
    setShowPhonePopup(true);
    document.body.style.overflow = "hidden";
  };

  const closePhonePopup = () => {
    setShowPhonePopup(false);
    document.body.style.overflow = "unset";
  };

  // Phone numbers data / Dữ liệu số điện thoại
  const phoneNumbers = [
    { number: "+84 972 744 027", label: "Hotline 1" },
    { number: "+84 187 098 005", label: "Hotline 2" },
  ];

  return (
    <main>
      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-white/80 backdrop-blur-md shadow-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className={`font-bold text-primary transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            >
              Bống <span className="text-secondary">Xinh</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-dark hover:text-primary transition-colors"
            >
              Trang chủ
            </a>
            <a
              href="#menu"
              className="text-dark hover:text-primary transition-colors"
            >
              Thực đơn
            </a>
            <a
              href="#about"
              className="text-dark hover:text-primary transition-colors"
            >
              Về chúng tôi
            </a>
            <a
              href="#contact"
              className="text-dark hover:text-primary transition-colors"
            >
              Liên hệ
            </a>
          </nav>{" "}
          <div className="hidden md:block">
            <button
              onClick={openPhonePopup}
              className={`btn btn-primary transition-all duration-300 ${
                scrolled ? "text-sm px-4 py-2" : "text-base px-5 py-3"
              }`}
            >
              Đặt hàng ngay
            </button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-yellow-400 to-green-400"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
          <div className="absolute top-32 right-16 w-12 h-16 bg-green-400 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute bottom-32 left-20 w-10 h-10 bg-orange-300 rounded-full opacity-70 animate-ping"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <animated.h1
            style={heroTitleAnimation}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Mì & Trà Tắc
          </animated.h1>
          <animated.h2
            style={heroSubtitleAnimation}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            Hương vị truyền thống, cảm xúc hiện đại
          </animated.h2>
          <animated.p
            style={heroDescriptionAnimation}
            className="text-lg md:text-xl mb-10 opacity-80 leading-relaxed"
          >
            Thưởng thức tô mì nóng hổi đậm đà cùng ly trà tắc mát lạnh tươi
            ngon. Nơi gặp gỡ của hương vị Việt Nam trong từng ngụm, từng miếng.
          </animated.p>{" "}
          <animated.div
            style={heroButtonsAnimation}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#menu"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Xem Thực Đơn
            </a>
            <button
              onClick={openPhonePopup}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Đặt Hàng Ngay
            </button>
          </animated.div>
        </div>

        {/* Food Icons */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl animate-bounce">
            🍜
          </div>
          <div
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl animate-bounce"
            style={{ animationDelay: "0.3s" }}
          >
            🥤
          </div>
          <div
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl animate-bounce"
            style={{ animationDelay: "0.6s" }}
          >
            🍋
          </div>
        </div>
      </section>
      {/* Menu Section */}
      <section id="menu" ref={menuRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Thực Đơn Đặc Biệt
            </h2>
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
                      <h3 className="text-2xl font-bold text-secondary">
                        {item.title}
                      </h3>
                      <span className="text-2xl font-bold text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.title === "Trà Tắc"
                        ? "Trà tắc tươi, thanh mát với vị chua ngọt hài hòa. Thức uống giải nhiệt tuyệt vời cho ngày nắng nóng."
                        : "Mì tươi được chế biến theo công thức truyền thống, kết hợp với các loại topping đa dạng và nước dùng đậm đà."}
                    </p>{" "}
                    <button
                      onClick={openPhonePopup}
                      className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                    >
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
          <animated.div
            style={aboutAnimation}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-secondary mb-8">
              Về Chúng Tôi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-secondary mb-4">
                  Câu chuyện của Bống Xinh
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bống Xinh ra đời từ tình yêu với ẩm thực truyền thống Việt
                  Nam. Chúng tôi mong muốn mang đến cho khách hàng những trải
                  nghiệm ẩm thực đậm đà, gợi nhớ về hương vị tuổi thơ và sự ấm
                  áp của gia đình.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Với đội ngũ đầu bếp giàu kinh nghiệm và nguyên liệu tươi ngon
                  được chọn lọc kỹ càng, mỗi món ăn tại Bống Xinh đều được chế
                  biến với tất cả tình yêu và sự tận tâm.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏪</div>
                  <h4 className="text-xl font-semibold text-secondary mb-2">
                    Cam kết chất lượng
                  </h4>
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
            <h2 className="text-4xl font-bold mb-6">Đặt Hàng Ngay Hôm Nay!</h2>
            <p className="text-xl mb-8 text-white/80">
              Gọi ngay để thưởng thức những món ăn ngon nhất tại Bống Xinh
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openPhonePopup}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                📞 Gọi ngay: +84 972 744 027 hoặc +84 187 098 005
              </button>
              <a
                href="#menu"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
              >
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
              <h2 className="text-4xl font-bold text-secondary mb-4">
                Liên Hệ
              </h2>
              <p className="text-gray-600 text-lg">
                Hãy liên hệ với chúng tôi để đặt món hoặc biết thêm thông tin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-6">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-4">
                  {contactInfoTrail.map((style, index) => (
                    <animated.div
                      key={index}
                      style={style}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-primary text-xl">
                        {contactInfoItems[index].icon}
                      </span>
                      <span className="text-gray-600">
                        {contactInfoItems[index].text}
                      </span>
                    </animated.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-6">
                  Gửi tin nhắn
                </h3>
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
                Mang đến cho bạn những món ăn đậm chất truyền thống Việt Nam với
                hương vị tuyệt vời.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Thực đơn
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
              <div className="space-y-2 text-gray-300">
                <p>📍 Đường An Đào, Trâu Quỳ, Gia Lâm, Hà Nội</p>
                <p>📞 +84 972 744 027 hoặc +84 187 098 005</p>
                <p>✉️ contact@buihuyen.com</p>
                <p>🕒 Mở cửa: 8:00 - 22:00 hàng ngày</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bống Xinh. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>{" "}
      {/* Call Now Button - Fixed Position */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={openPhonePopup}
          className="call-button bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex items-center justify-center"
        >
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
          <div
            className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"
            style={{ animationDelay: "0.5s" }}
          ></div>
          {/* Phone Icon with perfect centering */}
          <svg
            className="w-7 h-7 text-white animate-bounce hover:animate-none group-hover:scale-110 transition-transform duration-300 relative z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.18 11.18 0 003.48.55 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.18 11.18 0 00.55 3.48 1 1 0 01-.27 1.11l-2.16 2.2z" />
          </svg>
          {/* Text that appears on hover */}{" "}
          <span className="absolute left-full ml-3 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Gọi ngay
          </span>
        </button>

        {/* Additional CSS for custom animations */}
        <style jsx>{`
          /* Shake animation for urgent attention */
          @keyframes shake {
            0%,
            100% {
              transform: translateX(0) rotate(0deg);
            }
            25% {
              transform: translateX(-2px) rotate(-1deg);
            }
            50% {
              transform: translateX(2px) rotate(1deg);
            }
            75% {
              transform: translateX(-1px) rotate(-0.5deg);
            }
          }

          /* Enhanced ripple effect */
          @keyframes ripple {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }

          /* Apply shake every 4 seconds */
          .call-button {
            animation: shake 0.6s ease-in-out 4s infinite;
          }

          .call-button:hover {
            animation: none;
          }

          /* Enhanced pulse effect */
          .call-button::before {
            content: "";
            position: absolute;
            top: -6px;
            left: -6px;
            right: -6px;
            bottom: -6px;
            border-radius: 50%;
            background: rgba(34, 197, 94, 0.3);
            animation: ripple 2.5s infinite;
            z-index: -1;
          }

          /* Additional ring effect */
          .call-button::after {
            content: "";
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border-radius: 50%;
            background: rgba(34, 197, 94, 0.2);
            animation: ripple 2.5s infinite;
            animation-delay: 0.5s;
            z-index: -2;
          }
        `}</style>
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
      {/* Phone Numbers Popup / Popup số điện thoại */}
      {showPhonePopup && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closePhonePopup}
        >
          {" "}
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.18 11.18 0 003.48.55 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.18 11.18 0 00.55 3.48 1 1 0 01-.27 1.11l-2.16 2.2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Chọn số điện thoại
              </h3>
              <p className="text-gray-600">Gọi ngay để đặt hàng nhanh chóng</p>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-4 mb-6">
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.number.replace(/\s/g, "")}`}
                  className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                  onClick={closePhonePopup}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.18 11.18 0 003.48.55 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.18 11.18 0 00.55 3.48 1 1 0 01-.27 1.11l-2.16 2.2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-lg">
                          {phone.number}
                        </div>
                        <div className="text-white/80 text-sm">
                          {phone.label}
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>Thời gian hoạt động: 8:00 - 22:00 hàng ngày</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closePhonePopup}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-medium transition-colors duration-300"
            >
              Đóng
            </button>

            {/* Close X Button */}
            <button
              onClick={closePhonePopup}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext'; // ✅ ADD THIS IMPORT

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  // ✅ USE CARTCONTEXT - REMOVE LOCAL CART STATE
  const { addToCart, getCartItemsCount } = useCart();

  const slides = [
    {
      image: "/s2.jpg",
      alt: "Modern solar panels installation on rooftop",
      overlay: "from-blue-900/70 to-purple-900/50"
    },
    {
      image: "/s1.jpg", 
      alt: "Solar technician installing advanced solar system",
      overlay: "from-green-900/70 to-blue-900/50"
    },
    {
      image: "/s3.jpg",
      alt: "Smart home with solar energy monitoring",
      overlay: "from-orange-900/70 to-red-900/50"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Feature carousel interval
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    // Slide interval
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(featureInterval);
      clearInterval(slideInterval.current);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // ✅ REMOVE LOCAL addToCart FUNCTION - USING CARTCONTEXT INSTEAD

  const stats = [
    { number: "98%", label: "Customer Satisfaction" },
    { number: "25+", label: "Years Warranty" },
    { number: "5,000+", label: "Installations" },
    { number: "₦2.5B+", label: "Client Savings" }
  ];

  const features = [
    {
      title: "AI-Powered Energy Optimization",
      description: "Smart systems that learn your energy patterns and optimize consumption in real-time",
      icon: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "24/7 Remote Monitoring",
      description: "Monitor your solar system performance from anywhere with our advanced mobile app",
      icon: "📱",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Seamless Grid Integration",
      description: "Intelligent switching between solar and grid power without interruption",
      icon: "⚡",
      color: "from-orange-500 to-red-500"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Solar Panel 400W",
      description: "High-efficiency monocrystalline panel with 22.8% efficiency",
      price: "₦85,000",
      originalPrice: "₦95,000",
      image: "/p1.jpg",
      rating: 4.8,
      reviews: 124,
      tags: ["Bestseller", "Eco-Friendly"],
      features: ["25-Year Warranty", "Weather Resistant", "High Efficiency"]
    },
    {
      id: 2,
      name: "Smart Solar Inverter 5KVA",
      description: "Hybrid inverter with WiFi monitoring and smart app control",
      price: "₦320,000",
      originalPrice: "₦350,000",
      image: "/p2.jpg",
      rating: 4.9,
      reviews: 89,
      tags: ["Smart Home", "WiFi Enabled"],
      features: ["Pure Sine Wave", "LCD Display", "Grid Backup"]
    },
    {
      id: 3,
      name: "Solar Battery 200AH",
      description: "Deep cycle gel battery with 10-year lifespan",
      price: "₦180,000",
      originalPrice: "₦200,000",
      image: "/p3.jpg",
      rating: 4.7,
      reviews: 156,
      tags: ["Long Life", "Maintenance Free"],
      features: ["Deep Cycle", "Spill Proof", "Fast Charging"]
    },
    {
      id: 4,
      name: "Solar Charge Controller 60A",
      description: "MPPT controller with Bluetooth monitoring and LCD display",
      price: "₦45,000",
      originalPrice: "₦50,000",
      image: "/p4.jpg",
      rating: 4.6,
      reviews: 67,
      tags: ["MPPT", "Bluetooth"],
      features: ["Max Power Tracking", "LCD Display", "Auto Protection"]
    },
    {
      id: 5,
      name: "Complete Home Solar Kit 3KVA",
      description: "All-in-one solar solution for typical 3-bedroom home",
      price: "₦650,000",
      originalPrice: "₦720,000",
      image: "/p5.jpg",
      rating: 4.9,
      reviews: 203,
      tags: ["Complete Kit", "Installation Included"],
      features: ["4 Panels", "Inverter", "2 Batteries", "Free Installation"]
    },
    {
      id: 6,
      name: "Portable Solar Generator 1000W",
      description: "Silent solar generator for outdoor and emergency use",
      price: "₦120,000",
      originalPrice: "₦135,000",
      image: "/p6.jpg",
      rating: 4.5,
      reviews: 98,
      tags: ["Portable", "Silent"],
      features: ["8 Output Ports", "LCD Display", "Lightweight"]
    },
    {
      id: 7,
      name: "Solar Water Heater 150L",
      description: "Eco-friendly solar water heating system for homes",
      price: "₦280,000",
      originalPrice: "₦310,000",
      image: "/p7.jpg",
      rating: 4.4,
      reviews: 45,
      tags: ["Energy Saving", "Eco-Friendly"],
      features: ["150L Capacity", "Stainless Steel", "5-Year Warranty"]
    },
    {
      id: 8,
      name: "Solar Street Light 60W",
      description: "Automatic solar-powered LED street light with motion sensor",
      price: "₦35,000",
      originalPrice: "₦40,000",
      image: "/p8.jpg",
      rating: 4.3,
      reviews: 78,
      tags: ["Automatic", "Motion Sensor"],
      features: ["Auto On/Off", "Motion Sensor", "Weatherproof"]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Image Slider */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay} z-10`}></div>
            
            {/* ACTUAL IMAGE - FIXED */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </div>
        ))}

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Premium Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white/80 text-sm font-medium">PREMIUM SOLAR SOLUTIONS</span>
              </div>

              {/* Main Heading */}
              <h1 className="pt-12 md:pt-0 text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                The Future of
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Solar Energy
                </span>
                is Here
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-lg">
                Experience next-generation solar technology with AI-powered optimization, 
                real-time monitoring, and seamless smart home integration.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/products" className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  <span className="relative z-10">Explore Smart Solutions</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <button className="group border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Watch Demo</span>
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-white/60 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>24/7 Smart Monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>AI Energy Optimization</span>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="hidden lg:flex flex-col items-end space-y-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex items-center space-x-3 text-right transition-all duration-300 ${
                    index === currentSlide ? 'opacity-100 scale-105' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <span className={`text-white font-semibold text-sm transition-all duration-300 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}>
                    Slide {index + 1}
                  </span>
                  <div className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-transparent'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Slide Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - FIXED */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Premium Solar Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality solar equipment with warranty and professional support
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  {/* Actual Product Image */}
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    {/* Fallback if image doesn't load */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {product.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-cyan-500 text-white text-xs rounded-full font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs rounded-full font-bold">
                      SALE
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons - FIXED TO USE CARTCONTEXT */}
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600 rounded-xl transition-all duration-300 transform hover:scale-105">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-900 to-blue-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Next-Generation Solar Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI with premium solar technology to deliver unparalleled energy efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  <div className="flex items-center space-x-2 mt-6 text-cyan-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Energy?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join the revolution of smart, efficient, and sustainable energy solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Get Free Consultation
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
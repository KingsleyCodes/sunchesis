import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'panels', name: 'Solar Panels' },
    { id: 'inverters', name: 'Inverters' },
    { id: 'batteries', name: 'Batteries' },
    { id: 'kits', name: 'Complete Kits' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Solar Panel 400W",
      description: "High-efficiency monocrystalline panel with 22.8% efficiency",
      price: "₦85,000",
      originalPrice: "₦95,000",
      image: "/panel1.jpg",
      rating: 4.8,
      reviews: 124,
      category: "panels",
      tags: ["Bestseller", "Eco-Friendly"],
      features: ["25-Year Warranty", "Weather Resistant", "High Efficiency"],
      inStock: true
    },
    {
      id: 2,
      name: "Smart Solar Inverter 5KVA",
      description: "Hybrid inverter with WiFi monitoring and smart app control",
      price: "₦320,000",
      originalPrice: "₦350,000",
      image: "/inverter1.jpg",
      rating: 4.9,
      reviews: 89,
      category: "inverters",
      tags: ["Smart Home", "WiFi Enabled"],
      features: ["Pure Sine Wave", "LCD Display", "Grid Backup"],
      inStock: true
    },
    {
      id: 3,
      name: "Solar Battery 200AH",
      description: "Deep cycle gel battery with 10-year lifespan",
      price: "₦180,000",
      originalPrice: "₦200,000",
      image: "/battery1.jpg",
      rating: 4.7,
      reviews: 156,
      category: "batteries",
      tags: ["Long Life", "Maintenance Free"],
      features: ["Deep Cycle", "Spill Proof", "Fast Charging"],
      inStock: true
    },
    {
      id: 4,
      name: "Solar Charge Controller 60A",
      description: "MPPT controller with Bluetooth monitoring and LCD display",
      price: "₦45,000",
      originalPrice: "₦50,000",
      image: "/controller1.jpg",
      rating: 4.6,
      reviews: 67,
      category: "accessories",
      tags: ["MPPT", "Bluetooth"],
      features: ["Max Power Tracking", "LCD Display", "Auto Protection"],
      inStock: true
    },
    {
      id: 5,
      name: "Complete Home Solar Kit 3KVA",
      description: "All-in-one solar solution for typical 3-bedroom home",
      price: "₦650,000",
      originalPrice: "₦720,000",
      image: "/kit1.jpg",
      rating: 4.9,
      reviews: 203,
      category: "kits",
      tags: ["Complete Kit", "Installation Included"],
      features: ["4 Panels", "Inverter", "2 Batteries", "Free Installation"],
      inStock: true
    },
    {
      id: 6,
      name: "Portable Solar Generator 1000W",
      description: "Silent solar generator for outdoor and emergency use",
      price: "₦120,000",
      originalPrice: "₦135,000",
      image: "/generator1.jpg",
      rating: 4.5,
      reviews: 98,
      category: "kits",
      tags: ["Portable", "Silent"],
      features: ["8 Output Ports", "LCD Display", "Lightweight"],
      inStock: true
    },
    {
      id: 7,
      name: "Solar Water Heater 150L",
      description: "Eco-friendly solar water heating system for homes",
      price: "₦280,000",
      originalPrice: "₦310,000",
      image: "/heater1.jpg",
      rating: 4.4,
      reviews: 45,
      category: "accessories",
      tags: ["Energy Saving", "Eco-Friendly"],
      features: ["150L Capacity", "Stainless Steel", "5-Year Warranty"],
      inStock: false
    },
    {
      id: 8,
      name: "Solar Street Light 60W",
      description: "Automatic solar-powered LED street light with motion sensor",
      price: "₦35,000",
      originalPrice: "₦40,000",
      image: "/light1.jpg",
      rating: 4.3,
      reviews: 78,
      category: "accessories",
      tags: ["Automatic", "Motion Sensor"],
      features: ["Auto On/Off", "Motion Sensor", "Weatherproof"],
      inStock: true
    },
    {
      id: 9,
      name: "Solar Panel 550W Mono PERC",
      description: "Advanced PERC technology for maximum efficiency",
      price: "₦110,000",
      originalPrice: "₦125,000",
      image: "/panel2.jpg",
      rating: 4.9,
      reviews: 89,
      category: "panels",
      tags: ["High Power", "PERC Technology"],
      features: ["550W Output", "PERC Cells", "25-Year Warranty"],
      inStock: true
    },
    {
      id: 10,
      name: "Hybrid Inverter 8KVA",
      description: "Powerful hybrid inverter for large homes and businesses",
      price: "₦480,000",
      originalPrice: "₦520,000",
      image: "/inverter2.jpg",
      rating: 4.8,
      reviews: 67,
      category: "inverters",
      tags: ["High Capacity", "Hybrid"],
      features: ["8KVA Power", "Grid Support", "LCD Display"],
      inStock: true
    },
    {
      id: 11,
      name: "Lithium Battery 5.12KWh",
      description: "Advanced lithium battery with long cycle life",
      price: "₦450,000",
      originalPrice: "₦490,000",
      image: "/battery2.jpg",
      rating: 4.7,
      reviews: 34,
      category: "batteries",
      tags: ["Lithium", "Long Life"],
      features: ["5000+ Cycles", "Compact Design", "Fast Charging"],
      inStock: true
    },
    {
      id: 12,
      name: "Commercial Solar Kit 10KVA",
      description: "Complete commercial solar solution for small businesses",
      price: "₦1,850,000",
      originalPrice: "₦2,100,000",
      image: "/kit2.jpg",
      rating: 4.9,
      reviews: 23,
      category: "kits",
      tags: ["Commercial", "High Capacity"],
      features: ["16 Panels", "10KVA Inverter", "4 Batteries", "Installation"],
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover our premium range of solar products with warranty and professional support
          </p>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Sort By */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
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

                {/* Out of Stock Badge */}
                {!product.inStock && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-gray-500 text-white text-xs rounded-full font-bold">
                    OUT OF STOCK
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

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button 
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      product.inStock
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
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

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-gray-900 to-blue-900 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
}
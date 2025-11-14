import { useState } from 'react';
import Link from 'next/link';

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState('residential');

  const solutionTypes = [
    {
      id: 'residential',
      name: 'Residential Solutions',
      icon: '🏠',
      description: 'Perfect for homes and apartments',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'commercial',
      name: 'Commercial Solutions', 
      icon: '🏢',
      description: 'For businesses and offices',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'industrial',
      name: 'Industrial Solutions',
      icon: '🏭',
      description: 'For factories and large facilities',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'agricultural',
      name: 'Agricultural Solutions',
      icon: '🚜',
      description: 'For farms and agricultural use',
      color: 'from-lime-500 to-green-500'
    }
  ];

  const residentialSolutions = [
    {
      name: "Basic Home Solution",
      description: "Ideal for 2-3 bedroom homes with moderate energy needs",
      capacity: "3KVA System",
      coverage: "Covers lights, TV, fridge, and basic appliances",
      savings: "Save up to ₦45,000 monthly",
      price: "From ₦650,000",
      features: ["8-10 Hours Backup", "Free Installation", "25-Year Warranty", "Mobile App Monitoring"],
      bestFor: "Small families, apartments"
    },
    {
      name: "Premium Home Solution", 
      description: "Complete power solution for larger homes with high energy demands",
      capacity: "5KVA System",
      coverage: "Covers entire home including AC units",
      savings: "Save up to ₦85,000 monthly", 
      price: "From ₦1,200,000",
      features: ["24/7 Power", "Smart Home Integration", "Remote Monitoring", "10-Year Battery Warranty"],
      bestFor: "Large homes, offices at home"
    },
    {
      name: "Luxury Villa Solution",
      description: "Ultimate solar solution for luxury homes and estates",
      capacity: "10KVA System", 
      coverage: "Full home coverage with heavy appliances",
      savings: "Save up to ₦180,000 monthly",
      price: "From ₦2,500,000",
      features: ["Zero Grid Dependency", "AI Energy Management", "Emergency Power", "Premium Support"],
      bestFor: "Luxury homes, large villas"
    }
  ];

  const commercialSolutions = [
    {
      name: "Small Business Solution",
      description: "Perfect for shops, small offices, and retail spaces",
      capacity: "5KVA System",
      coverage: "Covers POS, lights, computers, and basic equipment",
      savings: "Save up to ₦75,000 monthly",
      price: "From ₦1,100,000", 
      features: ["Business Hours Coverage", "Equipment Protection", "Tax Benefits", "Quick ROI"],
      bestFor: "Shops, small offices, boutiques"
    },
    {
      name: "Office Building Solution",
      description: "Comprehensive solution for medium-sized offices and businesses",
      capacity: "15KVA System",
      coverage: "Full office equipment, AC systems, servers",
      savings: "Save up to ₦220,000 monthly",
      price: "From ₦3,200,000",
      features: ["24/7 Operations", "Server Protection", "Scalable Design", "Professional Installation"],
      bestFor: "Office buildings, tech companies"
    },
    {
      name: "Shopping Complex Solution",
      description: "Enterprise-grade solution for large commercial spaces",
      capacity: "25KVA+ System", 
      coverage: "Multiple shops, food courts, entertainment areas",
      savings: "Save up to ₦500,000 monthly",
      price: "From ₦5,500,000",
      features: ["Multiple Tenant Support", "High Capacity", "Custom Design", "Maintenance Package"],
      bestFor: "Shopping malls, large complexes"
    }
  ];

  const industrialSolutions = [
    {
      name: "Factory Power Solution",
      description: "Heavy-duty solar solution for manufacturing plants",
      capacity: "50KVA+ System",
      coverage: "Production machinery, heavy equipment",
      savings: "Save up to ₦1,200,000 monthly", 
      price: "From ₦8,500,000",
      features: ["Industrial Grade", "Production Continuity", "Custom Engineering", "24/7 Support"],
      bestFor: "Manufacturing plants, factories"
    },
    {
      name: "Warehouse Solution",
      description: "Reliable power for storage and distribution centers", 
      capacity: "20KVA System",
      coverage: "Lighting, security systems, office areas",
      savings: "Save up to ₦350,000 monthly",
      price: "From ₦3,800,000",
      features: ["Large Area Coverage", "Security Priority", "Efficient Lighting", "Low Maintenance"],
      bestFor: "Warehouses, storage facilities"
    }
  ];

  const agriculturalSolutions = [
    {
      name: "Farm Irrigation Solution",
      description: "Solar-powered water pumping for agricultural irrigation",
      capacity: "Custom Sizing",
      coverage: "Water pumps, irrigation systems",
      savings: "Save 100% on diesel/petrol costs",
      price: "From ₦850,000", 
      features: ["Water Pumping", "Remote Areas", "Low Operation Cost", "Weather Resistant"],
      bestFor: "Farms, plantations, irrigation"
    },
    {
      name: "Poultry Farm Solution",
      description: "Specialized solar solution for poultry and livestock farming",
      capacity: "10KVA System", 
      coverage: "Lighting, ventilation, feeding systems",
      savings: "Save up to ₦150,000 monthly",
      price: "From ₦1,800,000",
      features: ["Ventilation Systems", "Lighting Control", "Equipment Power", "Rural Areas"],
      bestFor: "Poultry farms, livestock"
    }
  ];

  const getCurrentSolutions = () => {
    switch(activeSolution) {
      case 'residential': return residentialSolutions;
      case 'commercial': return commercialSolutions;
      case 'industrial': return industrialSolutions;
      case 'agricultural': return agriculturalSolutions;
      default: return residentialSolutions;
    }
  };

  const getCurrentSolutionType = () => {
    return solutionTypes.find(type => type.id === activeSolution);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Custom Solar Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tailored solar energy systems designed for your specific needs and budget
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-full font-semibold">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                Save 60-90% on Energy Costs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Type Selector */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {solutionTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveSolution(type.id)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${
                activeSolution === type.id
                  ? `bg-gradient-to-r ${type.color} text-white shadow-2xl`
                  : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="text-3xl mb-3">{type.icon}</div>
              <h3 className="font-bold text-lg mb-2">{type.name}</h3>
              <p className={`text-sm ${
                activeSolution === type.id ? 'text-white/80' : 'text-gray-600'
              }`}>
                {type.description}
              </p>
            </button>
          ))}
        </div>

        {/* Current Solution Details */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              {getCurrentSolutionType()?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your {getCurrentSolutionType()?.name.toLowerCase()}
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentSolutions().map((solution, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group"
              >
                {/* Solution Header */}
                <div className={`bg-gradient-to-r ${getCurrentSolutionType()?.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{solution.name}</h3>
                  <p className="text-white/80 text-sm">{solution.description}</p>
                </div>

                {/* Solution Details */}
                <div className="p-6">
                  {/* Capacity & Coverage */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-700">System Capacity:</span>
                      <span className="font-bold text-gray-900">{solution.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700">Power Coverage:</span>
                      <span className="text-sm text-gray-600 text-right">{solution.coverage}</span>
                    </div>
                  </div>

                  {/* Savings & Price */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="text-center">
                      <div className="text-green-600 font-bold text-lg mb-1">{solution.savings}</div>
                      <div className="text-2xl font-black text-gray-900">{solution.price}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Ideal For:</h4>
                    <div className="bg-blue-50 rounded-lg px-3 py-2">
                      <span className="text-sm text-blue-700">{solution.bestFor}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Get Free Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our solar experts will design a personalized system that perfectly matches your energy needs and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              Schedule Free Site Survey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300">
              Call Us: +234 812 345 6789
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'agricultural', name: 'Agricultural' }
  ];

  const projects = [
    {
      id: 1,
      title: "Lekki Luxury Villa Installation",
      category: "residential",
      location: "Lekki Phase 1, Lagos",
      duration: "3 Weeks",
      capacity: "10KVA Solar System",
      savings: "₦180,000/month",
      client: "The Adebayo Family",
      description: "Complete solar power solution for a 6-bedroom luxury villa with swimming pool and outdoor lighting.",
      image: "/1p.jpg",
      features: [
        "24/7 Power Supply",
        "AC Units Coverage", 
        "Swimming Pool Pump",
        "Smart Home Integration",
        "Remote Monitoring"
      ],
      testimonials: {
        text: "SolarStore transformed our home. We haven't had power issues since installation and our electricity bills dropped by 90%!",
        author: "Mr. Adebayo",
        rating: 5
      },
      status: "Completed",
      date: "March 2024"
    },
    {
      id: 2,
      title: "Victoria Island Office Complex",
      category: "commercial",
      location: "Victoria Island, Lagos",
      duration: "6 Weeks", 
      capacity: "25KVA Solar System",
      savings: "₦450,000/month",
      client: "Tech Innovations Ltd",
      description: "Enterprise solar solution for a 5-story office building housing multiple tech companies.",
      image: "/2p.jpg",
      features: [
        "24/7 Operations",
        "Server Room Power",
        "AC Systems Coverage",
        "Multiple Tenant Support",
        "Backup Generators"
      ],
      testimonials: {
        text: "Our operations run smoothly 24/7. The solar system powers our servers and AC systems without interruption.",
        author: "CEO, Tech Innovations",
        rating: 5
      },
      status: "Completed", 
      date: "February 2024"
    },
    {
      id: 3,
      title: "Ikeja Manufacturing Plant",
      category: "industrial",
      location: "Ikeja Industrial Estate, Lagos",
      duration: "8 Weeks",
      capacity: "50KVA Solar System", 
      savings: "₦1,200,000/month",
      client: "Prime Manufacturing Co.",
      description: "Industrial solar power solution for a manufacturing plant with heavy machinery and production lines.",
      image: "/3p.jpg",
      features: [
        "Production Machinery",
        "Heavy Equipment Power", 
        "24/7 Manufacturing",
        "Custom Engineering",
        "Maintenance Package"
      ],
      testimonials: {
        text: "We've eliminated diesel costs and increased production uptime. The ROI was achieved in just 18 months.",
        author: "Plant Manager",
        rating: 5
      },
      status: "Completed",
      date: "January 2024"
    },
    {
      id: 4,
      title: "Abuja Farm Irrigation System",
      category: "agricultural", 
      location: "Kubwa, Abuja",
      duration: "2 Weeks",
      capacity: "Custom Solar Pumping",
      savings: "100% Diesel Savings",
      client: "Green Fields Agriculture",
      description: "Solar-powered water pumping and irrigation system for a 50-acre farm.",
      image: "/4p.jpg",
      features: [
        "Water Pumping System",
        "Irrigation Coverage", 
        "Remote Area Solution",
        "Weather Resistant",
        "Low Maintenance"
      ],
      testimonials: {
        text: "We can now irrigate our entire farm without diesel costs. The system works perfectly in our remote location.",
        author: "Farm Owner",
        rating: 5
      },
      status: "Completed",
      date: "December 2023"
    },
    {
      id: 5,
      title: "Port Harcourt Shopping Mall",
      category: "commercial",
      location: "GRA, Port Harcourt", 
      duration: "10 Weeks",
      capacity: "35KVA Solar System",
      savings: "₦650,000/month",
      client: "City Mall Port Harcourt",
      description: "Large-scale solar installation for a shopping mall with multiple stores and food court.",
      image: "/5p.jpg",
      features: [
        "Multiple Tenant Support",
        "High Capacity System",
        "Mall Lighting",
        "Food Court Power",
        "Security Systems"
      ],
      testimonials: {
        text: "Our mall now operates with reliable power, and our tenants are happy with the reduced service charges.",
        author: "Mall Manager", 
        rating: 5
      },
      status: "Completed",
      date: "November 2023"
    },
    {
      id: 6,
      title: "Ibadan Residential Estate",
      category: "residential",
      location: "Bodija, Ibadan",
      duration: "4 Weeks",
      capacity: "15KVA Community System", 
      savings: "₦300,000/month combined",
      client: "Bodija Estate Residents",
      description: "Community solar solution for a residential estate with 20 homes sharing a centralized system.",
      image: "/6p.jpg",
      features: [
        "Community Sharing",
        "Centralized Management",
        "Individual Metering",
        "Backup for Common Areas",
        "Scalable Design"
      ],
      testimonials: {
        text: "The community solar project has brought reliable power to our entire estate. Everyone is saving money!",
        author: "Estate Chairman",
        rating: 5
      },
      status: "Completed",
      date: "October 2023"
    },
    {
      id: 7,
      title: "Kano Poultry Farm",
      category: "agricultural",
      location: "Kano Industrial Area", 
      duration: "3 Weeks",
      capacity: "12KVA Solar System",
      savings: "₦180,000/month",
      client: "Royal Poultry Farms",
      description: "Specialized solar solution for a large poultry farm with ventilation and feeding systems.",
      image: "/7p.jpg",
      features: [
        "Ventilation Systems",
        "Feeding Equipment",
        "Lighting Control",
        "Cold Storage",
        "Rural Area Solution"
      ],
      testimonials: {
        text: "Our poultry production has increased with reliable power for ventilation and feeding systems.",
        author: "Farm Manager",
        rating: 5
      },
      status: "Completed",
      date: "September 2023"
    },
    {
      id: 8,
      title: "Lagos Hotel Complex",
      category: "commercial",
      location: "Ikoyi, Lagos",
      duration: "7 Weeks", 
      capacity: "30KVA Solar System",
      savings: "₦550,000/month",
      client: "Grand Hotel Lagos",
      description: "Complete solar power solution for a 50-room hotel with restaurant and conference facilities.",
      image: "/project8.jpg",
      features: [
        "24/7 Guest Power",
        "Restaurant Operations",
        "Conference Facilities",
        "Water Heating",
        "Backup Systems"
      ],
      testimonials: {
        text: "Our guests enjoy uninterrupted power, and our operational costs have significantly reduced.",
        author: "Hotel General Manager",
        rating: 5
      },
      status: "Completed",
      date: "August 2023"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Project Image - FIXED */}
          <div className="h-64 relative overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-blue-900/30"></div>
            </div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">{project.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>📍 {project.location}</span>
                  <span>⏱️ {project.duration}</span>
                  <span>✅ {project.status}</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                {project.date}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Project Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">System Capacity:</span>
                    <span className="font-semibold">{project.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Savings:</span>
                    <span className="font-semibold text-green-600">{project.savings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Client:</span>
                    <span className="font-semibold">{project.client}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Project Description</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-3">Client Testimonial</h3>
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {project.testimonials.author.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-600 italic mb-2">"{project.testimonials.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{project.testimonials.author}</span>
                    <div className="flex">
                      {[...Array(project.testimonials.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our successfully completed solar installations across Nigeria
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                50+ Projects Completed
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                98% Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projectCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid - FIXED IMAGES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image - FIXED */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-cyan-500 text-white text-xs rounded-full font-semibold">
                    {project.category.toUpperCase()}
                  </span>
                  <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-semibold">
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {project.date}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-500">Capacity</div>
                    <div className="font-semibold text-gray-900">{project.capacity}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Savings</div>
                    <div className="font-semibold text-green-600">{project.savings}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">View Details →</span>
                  <div className="flex">
                    {[...Array(project.testimonials.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and transform your energy costs with a custom solar solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300">
              View More Projects
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
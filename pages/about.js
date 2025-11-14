import Link from 'next/link';

export default function About() {
  const team = [
    {
      name: "David Adekunle",
      role: "Founder & CEO",
      image: "/team/david.jpg",
      description: "Solar energy expert with 15+ years in renewable energy solutions",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Grace Okafor", 
      role: "Technical Director",
      image: "/team/grace.jpg",
      description: "Electrical engineer specializing in solar system design and installation",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Johnson",
      role: "Operations Manager", 
      image: "/team/michael.jpg",
      description: "Project management professional ensuring seamless installations",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Sarah Chen",
      role: "Customer Success",
      image: "/team/sarah.jpg", 
      description: "Dedicated to ensuring client satisfaction and after-sales support",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const values = [
    {
      icon: "⚡",
      title: "Innovation",
      description: "We continuously adopt cutting-edge solar technology to deliver maximum efficiency and performance."
    },
    {
      icon: "🤝",
      title: "Integrity", 
      description: "Honest pricing, transparent processes, and reliable service you can trust."
    },
    {
      icon: "🌍", 
      title: "Sustainability",
      description: "Committed to creating a cleaner, greener future through renewable energy solutions."
    },
    {
      icon: "💪",
      title: "Excellence",
      description: "Uncompromising quality in every installation and exceptional customer service."
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", description: "Started with residential solar installations in Lagos" },
    { year: "2013", event: "Commercial Expansion", description: "Launched commercial solar solutions for businesses" },
    { year: "2016", event: "500+ Projects", description: "Completed over 500 solar installations across Nigeria" },
    { year: "2019", event: "Industrial Division", description: "Expanded to industrial and agricultural solar solutions" },
    { year: "2022", event: "Award Winning", description: "Received National Energy Innovation Award" },
    { year: "2024", event: "Market Leader", description: "Became leading solar provider in West Africa" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Powering a Sustainable Future
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over a decade, Sunchesis has been at the forefront of solar energy innovation in Nigeria, 
              providing reliable, affordable, and eco-friendly power solutions to homes and businesses across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </Link>
              <Link href="/projects" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To make solar energy accessible and affordable for every Nigerian home and business, 
                reducing energy costs while promoting environmental sustainability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Reduce electricity costs by up to 90%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Provide 24/7 reliable power solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Eliminate 5+ tons of CO2 emissions per installation</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To lead Africa's transition to renewable energy by 2030, creating a future where 
                every community has access to clean, reliable, and affordable solar power.
              </p>
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-2">Our Impact</h3>
                <p className="text-cyan-100">
                  Over 5,000 installations completed, saving clients ₦2.5B+ in electricity costs 
                  and reducing carbon emissions by 25,000+ tons annually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Sunchesis
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From humble beginnings to industry leadership</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-500 h-full"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-cyan-600 font-bold text-lg mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Empty space for alignment */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to delivering exceptional solar solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-cyan-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-gray-100 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="w-4 h-4 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-gray-100 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="w-4 h-4 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.543l-.047-.02z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Join the Solar Revolution?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's work together to power your future with clean, reliable solar energy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
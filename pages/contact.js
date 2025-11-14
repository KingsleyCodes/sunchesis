import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak directly with our solar experts",
      details: "+234 906 000 0000",
      action: "Call Now",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "✉️",
      title: "Email Us",
      description: "Send us your inquiries and questions",
      details: "hello@sunchesis.com",
      action: "Send Email",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Meet us at our office location",
      details: "123 Solar Avenue, Lekki, Lagos",
      action: "Get Directions",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant support during business hours",
      details: "Mon - Fri: 8AM - 6PM",
      action: "Start Chat",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const faqs = [
    {
      question: "How long does solar installation take?",
      answer: "Most residential installations take 3-7 days, while commercial projects may take 2-6 weeks depending on the scale."
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes, we provide comprehensive maintenance packages including regular checkups, cleaning, and performance monitoring."
    },
    {
      question: "What warranty do your products have?",
      answer: "Our solar panels come with 25-year performance warranty, inverters with 5-10 years, and batteries with 3-10 years depending on type."
    },
    {
      question: "Do you provide financing options?",
      answer: "Yes, we offer flexible payment plans and partner with financial institutions to make solar affordable for everyone."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              Ready to harness the power of solar energy? Our experts are here to guide you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                24/7 Customer Support
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Free Consultation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-2xl">{method.icon}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <p className="font-semibold text-gray-900 mb-4">{method.details}</p>
              <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-cyan-50 hover:to-blue-50 text-gray-700 font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg border border-gray-200">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our solar experts will get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting Sunchesis. Our team will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="+234 900 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="quote">Get a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="maintenance">Maintenance Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your solar energy needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 mt-8 text-white">
              <h3 className="text-2xl font-black mb-6">Why Choose Sunchesis?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black mb-2">98%</div>
                  <div className="text-cyan-100 text-sm">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black mb-2">5,000+</div>
                  <div className="text-cyan-100 text-sm">Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black mb-2">25+</div>
                  <div className="text-cyan-100 text-sm">Years Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black mb-2">24/7</div>
                  <div className="text-cyan-100 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their energy costs with our premium solar solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Browse Products
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
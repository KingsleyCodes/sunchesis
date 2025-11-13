import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SolarStore</h3>
            <p className="text-blue-100 mb-4 max-w-md">
              Providing high-quality solar products for a sustainable future. 
              Power your life with clean, renewable energy.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons - Placeholder */}
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-blue-100 hover:text-orange-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-100">
              <li>123 Solar Street</li>
              <li>Energy City, EC 12345</li>
              <li>info@solarstore.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} SolarStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
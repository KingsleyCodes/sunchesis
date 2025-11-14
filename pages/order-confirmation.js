import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function OrderConfirmation() {
  const router = useRouter();
  const { reference } = router.query;
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (reference) {
      // In a real app, you'd fetch order details from your backend
      setOrderDetails({
        reference,
        date: new Date().toLocaleDateString(),
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        total: '0.00' // This would come from your backend
      });
    }
  }, [reference]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully processed.
          </p>

          {/* Order Details */}
          {orderDetails && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Reference:</span>
                  <span className="font-semibold text-gray-900">{orderDetails.reference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date:</span>
                  <span className="font-semibold text-gray-900">{orderDetails.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Delivery:</span>
                  <span className="font-semibold text-gray-900">{orderDetails.estimatedDelivery}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3">
                  <span className="text-gray-600">Total Paid:</span>
                  <span className="font-bold text-gray-900">₦{orderDetails.total}</span>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">What's Next?</h3>
            <ul className="text-blue-800 space-y-2 text-left">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                You'll receive an order confirmation email shortly
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Our team will contact you within 24 hours to schedule installation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Professional installation will be scheduled at your convenience
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Continue Shopping
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
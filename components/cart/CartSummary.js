import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

export default function CartSummary() {
  const { items, getCartTotal, clearCart } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 50000 ? 0 : 5000; // Free shipping over ₦50,000
  const tax = subtotal * 0.075; // 7.5% VAT
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Cart Summary</h3>
        <p className="text-gray-600 text-center py-8">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({items.length} items)</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'FREE' : `₦${shipping.toLocaleString()}`}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax (VAT 7.5%)</span>
          <span>₦{tax.toLocaleString()}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Free Shipping Progress */}
      {subtotal < 50000 && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Add ₦{(50000 - subtotal).toLocaleString()} for FREE shipping</span>
            <span>{Math.round((subtotal / 50000) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((subtotal / 50000) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <Button 
          href="/checkout"
          size="lg"
          className="w-full"
        >
          Proceed to Checkout
        </Button>
        
        <Button
          onClick={clearCart}
          variant="outline"
          size="md"
          className="w-full"
        >
          Clear Cart
        </Button>
        
        <Button
          href="/products"
          variant="outline"
          size="md"
          className="w-full"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
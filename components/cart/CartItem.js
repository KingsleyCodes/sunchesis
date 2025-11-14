import { useCart } from '../../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
  const total = price * item.quantity;

  return (
    <div className="flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
      {/* Product Image */}
      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 text-lg truncate">{item.name}</h3>
        <p className="text-gray-600 text-sm truncate">{item.description}</p>
        <div className="text-2xl font-bold text-gray-900 mt-1">
          ₦{total.toLocaleString()}
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        
        <span className="w-8 text-center font-semibold text-gray-900">
          {item.quantity}
        </span>
        
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}
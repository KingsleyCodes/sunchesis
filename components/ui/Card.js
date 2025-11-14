export default function Card({ 
  children, 
  className = '',
  hover = false,
  padding = 'p-6',
  ...props 
}) {
  const baseClasses = 'bg-white rounded-2xl shadow-lg border border-gray-100';
  const hoverClass = hover ? 'hover:shadow-2xl hover:border-cyan-200 transition-all duration-500' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClass} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
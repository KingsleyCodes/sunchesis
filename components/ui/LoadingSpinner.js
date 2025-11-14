export default function LoadingSpinner({ 
  size = 'md', 
  color = 'text-cyan-500' 
}) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`${sizes[size]} ${color} border-2 border-current border-t-transparent rounded-full animate-spin`}></div>
  );
}
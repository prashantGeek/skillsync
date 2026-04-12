import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  rounded?: boolean;
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  glow = false,
  rounded = false,
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = `
    font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
    transform hover:scale-105 active:scale-95 relative overflow-hidden
    ${rounded ? 'rounded-full' : 'rounded-xl'}
    ${glow ? 'btn-glow' : ''}
  `.trim().replace(/\s+/g, ' ');
  
  // If custom className is provided, use minimal base styles to avoid conflicts
  if (className && !className.includes('bg-') && !className.includes('text-')) {
    return (
      <button 
        className={`${baseStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  const variants = {
    primary: `
      bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 
      text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25
      focus:ring-purple-400 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-800
    `,
    secondary: `
      bg-gradient-to-r from-gray-50 to-white text-gray-900 
      border-2 border-purple-200 hover:border-purple-400
      shadow-md hover:shadow-lg hover:shadow-purple-500/10
      focus:ring-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100
    `,
    outline: `
      border-2 border-purple-600 text-purple-600 bg-transparent
      hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white 
      shadow-md hover:shadow-lg hover:shadow-purple-500/25
      focus:ring-purple-400 hover:border-transparent
    `,
    gradient: `
      bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
      text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/30
      focus:ring-purple-400 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600
    `,
    glass: `
      glass text-white border border-white/20
      hover:bg-white/30 shadow-lg hover:shadow-xl
      focus:ring-white/50 backdrop-blur-md
    `
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

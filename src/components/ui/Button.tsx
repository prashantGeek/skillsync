import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // If custom className is provided, use minimal base styles to avoid conflicts
  if (className) {
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
    primary: 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 focus:ring-purple-400',
    secondary: 'bg-white text-black border border-purple-600 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 focus:ring-purple-400',
    outline: 'border-2 border-purple-600 text-purple-600 bg-white hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 focus:ring-purple-400'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}

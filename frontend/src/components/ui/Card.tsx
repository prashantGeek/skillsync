import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
  glow?: boolean;
  glass?: boolean;
  variant?: 'default' | 'elevated' | 'bordered' | 'gradient';
}

export default function Card({ 
  children, 
  className = '', 
  style,
  hover = false, 
  glow = false,
  glass = false,
  variant = 'default'
}: CardProps) {
  const baseStyles = `
    rounded-2xl transition-all duration-300 ease-out
    ${hover ? 'hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1' : ''}
    ${glow ? 'shadow-glow' : ''}
    ${glass ? 'glass backdrop-blur-xl' : ''}
  `.trim().replace(/\s+/g, ' ');

  const variants = {
    default: 'bg-white shadow-md border border-gray-200/50',
    elevated: 'bg-white shadow-lg border border-gray-200/30',
    bordered: 'bg-white shadow-sm border-2 border-purple-200',
    gradient: 'bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 shadow-lg border border-purple-200/50'
  };
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} style={style}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function CardHeader({ children, className = '', gradient = false }: CardHeaderProps) {
  const baseStyles = gradient 
    ? 'p-6 border-b border-purple-200/50 bg-gradient-to-r from-purple-50 to-indigo-50'
    : 'p-6 border-b border-gray-200/50';
    
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function CardFooter({ children, className = '', gradient = false }: CardFooterProps) {
  const baseStyles = gradient 
    ? 'p-6 border-t border-purple-200/50 bg-gradient-to-r from-gray-50 to-purple-50'
    : 'p-6 border-t border-gray-200/50';
    
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}

'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeDebugger() {
  const { theme, effectiveTheme, toggleTheme } = useTheme();

  React.useEffect(() => {
    console.log('Current theme:', theme);
    console.log('Effective theme:', effectiveTheme);
    console.log('HTML classList:', document.documentElement.classList.toString());
  }, [theme, effectiveTheme]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-red-500 text-white p-4 rounded shadow-lg">
      <div>Theme: {theme}</div>
      <div>Effective: {effectiveTheme}</div>
      <button 
        onClick={toggleTheme}
        className="mt-2 px-3 py-1 bg-white text-red-500 rounded text-sm"
      >
        Toggle
      </button>
    </div>
  );
}

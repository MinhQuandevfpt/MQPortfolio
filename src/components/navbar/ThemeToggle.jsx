import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import sunAnimation from '../../assets/animation/sun.json';
import moonAnimation from '../../assets/animation/moon.json';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-16 rounded-full 
                 ${isDark ? 'bg-transparent' : 'bg-transparent'} 
                 dark:bg-gray-800 shadow-2xl flex items-center justify-center 
                 hover:scale-110 transition-all duration-500 ease-in-out`}
    >
      <Lottie 
        animationData={isDark ? sunAnimation : moonAnimation} 
        loop={true} 
        style={{ width: 40, height: 40 }} 
      />
    </button>
  );
};

export default ThemeToggle;

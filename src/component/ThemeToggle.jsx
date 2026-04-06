import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className="mt-auto flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-200 dark:bg-slate-800 dark:text-white transition-all"
    >
      {darkMode ? <Sun size={20} className="text-yellow-400"/> : <Moon size={20} className="text-slate-700"/>}
      <span className="font-medium">{darkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};

export default ThemeToggle;

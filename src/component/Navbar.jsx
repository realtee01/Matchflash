import React, { useState } from 'react';
import { Search, Menu, Bell } from 'lucide-react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900 border-b dark:border-slate-800">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-6 h-6 text-slate-700 dark:text-white" />
          </button>
          <h1 className="text-xl font-black italic text-brandBlue tracking-tighter">MATCHFLASH</h1>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-slate-500" />
          <Bell className="w-5 h-5 text-slate-500" />
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;

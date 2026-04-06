import React from 'react';
import { X, Settings, ShieldCheck, Globe, Share2, MessageSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-[60] transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-80 h-full bg-slate-50 dark:bg-slate-900 p-6 flex flex-col">
        <button onClick={onClose} className="self-end mb-4"><X className="dark:text-white" /></button>
        
        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-brandBlue rounded-full flex items-center justify-center text-3xl font-bold text-white mb-2">T</div>
          <h2 className="text-lg font-bold dark:text-white">Tobiloba Seun</h2>
        </div>

        {/* Menu Items */}
        <div className="space-y-4 flex-1">
          <div className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-slate-800 dark:text-white shadow-sm">
            <ShieldCheck className="text-yellow-500" /> <span>Premium</span>
          </div>
          <div className="flex items-center gap-4 p-3 dark:text-slate-300"><MessageSquare size={20}/> Feedback</div>
          <div className="flex items-center gap-4 p-3 dark:text-slate-300"><Share2 size={20}/> Share</div>
          <div className="flex items-center gap-4 p-3 dark:text-slate-300"><Globe size={20}/> Language</div>
          <div className="flex items-center gap-4 p-3 dark:text-slate-300"><Settings size={20}/> Settings</div>
        </div>
        
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;

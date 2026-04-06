import React from 'react';
import { Trophy, Tv2, Star, LayoutGrid, Users } from 'lucide-react';

const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t dark:border-slate-800 px-6 py-2 flex justify-between items-center z-50">
    <NavItem icon={<Trophy size={20}/>} label="All Games" active />
    <NavItem icon={<Tv2 size={20}/>} label="Live" />
    <NavItem icon={<Star size={20}/>} label="Favorites" />
    <NavItem icon={<LayoutGrid size={20}/>} label="Leagues" />
  </div>
);

const NavItem = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center gap-1 ${active ? "text-brandBlue" : "text-slate-400 dark:text-slate-500"}`}>
    {icon}
    <span className="text-[10px] font-medium">{label}</span>
  </div>
);

export default BottomNav;

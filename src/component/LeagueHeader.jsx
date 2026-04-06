import React from 'react';
import { ChevronRight } from 'lucide-react';

const LeagueHeader = ({ leagueName, country }) => (
  <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 sticky top-[52px] z-40 border-b dark:border-slate-700">
    <div className="flex items-center gap-2">
      <span className="text-sm font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
        {country}: {leagueName}
      </span>
    </div>
    <ChevronRight size={16} className="text-slate-400" />
  </div>
);

export default LeagueHeader;

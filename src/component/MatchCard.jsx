import React from 'react';

const MatchCard = ({ match }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm dark:bg-slate-800 dark:text-white">
      <div className="flex flex-col items-center w-1/3">
        <img src={match.homeLogo} alt="" className="w-8 h-8 mb-1" />
        <span className="text-xs font-semibold text-center">{match.homeTeam}</span>
      </div>
      
      <div className="flex flex-col items-center w-1/3">
        <span className="text-xl font-bold text-brandBlue">{match.score}</span>
        <span className="text-[10px] text-red-500 font-bold animate-pulse">{match.status}'</span>
      </div>

      <div className="flex flex-col items-center w-1/3">
        <img src={match.awayLogo} alt="" className="w-8 h-8 mb-1" />
        <span className="text-xs font-semibold text-center">{match.awayTeam}</span>
      </div>
    </div>
  );
};

export default MatchCard;

import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import BottomNav from '../component/BottomNav';
import LeagueHeader from '../component/LeagueHeader';
import MatchCard from '../component/MatchCard';
import { getLiveMatches } from '../api/fetchScores';

const Home = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Initial fetch
    getLiveMatches().then(data => setMatches(data?.response || []));
  }, []);

  return (
    <div className="pb-20 min-h-screen bg-slate-50 dark:bg-darkBg">
      <Navbar />
      
      {/* Date Scroller Placeholder */}
      <div className="flex gap-4 p-4 overflow-x-auto bg-white dark:bg-slate-900 border-b dark:border-slate-800 no-scrollbar">
        {["SUN", "MON", "TUE", "WED", "THU"].map((day, i) => (
          <div key={i} className={`flex flex-col items-center min-w-[60px] p-2 rounded-lg ${i===1 ? "bg-brandBlue text-white" : "dark:text-slate-400"}`}>
            <span className="text-[10px]">{day}</span>
            <span className="font-bold">0{5+i}</span>
          </div>
        ))}
      </div>

      <main>
        <LeagueHeader country="International" leagueName="Live Matches" />
        <div className="p-2">
          {matches.length > 0 ? (
            matches.map((m, idx) => <MatchCard key={idx} match={{
              homeTeam: m.teams.home.name,
              awayTeam: m.teams.away.name,
              homeLogo: m.teams.home.logo,
              awayLogo: m.teams.away.logo,
              score: `${m.goals.home} - ${m.goals.away}`,
              status: m.fixture.status.elapsed
            }} />)
          ) : (
            <div className="text-center py-10 dark:text-slate-400 font-medium">Loading live scores...</div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;

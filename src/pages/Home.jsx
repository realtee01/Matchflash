import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import BottomNav from '../component/BottomNav';
import LeagueHeader from '../component/LeagueHeader';
import MatchCard from '../component/MatchCard';
import { getLiveMatches } from '../api/fetchScores';

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await getLiveMatches();
      // Football-Data.org sends an array of matches
      setMatches(data || []);
      setLoading(false);
    };

    fetchMatches();
  }, []);

  return (
    <div className="pb-24 min-h-screen bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300">
      <Navbar />
      
      {/* Date Scroller - Matching your sketch */}
      <div className="flex gap-4 p-4 overflow-x-auto bg-white dark:bg-slate-900 border-b dark:border-slate-800 no-scrollbar sticky top-[52px] z-30">
        {[
          { day: "MON", date: "06" },
          { day: "TUE", date: "07" },
          { day: "WED", date: "08" },
          { day: "THU", date: "09" },
          { day: "FRI", date: "10" }
        ].map((item, i) => (
          <div key={i} className={`flex flex-col items-center min-w-[65px] p-3 rounded-2xl transition-all ${i === 0 ? "bg-brandBlue text-white shadow-lg shadow-blue-500/30" : "text-slate-400 dark:text-slate-500"}`}>
            <span className="text-[10px] font-bold">{item.day}</span>
            <span className="text-lg font-black tracking-tighter">{item.date}</span>
          </div>
        ))}
      </div>

      <main className="max-w-xl mx-auto p-3">
        <LeagueHeader country="Today" leagueName="All Scheduled Matches" />
        
        <div className="mt-4 space-y-3">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-8 h-8 border-4 border-brandBlue border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-400 font-medium italic">Syncing Live Scores...</p>
            </div>
          ) : matches.length > 0 ? (
            matches.map((m) => (
              <MatchCard 
                key={m.id} 
                match={{
                  // Updated mapping for Football-Data.org structure
                  homeTeam: m.homeTeam.shortName || m.homeTeam.name,
                  awayTeam: m.awayTeam.shortName || m.awayTeam.name,
                  homeLogo: m.homeTeam.crest, 
                  awayLogo: m.awayTeam.crest,
                  // If match hasn't started, show "vs" or the time
                  score: m.score.fullTime.home !== null 
                    ? `${m.score.fullTime.home} - ${m.score.fullTime.away}` 
                    : (m.status === 'TIMED' ? m.utcDate.substring(11, 16) : "vs"),
                  status: m.status === 'IN_PLAY' ? 'LIVE' : (m.status === 'FINISHED' ? 'FT' : m.status)
                }} 
              />
            ))
          ) : (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border-2 border-dashed dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">No matches found for today</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;

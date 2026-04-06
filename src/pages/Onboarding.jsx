import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { motion } from 'framer-motion';
import { ChevronRight, User, Heart } from 'lucide-react';

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [favTeam, setFavTeam] = useState('');
  const { setUser } = useContext(UserContext);

  const handleFinish = () => {
    if (name.trim()) {
      setUser({
        name: name.trim(),
        favoriteTeam: favTeam || 'None'
      });
      // Save to local storage so they don't see this again
      localStorage.setItem('matchflash_user', JSON.stringify({ name, favTeam }));
      onComplete();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border dark:border-slate-800"
      >
        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-brandBlue' : 'bg-slate-200 dark:bg-slate-800'}`} />
          <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-brandBlue' : 'bg-slate-200 dark:bg-slate-800'}`} />
        </div>

        {step === 1 ? (
          <motion.div initial={{ x: 20 }} animate={{ x: 0 }}>
            <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-2 italic">Welcome!</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">What should we call you on MatchFlash?</p>
            
            <div className="relative mb-6">
              <User className="absolute left-4 top-4 text-slate-400" size={20} />
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" 
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 dark:text-white focus:border-brandBlue outline-none transition-all"
              />
            </div>

            <button 
              onClick={() => name && setStep(2)}
              disabled={!name}
              className="w-full flex items-center justify-center gap-2 bg-brandBlue text-white font-bold py-4 rounded-xl shadow-lg disabled:opacity-50"
            >
              Continue <ChevronRight size={20} />
            </button>
          </motion.div>
        ) : (
          <motion.div initial={{ x: 20 }} animate={{ x: 0 }}>
            <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-2 italic">Almost There!</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Which team do you support? (Optional)</p>
            
            <div className="relative mb-6">
              <Heart className="absolute left-4 top-4 text-red-500" size={20} />
              <input 
                type="text" 
                value={favTeam}
                onChange={(e) => setFavTeam(e.target.value)}
                placeholder="e.g. Arsenal, Real Madrid" 
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 dark:text-white focus:border-brandBlue outline-none transition-all"
              />
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setStep(1)}
                className="flex-1 bg-slate-100 dark:bg-slate-800 dark:text-white font-bold py-4 rounded-xl"
              >
                Back
              </button>
              <button 
                onClick={handleFinish}
                className="flex-[2] bg-brandBlue text-white font-bold py-4 rounded-xl shadow-lg"
              >
                Enter MatchFlash
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Onboarding;

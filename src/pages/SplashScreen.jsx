import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0033ff] text-white">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -50, 0] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="mb-6"
      >
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-4xl">⚡</span>
        </div>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-5xl font-black italic tracking-tighter uppercase"
      >
        MatchFlash
      </motion.h1>
      <p className="mt-4 text-blue-200 animate-pulse">Loading live scores...</p>
    </div>
  );
};

export default SplashScreen;

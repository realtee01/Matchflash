import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-brandBlue text-white">
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="mb-4"
      >
        <img src="/logo.png" alt="MatchFlash Logo" className="w-24 h-24" />
      </motion.div>
      <h1 className="text-4xl font-bold italic tracking-tighter">MatchFlash</h1>
    </div>
  );
};

export default SplashScreen;

import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Onboarding = ({ onComplete }) => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim()) {
      setUser(prev => ({ ...prev, name }));
      onComplete();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-6">
      <h2 className="text-3xl font-bold dark:text-white mb-2">Welcome to MatchFlash</h2>
      <p className="text-gray-500 mb-8 text-center">

import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('matchflash_user');
    return saved ? JSON.parse(saved) : { name: '', favoriteTeams: [], theme: 'dark' };
  });

  useEffect(() => {
    localStorage.setItem('matchflash_user', JSON.stringify(user));
    if (user.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [user]);

  const toggleTheme = () => {
    setUser(prev => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { useState, useEffect } from 'react';
import SplashScreen from './pages/SplashScreen';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import { UserProvider } from './context/UserContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    // 6.5 second timer for the bouncing splash animation
    const timer = setTimeout(() => {
      setLoading(false);
      // Check if user has already visited (optional)
      const savedUser = localStorage.getItem('matchflash_user');
      if (savedUser) setHasAccount(true);
    }, 6500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <UserProvider>
      <div className="min-h-screen transition-colors duration-300">
        {!hasAccount ? (
          <Onboarding onComplete={() => setHasAccount(true)} />
        ) : (
          <Home />
        )}
      </div>
    </UserProvider>
  );
}

export default App;

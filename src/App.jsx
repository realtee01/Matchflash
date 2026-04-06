import React, { useState, useEffect } from 'react';
import SplashScreen from './pages/SplashScreen';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import { UserProvider } from './context/UserContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    // 6-7 second bounce animation timer
    const timer = setTimeout(() => setLoading(false), 6500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <UserProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-darkBg">
        {showOnboarding ? (
          <Onboarding onFinish={() => setShowOnboarding(false)} />
        ) : (
          <Home />
        )}
      </div>
    </UserProvider>
  );
}

export default App;

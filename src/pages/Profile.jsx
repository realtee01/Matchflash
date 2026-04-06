import React from 'react';
import Navbar from '../component/Navbar';
import BottomNav from '../component/BottomNav';

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-darkBg pb-20">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold dark:text-white">Account Settings</h1>
        {/* Reuse Sidebar styles here for the Profile content */}
      </div>
      <BottomNav />
    </div>
  );
};

export default Profile;

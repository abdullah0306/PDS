'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <header className="fixed top-0 right-0 z-30 flex h-16 w-[calc(100%-16rem)] items-center justify-between border-b border-[#E2E8F0]/10 bg-white/5 backdrop-blur-md px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Welcome back, <span className="text-[#6366F1]">{user?.fullName?.split(' ')[0] || 'Admin'}</span>
        </h1>
        <p className="text-sm text-gray-500">Here's what's happening with your project.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg">
            <i className="feather-search h-5 w-5" />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className="w-64 px-4 py-2 text-sm bg-gray-100 dark:bg-[#1E1E45] border-0 rounded-lg focus:ring-2 focus:ring-[#6366F1] text-gray-600 dark:text-gray-300 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg">
            <i className="feather-settings h-5 w-5" />
          </button>
          <button className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg">
            <i className="feather-bell h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="h-8 w-8 rounded-full bg-[#6366F1] flex items-center justify-center cursor-pointer">
            <span className="text-sm font-medium text-white">
              {user?.fullName?.charAt(0) || 'A'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

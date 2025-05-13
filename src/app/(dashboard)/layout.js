'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';

export default function DashboardLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // The middleware will handle the auth check and redirection
    // This is just a backup client-side check
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || user.role !== 'admin') {
      router.replace('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#fff]">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="p-8 pt-24 bg-[#F4F7FE]">
          {children}
        </main>
      </div>
    </div>
  );
}

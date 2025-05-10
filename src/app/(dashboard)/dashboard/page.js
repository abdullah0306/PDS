'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalUsers: '32,983',
    clicks: '2.42M',
    sales: '2,400$',
    newCustomers: '320'
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Users */}
        <div className="rounded-lg bg-[#1E1E45] p-6 border border-[#2E2E55]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Users</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{stats.totalUsers}</h3>
            </div>
            <div className="rounded-full bg-[#6366F1]/10 p-3">
              <i className="feather-users h-6 w-6 text-[#6366F1]" />
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            <span className="text-green-400">+16%</span> from yesterday
          </p>
        </div>

        {/* Clicks and Sales */}
        <div className="rounded-lg bg-[#1E1E45] p-6 border border-[#2E2E55]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Clicks</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{stats.clicks}</h3>
            </div>
            <div className="rounded-full bg-[#6366F1]/10 p-3">
              <i className="feather-mouse-pointer h-6 w-6 text-[#6366F1]" />
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            <span className="text-green-400">+48%</span> from yesterday
          </p>
        </div>

        {/* Sales */}
        <div className="rounded-lg bg-[#1E1E45] p-6 border border-[#2E2E55]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Sales</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{stats.sales}</h3>
            </div>
            <div className="rounded-full bg-[#6366F1]/10 p-3">
              <i className="feather-shopping-cart h-6 w-6 text-[#6366F1]" />
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            <span className="text-green-400">+25%</span> from yesterday
          </p>
        </div>

        {/* New Customers */}
        <div className="rounded-lg bg-[#1E1E45] p-6 border border-[#2E2E55]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">New Customers</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{stats.newCustomers}</h3>
            </div>
            <div className="rounded-full bg-[#6366F1]/10 p-3">
              <i className="feather-user-plus h-6 w-6 text-[#6366F1]" />
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            <span className="text-green-400">+38%</span> from yesterday
          </p>
        </div>
      </div>

      {/* Additional dashboard content can be added here */}
    </div>
  );
}

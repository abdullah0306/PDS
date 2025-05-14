'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import feather from 'feather-icons';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'grid' },
    { name: 'Analytics', path: '/dashboard/analytics', icon: 'bar-chart-2' },
    { name: 'Customers', path: '/dashboard/customers', icon: 'users' },
    { name: 'Orders', path: '/dashboard/orders', icon: 'shopping-cart' },
    { name: 'Content', path: '/dashboard/content', icon: 'file-text' },
   
  ];

  const fileItems = [
    {
      name: 'File Management',
      path: '/dashboard/files',
      icon: 'folder',
      hasChildren: true,
    },
    {
      name: 'Upload Files',
      path: '/dashboard/files/upload',
      icon: 'upload',
      isChild: true,
    },
    {
      name: 'My Files',
      path: '/dashboard/files/my-files',
      icon: 'file',
      isChild: true,
    },
    {
      name: 'Pending Review',
      path: '/dashboard/files/pending',
      icon: 'clock',
      isChild: true,
    },
  ];

  const settingsItems = [
    { name: 'Settings', path: '/dashboard/settings', icon: 'settings' },
    { name: 'Help & Support', path: '/dashboard/help', icon: 'help-circle' },
  ];

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[#0F0F29] text-white">
      <div className="flex h-full flex-col justify-between py-6">
        <div className="space-y-6 px-6">
          <div className="flex items-center space-x-3">
            <img src="/img/svg/logo.svg" alt="PDS Logo" />
          </div>

          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-gray-400">MENU</p>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-[#6366F1] text-white' : 'text-gray-400 hover:bg-white/5'}`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: feather.icons[item.icon].toSvg({ width: 16, height: 16 }) }} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-gray-400">FILES</p>
            <nav className="space-y-1">
              <div className="group">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <span dangerouslySetInnerHTML={{ __html: feather.icons['folder'].toSvg({ width: 16, height: 16 }) }} />
                    <span>File Management</span>
                  </div>
                  <span
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    dangerouslySetInnerHTML={{ __html: feather.icons['chevron-down'].toSvg({ width: 16, height: 16 }) }}
                  />
                </button>

                {isOpen && (
                  <div className="ml-10 space-y-1 pt-1">
                    {fileItems
                      .filter((item) => item.isChild)
                      .map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5"
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            </nav>
          </div>


          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-gray-400">SETTINGS</p>
            <nav className="space-y-1">
              {settingsItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5"
                >
                  <span dangerouslySetInnerHTML={{ __html: feather.icons[item.icon].toSvg({ width: 16, height: 16 }) }} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="px-6">
          <button
            onClick={signOut}
            className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5"
          >
            <span dangerouslySetInnerHTML={{ __html: feather.icons['log-out'].toSvg({ width: 16, height: 16 }) }} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

"use client";

import { User, Lock, SlidersHorizontal } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#F4F7FE]  space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <SlidersHorizontal className="w-6 h-6 text-blue-500" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-8">
        {/* Profile Settings */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <User className="text-blue-500 w-5 h-5" />
            Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="text" placeholder="Full Name" className="border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <input type="email" placeholder="Email Address" className="border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
        </div>

        {/* Account Settings */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <Lock className="text-blue-500 w-5 h-5" />
            Account Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="password" placeholder="Current Password" className="border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <input type="password" placeholder="New Password" className="border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Preferences</h2>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              Receive notifications
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              Dark mode
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

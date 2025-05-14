"use client";

import { ShieldCheck, Mail, PhoneCall, MessageSquare, HelpCircle } from "lucide-react";

export default function HelpSupport() {
  return (
    <div className="min-h-screen bg-[#F4F7FE] space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Help & Support</h1>
        <ShieldCheck className="text-blue-500 w-6 h-6" />
      </div>

      {/* Info Section */}
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <HelpCircle className="text-blue-500 w-5 h-5" />
            Frequently Asked Questions
          </h2>
          <ul className="mt-3 space-y-3 text-sm text-gray-700">
            <li>
              <strong>How do I upload files?</strong><br />
              Click the <span className="font-medium text-blue-600">Upload Files</span> button on the dashboard and select your file.
            </li>
            <li>
              <strong>How long does approval take?</strong><br />
              Files are typically reviewed within 24–48 hours.
            </li>
            <li>
              <strong>Why was my file rejected?</strong><br />
              Files may be rejected if they don’t meet the format or size guidelines.
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <MessageSquare className="text-blue-500 w-5 h-5" />
            Contact Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-[#F9FAFB] p-4 rounded-xl shadow-sm">
              <h3 className="text-sm font-semibold text-gray-700">Email Support</h3>
              <p className="text-sm text-gray-500">Reach out to us at:</p>
              <p className="text-blue-600 font-medium mt-1">support@yourapp.com</p>
              <Mail className="mt-2 w-5 h-5 text-blue-400" />
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-xl shadow-sm">
              <h3 className="text-sm font-semibold text-gray-700">Phone</h3>
              <p className="text-sm text-gray-500">Call us between 9am–6pm:</p>
              <p className="text-blue-600 font-medium mt-1">+92 123 4567890</p>
              <PhoneCall className="mt-2 w-5 h-5 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

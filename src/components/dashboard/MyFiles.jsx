"use client";

import {
  UploadCloud,
  File as FileIcon,
  Filter,
  LayoutGrid,
  Clock,
  ArrowUpDown,
} from "lucide-react";
import { useState } from "react";
import Link from 'next/link';

export default function MyFiles() {
  const [showDateInput, setShowDateInput] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const activityData = [
    {
      type: "pdf",
      status: "File Uploaded",
      name: "quarterly_report.pdf",
      time: "2h ago",
    },
    {
      type: "excel",
      status: "File Approved",
      name: "financial_statement.xlsx",
      time: "1d ago",
    },
    {
      type: "word",
      status: "File Rejected",
      name: "project_proposal.docx",
      time: "3d ago",
    },
  ];

  const getIcon = (type) => {
    const map = {
      pdf: "/pdf.png",
      excel: "/excel.png",
      word: "/word.png",
    };
    return map[type] || "/file.png";
  };

  return (
    <div className="min-h-screen bg-[#F4F7FE] space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        
        <Link key="/dashboard/files/upload" href="/dashboard/files/upload">
            <button className="flex items-center gap-2 bg-blue text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <UploadCloud className="w-5 h-5" />
            Upload Files
            </button>
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Total Files</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-2xl font-bold text-gray-800">4</p>
            <FileIcon className="w-6 h-6 text-blue-400" />
          </div>
          <p className="text-sm text-green-500 mt-2">Manage all files</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Pending Approval</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-2xl font-bold text-gray-800">2</p>
            <ArrowUpDown className="w-6 h-6 text-yellow-400" />
          </div>
          <p className="text-sm text-yellow-500 mt-2">Awaiting review</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Approved Files</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-2xl font-bold text-gray-800">2</p>
            <FileIcon className="w-6 h-6 text-green-400" />
          </div>
          <p className="text-sm text-green-500 mt-2">Ready to use</p>
        </div>
      </div>

      {/* Activity + Files */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-5 rounded-2xl shadow-sm col-span-1">
          <h2 className="text-md font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-sm text-gray-600">
            {activityData.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <img
                  src={getIcon(item.type)}
                  alt={item.type}
                  className="w-10 h-10 object-contain bg-gray-100 rounded"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800">{item.status}</span>
                  <span className="text-gray-600">{item.name}</span>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </li>
            ))}
          </ul>

          <a
            className="mt-4 inline-block text-sm text-blue-600 text-blue hover:underline"
            href="#"
          >
            View all activity
          </a>
        </div>

        {/* Your Recent Files */}
        <div className="bg-white p-5 rounded-2xl shadow-sm col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md font-semibold text-gray-800">
              Your Recent Files
            </h2>
           
            <div className="relative flex items-center gap-3">
  <button className="text-sm text-gray-600 flex items-center gap-1">
    <Filter className="w-4 h-4" />
    All
  </button>

  <button
    onClick={() => setShowDateDropdown(!showDateDropdown)}
    className="text-sm text-gray-600 flex items-center gap-1"
  >
    <Clock className="w-4 h-4" />
    Date
  </button>

  <button className="text-sm text-gray-600 flex items-center gap-1">
    <LayoutGrid className="w-4 h-4" />
  </button>

  {/* Date Dropdown */}
  {showDateDropdown && (
    <div className="absolute top-10 right-0 z-10 bg-white border rounded-lg shadow-lg p-2 w-48">
      {["May 13, 2025", "May 12, 2025", "May 11, 2025", "May 10, 2025"].map((date, i) => (
        <div
          key={i}
          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
          onClick={() => {
            console.log("Selected date:", date);
            setShowDateDropdown(false);
          }}
        >
          {date}
        </div>
      ))}
    </div>
  )}
</div>


          </div>

          {/* File Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                name: "project_proposal.docx",
                size: "1 MB",
                time: "30m ago",
                date: "2025-05-12",
                status: "Pending",
              },
              {
                name: "financial_statement.xlsx",
                size: "2 MB",
                time: "5h ago",
                date: "2025-05-11",
                status: "Pending",
              },
              {
                name: "quarterly_report_q1.pdf",
                size: "3 MB",
                time: "2d ago",
                date: "2025-05-10",
                status: "Approved",
              },
              {
                name: "team_photo.jpg",
                size: "4 MB",
                time: "5d ago",
                date: "2025-05-08",
                status: "Approved",
             
              },
            ].map((file, index) => (
              <div
                key={index}
                className="bg-[#F9FAFB] rounded-xl p-4 space-y-2 shadow-sm"
              >
                {file.image ? (
                  <img
                    src="/team_photo.jpg"
                    alt={file.name}
                    className="rounded-lg h-24 w-full object-cover"
                  />
                ) : (
                  <FileIcon className="w-10 h-10 text-gray-400 mx-auto" />
                )}
                <p className="text-sm font-medium text-gray-700 truncate">
                  {file.name}
                </p>
                <p className="text-xs text-gray-400">
                  {file.size} • Uploaded {file.time}
                </p>
                <p className="text-xs text-gray-500">📅 {file.date}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    file.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : file.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {file.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

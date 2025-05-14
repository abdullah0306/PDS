import React from 'react';

const filesData = [
  {
    fileName: 'report_q1.pdf',
    uploadDate: '2025-05-01',
    size: '2.4 MB',
    status: 'Pending',
  },
  {
    fileName: 'presentation_final.pptx',
    uploadDate: '2025-05-02',
    size: '5.1 MB',
    status: 'Pending',
  },
  {
    fileName: 'invoice_2345.xlsx',
    uploadDate: '2025-05-03',
    size: '650 KB',
    status: 'Pending',
  },
  {
    fileName: 'banner_design.png',
    uploadDate: '2025-05-04',
    size: '3.2 MB',
    status: 'Pending',
  },
  {
    fileName: 'cv_john_doe.pdf',
    uploadDate: '2025-05-04',
    size: '1.1 MB',
    status: 'Pending',
  },
  {
    fileName: 'audit_sheet.xlsx',
    uploadDate: '2025-05-05',
    size: '800 KB',
    status: 'Pending',
  },
  {
    fileName: 'team_photo.jpg',
    uploadDate: '2025-05-06',
    size: '2.6 MB',
    status: 'Pending',
  },
  {
    fileName: 'social_plan.docx',
    uploadDate: '2025-05-06',
    size: '700 KB',
    status: 'Pending',
  },
  {
    fileName: 'logo.svg',
    uploadDate: '2025-05-07',
    size: '90 KB',
    status: 'Pending',
  },
  {
    fileName: 'brochure.pdf',
    uploadDate: '2025-05-07',
    size: '4.7 MB',
    status: 'Pending',
  },
  {
    fileName: 'video_ad.mp4',
    uploadDate: '2025-05-08',
    size: '22.1 MB',
    status: 'Pending',
  },
  {
    fileName: 'feature_list.txt',
    uploadDate: '2025-05-08',
    size: '35 KB',
    status: 'Pending',
  },
  {
    fileName: 'app_screenshots.zip',
    uploadDate: '2025-05-09',
    size: '11.5 MB',
    status: 'Pending',
  },
  {
    fileName: 'contract_template.docx',
    uploadDate: '2025-05-10',
    size: '750 KB',
    status: 'Pending',
  },
  {
    fileName: 'meeting_notes.pdf',
    uploadDate: '2025-05-11',
    size: '1.4 MB',
    status: 'Pending',
  },
];

const MyFilesPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold">My Files</h1>
          <p className="text-sm text-gray-500">Pending Review</p>
        </div>

        {/* Date Filter */}
        <div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="">Filter by Date</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full text-sm text-left bg-white">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 font-medium text-gray-600">File Name</th>
              <th className="px-6 py-3 font-medium text-gray-600">Upload Date</th>
              <th className="px-6 py-3 font-medium text-gray-600">Size</th>
              <th className="px-6 py-3 font-medium text-gray-600">Status</th>
              <th className="px-6 py-3 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filesData.map((file, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-gray-700">{file.fileName}</td>
                <td className="px-6 py-4 text-gray-700">{file.uploadDate}</td>
                <td className="px-6 py-4 text-gray-700">{file.size}</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
                    {file.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="px-3 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600">
                    Approve
                  </button>
                  <button className="px-3 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFilesPage;

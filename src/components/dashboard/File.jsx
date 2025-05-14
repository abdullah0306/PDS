"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function File() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FE]">
      {/* Info Banner */}
      <div className="bg-[#E8F0FE] text-[#2563EB] px-6 py-4 rounded-lg text-sm font-medium mb-6">
        Files will be reviewed by an administrator before they are approved. You will receive a notification once your file has been reviewed.
      </div>

      {/* Upload Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Upload Files</h2>

        <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center py-12 px-4 text-center cursor-pointer hover:border-blue-500 transition-all">
          <UploadCloud className="text-gray-400 w-10 h-10 mb-4" />
          <p className="text-gray-600 font-medium">Drag and drop files here</p>
          <p className="text-gray-400 text-sm">or click to browse files from your computer</p>

          <label htmlFor="file-upload" className="mt-4 inline-block px-5 py-2 bg-[#3B82F6] text-white font-semibold rounded-lg cursor-pointer hover:bg-[#2563EB] transition-all">
            Select Files
          </label>
          <input id="file-upload" type="file" className="hidden" multiple onChange={handleFileChange} />
        </div>

        <p className="text-gray-400 text-xs mt-4">Maximum file size: 50MB • Supported file types: PDF, JPG, PNG, DOC, XLS</p>
      </div>

      {/* Guidelines */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-md font-semibold mb-4 text-gray-700">File Upload Guidelines</h3>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li>⚠️ <strong>File Types:</strong> We accept PDF, Word, Excel, PowerPoint, JPG, PNG, and text files.</li>
          <li>⚠️ <strong>File Size:</strong> Maximum file size is 50MB per file.</li>
          <li>⚠️ <strong>Security:</strong> All uploads are encrypted and securely stored. Files containing malware or viruses will be rejected.</li>
          <li>⚠️ <strong>Review Process:</strong> Files are typically reviewed within 24-48 hours. You will be notified once the review is complete.</li>
        </ul>
      </div>
    </div>
  );
}

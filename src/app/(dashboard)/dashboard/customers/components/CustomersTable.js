'use client';

import { useState } from 'react';
import { FiSearch, FiFilter, FiMoreVertical, FiEye, FiMail, FiChevronDown, FiUsers, FiUserCheck, FiClock, FiTrendingUp } from 'react-icons/fi';
import { CustomerModal } from './CustomerModal';

export function CustomersTable({ initialCustomers, statsData }) {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const renderStatusBadge = (status) => {
    const statusStyles = {
      New: 'bg-blue-100 text-blue-800 text-blue',
      Contacted: 'bg-yellow-100 text-yellow-800',
      Qualified: 'bg-green-100 text-green-800',
      Lost: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`px-2 py-1 text-xs text font-medium rounded-full ${statusStyles[status] || ''}`}>
        {status}
      </span>
    );
  };

  const renderPriorityBadge = (priority) => {
    const priorityStyles = {
      High: 'bg-red-100 text-red-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      Low: 'bg-green-100 text-green-800',
    };

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityStyles[priority] || ''}`}>
        {priority}
      </span>
    );
  };

  const itemsPerPage = 10;

  const filteredCustomers = initialCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (customer.message && customer.message.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-[#F4F7FE] py-4 px-2">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 text-sm text-[13px]">{stat.title}</h3>
                <p className="text-2xl font-bold mt-2 text-gray-600">{stat.value}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500">{stat.period}</span>
                </div>
              </div>
              <div className="p-0 bg-blue-50 rounded-lg">
                {stat.title === 'Total Leads' && <FiTrendingUp className="w-6 h-6 text-blue-500" />}
                {stat.title === 'Conversion Rate' && <FiUserCheck className="w-6 h-6 text-green-500" />}
                {stat.title === 'Avg. Response Time' && <FiClock className="w-6 h-6 text-yellow-500" />}
                {stat.title === 'New Leads' && <FiTrendingUp className="w-6 h-6 text-purple-500" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <FiFilter className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium">Filters</span>
          </div>
          <div className="relative flex-grow max-w-xl">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or message..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 text-black flex items-center gap-1">
              Status <FiChevronDown className="h-5 w-5 text-gray-400" />
            </button>
            <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 text-black flex items-center gap-1">
              Priority <FiChevronDown className="h-5 w-5 text-gray-400" />
            </button>
            <button className="px-4 py-2 text-sm  bg-blue-600 rounded-lg hover:bg-blue-700 text-black">
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl">
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium">Lead Management</h2>
            <span className="text-sm text-gray-500">{filteredCustomers.length} total leads</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-y border-gray-200">
                <th className="px-6 py-3 text-left text-xs text-black  font-medium text-gray-500">Lead</th>
                <th className="px-6 py-3 text-left text-xs text-black font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 text-left text-xs text-black font-medium text-gray-500">Priority</th>
                <th className="px-6 py-3 text-left text-xs text-black font-medium text-gray-500">Source</th>
                <th className="px-6 py-3 text-left text-xs text-black font-medium text-gray-500">Created</th>
                <th className="px-6 py-3 text-left text-xs text-black font-medium text-gray-500">Message</th>
                <th className="px-6 py-3 text-left text-xs text-black font-medium text-gray-500">Attachments</th>
                <th className="px-6 py-3 text-left text-xs text-black font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b border-gray-100">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-sm text-black">{customer.name}</div>
                      <div className="text-xs text-black text-gray-500">{customer.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{renderStatusBadge(customer.status)}</td>
                  <td className="px-6 py-4">{renderPriorityBadge(customer.priority)}</td>
                  <td className="px-6 py-4 text-sm text-black text-gray-500">{customer.source}</td>
                  <td className="px-6 py-4 text-sm text-black text-gray-500">{customer.created}</td>
                  <td className="px-6 py-4 text-sm text-black text-gray-500">{customer.message}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {customer.attachments.map((attachment, i) => (
                        <div key={i} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs text-black">
                          <span className="text-red-500">■</span>
                          {attachment}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedCustomer(customer);
                          setIsModalOpen(true);
                        }}
                        className="text-gray-400 hover:text-gray-600 text-black"
                      >
                        <FiEye className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 text-black">
                        <FiMail className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 text-black">
                        <FiMoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredCustomers.length)} of {filteredCustomers.length} results
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-black border rounded hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-black border rounded hover:bg-gray-50 ${currentPage === page ? 'bg-blue-50 border-blue-500 text-blue-600' : ''}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-black border rounded hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <CustomerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCustomer(null);
        }}
        customer={selectedCustomer}
      />
    </div>
  );
} 
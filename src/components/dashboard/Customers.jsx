'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiX, FiSearch, FiFilter, FiMoreVertical, FiEye, FiMail, FiChevronDown, FiUsers, FiUserCheck, FiClock, FiTrendingUp } from 'react-icons/fi';

export const CustomerModal = ({ isOpen, onClose, customer }) => {
  if (!customer) return null;
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
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title as="h3" className="text-lg font-medium text-black">
                    Lead Details
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Name</h4>
                      <p className="text-black">{customer.name}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Email</h4>
                      <p className="text-black">{customer.email}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Status</h4>
                      <div className="mt-1">{renderStatusBadge(customer.status)}</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Priority</h4>
                      <div className="mt-1">{renderPriorityBadge(customer.priority)}</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Source</h4>
                      <p className="text-black">{customer.source}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Created</h4>
                      <p className="text-black">{customer.created}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Message</h4>
                    <p className="text-black mt-1">{customer.message}</p>
                  </div>

                  {customer.attachments.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Attachments</h4>
                      <div className="flex gap-2 mt-2">
                        {customer.attachments.map((attachment, i) => (
                          <div key={i} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs text-black">
                            <span className="text-red-500">■</span>
                            {attachment}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const customerData = [
  {
    name: 'John Smith',
    email: 'john.smith@example.com',
    status: 'New',
    priority: 'Medium',
    source: 'Contact Page',
    created: 'Apr 15, 2025, 4:00 PM',
    message: "I'm interested in your services and would like to...",
    attachments: ['Pre-Order', 'Image'],
  },
  {
    name: 'Ethan Clark',
    email: 'ethan.c@startup.co',
    status: 'New',
    priority: 'High',
    source: 'Website Form',
    created: 'Apr 15, 2025, 3:45 PM',
    message: "Looking for a solution that can help with...",
    attachments: ['Proposal'],
  },
  {
    name: 'Sarah Wilson',
    email: 'sarah.w@company.com',
    status: 'Contacted',
    priority: 'Medium',
    source: 'Referral',
    created: 'Apr 15, 2025, 2:30 PM',
    message: "Our team is expanding and we need...",
    attachments: ['Requirements', 'Budget'],
  },
  {
    name: 'Michael Brown',
    email: 'm.brown@enterprise.org',
    status: 'Qualified',
    priority: 'High',
    source: 'LinkedIn',
    created: 'Apr 15, 2025, 1:15 PM',
    message: "We're looking to implement a new system...",
    attachments: ['RFP', 'Timeline'],
  },
  {
    name: 'Emma Davis',
    email: 'emma.d@tech.io',
    status: 'Lost',
    priority: 'Low',
    source: 'Cold Email',
    created: 'Apr 15, 2025, 11:00 AM',
    message: "Thank you for your proposal, but we've decided...",
    attachments: ['Feedback'],
  },
  {
    name: 'James Taylor',
    email: 'jtaylor@email.com',
    status: 'Contacted',
    priority: 'Low',
    source: 'Support',
    created: 'Apr 14, 2025, 7:10 PM',
    message: "I'm having trouble understanding how to use the...",
    attachments: [],
  },
  {
    name: 'Olivia Martinez',
    email: 'olivia.m@bigcorp.com',
    status: 'New',
    priority: 'High',
    source: 'Referral',
    created: 'Apr 15, 2025, 2:00 PM',
    message: 'We are considering switching from our current pr...',
    attachments: [],
  },
  {
    name: 'Isabella Cooper',
    email: 'isabella.c@enterprise.net',
    status: 'Contacted',
    priority: 'Medium',
    source: 'Webinar',
    created: 'Apr 14, 2025, 8:50 PM',
    message: 'Our enterprise is evaluating solutions in your spa...',
    attachments: ['Pre-Order', 'Image'],
  },
  {
    name: 'Emma Johnson',
    email: 'emma.j@company.co',
    status: 'Contacted',
    priority: 'High',
    source: 'Referral',
    created: 'Apr 14, 2025, 2:45 PM',
    message: 'Our company is looking for a partnership opportu...',
    attachments: [],
  },
  {
    name: 'Michael Brown',
    email: 'mbrown@email.net',
    status: 'Qualified',
    priority: 'Medium',
    source: 'Organic Search',
    created: 'Apr 13, 2025, 9:15 PM',
    message: 'I found your website while searching for solutions...',
    attachments: [],
  },
  {
    name: 'Ava Robinson',
    email: 'ava.r@consultancy.biz',
    status: 'Qualified',
    priority: 'High',
    source: 'Contact Page',
    created: 'Apr 13, 2025, 2:30 PM',
    message: 'Our consultancy is interested in a bulk purchase f...',
    attachments: [],
  },
];

const statsData = [
  {
    title: 'Total Leads',
    value: '156',
    change: '+12%',
    trend: 'up',
    period: 'from last month',
  },
  {
    title: 'Conversion Rate',
    value: '24.8%',
    change: '+1.2%',
    trend: 'up',
    period: 'from last month',
  },
  {
    title: 'Avg. Response Time',
    value: '2.4h',
    change: '-19%',
    trend: 'up',
    period: 'from last month',
  },
  {
    title: 'New Leads',
    value: '32',
    change: '-5%',
    trend: 'down',
    period: 'from last month',
  },
];

export default function CustomersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
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

  const filteredCustomers = customerData.filter(customer =>
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

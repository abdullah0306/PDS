'use client';

import { useState } from 'react';
import { FiSearch, FiFilter, FiMoreVertical, FiEye, FiMail, FiChevronDown, FiUsers, FiUserCheck, FiClock, FiTrendingUp } from 'react-icons/fi';
import CustomerModal from './CustomerModal';

const customerData = [
  // ... existing code ...
];

const statsData = [
  // ... existing code ...
];

export default function CustomersPage() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <CustomerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        customer={selectedCustomer}
      />
      {/* Rest of your page component */}
    </>
  );
}

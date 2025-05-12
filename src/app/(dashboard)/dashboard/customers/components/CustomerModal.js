'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiX } from 'react-icons/fi';

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
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

import Sidebar from './Sidebar';

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Toggle Button - Always Visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-lg shadow-lg bg-[#000] cursor-pointer"
      >
        {isOpen ? (
          <X size={24} className="hover:text-red-500" />
        ) : (
          <Menu size={24} className="hover:text-gray-300" />
        )}
      </button>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-y-0 left-0 z-40 w-64">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 bg-primary p-6 overflow-y-auto transition-all duration-300 ${
          isOpen ? 'ml-64' : ''
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;

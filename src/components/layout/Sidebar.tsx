import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Toggle button - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 text-white bg-purple-900 p-2 rounded-full"
      >
        <X />
      </button>

      {/* Sidebar */}
      {isOpen && (
        <div className="w-64 min-h-screen bg-[#674AA3] text-white fixed top-0 left-0 z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col gap-8 text-2xl font-semibold text-center">
            <NavLink
              to="/monsters"
              className={({ isActive }) => (isActive ? 'text-green-500' : '')}
            >
              Monsters
            </NavLink>
            <NavLink
              to="/battlefield"
              className={({ isActive }) => (isActive ? 'text-green-500' : '')}
            >
              Battlefield
            </NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
              Logout
            </NavLink>
          </nav>

          <footer className="absolute bottom-4 text-xs text-white/70 text-center w-full">
            Monster Battle – All rights reserved
          </footer>
        </div>
      )}
    </>
  );
};

export default Sidebar;

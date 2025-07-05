import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { useEffect, useRef, type RefObject } from 'react';

// SidebarProps define crucial props to be used by the Sidebar component.
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

// Sidebar defines the structure that group together all menu actions in the platform.
// It communicates directly with the routing system to redirect users.
const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const sideNavRef: RefObject<HTMLDivElement | null> = useRef(null);

  // handleClick is responsible for closing the sidebar whenever the user chooses to navigate to a page.
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // handling closing the sidenav by clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

    // React will bug us to add setIsOpen as dependency here but it is not necessary
    // It is safe to omit it because useState setter functions are stable and guaranteed
    // by React.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      {/* Toggle button - always visible */}
      <button
        onClick={handleClick}
        className="fixed top-4 left-4 z-50 text-white bg-purple-900 p-2 rounded-full"
      >
        <X />
      </button>

      {/* Sidebar navigation options */}
      {isOpen && (
        <div
          ref={sideNavRef}
          className="w-70 min-h-screen bg-[#674AA3] text-white fixed top-0 left-0 z-40 flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col gap-8 text-2xl font-semibold text-center">
            <NavLink
              to="/monsters"
              className={({ isActive }) => (isActive ? 'text-green-500' : '')}
              onClick={handleClick}
            >
              Monsters
            </NavLink>
            <NavLink
              to="/battlefield"
              className={({ isActive }) => (isActive ? 'text-green-500' : '')}
              onClick={handleClick}
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

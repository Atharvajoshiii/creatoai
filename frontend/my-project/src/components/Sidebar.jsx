import React, { useState } from 'react';
import { FaHome, FaCog } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 for authentication
import LogoutButton from '../Auth/LogoutButton';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useAuth0(); // Get user data and auth status

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Hamburger Menu for Mobile */}
      <div className="bg-gray-200 text-black lg:hidden">
        <button
          onClick={toggleSidebar}
          className="p-4 focus:outline-none hover:text-gray-600"
        >
          <AiOutlineMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white text-black w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:min-h-screen transition-transform duration-300 ease-in-out shadow-xl`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center h-20 border-b border-gray-300 shadow-sm">
          <h1 className="text-2xl font-bold text-black">MyApp</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow px-4 py-6">
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-black rounded-lg transition-colors"
              >
                <FaHome size={20} />
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#settings"
                className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-black rounded-lg transition-colors"
              >
                <FaCog size={20} />
                <span className="ml-3">Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* User Section */}
        {isAuthenticated && user && (
          <div className="border-t border-gray-300 p-4 flex items-center shadow-sm">
            <img
              src={user.picture}
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-black font-medium">{user.name}</span>
          </div>
        )}

        {/* Logout Button */}
        <div className="border-t border-gray-300 p-4 shadow-sm">
          <LogoutButton />
        </div>
      </div>

      {/* Overlay for Mobile when Sidebar is Open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;

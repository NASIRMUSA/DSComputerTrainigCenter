import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-green-800">
              Digital Solution
            </NavLink>
            <span className="ml-2 text-sm text-gray-600 hidden md:block">Computer Training Center</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <NavLink 
              to="/courses" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-700'}`
              }
            >
              Courses
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-700'}`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-700'}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Student Area Button - Right side */}
          <div className="hidden md:block">
            <NavLink 
              to="/student-area" 
              className="px-8 py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Student Area
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
        
            <button 
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/courses" 
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `font-medium px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`
                }
              >
                Courses
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `font-medium px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`
                }
              >
                About Us
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `font-medium px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`
                }
              >
                Contact
              </NavLink>
              <NavLink 
                to="/student-area" 
                onClick={toggleMenu}
                className="px-4 py-2 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors text-center"
              >
                Student Area
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
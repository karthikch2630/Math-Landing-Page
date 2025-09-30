import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname !== path) {
      // Navigate to the page first
      navigate(path);
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 50); // small delay to allow DOM to render
    } else if (sectionId) {
      // Same page: scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsMenuOpen(false); // close mobile menu
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Ankuram Logo"
                className="h-40 w-auto" // Keeping original height
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation('/', 'home')}
                className="text-gray-700 hover:text-black transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/', 'assessment')}
                className="text-gray-700 hover:text-black transition-colors"
              >
                Assessment
              </button>
              <button
                onClick={() => handleNavigation('/', 'testimonials')}
                className="text-gray-700 hover:text-black transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavigation('/', 'faq')}
                className="text-gray-700 hover:text-black transition-colors"
              >
                Frequently Asked Questions
              </button>
              <Link to="/assessment">
                <button className="bg-yellow-300 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors font-semibold">
                  Book Induction Assessment
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className="w-4 h-0.5 bg-black"></span>
                <span className="w-4 h-0.5 bg-black"></span>
                <span className="w-4 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavigation('/', 'home')}
              className="block px-3 py-2 text-gray-700 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/', 'assessment')}
              className="block px-3 py-2 text-gray-700 w-full text-left"
            >
              Assessment
            </button>
            <button
              onClick={() => handleNavigation('/', 'testimonials')}
              className="block px-3 py-2 text-gray-700 w-full text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavigation('/', 'faq')}
              className="block px-3 py-2 text-gray-700 w-full text-left"
            >
              Frequently Asked Questions
            </button>
            <Link to="/assessment" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full text-left px-3 py-2 bg-black text-white rounded-lg mt-2">
                Book Induction Assessment
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

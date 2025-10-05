import React, { useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Use useCallback to avoid recreating function on every render
  const handleNavigation = useCallback(
    (path: string, sectionId?: string) => {
      if (location.pathname !== path) {
        // Navigate first
        navigate(path);
        requestAnimationFrame(() => {
          if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } else if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false); // close mobile menu
    },
    [location.pathname, navigate]
  );

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Ankuram Logo"
                className="h-36 w-auto"
                loading="lazy"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => handleNavigation('/', 'home')} className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
                Home
              </button>
              <button onClick={() => handleNavigation('/', 'assessment')} className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
                Assessment
              </button>
              <button onClick={() => handleNavigation('/', 'testimonials')} className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
                Testimonials
              </button>
              
              <a href="https://wa.me/917396669430" target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-yellow-400 px-6 py-2 rounded-lg hover:bg-black/75 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  Book Induction Assessment
                </button>
              </a>
              <button onClick={() => handleNavigation('/', 'faq')} className="bg-yellow-300 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-black">
                Frequently Asked Questions
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={() => setIsMenuOpen(prev => !prev)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className="w-5 h-0.5 bg-black"></span>
                <span className="w-5 h-0.5 bg-black"></span>
                <span className="w-5 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200" role="menu" aria-label="Mobile menu">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button onClick={() => handleNavigation('/', 'home')} className="block px-3 py-2 text-gray-700 w-full text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
              Home
            </button>
            <button onClick={() => handleNavigation('/', 'assessment')} className="block px-3 py-2 text-gray-700 w-full text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
              Assessment
            </button>
            <button onClick={() => handleNavigation('/', 'testimonials')} className="block px-3 py-2 text-gray-700 w-full text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
              Testimonials
            </button>
            <button onClick={() => handleNavigation('/', 'faq')} className="block px-3 py-2 text-gray-700 w-full text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
              Frequently Asked Questions
            </button>
            <Link to="/assessment" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full text-left px-3 py-2 bg-black text-white rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
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

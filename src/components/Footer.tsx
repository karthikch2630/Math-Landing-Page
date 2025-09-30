import React from 'react';
import { Phone, Mail, Map } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll helper
  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo & Description */}
          <div className="flex flex-col space-y-4">
            <img
              src="/logo.png"
              alt="Ankuram Logo"
              className="h-28 w-28"
            />
            <p className="text-gray-400 leading-relaxed">
              Empowering students to excel in mathematics through personalized learning and expert guidance.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-300" />
                <a href="tel:+917396669430" className="hover:text-yellow-300 transition-colors">
                  +91 73966 69430
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-300" />
                <a href="mailto:sahalswastik@gmail.com" className="hover:text-yellow-300 transition-colors">
                  sahalswastik@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5 text-yellow-300" />
                <span>Jubilee Hills, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <button
                className="block hover:text-yellow-300 transition-colors text-left w-full"
                onClick={() => handleNavigation('/', 'home')}
              >
                Home
              </button>
              <button
                className="block hover:text-yellow-300 transition-colors text-left w-full"
                onClick={() => handleNavigation('/', 'assessment')}
              >
                Assessment
              </button>
              <button
                className="block hover:text-yellow-300 transition-colors text-left w-full"
                onClick={() => handleNavigation('/', 'testimonials')}
              >
                Student Reviews
              </button>
              <button
                className="block hover:text-yellow-300 transition-colors text-left w-full"
                onClick={() => handleNavigation('/', 'faq')}
              >
                Frequently Asked Questions
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-sm">
          &copy; 2025 Ankuram Tuitions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

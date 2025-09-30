import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';


export default function HeroSection() {
  return (
    <section id="home"
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/assests/img/img/banner/banner_bg02.png')" }}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="text-black text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Unlock <span className="text-yellow-400 px-4 py-1 rounded-lg">Maths Success</span>
              for Your Child
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-gray-800">
              Personalized Tuition in Hyderabad for Grades 10–12
            </h2>

            <p className="text-base sm:text-lg max-w-md mx-auto lg:mx-0 text-gray-700 leading-relaxed">
              Boost confidence, improve grades, and develop problem-solving skills with our expert teacher. Every student gets a tailored learning plan.
            </p>

            <div>
              <Link to="/assessment">
                <button className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-indigo-800 px-8 md:px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  View 12 week Learning Program
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Layer */}
            <div className="absolute top-0 left-0 w-full max-w-[500px] h-full z-10 overflow-hidden">
              <img
                src="/assests/img/img/banner/banner_shape01.png"
                alt="Background"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Rotating Middle Layer */}
            <div className="absolute top-0 left-0 w-full max-w-[500px] h-full z-15 overflow-hidden animate-spin-slow">
              <img
                src="/assests/img/img/banner/bg_dots.svg" // another shape layer
                alt="Rotating Shape"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Foreground Layer */}
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] z-20 overflow-hidden">
              <img
                src="/assests/img/img/banner/banner_img.png"
                alt="Student with books and backpack"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Custom animation for slow rotation */}
            <style>
              {`
      @keyframes spin-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
    `}
            </style>
          </div>


        </div>
      </div>

      {/* Contact Buttons */}
       <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/7396669430"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp className="w-5 h-6 sm:w-6 sm:h-6" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+917396669430"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        <Phone className="w-5 h-6 sm:w-6 sm:h-6" />
      </a>
    </div>
    </section>
  );
}

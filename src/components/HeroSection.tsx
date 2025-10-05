import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import heroImg from "/hero_banner.webp";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div id="main-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-black text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Unlock <span className="text-yellow-500 px-3 py-1 rounded-lg ">Math Success</span> for Your Child
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-gray-800">
              Personalized CBSE Grade 10 Math Tutoring in Hyderabad
            </p>

            <p className="text-base sm:text-lg max-w-md mx-auto lg:mx-0 text-gray-700 leading-relaxed">
              Boost your child's confidence, improve grades, and master problem-solving with our expert CBSE-aligned tutors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8">
              <Link to="/assessment">
                <button 
                  className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 md:px-10 py-4 rounded-full text-lg font-bold transition duration-300 shadow-lg hover:shadow-2xl"
                  type="button"
                >
                  Check Roadmap
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>

              <a href="tel:+917396669430" className="w-full sm:w-auto">
                <button 
                  className="w-full inline-flex items-center justify-center gap-3 border-2 border-yellow-400 text-gray-900 hover:bg-yellow-400 px-8 md:px-10 py-4 rounded-full text-lg font-bold transition duration-300 shadow-lg hover:shadow-2xl"
                  type="button"
                >
                  Book Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] z-20 overflow-hidden">
              <img
                src="/banner_img.png"
                alt="Student studying"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/7396669430"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>

        <a
          href="tel:+917396669430"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
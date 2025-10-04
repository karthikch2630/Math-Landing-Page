import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { memo } from 'react';

// Type definitions for icons to ensure TypeScript compatibility
interface IconProps {
  className?: string;
}

// Ensure imported icons have proper types
const TypedArrowRight = ArrowRight as React.ComponentType<IconProps>;
const TypedPhone = Phone as React.ComponentType<IconProps>;
const TypedFaWhatsapp = FaWhatsapp as React.ComponentType<IconProps>;

function HeroSection() {
  return (
    <>
      {/* Dynamic Meta Tags for SEO */}
      <Helmet>
        <title>CBSE Class 10 Math Tutoring in Hyderabad - Expert Help</title>
        <meta
          name="description"
          content="Personalized CBSE Class 10 math tutoring in Hyderabad. Help your child excel with expert tutors, tailored lessons, and board exam preparation."
        />
        <meta name="keywords" content="best online tuition for class 9 cbse, online tuition for class 10 cbse, best online coaching for class 10 cbse, cbse online tuition, online tuition for class 11 cbse, online maths tuition for class 10 cbse, best online tuition for class 8 cbse, online tuition for cbse class 10, best online tuition for class 10 cbse, best online tuition for class 11 cbse, online cbse maths tuition, online maths tuition for class 9 cbse, online tuition for class 12 cbse, cbse class 12 maths online tuition, best online tuition for class 12 cbse, online tuition for class 8 cbse, online tuition for cbse class 8, online coaching for class 10 cbse, online tuition for cbse class 9, online tuition for class 10 cbse near me, best coaching for cbse class 10 near me, cbse 10th online coaching, best online coaching for cbse class 10, 9th class cbse online coaching, online maths tuition for class 12 cbse, 10th cbse tuition, 10th class cbse online coaching, best coaching for 10th cbse near me, best coaching for class 10 cbse, best online tuition for cbse, best tuition for class 9 cbse, cbse 9th tuition near me, cbse class 10 coaching, cbse class 10 online coaching, cbse class 9 online coaching, cbse maths tuition, cbse maths tutor, cbse online tutor, cbse online tutoring, class 10 cbse coaching, class 10 maths tuition, home tuition for 10th class cbse, online cbse class 8 maths tuitions, online coaching for cbse class 10, online tutor for class 9 cbse" />

      </Helmet>

      <section
        id="home"
        role="banner"
        aria-label="Hero section for CBSE Class 10 math tutoring"
        className="relative min-h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/diqux3y0a/image/upload/v1759293151/banner_bg02_ysweux.png')",
        }}
      >
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div className="text-black text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Unlock <span className="text-yellow-400 px-4 py-1 rounded-lg">Math Success</span> for
                Your Child
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-gray-800">
                Personalized CBSE Grade 10 Math Tutoring in Hyderabad
              </h2>

              <p className="text-base sm:text-lg max-w-md mx-auto lg:mx-0 text-gray-700 leading-relaxed">
                Boost your child’s confidence, improve grades, and master problem-solving with our expert
                CBSE-aligned tutors. Tailored learning plans for Grade 10 students.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
  {/* Book Assessment - Primary CTA */}
  <Link to="/assessment">
    <button
      className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 md:px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
      aria-label="View 12-week CBSE Grade 10 math tutoring program"
    >
      Check Roadmap
      <TypedArrowRight className="w-5 h-5" />
    </button>
  </Link>

  {/* Check Roadmap - Secondary CTA */}
  <a href="tel:+917396669430" target="_blank" rel="noopener noreferrer">
    <button
      className="inline-flex items-center gap-3 border-2 border-yellow-400 text-gray-900 hover:bg-yellow-400 hover:text-gray-900 px-8 md:px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
      aria-label="Check detailed learning roadmap for CBSE Grade 10 math"
    >
    Book Assessment
      <TypedArrowRight className="w-5 h-5" />
    </button>
  </a>
</div>

            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Background Layer */}
              <div className="absolute top-0 left-0 w-full max-w-[500px] h-full z-10 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/diqux3y0a/image/upload/v1759293151/banner_shape01_qtygf4.png"
                  alt="Decorative background shape for hero section"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Rotating Middle Layer */}
              <div className="absolute top-0 left-0 w-full max-w-[500px] h-full z-15 overflow-hidden animate-spin-slow">
                <img
                  src="https://res.cloudinary.com/diqux3y0a/image/upload/v1759293152/bg_dots_o78eke.svg"
                  alt="Rotating decorative dots for visual effect"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Foreground Layer */}
              <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] z-20 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/diqux3y0a/image/upload/v1759293151/banner_img_bfjgoi.png"
                  alt="CBSE Grade 10 student studying math with books"
                  className="w-full h-full object-cover"
                  loading="lazy"
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
    aria-label="Contact us on WhatsApp for CBSE Class 10 math tutoring"
  >
    <TypedFaWhatsapp className="w-5 h-6 sm:w-6 sm:h-6" />
  </a>

  {/* Phone Button */}
  <a
    href="tel:+917396669430"
    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
    aria-label="Call us for CBSE Class 10 math tutoring inquiries"
  >
    <TypedPhone className="w-5 h-6 sm:w-6 sm:h-6" />
  </a>

  {/* Check Roadmap Button */}
  <div className="fixed right-4 top-1/3 z-50">
  <Link
    to="/assessment"
    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-5 rounded-r-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer block -rotate-90 transform origin-right"
    aria-label="Check our roadmap"
  >
    Check Our Roadmap
  </Link>
</div>

</div>

      </section>
    </>
  );
}

export default memo(HeroSection);
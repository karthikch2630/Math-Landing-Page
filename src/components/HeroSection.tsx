import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { memo, useState, useEffect } from 'react';

const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      'https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_800/banner_bg02_ysweux.png',
      'https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_500/banner_img_bfjgoi.png'
    ];

    Promise.all(
      criticalImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });
      })
    ).then(() => setImagesLoaded(true));
  }, []);

  return (
    <>
      <Helmet>
        <title>CBSE Class 10 Math Tutoring in Hyderabad - Expert Help</title>
        <meta
          name="description"
          content="Personalized CBSE Class 10 math tutoring in Hyderabad. Help your child excel with expert tutors, tailored lessons, and board exam preparation."
        />
        <meta
          name="keywords"
          content="cbse class 10 math tuition, online maths tutoring, best cbse math tutor, cbse 10th tuition Hyderabad"
        />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <meta property="og:title" content="CBSE Class 10 Math Tutoring in Hyderabad - Expert Help" />
        <meta property="og:description" content="Personalized CBSE Class 10 math tutoring in Hyderabad. Help your child excel with expert tutors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content="https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_1200/banner_img_bfjgoi.png" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        
        {/* Preload critical images */}
        <link 
          rel="preload" 
          as="image" 
          href="https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_800/banner_bg02_ysweux.png"
        />
      </Helmet>

      <section
        id="home"
        role="banner"
        aria-label="Hero section for CBSE Class 10 math tutoring"
        className="relative min-h-screen bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: imagesLoaded 
            ? "url('https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_1600/banner_bg02_ysweux.png')"
            : "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
          transition: 'background-image 0.3s ease-in-out'
        }}
      >
        {/* Skip to main content link for keyboard navigation */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-yellow-400 focus:text-gray-900 focus:rounded"
        >
          Skip to main content
        </a>

        <div id="main-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
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
                <Link 
                  to="/assessment"
                  aria-label="Check personalized learning roadmap for your child"
                >
                  <button 
                    className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 md:px-10 py-4 rounded-full text-lg font-bold transition duration-300 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
                    type="button"
                  >
                    Check Roadmap
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </Link>

                <a 
                  href="tel:+917396669430" 
                  className="w-full sm:w-auto"
                  aria-label="Call to book free assessment at +91 7396669430"
                >
                  <button 
                    className="w-full inline-flex items-center justify-center gap-3 border-2 border-yellow-400 text-gray-900 hover:bg-yellow-400 px-8 md:px-10 py-4 rounded-full text-lg font-bold transition duration-300 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
                    type="button"
                  >
                    Book Assessment
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end" role="img" aria-label="Student learning illustration">
              <div className="absolute top-0 left-0 w-full max-w-[500px] h-full z-10 overflow-hidden pointer-events-none">
                <img
                  src="https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_500/banner_shape01_qtygf4.png"
                  alt=""
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                  width="500"
                  height="500"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute top-0 left-0 w-full max-w-[500px] h-full z-15 overflow-hidden animate-spin-slow will-change-transform pointer-events-none">
                <img
                  src="https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_500/bg_dots_o78eke.svg"
                  alt=""
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                  width="500"
                  height="500"
                  aria-hidden="true"
                />
              </div>

              <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] z-20 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_500/banner_img_bfjgoi.png"
                  srcSet="https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_400/banner_img_bfjgoi.png 400w,
                          https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_500/banner_img_bfjgoi.png 500w,
                          https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_800/banner_img_bfjgoi.png 800w"
                  sizes="(max-width: 640px) 400px, (max-width: 768px) 450px, 500px"
                  alt="CBSE Grade 10 student studying mathematics with books and learning materials"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  width="500"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Contact Buttons */}
        <aside className="fixed right-4 bottom-4 flex flex-col gap-3 z-50" aria-label="Contact options">
          <a
            href="https://wa.me/7396669430"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2"
            aria-label="Contact us on WhatsApp at 7396669430"
          >
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
          </a>

          <a
            href="tel:+917396669430"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2"
            aria-label="Call us at +91 7396669430"
          >
            <Phone className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
          </a>
        </aside>

        <style>
          {`
            @keyframes spin-slow { 
              0% { transform: rotate(0deg); } 
              100% { transform: rotate(360deg); } 
            }
            .animate-spin-slow { 
              animation: spin-slow 20s linear infinite; 
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-spin-slow {
                animation: none;
              }
            }
            .sr-only {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border-width: 0;
            }
            .focus\\:not-sr-only:focus {
              position: static;
              width: auto;
              height: auto;
              padding: inherit;
              margin: inherit;
              overflow: visible;
              clip: auto;
              white-space: normal;
            }
          `}
        </style>
      </section>
    </>
  );
};

export default memo(HeroSection);
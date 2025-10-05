import React, { useMemo } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';

// Type definitions for icon components
interface IconProps {
  className?: string;
}

const TypedArrowRight = ArrowRight as React.ComponentType<IconProps>;
const TypedPhone = Phone as React.ComponentType<IconProps>;

const CTASection: React.FC = () => {
  // Memoize animation variants for performance
  const svgVariants = useMemo(() => ({
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: { 
        repeat: Infinity, 
        duration: 3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }), []);

  const headingVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }), []);

  return (
    <>
      {/* Dynamic Meta Tags for SEO */}
      <Helmet>
        <title>Book CBSE Class 10 Math Assessment | Ankuram Tuition Hyderabad</title>
        <meta
          name="description"
          content="Book a CBSE Class 10 math induction assessment in Hyderabad or schedule a call with Ankuram Tuition Centre's expert teachers. Limited seats available."
        />
        <meta
          name="keywords"
          content="CBSE Class 10 math tutoring Hyderabad, math induction assessment, Ankuram Tuition Centre, CBSE Grade 10 math classes, parents CBSE Class 10"
        />
        <link rel="canonical" href="https://cbseclass10.ankuramtuition.com/#cta" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Book CBSE Class 10 Math Assessment | Ankuram Tuition" />
        <meta property="og:description" content="Book a personalized CBSE Class 10 math induction assessment or schedule a call with expert teachers in Hyderabad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cbseclass10.ankuramtuition.com/#cta" />
      </Helmet>

      {/* Enhanced Structured Data for CallAction */}
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Action",
            "actionStatus": "PotentialActionStatus",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "tel:+917396669430",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "description": "Book a personalized CBSE Class 10 math induction assessment or schedule a call with Ankuram Tuition Centre in Hyderabad.",
            "agent": {
              "@type": "EducationalOrganization",
              "name": "Ankuram Tuition Centre",
              "url": "https://cbseclass10.ankuramtuition.com/",
              "telephone": "+917396669430",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              }
            }
          }
        `}</script>
      </Helmet>

      <AnimatedSection delay={500}>
        <section
          id="cta"
          role="region"
          aria-labelledby="cta-heading"
          className="py-20 bg-white text-black relative overflow-hidden"
        >
          {/* Optimized background shapes with framer-motion */}
          <motion.div
            className="absolute inset-0 opacity-5 z-10 pointer-events-none"
            variants={svgVariants}
            animate="animate"
            aria-hidden="true"
          >
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1200 600" 
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <motion.path
                d="M0 300 Q300 100 600 300 T1200 300"
                stroke="black"
                strokeWidth="2"
                fill="none"
                variants={svgVariants}
              />
              <motion.path
                d="M0 400 Q400 200 800 400 T1200 400"
                stroke="black"
                strokeWidth="1"
                fill="none"
                variants={svgVariants}
                transition={{ delay: 1 }}
              />
            </svg>
          </motion.div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
            {/* Heading */}
            <motion.header
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug"
              >
                Give Your Child a <span className="text-yellow-300">Math Advantage</span> in CBSE Class 10!
              </h2>
            </motion.header>
            
            <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto">
              Book a personalized <strong className="text-yellow-300">CBSE Class 10 math induction assessment</strong> or schedule a call with our expert teacher at Ankuram Tuition Centre in Hyderabad. Limited seats available for focused attention.
            </p>

            {/* Action Buttons */}
            <nav 
              className="flex flex-col items-center gap-6 w-full max-w-3xl mx-auto"
              aria-label="Call to action buttons"
            >
              {/* Top two buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
                {/* Book Assessment */}
                <a
                  href="tel:+917396669430"
                  className="flex-1 text-center bg-gradient-to-r from-yellow-300 to-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-2xl inline-flex justify-center items-center focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
                  aria-label="Call +91 7396669430 to book CBSE Class 10 math induction assessment with Ankuram Tuition Centre"
                >
                  Book Induction Assessment
                  <TypedArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </a>

                {/* Call Now */}
                <a
                  href="tel:+917396669430"
                  className="flex-1 text-center border-2 border-black text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-2xl inline-flex justify-center items-center focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
                  aria-label="Call Ankuram Tuition Centre now at +91 7396669430 for CBSE Class 10 math tutoring inquiries"
                >
                  Call Now
                  <TypedPhone className="w-5 h-5 ml-2" aria-hidden="true" />
                </a>
              </div>

              {/* Full-width Roadmap Button */}
              <a
                href="/assessment"
                className="w-full text-center bg-black text-white px-8 py-5 rounded-xl font-bold text-xl hover:bg-yellow-400 hover:text-black transition-all shadow-lg hover:shadow-2xl inline-flex justify-center items-center focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
                aria-label="Check detailed learning roadmap for CBSE Class 10 math"
              >
                Check Our Roadmap
                <TypedArrowRight className="w-6 h-6 ml-2" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </section>
      </AnimatedSection>

      {/* Accessibility CSS */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default React.memo(CTASection);
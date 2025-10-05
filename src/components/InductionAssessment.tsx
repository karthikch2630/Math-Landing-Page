import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Type definitions for images
interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const InductionAssessment: React.FC = () => {
  const images: Image[] = [
    {
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_600/v1759293150/about_us_p69cll.png",
      alt: "CBSE Class 10 student confidently solving advanced mathematics problems with study materials",
      width: 600,
      height: 400,
    },
    {
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_600/v1759293150/about-us1_htojr0.png",
      alt: "Experienced tutor providing personalized guidance to CBSE Class 10 student during math tutoring session",
      width: 600,
      height: 400,
    },
    {
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_600/v1759293150/about-us2_lacgek.png",
      alt: "Student taking CBSE Class 10 math diagnostic assessment test to identify learning needs",
      width: 600,
      height: 400,
    },
    {
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/q_auto,f_auto,w_600/v1759293150/about-us3_gc3uqq.png",
      alt: "Student effectively preparing for CBSE Class 10 board math examination with structured study plan",
      width: 600,
      height: 400,
    },
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* SEO Optimized Meta Tags */}
      <Helmet>
        <title>CBSE Class 10 Math Diagnostic Assessment | Hyderabad</title>
        <meta
          name="description"
          content="Free CBSE Class 10 math diagnostic assessment in Hyderabad. Identify your child's strengths and weaknesses with personalized tests and tailored learning plans."
        />
        <meta
          name="keywords"
          content="CBSE Class 10 math diagnostic test, math assessment Hyderabad, CBSE Grade 10 tutoring, math skills test, free assessment"
        />
        <link rel="canonical" href="https://cbseclass10.ankuramtuition.com/assessment" />

        {/* Open Graph */}
        <meta property="og:title" content="CBSE Class 10 Math Diagnostic Assessment | Hyderabad" />
        <meta property="og:description" content="Free diagnostic assessment for CBSE Class 10 math students. Identify gaps and create personalized learning plans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cbseclass10.ankuramtuition.com/assessment" />

        {/* Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "CBSE Class 10 Math Diagnostic Assessment",
            "name": "Free CBSE Class 10 Math Diagnostic Test",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Ankuram Tuition",
              "url": "https://cbseclass10.ankuramtuition.com/",
              "telephone": "+917396669430",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              }
            },
            "description": "Comprehensive diagnostic assessment for CBSE Class 10 math students in Hyderabad. Identifies strengths, weaknesses, and creates tailored learning plans for board exam success.",
            "areaServed": {
              "@type": "Place",
              "name": "Hyderabad, Telangana, India"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "description": "Free diagnostic assessment"
            },
            "termsOfService": "https://cbseclass10.ankuramtuition.com/terms"
          }
        `}</script>
      </Helmet>

      {/* Induction Assessment Section */}
      <section
        id="assessment"
        role="region"
        aria-labelledby="assessment-heading"
        className="bg-gradient-to-b from-white to-slate-50 py-16 px-6 lg:px-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
          <header className="text-center mb-12">
            <h2
              id="assessment-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
            >
              Induction <span className="text-yellow-400">Assessment</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Identify and <strong className="font-semibold text-indigo-600">strengthen your child's math skills</strong> with our comprehensive diagnostic test designed specifically for CBSE Class 10 students.
            </p>
          </header>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8" role="list" aria-label="Assessment process illustrations">
            {images.map((img, index) => (
              <motion.article
                key={index}
                role="listitem"
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl focus-within:ring-4 focus-within:ring-yellow-400 focus-within:ring-offset-2"
                tabIndex={0}
                aria-label={`Step ${index + 1} of assessment process: ${img.alt}`}
              >
                <div className="p-4 md:p-6">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 md:h-72 lg:h-80 object-contain"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width={img.width}
                    height={img.height}
                  />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="tel:+917396669430"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
              aria-label="Call to book your free CBSE Class 10 math assessment"
            >
              <span>Book Assessment</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <p className="text-gray-600 text-sm mt-4">
              No obligation • Free consultation • Personalized learning plan
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default React.memo(InductionAssessment);
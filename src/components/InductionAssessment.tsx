import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Type definitions for images
interface Image {
  src: string;
  alt: string;
}

const InductionAssessment: React.FC = () => {
  const images: Image[] = [
    {
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/q_auto/v1759293150/about_us_p69cll.png",
      alt: "CBSE Class 10 student solving math problems",
    },
    {
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/q_auto/v1759293150/about-us1_htojr0.png",
      alt: "Tutor guiding CBSE Class 10 student in math",
    },
    {
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/q_auto/v1759293150/about-us2_lacgek.png",
      alt: "CBSE Class 10 math diagnostic test session",
    },
    {
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/q_auto/v1759293150/about-us3_gc3uqq.png",
      alt: "Student preparing for CBSE Class 10 math exam",
    },
  ];

  return (
    <>
      {/* Dynamic Meta Tags for SEO */}
      <Helmet>
        <meta
          name="description"
          content="Discover our CBSE Class 10 math diagnostic tests in Hyderabad. Identify your child's strengths and weaknesses with personalized assessments."
        />
        <meta
          name="keywords"
          content="CBSE Class 10 math diagnostic test, math assessment Hyderabad, CBSE Grade 10 tutoring, math skills test, parents CBSE Class 10"
        />
      </Helmet>

      {/* Structured Data for Assessment Service */}
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "CBSE Class 10 Math Diagnostic Assessment",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Your Tutoring Service",
              "url": "https://cbseclass10.ankuramtuition.com/"
            },
            "description": "Personalized diagnostic tests for CBSE Class 10 math students in Hyderabad to identify strengths and weaknesses and create tailored learning plans.",
            "areaServed": {
              "@type": "Place",
              "name": "Hyderabad, India"
            }
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <h2
              id="assessment-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900"
            >
              Induction <span className="text-yellow-300">Assessment</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Identify and{" "}
              <span className="font-semibold text-indigo-600">
                strengthen your child’s math skills
              </span>{" "}
              with our smart Induction test for CBSE Class 10.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-72 md:h-80 lg:h-96 object-contain p-6"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default React.memo(InductionAssessment);
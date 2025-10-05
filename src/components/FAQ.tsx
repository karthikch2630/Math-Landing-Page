import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Type definitions for FAQs
interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Memoize FAQs
  const faqs: FAQ[] = useMemo(() => [
    {
      question: "What makes your CBSE Class 10 math tutoring different?",
      answer:
        "We focus on personalized learning with small batches (only 5 students per batch) to ensure every CBSE Class 10 student gets individual attention for math success.",
    },
    {
      question: "Do you provide online and offline CBSE Class 10 math classes?",
      answer:
        "Yes, we offer both online and offline math classes for CBSE Class 10 students in Hyderabad, allowing flexibility to choose what works best for your child.",
    },
    {
      question: "How do you track CBSE Class 10 student progress in math?",
      answer:
        "We conduct regular diagnostic assessments, provide detailed feedback, and keep parents updated on their child's improvement in CBSE Class 10 math.",
    },
    {
      question: "Who is the teacher and what are their qualifications?",
      answer:
        "At the core of my teaching is the belief that every student can excel in CBSE Class 10 mathematics with patience, clarity, and encouragement. My approach builds a strong conceptual foundation, followed by practical problem-solving. I hold a BE in Mechanical Engineering (2017) and an MSc in Physics (2024). I worked as a Software Development Engineer at Amazon (2018-2022). My first CBSE student, Srinivas Reddy, scored 95 in the Class 10 Boards Maths exam in 2015 after starting tuition in 2014 at Chirec Public School. I have extensive experience teaching CBSE Class 10 and 12 Maths and Physics, as well as quantitative skills for MBA students at international institutions.",
    },
    {
      question: "Are trial classes available for CBSE Class 10 math tutoring?",
      answer:
        "We do not offer trial classes. Instead, our first interaction includes an induction assessment, conducted live with the student, to identify strengths, weaknesses, and learning style for CBSE Class 10 math.",
    },
    {
      question: "How do you handle doubts and extra support for CBSE Class 10 math?",
      answer:
        "We provide doubt-clearing sessions for CBSE Class 10 math on weekends: Saturdays from 4 PM to 8 PM and Sundays from 1 PM to 4 PM.",
    },
    {
      question: "What is the fee structure for the CBSE Class 10 math course?",
      answer: "The fee is ₹35,000 for the entire CBSE Class 10 math course.",
    },
    {
      question: "What is the duration of the CBSE Class 10 math course?",
      answer: "Classes continue until the CBSE Class 10 Board exams conclude.",
    },
  ], []);

  // Memoize animation variants
  const headingVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }), []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }), []);

  // Optimize toggle function
  const toggleExpand = useCallback((index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  }, []);

  // Escape JSON strings for structured data
  const escapeJsonString = useCallback((str: string) => {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t');
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>CBSE Class 10 Math Tutoring FAQs | Ankuram Tuition Hyderabad</title>
        <meta
          name="description"
          content="Find answers to common questions about CBSE Class 10 math tutoring in Hyderabad. Learn about our personalized approach, fees, and schedules at Ankuram Tuition Centre."
        />
        <meta
          name="keywords"
          content="CBSE Class 10 math tutoring FAQs, math tutoring Hyderabad, CBSE Grade 10 math classes, Ankuram Tuition Centre, parents CBSE Class 10"
        />
        <link rel="canonical" href="https://cbseclass10.ankuramtuition.com/#faq" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="CBSE Class 10 Math Tutoring FAQs | Ankuram Tuition" />
        <meta property="og:description" content="Common questions about CBSE Class 10 math tutoring in Hyderabad - fees, schedules, teacher qualifications, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cbseclass10.ankuramtuition.com/#faq" />
      </Helmet>

      {/* Structured Data for FAQPage */}
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ${faqs.map(
                (faq, index) => `
                {
                  "@type": "Question",
                  "name": "${escapeJsonString(faq.question)}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${escapeJsonString(faq.answer)}"
                  }
                }${index < faqs.length - 1 ? ',' : ''}`,
              ).join('')}
            ]
          }
        `}</script>
      </Helmet>

      <section
        id="faq"
        role="region"
        aria-labelledby="faq-heading"
        className="py-20 bg-gradient-to-b from-white to-slate-50 px-6 lg:px-20"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <header className="text-center mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, margin: "-100px" }}
              id="faq-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900"
            >
              Frequently Asked <span className="text-yellow-300">Questions</span> about CBSE Class 10 Math Tutoring
            </motion.h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
              Find answers to common questions from parents and students about our CBSE Class 10 math tutoring in Hyderabad.
            </p>
          </header>

          {/* FAQ Grid */}
          <div 
            className="grid md:grid-cols-2 gap-6 md:gap-10"
            role="list"
            aria-label="Frequently asked questions about CBSE Class 10 math tutoring"
          >
            {faqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.article
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl"
                  role="listitem"
                  tabIndex={0}
                  aria-labelledby={`faq-question-${index}`}
                >
                  <h3 
                    className="text-lg md:text-xl font-bold text-gray-900 mb-3"
                    id={`faq-question-${index}`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`text-gray-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}
                    id={`faq-answer-${index}`}
                    aria-labelledby={`faq-question-${index}`}
                  >
                    {faq.answer}
                  </div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-4 text-yellow-400 font-semibold hover:underline focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2 rounded px-2 py-1"
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`faq-answer-${index}`}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} answer for ${faq.question}`}
                  >
                    {isExpanded ? "Less" : "More"}
                  </button>
                </motion.article>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4 text-lg">
              Still have questions about our CBSE Class 10 math tutoring?
            </p>
            <a
              href="tel:+917396669430"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
              aria-label="Call Ankuram Tuition Centre at +91 7396669430 for more information about CBSE Class 10 math tutoring"
            >
              <span>Call Us for Answers</span>
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
          </motion.div>
        </div>
      </section>

      {/* Accessibility CSS */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default React.memo(FAQSection);
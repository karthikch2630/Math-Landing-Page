
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Type definitions for FAQs
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
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
      "We conduct regular diagnostic assessments, provide detailed feedback, and keep parents updated on their child’s improvement in CBSE Class 10 math.",
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
];

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* Dynamic Meta Tags for SEO */}
      <Helmet>
        <meta
          name="description"
          content="Find answers to common questions about CBSE Class 10 math tutoring in Hyderabad. Learn about our personalized approach, fees, and schedules at Ankuram Tuition Centre."
        />
        <meta
          name="keywords"
          content="CBSE Class 10 math tutoring FAQs, math tutoring Hyderabad, CBSE Grade 10 math classes, Ankuram Tuition Centre, parents CBSE Class 10"
        />
      </Helmet>

      {/* Structured Data for FAQPage */}
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ${faqs.map(
                faq => `
                {
                  "@type": "Question",
                  "name": "${faq.question}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${faq.answer}"
                  }
                }`,
              ).join(',')}
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
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id="faq-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900"
            >
              Frequently Asked <span className="text-yellow-300">Questions</span> about CBSE Class 10 Math Tutoring
            </motion.h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions from parents and students about our CBSE Class 10 math tutoring in Hyderabad.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p
                  className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                    expandedIndex === index ? "line-clamp-none" : "line-clamp-2"
                  }`}
                  aria-expanded={expandedIndex === index}
                >
                  {faq.answer}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-2 text-yellow-400 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                  aria-expanded={expandedIndex === index}
                  aria-label={`Toggle ${faq.question} answer`}
                >
                  {expandedIndex === index ? "Less" : "More"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(FAQSection);
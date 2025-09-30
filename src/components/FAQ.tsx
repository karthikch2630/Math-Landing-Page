import { motion } from "framer-motion";

const faqs = [
  {
    question: "What makes your tuition centre different?",
    answer:
      "We focus on personalized learning with small batches (only 5 students per batch) to ensure every student gets proper attention.",
  },
  {
    question: "Do you provide online as well as offline classes?",
    answer:
      "Yes, we offer both online and offline classes, so students can choose what works best for them.",
  },
  {
    question: "How do you track student progress?",
    answer:
      "We conduct regular diagnostic assessments, provide detailed feedback, and keep parents updated about the child’s improvement.",
  },
  {
    question: "What curriculum do you cover?",
    answer:
      "We specialize in CBSE, ICSE, IGCSE, and IB board curriculums for Grades 8 to 12, with strong focus on concepts and problem solving.",
  },
  {
    question: "Are trial classes available?",
    answer:
      "Yes, we provide a free trial session to help parents and students understand our teaching style.",
  },
  {
    question: "How do you handle doubts and extra support?",
    answer:
      "We encourage students to ask questions anytime and conduct doubt-clearing sessions outside of class hours.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-slate-50 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Frequently Asked <span className="text-yellow-300">Questions</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Find answers to some of the most common questions from parents and
            students.
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
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

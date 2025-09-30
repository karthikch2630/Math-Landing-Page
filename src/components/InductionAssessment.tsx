import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const InductionAssessment: React.FC = () => {
  const images = [
    { src: "/about_us.png", alt: "Student Interaction 1" },
    { src: "/about-us1.png", alt: "Student Interaction 2" },
    { src: "/about-us2.png", alt: "Student Interaction 3" },
    { src: "/about-us3.png", alt: "Student Interaction 4" },
  ];

  return (
    <>
      {/* =================== Induction Assessment =================== */}
      <section
        id="assessment"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Induction <span className="text-yellow-300">Assessment</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Identify and{" "}
              <span className="font-semibold text-indigo-600">
                strengthen your child’s math skills
              </span>{" "}
              with our smart diagnostic tests.
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
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =================== Our Batch Timings =================== */}
      <AnimatedSection delay={200}>
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          {/* Heading */}
          <div className="text-center mb-10 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Our Batch <span className="text-yellow-300">Timings</span> 
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
              Choose the batch that fits{" "}
              <span className="font-semibold text-indigo-600">
                your schedule
              </span>
              . Limited to{" "}
              <span className="font-bold text-red-500">only 5 students</span>{" "}
              per batch for maximum personal attention.
            </p>
          </div>

          {/* Centered Image */}
          <div className="flex justify-center">
            <motion.img
              src="/batch-timing.png"
              alt="Batch Schedules"
              className="w-full max-w-3xl  transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            />
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default InductionAssessment;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Type definitions for time slots and schedule
interface TimeSlot {
  time: string;
  icon: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  hoverBg: string;
  activeBg: string;
  level: string;
}

interface Schedule {
  day: string;
  batches: string[];
}

const BatchTimings: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);

  const timeSlots: TimeSlot[] = [
    {
      time: '5:00 PM - 6:00 PM',
      icon: '🕔',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-200',
      hoverBg: 'hover:bg-yellow-100',
      activeBg: 'bg-yellow-100',
      level: 'Advanced',
    },
    {
      time: '6:15 PM - 7:45 PM',
      icon: '🕕',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      hoverBg: 'hover:bg-orange-100',
      activeBg: 'bg-orange-100',
      level: 'Basic',
    },
    {
      time: '8:00 PM - 9:30 PM',
      icon: '🕗',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      borderColor: 'border-red-200',
      hoverBg: 'hover:bg-red-100',
      activeBg: 'bg-red-100',
      level: 'Moderate',
    },
  ];

  const schedule: Schedule[] = [
    { day: 'MONDAY', batches: ['Batch 1 (CBSE)', 'Batch 1 (CBSE)', 'Batch 1 (CBSE)'] },
    { day: 'TUESDAY', batches: ['Batch 2 (CBSE)', 'Batch 2 (CBSE)', 'Batch 2 (CBSE)'] },
    { day: 'WEDNESDAY', batches: ['Batch 1 (CBSE)', 'Batch 1 (CBSE)', 'Batch 1 (CBSE)'] },
    { day: 'THURSDAY', batches: ['Batch 2 (CBSE)', 'Batch 2 (CBSE)', 'Batch 2 (CBSE)'] },
    { day: 'FRIDAY', batches: ['Batch 1 (CBSE)', 'Batch 1 (CBSE)', 'Batch 1 (CBSE)'] },
    { day: 'SATURDAY', batches: ['Batch 2 (CBSE)', 'Batch 2 (CBSE)', 'Batch 2 (CBSE)'] },
  ];

  // Toggle selection logic
  const handleBatchClick = (batchKey: string) => {
    setSelectedBatch(selectedBatch === batchKey ? null : batchKey);
  };

  return (
    <>
      {/* Dynamic Meta Tags for SEO */}
      <Helmet>
        <meta
          name="description"
          content="Flexible CBSE Class 10 math tutoring schedules in Hyderabad. Choose from our batch timings for personalized math lessons tailored to your child's needs."
        />
        <meta
          name="keywords"
          content="CBSE Class 10 math tutoring schedule, math tutoring Hyderabad, CBSE Grade 10 batch timings, math classes for Class 10, parents CBSE Class 10"
        />
      </Helmet>

      {/* Structured Data for Tutoring Schedule */}
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "CBSE Class 10 Math Tutoring",
            "description": "Personalized math tutoring for CBSE Class 10 students in Hyderabad with flexible batch timings and small groups of 5 students.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Your Tutoring Service",
              "url": "https://your-tutoring-site.com"
            },
            "hasCourseInstance": [
              ${timeSlots.map(
                (slot) => `
                {
                  "@type": "CourseInstance",
                  "courseMode": "In-person",
                  "startDate": "2025-10-01",
                  "endDate": "2026-03-31",
                  "name": "${slot.level} Batch",
                  "description": "CBSE Class 10 math tutoring session from ${slot.time} for ${slot.level.toLowerCase()} level students.",
                  "location": {
                    "@type": "Place",
                    "name": "Hyderabad, India"
                  }
                }`,
              ).join(',')}
            ]
          }
        `}</script>
      </Helmet>

      <section
        id="batch-timings"
        role="region"
        aria-labelledby="batch-timings-heading"
        className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 md:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              id="batch-timings-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6"
            >
              <span className="text-gray-900 inline-block hover:scale-110 transition-transform duration-300">
                Our Batch
              </span>
              <span className="text-yellow-400 inline-block hover:scale-110 hover:rotate-3 transition-all duration-300 ml-2">
                Timings
              </span>
            </motion.h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Choose the batch that fits{' '}
              <span className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200">
                your child’s schedule
              </span>
              . Limited to{' '}
              <span className="text-red-500 font-bold hover:scale-110 inline-block transition-transform duration-200">
                only 5 students
              </span>{' '}
              per batch for personalized CBSE Class 10 math tutoring.
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6">
            {timeSlots.map((slot, slotIdx) => (
              <div key={slotIdx} className="space-y-3">
                {/* Time Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`${slot.bgColor} ${slot.borderColor} border-2 rounded-2xl p-4 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <div className="text-3xl mb-2">{slot.icon}</div>
                  <div className={`${slot.textColor} font-bold text-base sm:text-lg`}>{slot.time}</div>
                  <div className="text-xs mt-1 text-gray-500 font-semibold">{slot.level}</div>
                </motion.div>

                {/* Days for this time slot */}
                {schedule.map((day, dayIdx) => (
                  <div key={dayIdx} className="flex items-center gap-3">
                    <div className="w-20 sm:w-24 flex-shrink-0">
                      <span className="text-gray-500 font-bold text-xs sm:text-sm uppercase tracking-wide">
                        {day.day.slice(0, 3)}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBatchClick(`${day.day}-${slotIdx}`)}
                      className={`flex-1 bg-white border-2 rounded-xl py-3 px-4 text-sm sm:text-base font-medium transition-all duration-300
                        ${selectedBatch === `${day.day}-${slotIdx}`
                          ? `${slot.borderColor} ${slot.activeBg} ${slot.textColor} scale-105 shadow-lg`
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                        }`}
                      aria-pressed={selectedBatch === `${day.day}-${slotIdx}`}
                      aria-label={`Select ${day.batches[slotIdx]} on ${day.day} at ${slot.time} (${slot.level})`}
                    >
                      {day.batches[slotIdx]}
                    </motion.button>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-[140px_1fr_1fr_1fr] gap-4 xl:gap-6">
            <div></div>
            {timeSlots.map((slot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.5 }}
                className={`${slot.bgColor} ${slot.borderColor} ${slot.hoverBg} border-2 rounded-2xl p-6 text-center shadow-md transition-all duration-300 cursor-pointer`}
              >
                <div className="text-5xl mb-3">{slot.icon}</div>
                <div className={`${slot.textColor} font-bold text-lg xl:text-xl`}>
                  {slot.time.split(' - ')[0]}
                </div>
                <div className={`${slot.textColor} font-bold text-lg xl:text-xl`}>
                  - {slot.time.split(' - ')[1]}
                </div>
                <div className="text-md mt-1 text-gray-500 font-bold">{slot.level}</div>
              </motion.div>
            ))}

            {schedule.map((day, dayIdx) => (
              <div key={dayIdx} className="contents">
                <div className="flex items-center justify-end pr-4">
                  <span className="text-gray-400 font-bold text-sm uppercase tracking-widest hover:text-gray-600 hover:scale-110 transition-all duration-300">
                    {day.day}
                  </span>
                </div>

                {day.batches.map((batch, batchIdx) => (
                  <div key={batchIdx} className="flex items-center">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBatchClick(`${day.day}-${batchIdx}`)}
                      className={`w-full bg-white border-2 rounded-xl py-4 px-5 font-medium transition-all duration-300
                        ${selectedBatch === `${day.day}-${batchIdx}`
                          ? `${timeSlots[batchIdx].borderColor} ${timeSlots[batchIdx].activeBg} ${timeSlots[batchIdx].textColor} scale-105 shadow-xl -translate-y-1 font-bold`
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1'
                        }`}
                      aria-pressed={selectedBatch === `${day.day}-${batchIdx}`}
                      aria-label={`Select ${batch} on ${day.day} at ${timeSlots[batchIdx].time} (${timeSlots[batchIdx].level})`}
                    >
                      <span className="text-sm xl:text-base">{batch}</span>
                    </motion.button>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Selected Batch Info */}
          {selectedBatch && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8 md:mt-12 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm sm:text-base">
                ✨ Great choice! Click again to deselect
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default React.memo(BatchTimings);
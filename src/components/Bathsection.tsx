import React, { useState, useCallback, useMemo } from 'react';
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
  ariaLabel: string;
}

interface Schedule {
  day: string;
  batches: string[];
}

const BatchTimings: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);

  // Memoize time slots to prevent recreation on each render
  const timeSlots: TimeSlot[] = useMemo(() => [
    {
      time: '5:00 PM - 6:00 PM',
      icon: '🕔',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      borderColor: 'border-yellow-300',
      hoverBg: 'hover:bg-yellow-100',
      activeBg: 'bg-yellow-100',
      level: 'Advanced',
      ariaLabel: 'Advanced level batch from 5:00 PM to 6:00 PM',
    },
    {
      time: '6:15 PM - 7:45 PM',
      icon: '🕕',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-300',
      hoverBg: 'hover:bg-orange-100',
      activeBg: 'bg-orange-100',
      level: 'Basic',
      ariaLabel: 'Basic level batch from 6:15 PM to 7:45 PM',
    },
    {
      time: '8:00 PM - 9:30 PM',
      icon: '🕗',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      borderColor: 'border-red-300',
      hoverBg: 'hover:bg-red-100',
      activeBg: 'bg-red-100',
      level: 'Moderate',
      ariaLabel: 'Moderate level batch from 8:00 PM to 9:30 PM',
    },
  ], []);

  // Memoize schedule to prevent recreation
  const schedule: Schedule[] = useMemo(() => [
    { day: 'MONDAY', batches: ['Batch 1 (CBSE)', 'Batch 2 (CBSE)', 'Batch 3 (CBSE)'] },
    { day: 'TUESDAY', batches: ['Batch 1 (CBSE)', 'Batch 2 (CBSE)', 'Batch 3 (CBSE)'] },
    { day: 'WEDNESDAY', batches: ['Batch 1 (CBSE)', 'Batch 2 (CBSE)', 'Batch 3 (CBSE)'] },
    { day: 'THURSDAY', batches: ['Batch 1 (CBSE)', 'Batch 2 (CBSE)', 'Batch 3 (CBSE)'] },
    { day: 'FRIDAY', batches: ['Batch 1 (CBSE)', 'Batch 2 (CBSE)', 'Batch 3 (CBSE)'] },
    { day: 'SATURDAY', batches: ['Batch 1 (CBSE)', 'Batch 2 (CBSE)', 'Batch 3 (CBSE)'] },
  ], []);

  // Memoize animation variants
  const headerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
    },
  }), []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  }), []);

  const selectedVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
  }), []);

  // Optimize click handler with useCallback
  const handleBatchClick = useCallback((batchKey: string) => {
    setSelectedBatch(prev => prev === batchKey ? null : batchKey);
  }, []);

  // Get selected batch details for announcement
  const getSelectedBatchInfo = useCallback(() => {
    if (!selectedBatch) return null;
    const [day, slotIdx] = selectedBatch.split('-');
    const slot = timeSlots[parseInt(slotIdx)];
    return `Selected ${day} at ${slot.time} - ${slot.level} level`;
  }, [selectedBatch, timeSlots]);

  return (
    <>
      {/* Dynamic Meta Tags for SEO */}
      <Helmet>
        <title>CBSE Class 10 Math Batch Timings | Hyderabad Tutoring Schedule</title>
        <meta
          name="description"
          content="Flexible CBSE Class 10 math tutoring schedules in Hyderabad. Small batches of 5 students with Advanced, Basic, and Moderate levels. Evening timings from 5 PM to 9:30 PM."
        />
        <meta
          name="keywords"
          content="CBSE Class 10 math tutoring schedule, math tutoring Hyderabad, CBSE Grade 10 batch timings, small batch math classes"
        />
        <link rel="canonical" href="https://cbseclass10.ankuramtuition.com/batch-timings" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="CBSE Class 10 Math Batch Timings | Hyderabad" />
        <meta property="og:description" content="Choose from flexible evening batches for CBSE Class 10 math. Limited to 5 students per batch for personalized attention." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cbseclass10.ankuramtuition.com/batch-timings" />
      </Helmet>

      {/* Enhanced Structured Data for Tutoring Schedule */}
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "CBSE Class 10 Math Tutoring",
            "description": "Personalized math tutoring for CBSE Class 10 students in Hyderabad with flexible batch timings and small groups of 5 students.",
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
            "hasCourseInstance": [
              ${timeSlots.map(
                (slot, idx) => `
                {
                  "@type": "CourseInstance",
                  "courseMode": "Blended",
                  "startDate": "2025-10-01",
                  "endDate": "2026-03-31",
                  "name": "${slot.level} Level CBSE Class 10 Math",
                  "description": "CBSE Class 10 math tutoring session from ${slot.time} for ${slot.level.toLowerCase()} level students. Limited to 5 students per batch.",
                  "courseSchedule": {
                    "@type": "Schedule",
                    "repeatFrequency": "P1W",
                    "byDay": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                  },
                  "maximumAttendeeCapacity": 5,
                  "location": {
                    "@type": "Place",
                    "name": "Hyderabad, Telangana, India"
                  }
                }${idx < timeSlots.length - 1 ? ',' : ''}`,
              ).join('')}
            ]
          }
        `}</script>
      </Helmet>

      <section
        id="batch-timings"
        role="region"
        aria-labelledby="batch-timings-heading"
        aria-describedby="batch-timings-description"
        className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 md:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-8 md:mb-16">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={headerVariants}
              id="batch-timings-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6"
            >
              <span className="text-gray-900 inline-block">
                Our Batch
              </span>
              <span className="text-yellow-400 inline-block ml-2">
                Timings
              </span>
            </motion.h1>
            <p 
              id="batch-timings-description"
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              Choose the batch that fits{' '}
              <strong className="text-indigo-600 font-semibold">
                your child's schedule
              </strong>
              . Limited to{' '}
              <strong className="text-red-600 font-bold">
                only 5 students
              </strong>{' '}
              per batch for personalized CBSE Class 10 math tutoring in Hyderabad.
            </p>
          </header>

          {/* Live region for screen reader announcements */}
          <div 
            role="status" 
            aria-live="polite" 
            aria-atomic="true" 
            className="sr-only"
          >
            {getSelectedBatchInfo()}
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6">
            {timeSlots.map((slot, slotIdx) => (
              <div key={slotIdx} className="space-y-3">
                {/* Time Header */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className={`${slot.bgColor} ${slot.borderColor} border-2 rounded-2xl p-4 text-center shadow-md`}
                  role="heading"
                  aria-level={3}
                  aria-label={slot.ariaLabel}
                >
                  <div className="text-3xl mb-2" role="img" aria-label={`Time slot ${slotIdx + 1}`}>
                    {slot.icon}
                  </div>
                  <div className={`${slot.textColor} font-bold text-base sm:text-lg`}>
                    {slot.time}
                  </div>
                  <div className="text-xs mt-1 text-gray-600 font-semibold">
                    {slot.level} Level
                  </div>
                </motion.div>

                {/* Days for this time slot */}
                <div role="list" aria-label={`Available days for ${slot.time}`}>
                  {schedule.map((day, dayIdx) => (
                    <div key={dayIdx} className="flex items-center gap-3 mb-2" role="listitem">
                      <div className="w-20 sm:w-24 flex-shrink-0">
                        <span className="text-gray-600 font-bold text-xs sm:text-sm uppercase tracking-wide">
                          {day.day.slice(0, 3)}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleBatchClick(`${day.day}-${slotIdx}`)}
                        className={`flex-1 bg-white border-2 rounded-xl py-3 px-4 text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
                          ${selectedBatch === `${day.day}-${slotIdx}`
                            ? `${slot.borderColor} ${slot.activeBg} ${slot.textColor} shadow-lg`
                            : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-md'
                          }`}
                        type="button"
                        aria-pressed={selectedBatch === `${day.day}-${slotIdx}`}
                        aria-label={`${selectedBatch === `${day.day}-${slotIdx}` ? 'Deselect' : 'Select'} ${day.batches[slotIdx]} on ${day.day} at ${slot.time} - ${slot.level} level`}
                      >
                        {day.batches[slotIdx]}
                      </motion.button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-[140px_1fr_1fr_1fr] gap-4 xl:gap-6">
            {/* Column headers */}
            <div></div>
            {timeSlots.map((slot, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className={`${slot.bgColor} ${slot.borderColor} ${slot.hoverBg} border-2 rounded-2xl p-6 text-center shadow-md transition-all duration-300`}
                role="columnheader"
                aria-label={slot.ariaLabel}
              >
                <div className="text-5xl mb-3" role="img" aria-label={`Time slot ${idx + 1}`}>
                  {slot.icon}
                </div>
                <div className={`${slot.textColor} font-bold text-lg xl:text-xl`}>
                  {slot.time.split(' - ')[0]}
                </div>
                <div className={`${slot.textColor} font-bold text-lg xl:text-xl`}>
                  - {slot.time.split(' - ')[1]}
                </div>
                <div className="text-sm mt-2 text-gray-600 font-bold">
                  {slot.level} Level
                </div>
              </motion.div>
            ))}

            {/* Schedule grid */}
            {schedule.map((day, dayIdx) => (
              <div key={dayIdx} className="contents">
                <div 
                  className="flex items-center justify-end pr-4"
                  role="rowheader"
                >
                  <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">
                    {day.day}
                  </span>
                </div>

                {day.batches.map((batch, batchIdx) => (
                  <div key={batchIdx} className="flex items-center" role="gridcell">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleBatchClick(`${day.day}-${batchIdx}`)}
                      className={`w-full bg-white border-2 rounded-xl py-4 px-5 font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
                        ${selectedBatch === `${day.day}-${batchIdx}`
                          ? `${timeSlots[batchIdx].borderColor} ${timeSlots[batchIdx].activeBg} ${timeSlots[batchIdx].textColor} shadow-xl font-bold`
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-lg'
                        }`}
                      type="button"
                      aria-pressed={selectedBatch === `${day.day}-${batchIdx}`}
                      aria-label={`${selectedBatch === `${day.day}-${batchIdx}` ? 'Deselect' : 'Select'} ${batch} on ${day.day} at ${timeSlots[batchIdx].time} - ${timeSlots[batchIdx].level} level`}
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
              initial="hidden"
              animate="visible"
              variants={selectedVariants}
              className="mt-8 md:mt-12 text-center"
            >
              <div 
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm sm:text-base"
                role="alert"
              >
                <span aria-hidden="true">✨ </span>
                Great choice! Click again to deselect
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="tel:+917396669430"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
              aria-label="Call to reserve your batch at +91 7396669430"
            >
              <span>Reserve Your Batch</span>
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
              Limited seats • First come, first served • Call now to secure your spot
            </p>
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
      `}</style>
    </>
  );
};

export default React.memo(BatchTimings);
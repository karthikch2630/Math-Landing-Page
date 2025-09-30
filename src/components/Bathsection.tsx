import { useState } from 'react';


export default function BatchTimings() {
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);

  const timeSlots = [
    {
      time: '5:00 PM - 6:00 PM',
      icon: '🕔',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-200',
      hoverBg: 'hover:bg-yellow-100',
      activeBg: 'bg-yellow-100'
    },
    {
      time: '6:15 PM - 7:45 PM',
      icon: '🕕',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      hoverBg: 'hover:bg-orange-100',
      activeBg: 'bg-orange-100'
    },
    {
      time: '8:00 PM - 9:00 PM',
      icon: '🕗',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      borderColor: 'border-red-200',
      hoverBg: 'hover:bg-red-100',
      activeBg: 'bg-red-100'
    }
  ];

  const schedule = [
    { day: 'MONDAY', batches: ['Batch 1 (IB MYP)', 'Batch 1 (CBSE)', 'Batch 1 (IB MYP)'] },
    { day: 'TUESDAY', batches: ['Batch 2 (IB MYP)', 'Batch 2 (CBSE)', 'Batch 2 (IB MYP)'] },
    { day: 'WEDNESDAY', batches: ['Batch 1 (IB MYP)', 'Batch 1 (CBSE)', 'Batch 1 (IB MYP)'] },
    { day: 'THURSDAY', batches: ['Batch 2 (CBSE)', 'Batch 2 (CBSE)', 'Batch 2 (IB MYP)'] },
    { day: 'FRIDAY', batches: ['Batch 1 (IB MYP)', 'Batch 1 (CBSE)', 'Batch 1 (IB MYP)'] },
    { day: 'SATURDAY', batches: ['Batch 2 (IB MYP)', 'Batch 2 (CBSE)', 'Batch 2 (IB MYP)'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 animate-fade-in">
            <span className="text-gray-900 inline-block hover:scale-110 transition-transform duration-300 cursor-default">
              Our Batch
            </span>
            <span className="text-yellow-400 inline-block hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-default ml-2">
              Timings
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Choose the batch that fits{' '}
            <span className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200">
              your schedule
            </span>
            . Limited to{' '}
            <span className="text-red-500 font-bold hover:scale-110 inline-block transition-transform duration-200">
              only 5 students
            </span>{' '}
            per batch for maximum personal attention.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-6">
          {timeSlots.map((slot, slotIdx) => (
            <div key={slotIdx} className="space-y-3">
              {/* Time Header */}
              <div className={`${slot.bgColor} ${slot.borderColor} border-2 rounded-2xl p-4 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <div className="text-3xl mb-2 animate-bounce-slow">{slot.icon}</div>
                <div className={`${slot.textColor} font-bold text-base sm:text-lg`}>{slot.time}</div>
              </div>

              {/* Days for this time slot */}
              {schedule.map((day, dayIdx) => (
                <div key={dayIdx} className="flex items-center gap-3">
                  <div className="w-20 sm:w-24 flex-shrink-0">
                    <span className="text-gray-500 font-bold text-xs sm:text-sm uppercase tracking-wide">
                      {day.day.slice(0, 3)}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedBatch(`${day.day}-${slotIdx}`)}
                    className={`flex-1 bg-white border-2 rounded-xl py-3 px-4 text-sm sm:text-base font-medium
                      transition-all duration-300 transform
                      ${selectedBatch === `${day.day}-${slotIdx}` 
                        ? `${slot.borderColor} ${slot.activeBg} ${slot.textColor} scale-105 shadow-lg` 
                        : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:scale-105 hover:shadow-lg active:scale-95'
                      }`}
                  >
                    {day.batches[slotIdx]}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-[140px_1fr_1fr_1fr] gap-4 xl:gap-6">
          <div></div>
          {timeSlots.map((slot, idx) => (
            <div
              key={idx}
              className={`${slot.bgColor} ${slot.borderColor} ${slot.hoverBg} border-2 rounded-2xl p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer group`}
            >
              <div className="text-5xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{slot.icon}</div>
              <div className={`${slot.textColor} font-bold text-lg xl:text-xl transition-colors duration-300`}>
                {slot.time.split(' - ')[0]}
              </div>
              <div className={`${slot.textColor} font-bold text-lg xl:text-xl transition-colors duration-300`}>
                - {slot.time.split(' - ')[1]}
              </div>
            </div>
          ))}

          {schedule.map((day, dayIdx) => (
            <div key={dayIdx} className="contents">
              <div className="flex items-center justify-end pr-4">
                <span className="text-gray-400 font-bold text-sm uppercase tracking-widest hover:text-gray-600 hover:scale-110 transition-all duration-300 cursor-default">
                  {day.day}
                </span>
              </div>

              {day.batches.map((batch, batchIdx) => (
                <div key={batchIdx} className="flex items-center">
                  <button
                    onClick={() => setSelectedBatch(`${day.day}-${batchIdx}`)}
                    className={`w-full bg-white border-2 rounded-xl py-4 px-5 font-medium
                      transition-all duration-300 transform
                      ${selectedBatch === `${day.day}-${batchIdx}`
                        ? `${timeSlots[batchIdx].borderColor} ${timeSlots[batchIdx].activeBg} ${timeSlots[batchIdx].textColor} scale-105 shadow-xl -translate-y-1 font-bold`
                        : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-95'
                      }`}
                  >
                    <span className="text-sm xl:text-base">{batch}</span>
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Selected Batch Info */}
        {selectedBatch && (
          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg animate-bounce-in font-semibold text-sm sm:text-base">
              ✨ Great choice! Click again to deselect
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce-in {
            0% { opacity: 0; transform: scale(0.3); }
            50% { transform: scale(1.05); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-fade-in { animation: fade-in 0.8s ease-out; }
          .animate-bounce-in { animation: bounce-in 0.5s ease-out; }
          .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
}

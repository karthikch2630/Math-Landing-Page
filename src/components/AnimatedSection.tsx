import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms before animation starts
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const currentSection = sectionRef.current; // capture current ref
  if (!currentSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const timer = setTimeout(() => setIsVisible(true), delay);
        // clearTimeout will run on cleanup if needed
        return () => clearTimeout(timer);
      }
    },
    { threshold: 0.1, rootMargin: '50px' }
  );

  observer.observe(currentSection);

  return () => {
    observer.unobserve(currentSection); // use captured ref
  };
}, [delay]);
  return (
    <div
      ref={sectionRef}
      className={`relative transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {/* Curved line animation */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full max-w-md overflow-hidden pointer-events-none">
        <svg
          className={`w-full h-16 transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          viewBox="0 0 400 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 32 Q100 8 200 32 T400 32"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset={isVisible ? 0 : 1000}
            style={{
              transition: 'stroke-dashoffset 1.5s ease-out',
            }}
            className="text-gray-300"
          />

          {/* Animated dots */}
          {[100, 200, 300].map((cx, index) => (
            <circle
              key={cx}
              cx={cx}
              cy={index % 2 === 0 ? 24 : 32}
              r="2"
              fill="currentColor"
              className={`text-black transition-all duration-1000 delay-[${(index + 1) * 200}ms] ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            />
          ))}
        </svg>
      </div>

      {children}
    </div>
  );
};

export default AnimatedSection;

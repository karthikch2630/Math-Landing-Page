import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`relative transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {/* Curved line animation */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full max-w-md overflow-hidden">
        <svg
          className={`w-full h-16 transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          viewBox="0 0 400 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 32 Q100 8 200 32 T400 32"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className={`text-gray-300 transition-all duration-2000 ${
              isVisible ? 'stroke-dasharray-none' : 'stroke-dasharray-1000 stroke-dashoffset-1000'
            }`}
            style={{
              strokeDasharray: isVisible ? 'none' : '1000',
              strokeDashoffset: isVisible ? '0' : '1000',
            }}
          />
          {/* Animated dots along the curve */}
          <circle
            cx="100"
            cy="24"
            r="2"
            fill="currentColor"
            className={`text-black transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          />
          <circle
            cx="200"
            cy="32"
            r="2"
            fill="currentColor"
            className={`text-black transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          />
          <circle
            cx="300"
            cy="24"
            r="2"
            fill="currentColor"
            className={`text-black transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          />
        </svg>
      </div>
      {children}
    </div>
  );
};

export default AnimatedSection;
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CTASection: React.FC = () => {
  return (
    <AnimatedSection delay={500}>
      <section className="py-20 bg-white text-black relative overflow-hidden">
        {/* Optional subtle background shapes */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <path
              d="M0 300 Q300 100 600 300 T1200 300"
              stroke="black"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0 400 Q400 200 800 400 T1200 400"
              stroke="black"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
            Give Your Child a <span className="text-yellow-300 ">Math Advantage</span> Today!
          </h2>
          <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto">
            Book a personalized <strong className="text-yellow-300">Induction Assessment</strong> or schedule a call with our expert teacher.
            Limited seats available to ensure focused attention for every child.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="tel:+917396669430"
              className="bg-yellow-300 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-lg inline-flex items-center"
            >
              Book Induction Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            {/* Call button */}
            <a
              href="tel:+917396669430" // Replace with your actual contact number
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all shadow-lg inline-flex items-center"
            >
              Call Now
              <Phone className="w-5 h-5 ml-2" />
            </a>
          </div>




        </div>
      </section>
    </AnimatedSection>
  );
};

export default CTASection;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';

import AssessmentSection from './components/TestimonialSection';

import CTASection from './components/CTASection';
import Footer from './components/Footer';
import InductionAssessment from './components/InductionAssessment';
import Assessment from './components/AssessmentPage';
import FAQSection from './components/FAQ';
import BatchTimings from "./components/Bathsection";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Navigation />

        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <InductionAssessment/>
                <BatchTimings />
                <AssessmentSection />
                <FAQSection />
                <CTASection />
                <Footer />
              </>
            }
          />

          {/* Assessment Page */}
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";  
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
    <HelmetProvider>
      <Helmet>
        <title>CBSE Class 10 Tuition | Math & Science Coaching</title>
        <meta
          name="description"
          content="Help your child excel in CBSE Class 10 with personalized Math and Science tuition. Small batches, focused learning, expert teachers."
        />
        <meta
          name="keywords"
          content="CBSE Class 10 tuition, Math Science coaching for Class 10, personalized tuition for CBSE students"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cbseclass10.ankuramtuition.com/" />
      </Helmet>
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
    </HelmetProvider>
  );
}

export default App;

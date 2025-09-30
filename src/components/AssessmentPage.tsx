import { GraduationCap, Users, BookOpen, Target, ClipboardCheck, TrendingUp, Brain, Sparkles, CheckCircle, Award, Star } from 'lucide-react';


export default function Assessment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-900 text-yellow-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Star className="w-4 h-4 fill-yellow-300" />
                Limited Seats - Enroll Now
              </div>
              <h1 className="text-6xl font-black mb-6 text-gray-900 leading-tight">
                Transform Your<br />
                <span className="relative inline-block">
                  Class 10 Scores
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C60 4 140 4 198 10" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join <span className="font-bold text-gray-900">Ankuram Tuition</span> for expert Math & Science coaching.
                <span className="block mt-2 text-gray-900 font-semibold">Free Induction assessment + personalized study roadmap.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/917396669430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gray-900 text-yellow-300 px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:text-gray-900 shadow-xl inline-flex items-center gap-2"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Award className="w-5 h-5" />
                    Book Free Assessment
                  </span>
                  <div className="absolute inset-0 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>

                {/* Online Test Button */}
                <a
                  href="tel:+917396669430"  // replace with actual link
                  className="border-[3px] border-gray-900 text-gray-900 bg-yellow-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-yellow-300 transition-all flex items-center justify-center"
                >
                  Online Test - ₹500
                </a>
              </div>

            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-8 rounded-3xl shadow-2xl">
                <div className="bg-yellow-300 p-6 rounded-2xl mb-4">
                  <h3 className="font-black text-2xl text-gray-900 mb-2">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-900">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="font-semibold">12 Years CBSE Experience</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="font-semibold">Max 5 Students Per Batch</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="font-semibold">Proven Results & Track Record</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-3xl font-black text-yellow-300 mb-1">95%</div>
                    <div className="text-xs text-gray-300">Pass Rate</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-3xl font-black text-yellow-300 mb-1">500+</div>
                    <div className="text-xs text-gray-300">Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey - Timeline Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Your <span className="text-yellow-300 bg-gray-900 px-4 py-2 rounded-lg inline-block transform -rotate-1">Success Path</span>
            </h2>
            <p className="text-xl text-gray-600">Four steps to board exam excellence</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-300 hidden lg:block"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right">
                  <div className="inline-block lg:block">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-yellow-300">
                      <div className="flex items-center gap-3 lg:flex-row-reverse">
                        <div className="bg-gray-900 p-4 rounded-xl">
                          <Brain className="w-8 h-8 text-yellow-300" />
                        </div>
                        <div className="lg:text-right">
                          <h3 className="font-black text-2xl text-gray-900 mb-2">Foundations</h3>
                          <p className="text-gray-600">Build rock-solid basics in Math & Science fundamentals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-300 rounded-full border-4 border-white hidden lg:block"></div>
              </div>

              {/* Step 2 */}
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:block"></div>
                <div>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-yellow-300">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-900 p-4 rounded-xl">
                        <BookOpen className="w-8 h-8 text-yellow-300" />
                      </div>
                      <div>
                        <h3 className="font-black text-2xl text-gray-900 mb-2">Science Mastery</h3>
                        <p className="text-gray-600">Master Physics, Chemistry & Biology numericals</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-300 rounded-full border-4 border-white hidden lg:block"></div>
              </div>

              {/* Step 3 */}
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right">
                  <div className="inline-block lg:block">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-yellow-300">
                      <div className="flex items-center gap-3 lg:flex-row-reverse">
                        <div className="bg-gray-900 p-4 rounded-xl">
                          <Target className="w-8 h-8 text-yellow-300" />
                        </div>
                        <div className="lg:text-right">
                          <h3 className="font-black text-2xl text-gray-900 mb-2">Algebra & Geometry</h3>
                          <p className="text-gray-600">Tackle complex problems with confidence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-300 rounded-full border-4 border-white hidden lg:block"></div>
              </div>

              {/* Step 4 */}
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:block"></div>
                <div>
                  <div className="bg-gradient-to-br from-yellow-300 to-yellow-200 p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-900 p-4 rounded-xl">
                        <GraduationCap className="w-8 h-8 text-yellow-300" />
                      </div>
                      <div>
                        <h3 className="font-black text-2xl text-gray-900 mb-2">Board Ready</h3>
                        <p className="text-gray-900 font-semibold">PYQs, RD Sharma & NCERT Exemplar practice</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-300 rounded-full border-4 border-white hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Bento Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">
            What Makes Us <span className="text-yellow-300 bg-gray-900 px-4 py-2 rounded-lg inline-block">Different</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-yellow-300" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Small Batches</h3>
              <p className="text-gray-600 leading-relaxed">Maximum <span className="font-bold text-gray-900">5 students</span> per class for personalized attention</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-yellow-300" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Expert Teacher</h3>
              <p className="text-gray-600 leading-relaxed"><span className="font-bold text-gray-900">12 years</span> of CBSE teaching excellence</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-yellow-300" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Concept Clarity</h3>
              <p className="text-gray-600 leading-relaxed">Deep understanding over <span className="font-bold text-gray-900">rote learning</span></p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-yellow-300" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Problem Solving</h3>
              <p className="text-gray-600 leading-relaxed">Master <span className="font-bold text-gray-900">RD Sharma & Exemplar</span> questions</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClipboardCheck className="w-7 h-7 text-yellow-300" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Custom Plans</h3>
              <p className="text-gray-600 leading-relaxed">Tailored study plans based on <span className="font-bold text-gray-900">your gaps</span></p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-yellow-300" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600 leading-relaxed"><span className="font-bold text-gray-900">Weekly tests</span> & progress reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Card Style */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center text-white mb-4">
            How We Help You <span className="text-yellow-300">Succeed</span>
          </h2>
          <p className="text-center text-gray-300 text-xl mb-16">Simple, effective, proven process</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-300 p-10 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded-2xl">
                  <ClipboardCheck className="w-10 h-10 text-yellow-300" />
                </div>
                <div>
                  <h3 className="font-black text-3xl text-gray-900 mb-3">Diagnose</h3>
                  <p className="text-gray-900 font-semibold text-lg">Identify exact weak areas through comprehensive testing</p>
                </div>
              </div>
              <div className="space-y-3 ml-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-300 font-bold text-sm">1</span>
                  </div>
                  <p className="text-gray-900 font-medium">Baseline Math & Science assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-300 font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-900 font-medium">Detailed gap analysis report</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-300 font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-900 font-medium">One-on-one consultation with parents</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border-4 border-yellow-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded-2xl">
                  <TrendingUp className="w-10 h-10 text-yellow-300" />
                </div>
                <div>
                  <h3 className="font-black text-3xl text-gray-900 mb-3">Transform</h3>
                  <p className="text-gray-900 font-semibold text-lg">Structured coaching with continuous improvement</p>
                </div>
              </div>
              <div className="space-y-3 ml-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold text-sm">1</span>
                  </div>
                  <p className="text-gray-600 font-medium">Concept-first teaching methodology</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-600 font-medium">Intensive practice with PYQs & exemplar</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-600 font-medium">Weekly progress tracking & feedback</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <a href="https://wa.me/917396669430" target="_blank" rel="noopener noreferrer">
              <button className="bg-yellow-300 text-gray-900 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
                Get Your Free Assessment
              </button>
              <button className="border-3 border-yellow-300 text-yellow-300 px-10 py-5 rounded-full font-black text-lg hover:bg-yellow-300 hover:text-gray-900 transition-all">
                Talk to Us
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial - Modern Card */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <blockquote className="text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
                "My son's confidence in math has <span className="text-yellow-300 bg-gray-900 px-2 py-1 rounded">skyrocketed</span> since joining. The personalized attention makes all the difference!"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-black text-gray-900">PS</span>
                </div>
                <div>
                  <p className="font-black text-xl text-gray-900">Priya Sharma</p>
                  <p className="text-gray-600">Parent of Class 10 Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold & Direct */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-black text-lg">
              <Sparkles className="w-6 h-6" />
              Last Few Spots Remaining!
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
            Ready to Ace<br />Class 10 Boards?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Start with a free assessment. No commitments, just clarity on where your child stands.
          </p>
          <a href="https://wa.me/917396669430" target="_blank" rel="noopener noreferrer">
            <button className="bg-yellow-300 text-gray-900 px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-3">
              Book Free Assessment
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
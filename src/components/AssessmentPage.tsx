import { GraduationCap, Users, Target, ClipboardCheck, TrendingUp, Brain, CheckCircle, Award, Star } from 'lucide-react';
import { Helmet } from 'react-helmet';
export default function Assessment() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "CBSE Class 10 Tuition - Math & Science Coaching",
    "description": "Personalized CBSE Class 10 Math and Science tuition batches with small groups (max 5 students) for focused learning.",
    "provider": {
      "@type": "Organization",
      "name": "Ankuram Tuitions",
      "url": "cbseclass10.ankuramtuition.com",
    },
    "occupationalCategory": "Education",
    "programType": "Tuition Coaching",
    "hasCourse": [
      {
        "@type": "Course",
        "name": "Mathematics Class 10 CBSE",
        "educationalLevel": "Secondary School"
      },
      {
        "@type": "Course",
        "name": "Science Class 10 CBSE",
        "educationalLevel": "Secondary School"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
     {/* Helmet for SEO */}
      <Helmet>
        <title>CBSE Class 10 Tuition | Math & Science Coaching Batches</title>
        <meta
          name="description"
          content="Help your child excel in CBSE Class 10 with our personalized Math and Science tuition. Small batches of only 5 students ensure maximum attention."
        />
        <meta name="keywords" content="best online tuition for class 9 cbse, online tuition for class 10 cbse, best online coaching for class 10 cbse, cbse online tuition, online tuition for class 11 cbse, online maths tuition for class 10 cbse, best online tuition for class 8 cbse, online tuition for cbse class 10, best online tuition for class 10 cbse, best online tuition for class 11 cbse, online cbse maths tuition, online maths tuition for class 9 cbse, online tuition for class 12 cbse, cbse class 12 maths online tuition, best online tuition for class 12 cbse, online tuition for class 8 cbse, online tuition for cbse class 8, online coaching for class 10 cbse, online tuition for cbse class 9, online tuition for class 10 cbse near me, best coaching for cbse class 10 near me, cbse 10th online coaching, best online coaching for cbse class 10, 9th class cbse online coaching, online maths tuition for class 12 cbse, 10th cbse tuition, 10th class cbse online coaching, best coaching for 10th cbse near me, best coaching for class 10 cbse, best online tuition for cbse, best tuition for class 9 cbse, cbse 9th tuition near me, cbse class 10 coaching, cbse class 10 online coaching, cbse class 9 online coaching, cbse maths tuition, cbse maths tutor, cbse online tutor, cbse online tutoring, class 10 cbse coaching, class 10 maths tuition, home tuition for 10th class cbse, online cbse class 8 maths tuitions, online coaching for cbse class 10, online tutor for class 9 cbse" />
        <meta property="og:title" content="CBSE Class 10 Tuition | Math & Science Coaching" />
        <meta
          property="og:description"
          content="Help your child succeed with our personalized CBSE Class 10 tuition in Math and Science. Small group learning with only 5 students per batch."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="cbseclass10.anukuramtuition.com" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>


      {/* Hero Section - Split Design */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 opacity-20" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-heading" className="text-6xl font-black mb-6 text-gray-900 leading-tight">
                Help Your Child<br />
                <span className="relative inline-block">
                  Transform Their Class 10 Scores
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                    <path d="M2 10C60 4 140 4 198 10" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enroll your child in <span className="font-bold text-gray-900">Ankuram Tuition</span> for expert CBSE Class 10 Math & Science coaching.
                <span className="block mt-2 text-gray-900 font-semibold">Free Offline Induction assessment + personalized study roadmap for your child.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/917396669430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gray-900 text-yellow-300 px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:text-gray-900 shadow-xl inline-flex items-center gap-2"
                  aria-label="Book free offline assessment for your child's CBSE Class 10 Math and Science via WhatsApp"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Award className="w-5 h-5" aria-hidden="true" />
                    Book Offline Assessment
                  </span>
                  <div className="absolute inset-0 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden="true"></div>
                </a>

                {/* Online Test Button */}
                <a
                  href="tel:+917396669430"  // replace with actual link
                  className="border-[3px] border-gray-900 text-gray-900 bg-yellow-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-yellow-300 transition-all flex items-center justify-center"
                  aria-label="Purchase online test for ₹500 for your child's CBSE Class 10 preparation"
                >
                  Online Test - ₹500
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-8 rounded-3xl shadow-2xl">
                <div className="bg-yellow-300 p-6 rounded-2xl mb-4">
                  <h3 className="font-black text-2xl text-gray-900 mb-2">Why Choose Us for Your Child's CBSE Class 10 Success?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-900">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <span className="font-semibold">12 Years CBSE Experience</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <span className="font-semibold">Max 5 Students Per Batch</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <span className="font-semibold">Proven Results & Track Record</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-3xl font-black text-yellow-300 mb-1">100%</div>
                    <div className="text-xs text-gray-300">Pass Rate</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-3xl font-black text-yellow-300 mb-1">90% Marks</div>
                    <div className="text-xs text-gray-300">Every Student Scored</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey - Timeline Style */}
      <section className="py-20 bg-gray-50" aria-labelledby="math-roadmap-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="math-roadmap-heading" className="text-5xl font-black text-gray-900 mb-4">
              <span className="text-yellow-400 bg-gray-900 px-4 py-2 rounded-lg inline-block transform -rotate-1 shadow-lg">Class 10</span> Maths Roadmap
            </h2>
            <p className="text-xl text-gray-700 font-semibold">
              A structured 6-week plan to help your child master fundamental CBSE Class 10 maths concepts step by step
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Induction Assessment Result - styled like week boxes */}
            <div className="bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-4 text-center">Induction Assessment Result</h2>

              {/* Basic Box */}
              <div className="bg-yellow-100 p-4 rounded-lg mb-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Basic (Marks &lt; 30%)</h3>
                <div className="flex gap-2">
                  <span className="bg-red-400 text-white px-3 py-1 rounded">Basic</span>
                  <span className="bg-pink-400 text-white px-3 py-1 rounded">Moderate</span>
                  <span className="bg-green-400 text-gray-900 px-3 py-1 rounded">Advanced</span>
                </div>
                <p className="mt-2 text-gray-700">Students scoring below 30% will be placed in the Basic Batch.</p>
              </div>

              {/* Moderate Box */}
              <div className="bg-yellow-100 p-4 rounded-lg mb-4 shadow-md">
                <h3 className="text-xl font-semibold mb-2">Moderate (Marks &lt; 50%)</h3>
                <div className="flex gap-2">
                  <span className="bg-pink-400 text-white px-3 py-1 rounded">Moderate</span>
                  <span className="bg-green-400 text-gray-900 px-3 py-1 rounded">Advanced</span>
                </div>
                <p className="mt-2 text-gray-700">Students scoring below 50% will be placed in the Moderate Batch.</p>
              </div>

              {/* Advanced Box */}
              <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Advanced (Marks &gt; 65%)</h3>
                <div className="flex gap-2">
                  <span className="bg-green-400 text-gray-900 px-3 py-1 rounded">Advanced</span>
                </div>
                <p className="mt-2 text-gray-700">Students scoring above 65% will be placed in the Advanced Batch.</p>
              </div>
            </div>

            {/* Week 1 */}
            <div className="bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-4">Week 1</h3>
              <ul className="list-disc list-inside space-y-2 font-semibold">
                <li className="bg-red-500 text-white px-2 rounded">Rational & Irrational Numbers</li>
                <li className="bg-red-500 text-white px-2 rounded">Real Numbers & Properties</li>
                <li className="bg-red-500 text-white px-2 rounded">Rational/Irrational Numbers on Number Line</li>
                <li className="bg-red-500 text-white px-2 rounded">Prime & Composite Numbers</li>
                <li className="bg-red-500 text-white px-2 rounded">Prime Factorization, HCF & LCM</li>
                <li className="bg-red-500 text-white px-2 rounded">Operations on Fractions & Decimals</li>
                <li className="bg-red-500 text-white px-2 rounded">Square Roots (factorization, division method)</li>
                <li className="bg-red-500 text-white px-2 rounded">Cube & Cube Roots</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Algebraic Expressions & Identities</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Simplification of Algebraic Expressions</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Algebraic identities: (x+y)², (x-y)², x²-y², (x+y)(x+z)</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Polynomials – Types, Zeroes, Remainder & Factor Theorem</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Factorization using Identities & Theorems</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Factorization (common factor, splitting middle term)</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Introduction to Polynomials</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Linear Equations in One Variable</li>
              </ul>
            </div>

            {/* Week 2 */}
            <div className="bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-4">Week 2</h3>
              <ul className="list-disc list-inside space-y-2 font-semibold">
                <li className="bg-green-400 text-gray-900 px-2 rounded">Basic Geometrical Ideas</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Lines and Angles</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Properties & Types of Angles</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Triangles (Types, Properties, Theorems)</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Congruence of Triangles (SAS, ASA, SSS, RHS)</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Cartesian Plane – Plotting Points & Coordinates</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Circle Properties (Chord, Arc, Segment, Sector)</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Angle Subtended by Chord/Arc, Cyclic Quadrilaterals</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Proofs of Basic Proportionality Theorem (Thales Theorem) and its converse</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Area ratios of similar triangles</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Pythagoras Theorem and its converse</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Tangent to a circle at a point</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Number of tangents from a point on a circle</li>
                <li className="text-green-800 font-bold text-2xl">MOCK TEST 1</li>
              </ul>
            </div>

            {/* Week 3 */}
            <div className="bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-4">Week 3</h3>
              <ul className="list-disc list-inside space-y-2 font-semibold">
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Relationship between zeroes and coefficients of a polynomial</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Division algorithm for polynomials</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Graphical method of solution</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">
                  Algebraic methods:
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li className="bg-pink-300 text-gray-900 px-2 rounded">Substitution</li>
                    <li className="bg-pink-300 text-gray-900 px-2 rounded">Elimination</li>
                    <li className="bg-pink-300 text-gray-900 px-2 rounded">Cross-multiplication</li>
                  </ul>
                </li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Equations reducible to linear form</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Standard form of a quadratic equation</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">
                  Solution by:
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li className="bg-green-300 text-gray-900 px-2 rounded">Factorization</li>
                    <li className="bg-green-300 text-gray-900 px-2 rounded">Completing the square</li>
                    <li className="bg-green-300 text-gray-900 px-2 rounded">Using the quadratic formula</li>
                  </ul>
                </li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Relationship between discriminant and nature of roots</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Situational problems based on quadratic equations</li>
                <li className="bg-red-400 text-white px-2 rounded">nth term of an AP</li>
                <li className="bg-red-400 text-white px-2 rounded">Sum of the first n terms of an AP</li>
                <li className="bg-red-400 text-white px-2 rounded">Applications of AP</li>
                <li className="text-green-800 font-bold text-2xl">MOCK TEST 2</li>
                <li className="text-green-800 font-bold text-2xl">MOCK TEST 3</li>
              </ul>
            </div>

            {/* Week 4 */}
            <div className="bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-4">Week 4</h3>
              <ul className="list-disc list-inside space-y-2 font-semibold">
                <li className="bg-red-400 text-white px-2 rounded">Concept of coordinate geometry, graphs of linear equations</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Distance formula</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Section formula (internal division)</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Area of a triangle</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Trigonometric ratios of an acute angle of a right-angled triangle</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Trigonometric ratios of specific angles (0°, 30°, 45°, 60°, 90°)</li>
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Relationships between trigonometric ratios</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Proof and applications of the identity <em>sin²A + cos²A = 1</em></li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Other trigonometric identities</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Simple problems on angles of elevation and depression</li>
                <li className="text-green-800 font-bold text-2xl">MOCK TEST 4</li>
                <li className="text-green-800 font-bold text-2xl">MOCK TEST 5</li>
              </ul>
            </div>

            {/* Week 5 and 6 */}
            <div className="bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-4">Week 5</h3>
              <ul className="list-disc list-inside space-y-2 font-semibold">
                <li className="bg-pink-400 text-gray-900 px-2 rounded">Area of a sector and segment of a circle</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Problems based on combinations of plane figures</li>
                <li className="bg-green-400 text-gray-900 px-2 rounded">Surface areas and volumes of combinations of solids (cubes, cuboids, spheres, hemispheres, cylinders, cones)</li>
                <li className="text-green-800 font-bold text-2xl">MOCK TEST 5</li>
              </ul>
              <h3 className="text-3xl font-bold mb-4 mt-4">Week 6</h3>
              <ul className="list-disc list-inside space-y-2 font-semibold">
                <li className="bg-red-400 text-white px-2 rounded">Mean, median, and mode of grouped data</li>
                <li className="bg-red-400 text-white px-2 rounded">Cumulative frequency graph (Ogive)</li>
                <li className="bg-red-400 text-white px-2 rounded">Classical definition of probability</li>
                <li className="bg-red-400 text-white px-2 rounded">Simple problems on finding the probability of an event</li>
                <li className="bg-red-400 text-white px-2 rounded">Collection and Representation of Data (Bar Graphs, Pie Charts)</li>
                <li className="bg-red-400 text-white px-2 rounded">Probability of Events</li>
                <li className="text-green-800 font-bold text-2xl">MOCK TEST 6</li>
                <li className="text-green-800 font-bold text-2xl">MOCK TEST 7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Science Road map*/}
      <section className="py-20 bg-gray-50" aria-labelledby="science-roadmap-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="science-roadmap-heading" className="text-5xl font-black text-gray-900 mb-4">
              <span className="text-yellow-400 bg-gray-900 px-4 py-2 rounded-lg inline-block transform -rotate-1 shadow-lg">Class 10</span> Science Roadmap
            </h2>
            <p className="text-xl text-gray-700 font-semibold">
              A structured 8-week plan to help your child master fundamental CBSE Class 10 Science concepts step by step
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-6">
            {/* Week 1 */}
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">Week 1</h3>
              <ul className="list-disc list-inside space-y-1 font-semibold text-sm">
                <li>Electric current</li>
                <li>Potential difference and electric potential</li>
                <li>Ohm’s law</li>
                <li>Resistance</li>
                <li>Resistivity</li>
                <li>Factors on which the resistance of a conductor depends</li>
                <li>Series and parallel combinations of resistors</li>
                <li>Heating effect of electric current</li>
                <li>Electric power</li>
                <li className='text-green-800 font-bold text-xl'>MOCK TEST 1</li>
                <li className='text-green-800 font-bold text-xl'>MOCK TEST 2</li>
              </ul>
            </div>

            {/* Week 2 */}
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">Week 2</h3>
              <ul className="list-disc list-inside space-y-1 font-semibold text-sm">
                <li>Interrelation between P, V, I, and R</li>
                <li>Chemical reactions</li>
                <li>Acids, bases, and salts</li>
                <li>Metals and non-metals</li>
                <li>Carbon and its compounds</li>
                <li>Periodic classification of elements</li>
                <li>Types of chemical reactions</li>
                <li>Writing and balancing chemical equations</li>
                <li>Effects of oxidation and reduction</li>

                <li className='text-green-800 font-bold text-xl'>MOCK TEST 3</li>
                <li className='text-green-800 font-bold text-xl'>MOCK TEST 4</li>
              </ul>
            </div>

            {/* Week 3 */}
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">Week 3</h3>
              <ul className="list-disc list-inside space-y-1 font-semibold text-sm">
                <li>Properties and uses</li>
                <li>Preparation of salts</li>
                <li>pH scale</li>
                <li>Physical and chemical properties</li>
                <li>Reactivity series</li>
                <li>Uses of metals and non-metals</li>
                <li>Covalent bonding</li>
                <li>Hydrocarbons</li>
                <li>Functional groups</li>
                <li>Alcohols, acids, and other derivatives</li>


                <li className='text-green-800 font-bold text-xl'>MOCK TEST 5</li>

              </ul>
            </div>

            {/* week 4*/}
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">Week 4</h3>
              <ul className="list-disc list-inside space-y-1 font-semibold text-sm">
                <li>Magnetic field</li>
                <li>Field lines</li>
                <li>Field due to a current carrying conductor</li>
                <li>Field due to current carrying coil or solenoid</li>
                <li>Force on current carrying conductor</li>
                <li>Fleming’s left hand rule</li>
                <li>Electric Motor</li>
                <li>Electromagnetic induction</li>
                <li>Induced potential difference</li>
                <li>Induced current</li>
                <li>Fleming’s Right Hand Rule</li>
                <li>Electric Generator</li>
                <li className='text-green-800 font-bold text-xl'>MOCK TEST 6</li>
              </ul>
            </div>

            {/* week 5*/}
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">Week 5</h3>
              <ul className="list-disc list-inside space-y-1 font-semibold text-sm">
                <li>Basic understanding of nutrition, respiration, transportation, and excretion</li>
                <li>Focus on the differences between autotrophs and heterotrophs</li>
                <li>Photosynthesis: Understand the process, equation, and importance</li>
                <li>Human digestive system: Learn the organs and their functions (e.g., mouth, stomach, small intestine)</li>
                <li>Practice labeling diagrams of the digestive system</li>
                <li>Aerobic and anaerobic respiration: Learn the differences and equations</li>
                <li>Human respiratory system: Understand the organs and their functions (e.g., lungs, diaphragm)</li>
                <li>Human circulatory system: Learn about the heart, blood vessels, and blood components</li>
                <li>Plant transport: Understand xylem and phloem</li>
                <li>Human excretory system: Learn about kidneys, ureters, bladder, and urethra</li>
                <li>Practice labeling diagrams of the excretory system</li>

                <li className='text-green-800 font-bold text-xl'>MOCK TEST 7</li>
              </ul>
            </div>

            {/* week 6*/}
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">Week 6</h3>
              <ul className="list-disc list-inside space-y-1 font-semibold text-sm">
                <li>Basic structure of neurons and the nervous system</li>
                <li>Reflex action: Understand the reflex arc</li>
                <li>Learn about major glands (e.g., pituitary, thyroid, adrenal) and their hormones</li>
                <li>Understand plant hormones and their functions (e.g., auxins, gibberellins)</li>
                <li>Learn methods like binary fission, budding, and spore formation</li>
                <li>Human reproductive system: Understand male and female reproductive organs</li>
                <li>Menstrual cycle: Learn the basics</li>
                <li>Practice labeling diagrams of the reproductive system</li>
                <li>Understand pollination, fertilization, and seed formation</li>
                <li>Reflection of light</li>
                <li>Curved surfaces</li>
                <li>Images formed by spherical mirrors</li>
                <li>Centre of curvature</li>
                <li>Principal axis</li>
                <li>Principal focus</li>
                <li>Focal length</li>
                <li>Mirror formula (derivation not required)</li>
                <li>Magnification</li>

                <li className='text-green-800 font-bold text-xl'>MOCK TEST 8</li>
                <li className='text-green-800 font-bold text-xl'>MOCK TEST 9</li>
              </ul>
            </div>


            <div className="bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">Week 7</h3>
              <ul className="list-disc list-inside space-y-1 font-semibold text-sm">
                <li>Refraction of light through a glass slab</li>
                <li>Refractive index</li>
                <li>Spherical lenses</li>
                <li>Centre of curvature</li>
                <li>Principal axis</li>
                <li>Principal focus</li>
                <li>Focal length</li>
                <li>Lens formula (derivation not required)</li>
                <li>Magnification</li>
                <li>Power of a lens</li>
                <li>Functioning of a lens in the human eye</li>
                <li>Defects of vision and their correction</li>
                <li>Applications of spherical mirrors and lenses</li>
                <li>Dispersion of light</li>
                <li>Scattering of light</li>
                <li>Atmospheric refraction</li>
                <li>Tyndall effect</li>
                <li>Classification of elements</li>
                <li>Periodic trends</li>
                <li>Pollution</li>
                <li>Greenhouse effect</li>
                <li>Ozone depletion</li>
                <li>Different forms of energy, conventional and non-conventional sources of energy: Fossil fuels, solar energy, biogas, wind, water and tidal energy, Nuclear energy</li>
                <li>Renewable versus non-renewable sources of energy</li>

                <li className='text-green-800 font-bold text-xl'>MOCK TEST 10</li>
              </ul>
            </div>

            {/* week 8*/}
            <div className="bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-2">Week 8</h3>
              <ul className="list-disc list-inside space-y-1 font-semibold text-sm">
                <li>Heredity: Learn about Mendel’s experiments and the concept of dominant and recessive traits</li>
                <li>Evolution: Understand the basics of natural selection and speciation</li>


                <li className='text-green-800 font-bold text-xl'>MOCK TEST 10</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Bento Style */}
      <section className="py-20 bg-white" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="features-heading" className="text-5xl font-black text-center text-gray-900 mb-16">
            What Makes Us <span className="text-yellow-300 bg-gray-900 px-4 py-2 rounded-lg inline-block">Different</span> for Your Child's CBSE Class 10 Journey
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-yellow-300" aria-hidden="true" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Small Batches</h3>
              <p className="text-gray-600 leading-relaxed">Maximum <span className="font-bold text-gray-900">5 students</span> per class for personalized attention to your child</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-yellow-300" aria-hidden="true" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Expert Teacher</h3>
              <p className="text-gray-600 leading-relaxed"><span className="font-bold text-gray-900">12 years</span> of CBSE teaching excellence for Class 10 students</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-yellow-300" aria-hidden="true" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Concept Clarity</h3>
              <p className="text-gray-600 leading-relaxed">Deep understanding over <span className="font-bold text-gray-900">rote learning</span> for your child's long-term success</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-yellow-300" aria-hidden="true" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Problem Solving</h3>
              <p className="text-gray-600 leading-relaxed">Master <span className="font-bold text-gray-900">RD Sharma & Exemplar</span> questions to boost your child's confidence</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClipboardCheck className="w-7 h-7 text-yellow-300" aria-hidden="true" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Custom Plans</h3>
              <p className="text-gray-600 leading-relaxed">Tailored study plans based on <span className="font-bold text-gray-900">your child's gaps</span></p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl border-2 border-gray-900 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-yellow-300" aria-hidden="true" />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600 leading-relaxed"><span className="font-bold text-gray-900">Weekly tests</span> & progress reports for your child's growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Card Style */}
      <section className="py-20 bg-gray-900" aria-labelledby="how-it-works-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="how-it-works-heading" className="text-5xl font-black text-center text-white mb-4">
            How We Help Your Child <span className="text-yellow-300">Succeed</span> in CBSE Class 10
          </h2>
          <p className="text-center text-gray-300 text-xl mb-16">Simple, effective, proven process for parents and students</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-300 p-10 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded-2xl">
                  <ClipboardCheck className="w-10 h-10 text-yellow-300" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-black text-3xl text-gray-900 mb-3">Diagnose</h3>
                  <p className="text-gray-900 font-semibold text-lg">Identify exact weak areas in your child's CBSE Class 10 Math and Science through comprehensive testing</p>
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
                  <TrendingUp className="w-10 h-10 text-yellow-300" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-black text-3xl text-gray-900 mb-3">Transform</h3>
                  <p className="text-gray-900 font-semibold text-lg">Structured coaching with continuous improvement for your child's CBSE success</p>
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
            <a href="https://wa.me/917396669430" target="_blank" rel="noopener noreferrer" aria-label="Get your child's free offline assessment for CBSE Class 10 Math and Science via WhatsApp">
              <button className="bg-yellow-300 text-gray-900 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
                Get Your Offline Assessment
              </button>
            </a>
            <a href="tel:+917396669430" aria-label="Talk to us about CBSE Class 10 tuition for your child">
              <button className="border-3 border-yellow-300 text-yellow-300 px-10 py-5 rounded-full font-black text-lg hover:bg-yellow-300 hover:text-gray-900 transition-all">
                Talk to Us
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial - Modern Card */}
      <section className="py-20 bg-gray-50" aria-labelledby="testimonial-heading">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-20" aria-hidden="true"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-6" role="img" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-300 text-yellow-300" aria-hidden="true" />
                ))}
              </div>
              <h2 id="testimonial-heading" className="sr-only">Parent Testimonial</h2>
              <blockquote className="text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
                "My son did well in half yearly exams of grade 10 last month. Happy with faculties at Ankuram tuition centre.  <span className="text-yellow-300 bg-gray-900 px-2 py-1 rounded">Keeping fingers crossed for board exams</span> since joining. The personalized attention makes all the difference!"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-black text-gray-900">AN</span>
                </div>
                <div>
                  <p className="font-black text-xl text-gray-900">Amaresh Nular</p>
                  <p className="text-gray-600">Parent of Class 10 Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold & Direct */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">

          </div>
          <h2 id="cta-heading" className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
            Ready to Help Your Child<br />Ace Class 10 CBSE Boards?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Start with a free assessment. No commitments, just clarity on where your child stands in Math and Science.
          </p>
          <a href="https://wa.me/917396669430" target="_blank" rel="noopener noreferrer" aria-label="Book free offline assessment for your child's CBSE Class 10 preparation via WhatsApp">
            <button className="bg-yellow-300 text-gray-900 px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-3">
              Book Offline Assessment
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Parent",
    text: "The classes helped my child gain confidence in math.",
    video: "/Video-Testimonials-6-fixed.mp4",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Student",
    text: "I loved the interactive approach, it made math so simple!",
    video: "/Video-Testimonials-3.mp4",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    role: "Parent",
    text: "Great teachers and excellent results. Highly recommend!",
    video: "/Video-testimonial-4.mp4",
  },
];

const scrollingTestimonials = [
  {
    id: 1,
    text: "Very good tuition centre for grade 12 mathematics. My daughter joined in April and she is quite confident with her portion especially calculus part.",
    name: "Suresh Kumar Majji",
  },
  {
    id: 2,
    text: "One of the best tuition centres in Jubilee Hills for class 10 ICSE. My daughter joined in last three months and scored decent marks. All thanks to teachers.",
    name: "Syed Jameel",
  },
  {
    id: 3,
    text: "My basics in maths improved a lot for grade 11 and 12 after joining Ankuram Tuition Centre.",
    name: "Bhavani Shankar",
  },
  {
    id: 4,
    text: "ISC maths and physics taught at Ankuram Tuition Centre from basics to my son Abrar. He did well in exams compared to grade 11.",
    name: "Azrani Baig",
  },
  {
    id: 5,
    text: "IGCSE AS and A level maths were taught very well to my daughter online.",
    name: "Khamrunnisa Mir",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Watch <span className="text-yellow-300">Our Students Shine</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            See the progress and confidence our students gain with our expert math guidance.
          </p>
        </motion.div>

        {/* Featured Video - First Testimonial Large */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <div className="inline-block px-4 py-2 bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold text-gray-900">Featured Story</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{testimonials[0].name}</h3>
                <p className="text-base text-gray-500 font-medium">{testimonials[0].role}</p>
                <p className="text-xl text-gray-700 leading-relaxed">{testimonials[0].text}</p>
              </div>
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-300">
                <video
                  src={testimonials[0].video}
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Column Grid for Remaining Videos */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.slice(1).map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="rounded-xl overflow-hidden">
                <video
                  src={t.video}
                  controls
                  playsInline
                  muted
                  preload="metadata"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                <p className="text-base text-gray-700 leading-relaxed">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative overflow-hidden mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Real Stories from <span className="text-yellow-300">Real Parents</span>
            </h2>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
              Genuine feedback that reflects the journey of our students and families.
            </p>
          </motion.div>

          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            
            <motion.div
              className="flex gap-6 py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
            >
              {[...scrollingTestimonials, ...scrollingTestimonials].map((st, i) => (
                <div
                  key={st.id + "-" + i}
                  className="min-w-[340px] bg-white border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-xl hover:border-yellow-300 transition-all duration-300"
                >
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-yellow-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{st.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-lg">{st.name.charAt(0)}</span>
                    </div>
                    <span className="font-semibold text-gray-900">{st.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
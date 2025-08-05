import React from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaCertificate, FaUserTie, FaHandsHelping } from 'react-icons/fa';
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <div className="py-12 px-4 bg-gray-50">
      {/* Features Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-800">Why Choose Our Training Center?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-600 mb-4">
              <FaLaptopCode className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Industry-Relevant Curriculum</h3>
            <p className="text-gray-600">
              Our courses are constantly updated to match current industry demands and emerging technologies.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-600 mb-4">
              <FaChalkboardTeacher className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from certified professionals with real-world experience in their respective fields.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-600 mb-4">
              <FaCertificate className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Recognized Certifications</h3>
            <p className="text-gray-600">
              Earn valuable certifications that enhance your resume and career prospects.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-600 mb-4">
              <FaUserTie className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Career Support</h3>
            <p className="text-gray-600">
              Get job placement assistance, resume reviews, and interview preparation.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-600 mb-4">
              <FaHandsHelping className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hands-On Training</h3>
            <p className="text-gray-600">
              Practical labs and projects to ensure you gain real, applicable skills.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-green-600 mb-4">
              <FaLaptopCode className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Flexible Learning Options</h3>
            <p className="text-gray-600">
              Choose from in-person, online, or hybrid learning formats to suit your schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-800">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Student Name</h4>
                  <p className="text-sm text-gray-500">Course Taken</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The training I received completely transformed my career. The instructors were knowledgeable and supportive."
              </p>
              <div className="flex mt-3 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="max-w-4xl mx-auto bg-green-700 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
        <p className="mb-6">Join hundreds of successful graduates who launched their careers with our training programs.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Explore Courses
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-green-800 transition-colors">
            Contact Advisor
          </button>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
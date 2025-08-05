import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaChartLine, FaShieldAlt, FaRobot } from 'react-icons/fa';
import courses from '../data/courses';
import Footer from '../components/Footer'

function Courses() {
  const categories = [
    { name: "All", icon: <FaLaptopCode className="mr-2" /> },
    { name: "Web Development", icon: <FaLaptopCode className="mr-2" /> },
    { name: "Mobile Development", icon: <FaMobileAlt className="mr-2" /> },
    { name: "Data Science", icon: <FaDatabase className="mr-2" /> },
    { name: "Cyber Security", icon: <FaShieldAlt className="mr-2" /> },
    { name: "AI & ML", icon: <FaRobot className="mr-2" /> }
  ];

  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <>
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Industry-relevant programs designed to launch your tech career
          </p>
        </div>
      </div>

      {/* Course Categories */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${activeCategory === category.name ? 'bg-green-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {course.level}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {course.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-700 font-bold">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-gray-400 text-sm line-through ml-2">${course.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                      <span className="text-sm text-gray-600">{course.instructor}</span>
                    </div>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Comparison */}
      <section className="max-w-6xl mx-auto py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Which Course Is Right For You?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prerequisites</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outcome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.slice(0, 3).map((course) => (
                <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{course.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {course.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {course.prerequisites || "None"}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {course.outcome}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto my-16 bg-green-700 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Course?</h2>
        <p className="mb-6">Our advisors can help you select the perfect program based on your goals and background.</p>
        <button className="px-6 py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-gray-100 transition-colors">
          Speak to an Advisor
        </button>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Courses;
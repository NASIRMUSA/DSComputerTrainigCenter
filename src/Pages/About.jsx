import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaLaptopCode, FaAward, FaLinkedin, FaTwitter } from 'react-icons/fa';
import teamMembers from '../data/team';
import Aboutus from '../assets/aboutus1.jpg';
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Digital Solution</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering the digital workforce of tomorrow through innovative education and practical training
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Digital Solution Computer Training Center began with a simple mission: to bridge the gap between academic knowledge and real-world tech skills. What started as a small training center with just two instructors has grown into a premier institution serving hundreds of students annually.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, Jane Doe, recognized the need for practical, industry-relevant training while working as a senior developer. Frustrated by the lack of job-ready candidates, she established Digital Solution to create a pipeline of skilled professionals.
            </p>
            <p className="text-gray-600">
              Today, we're proud to have helped over 1,500 graduates launch successful careers in tech.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img 
              src={Aboutus}
              alt="Our training center" 
              className="w-full h-auto rounded"
            />
            <div className="mt-4 text-sm text-gray-500 text-center">
              Our first location in downtown Techville, 2015
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <FaUsers className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-bold">1,500+</div>
              <div className="text-green-200">Graduates</div>
            </div>
            <div className="p-4">
              <FaLaptopCode className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-bold">25+</div>
              <div className="text-green-200">Courses Offered</div>
            </div>
            <div className="p-4">
              <FaChalkboardTeacher className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-bold">98%</div>
              <div className="text-green-200">Satisfaction Rate</div>
            </div>
            <div className="p-4">
              <FaAward className="text-4xl mx-auto mb-3" />
              <div className="text-3xl font-bold">12</div>
              <div className="text-green-200">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-green-600">
                      <FaLinkedin />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-500 hover:text-green-600">
                      <FaTwitter />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-green-700">Excellence</h3>
            <p className="text-gray-600">
              We maintain the highest standards in curriculum development and instruction, ensuring our students receive top-tier education.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-green-700">Innovation</h3>
            <p className="text-gray-600">
              We continuously update our programs to reflect the latest industry trends and technological advancements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-green-700">Community</h3>
            <p className="text-gray-600">
              We foster a supportive learning environment where students and alumni form lasting professional networks.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default About;
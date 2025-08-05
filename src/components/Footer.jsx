import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-green-400">Digital Solution Computer Training Center</h3>
            <p className="mb-4 text-gray-300">
              Empowering individuals with cutting-edge digital skills for the modern workforce. 
              Our mission is to bridge the gap between education and industry requirements.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-green-400 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Student Portal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-green-400 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">123 Tech Street, Digital City, DC 10001</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-green-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-green-400 mr-3" />
                <span className="text-gray-300">info@digitalsolution.edu</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-green-400 mr-3" />
                <span className="text-gray-300">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

     
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Digital Solution Computer Training Center. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
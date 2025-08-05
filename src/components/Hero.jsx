import React from 'react';
import PropTypes from 'prop-types';

function Hero({ title, description, image }) {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="Students learning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-gray-900/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
          {description}
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Explore Courses
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;
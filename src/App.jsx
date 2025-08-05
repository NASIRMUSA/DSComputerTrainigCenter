import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './Pages/Courses';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero
                title="Digital Skills for the Modern World"
                description="Join our professional training programs and gain in-demand tech skills to boost your career"
                image="/path/to/your/hero-image.jpg"
              />
              <Home /> {/* Your home page content below hero */}
            </>
          } />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
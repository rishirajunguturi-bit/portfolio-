import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProblemSolving from './components/ProblemSolving';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0B0B0B] text-[#F5F5F5] min-h-screen selection:bg-[#7C3AED]/30 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Problem Solving & DSA Section */}
        <ProblemSolving />

        {/* Education Timeline Section */}
        <Education />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact CTA Section */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

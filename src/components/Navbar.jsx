import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { profile } from '../data/profile';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Problem Solving', href: '#problem-solving' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection tracking
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#27272A] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-[#F5F5F5] hover:text-white transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#7C3AED] group-hover:border-[#7C3AED]/50 transition-colors">
            <Code2 size={18} />
          </span>
          <span className="font-extrabold tracking-wide text-base">{profile.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 border border-[#27272A]/80 bg-[#121215]/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-[#7C3AED] font-semibold shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#1C1C21]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-medium text-[#F5F5F5] bg-[#18181B] border border-[#27272A] rounded-lg hover:border-[#7C3AED] hover:text-white transition-all"
          >
            GitHub Profile
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#A1A1AA] hover:text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] rounded-lg"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0B]/98 border-b border-[#27272A] px-6 py-6 backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-[#A1A1AA] hover:text-white hover:pl-2 transition-all py-2 border-b border-[#18181B]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full text-center py-2.5 text-xs font-semibold text-white bg-[#7C3AED] rounded-lg hover:bg-[#6D28D9] transition-colors"
            >
              GitHub Profile
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

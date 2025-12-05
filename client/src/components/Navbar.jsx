import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.snap-container');
    const handleScroll = () => {
      setScrolled(container?.scrollTop > 50);
    };
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Shayan's <span className="text-purple-400">Portfolio</span>
          </button>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors hover:text-purple-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`font-medium transition-colors hover:text-purple-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`font-medium transition-colors hover:text-purple-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('chat-section')}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              AI Clone
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

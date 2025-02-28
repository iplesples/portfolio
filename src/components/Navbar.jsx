import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white px-6 py-4 flex items-center justify-between z-50 shadow-black shadow-xs">
        {/* Container 1: Logo / Home */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-bold">MyLogo</a>
        </div>

        {/* Container 2: Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="/about" className="hover:text-gray-300">Project</a>
          <a href="/projects" className="hover:text-gray-300">Games</a>
          <a href="/contact" className="hover:text-gray-300">Gallery</a>
        </div>

        {/* Container 3: Desktop Social Media */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay Menu Mobile */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Blur */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Panel Menu Sliding */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[80vw] bg-white text-black transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col items-center space-y-6 text-center mt-12">
            <button onClick={() => setMobileMenuOpen(false)} className="self-end focus:outline-none">
              {/* Ikon panah ke kiri */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <a href="/about" className="text-2xl hover:text-gray-700" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/projects" className="text-2xl hover:text-gray-700" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="/contact" className="text-2xl hover:text-gray-700" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

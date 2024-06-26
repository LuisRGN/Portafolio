/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Ajusta la comparación para un scroll más suave
        if (window.scrollY >= sectionTop - sectionHeight * 0.4) {
          currentSection = section.getAttribute('id');
        }
      });
  
      setActiveSection(currentSection);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-10 w-full px-4 py-4 text-white">
      <div className="container flex flex-wrap items-center justify-between mx-auto md:justify-around">
        <div className="text-2xl font-bold">Luis Gonzalez</div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`hidden space-x-4 md:flex`}>
          <li><a href="#home" className={`hover:underline ${activeSection === 'home' ? 'underline' : ''}`}>Inicio</a></li>
          <li><a href="#about" className={`hover:underline ${activeSection === 'about' ? 'underline' : ''}`}>Sobre mi</a></li>
          <li><a href="#projects" className={`hover:underline ${activeSection === 'projects' ? 'underline' : ''}`}>Proyectos</a></li>
          <li><a href="#contact" className={`hover:underline ${activeSection === 'contact' ? 'underline' : ''}`}>Contacto</a></li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-20 flex justify-end bg-black bg-opacity-50 md:hidden">
          <div className="w-64 h-full p-4 custom-bg text-white">
            <ul className="mt-10 space-y-4">
              <li><a href="#home" className={`hover:underline ${activeSection === 'home' ? 'underline' : ''}`} onClick={toggleMenu}>Inicio</a></li>
              <li><a href="#about" className={`hover:underline ${activeSection === 'about' ? 'underline' : ''}`} onClick={toggleMenu}>Sobre mi</a></li>
              <li><a href="#projects" className={`hover:underline ${activeSection === 'projects' ? 'underline' : ''}`} onClick={toggleMenu}>Proyectos</a></li>
              <li><a href="#contact" className={`hover:underline ${activeSection === 'contact' ? 'underline' : ''}`} onClick={toggleMenu}>Contacto</a></li>
              <button onClick={toggleMenu} className='p-1 rounded-sm bg-[#242223]'>Cerrar</button>
            </ul>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



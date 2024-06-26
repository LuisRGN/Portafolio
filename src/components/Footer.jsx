/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-4 flex flex-col justify-center items-center">
      <div className="container mx-auto text-center">
        &copy; 2024 Luis Gonzalez. Todos los derechos reservado.
      </div>
      <div className='flex items-center'>
        <a href="https://github.com/LuisRGN" target="_blank" rel="noopener noreferrer"><img className='h-8 mr-1 ml-1 hover:opacity-75' src="/githubWhite.svg" alt="" /></a>
        <a href="https://www.linkedin.com/in/luis-gonzalez-nu%C3%B1ez-049076290/" target="_blank" rel="noopener noreferrer"><img className='h-10 hover:opacity-75' src="/linkedin.svg" alt="" /></a>
      </div>
    </footer>
  );
};

export default Footer;

/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-4 text-white">
      <div className="container mx-auto text-center">
        &copy; 2024 Luis Gonzalez. Todos los derechos reservado.
      </div>
      <div className='flex items-center'>
        <a href="https://github.com/LuisRGN" target="_blank" rel="noopener noreferrer"><img className='h-8 ml-1 mr-1 hover:opacity-75' src="/githubWhite.svg" alt="" /></a>
        <a href="https://www.linkedin.com/in/luisrgn/" target="_blank" rel="noopener noreferrer"><img className='h-10 hover:opacity-75' src="/linkedin.svg" alt="" /></a>
      </div>
    </footer>
  );
};

export default Footer;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slice from '../components/Slider/Slider';

const About = ({ aboutBgClass, colorText }) => {
  return (
    <div className={`${aboutBgClass} transition duration-500 min-h-screen`}>
      <section id="about" className="flex items-center justify-center mb-10 ">
        <div className="container p-8 mx-auto mt-10">
          <h2 className={`text-4xl font-bold text-center transition duration-500 ${colorText}`}>Sobre mi</h2>
          <p className={`mt-4 text-lg text-center transition duration-500 ${colorText}`}>
            ¡Hola! Soy Luis, desarrollador Full Stack. Con experiencia en HTML, CSS, JavaScript y frameworks modernos como React, me dedico a diseñar experiencias de usuario intuitivas y eficientes. Tengo habilidades sólidas en desarrollo de software, especialmente en frontend con tecnologías como React, JavaScript, TypeScript, Next.js, HTML y CSS (incluyendo TailwindCSS y CSS Modules). También tengo experiencia en backend con Node.js, Express.js y PostgreSQL.
          </p>
          <p className={`mt-4 text-lg text-center transition duration-500 ${colorText}`}>
            Siempre estoy aprendiendo nuevas tecnologías y buscando mejorar mis habilidades para ofrecer soluciones innovadoras, siempre estoy en busca de nuevas oportunidades para aplicar mis conocimientos y contribuir en proyectos interesantes. ¡Conéctate conmigo y sigamos aprendiendo juntos!
          </p>
        </div>
      </section>
      <Slice colorText={colorText} />
    </div>
  );
};

export default About;

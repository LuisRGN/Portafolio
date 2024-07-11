/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slice from '../components/Slider/Slider';

const About = ({ aboutBgClass, colorText }) => {
  return (
    <div className={`${aboutBgClass} min-h-screen`}>
      <section id="about" className="flex items-center justify-center mb-10 ">
        <div className="container p-8 mx-auto mt-10">
          <h2 className={`text-4xl font-bold text-center ${colorText}`}>Sobre mi</h2>
          <p className={`mt-4 text-lg text-center ${colorText}`}>
            ¡Hola! Soy Luis, un desarrollador Full Stack recientemente graduado del bootcamp de Soy Henry. Con experiencia en HTML, CSS, JavaScript y frameworks modernos como React, me dedico a diseñar experiencias de usuario intuitivas y eficientes. Tengo habilidades sólidas en desarrollo de software, especialmente en frontend con tecnologías como React, JavaScript, TypeScript, Next.js, HTML y CSS (incluyendo TailwindCSS y CSS Modules). También tengo experiencia en backend con Node.js, Express.js y PostgreSQL.
          </p>
          <p className={`mt-4 text-lg text-center ${colorText}`}>
            Siempre estoy aprendiendo nuevas tecnologías y buscando mejorar mis habilidades para ofrecer soluciones innovadoras. Me apasiona seguir aprendiendo y creciendo en este campo emocionante, y siempre estoy en busca de nuevas oportunidades para aplicar mis conocimientos y contribuir a proyectos interesantes. ¡Conéctate conmigo y sigamos aprendiendo juntos!
          </p>
        </div>
      </section>
      <Slice colorText={colorText} />
    </div>
  );
};

export default About;

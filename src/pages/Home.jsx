/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Home = ({ bgColorClass, colorText }) => {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center transition duration-500 flex-col ${bgColorClass}`}>
      <div className="flex items-center justify-center">
        <div>
          <img src="/developer.svg" alt="" className="md:h-[15rem] h-[80%]" />
        </div>
      </div>
      <div className="text-center max-w-[80%] mt-[4rem]">
        <h1 className={`text-5xl font-bold transition duration-500 ${colorText}`}>Bienvenido a mi portafolio</h1>
        <p className={`mt-4 text-xl transition duration-500 ${colorText}`}>Soy un desarrollador web apasionado por crear sitios web atractivos y funcionales.</p>
      </div>
    </section>
  );
};

export default Home;

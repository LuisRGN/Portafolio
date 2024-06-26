/* eslint-disable no-unused-vars */
import React from 'react';

const Home = () => {
  return (
    <section id="home" className='min-h-screen bg-[#fff] flex items-center justify-center flex-col'>
      <div className="flex items-center justify-center">
        <div>
          <img src="/developer.svg" alt="" className='md:h-[15rem] h-[80%]' />
        </div>
      </div>
      <div className='text-center max-w-[80%] mt-[4rem]'>
        <h1 className="text-5xl font-bold">Bienvenido a mi portafolio</h1>
        <p className="mt-4 text-xl">Soy un desarrollador web apasionado por crear sitios web atractivos y funcionales.</p>
      </div>
    </section>
  );
};

export default Home;

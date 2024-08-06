/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ProjectCard = ({ title, description, link, img, stack, btnColorClass, colorText }) => {
  return (
    <div className="p-4 border border-[#707070] rounded-lg">
      <h3 className={`text-2xl font-bold transition duration-500 ${colorText}`}>{title}</h3>
      <p className={`mt-2 transition duration-500 ${colorText}`}>{description}</p>
      <div className="my-3">
        {stack && stack.map((tech, index) => (
          <span key={index} className={`p-[0.30rem] mr-2 ${btnColorClass} rounded text-white transition duration-300 hover:bg-[#1a25c2]`}>{tech}</span>
        ))}
      </div>
      <img className="my-2 rounded-sm" src={img} alt="Proyectos" />
      <a href={link} target="_blank" className={`inline-block px-4 py-2 text-white transition duration-300 rounded ${btnColorClass} hover:bg-[#1a25c2]`}>Ver proyecto</a>
    </div>
  );
};

export default ProjectCard;

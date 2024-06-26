/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ProjectCard = ({ title, description, link, img }) => {
  return (
    <div className="p-4 border border-[#707070] rounded-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <img className="my-2 rounded-sm" src={img} alt="Proyectos" />
      <a href={link} target="_blank" className="inline-block px-4 py-2 text-white rounded bg-[#242223] hover:bg-[#1a25c2]">Ver proyecto</a>
    </div>
  );
};

export default ProjectCard;

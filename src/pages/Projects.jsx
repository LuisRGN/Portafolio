/* eslint-disable no-unused-vars */
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: 'Administrador de actividades', description: `Explora una página web personalizada con una breve presentación y funcionalidades interactivas que permiten a los usuarios agregar y gestionar sus actividades de forma eficiente y personalizada.`, img: '/tareas.jpg',
      link: 'https://proyecto-m1-fk6tkyoet-luisrgn.vercel.app'
    },
    {
      title: 'Cinema', 
      description: `Una página web dedicada a explorar y agregar descripciones de películas. Descubre sinopsis detalladas de tus películas favoritas y contribuye añadiendo nuevas películas a la creciente colección.`, 
      img: '/cinema.jpg', 
      link: 'https://cinema2-theta.vercel.app'
    },
    {
      title: 'Gestor de turno', description: `Una página web especializada en la organización y gestión de turnos para sesiones de videojuegos, ofreciendo una experiencia fluida y estructurada diseñada para satisfacer las necesidades de los jugadores`, img: 'turno.jpg', link: 'https://shift-manager-alpha.vercel.app'
    },
    {
      title: 'Compra de tickets', description: `Una página web diseñada para comprar 
      tickets a eventos musicales,
      ofreciendo una experiencia de usuario intuitiva y rápida. 
      Los usuarios pueden buscar eventos, y realizar pagos de manera segura y eficiente.`, img: '/tickets.jpg',
      link: 'https://front-radio-ticket.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="min-h-screen pt-10 bg-[#fff]">
      <div className="container p-8 mx-auto">
        <h2 className="text-4xl font-bold text-center text-black">Mis proyectos</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

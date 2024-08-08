/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = ({ bgColorClass, btnColorClass, colorText, stackColor }) => {
  const projectList = [
    {
      title: 'Administrador de actividades', description: `Explora una página web personalizada con una 
      breve presentación y funcionalidades interactivas que permiten a los usuarios agregar y gestionar 
      sus actividades de forma eficiente y personalizada.`, img: '/tareas.jpg',
      link: 'https://proyecto-m1-fk6tkyoet-luisrgn.vercel.app',
      stack: ['JavaScript', 'CSS', 'HTML']
    },
    {
      title: 'Cinema',
      description: `Una página web dedicada a explorar y agregar descripciones de películas. 
      Descubre sinopsis detalladas de tus películas favoritas y contribuye añadiendo nuevas películas a la creciente colección.`,
      img: '/cinema.jpg',
      link: 'https://cinema2-theta.vercel.app',
      stack: ['Bootstrap', 'CSS', 'HTML', 'JavaScript', 'Express', 'MongoDB']
    },
    {
      title: 'Gestor de turno',
      description: `Una página web especializada en la organización y gestión de turnos para sesiones de 
      videojuegos, ofreciendo una experiencia fluida y estructurada diseñada para satisfacer 
      las necesidades de los jugadores`, img: 'turno.jpg', link: 'https://shift-manager-alpha.vercel.app',
      stack: ['React', 'CSS Modules', 'TypeScript', 'Express', 'PostgreSQL']
    },
    {
      title: 'Compra de tickets', description: `Una página web diseñada para comprar 
      tickets a eventos musicales,
      ofreciendo una experiencia de usuario intuitiva y rápida. 
      Los usuarios pueden buscar eventos, y realizar pagos de manera segura y eficiente.`, img: '/tickets.jpg',
      link: 'https://front-radio-ticket.vercel.app/',
      stack: ['React', 'Next', 'Tailwind', 'TypeScript']
    },
    {
      title: "Animales Mitologicos",
      description: `Animales Mitológicos es una página web que presenta descripciones de diversos seres mitológicos, 
      destacando sus características y leyendas en un formato conciso y visualmente atractivo.`,
      link: "https://animales-mitologicos-ki7d.vercel.app/index.html", img: "/animales.png",
      stack: ['HTML', 'CSS']
    },
  ];

  return (
    <section id="projects" className={`min-h-screen pt-10 transition duration-500 ${bgColorClass}`}>
      <div className="container p-8 mx-auto">
        <h2 className={`text-4xl font-bold text-center transition duration-500 ${colorText}`}>Mis proyectos</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} btnColorClass={btnColorClass} colorText={colorText} stackColor={stackColor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

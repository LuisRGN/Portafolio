/* eslint-disable no-unused-vars */
import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rwnuc7n', 'template_nndwhip', e.target, 'i_ZUgVzWhlmZOn9Kg')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Error sending message. Please try again later.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="flex items-center md:justify-evenly min-h-screen bg-[#c2c2c2d4]">
      <div className='p-8 max-[768px]:hidden'>
        <img src="/contact.svg" alt="" />
      </div>
      <div className="p-8 w-[600px]">
        <h2 className="text-4xl font-bold text-center">Contacto</h2>
        <form className="max-w-lg mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-semibold" htmlFor="user_name">Nombre</label>
            <input className="w-full p-2 border rounded" type="text" id="user_name" name="user_name" placeholder="Ingrese nombre" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-semibold" htmlFor="user_email">Correo</label>
            <input className="w-full p-2 border rounded" type="email" id="user_email" name="user_email" placeholder="Ingrese correo" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-semibold" htmlFor="message">Mensaje</label>
            <textarea className="w-full p-2 border rounded" id="message" name="message" rows="4" placeholder="Ingrese mensaje" required></textarea>
          </div>
          <button className="px-4 py-2 text-white rounded bg-[#242223] hover:bg-[#1a25c2] float-right" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

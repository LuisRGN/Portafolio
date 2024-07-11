/* eslint-disable react/prop-types */
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = ({ aboutBgClass, colorText, btnColorClass }) => {
  const [input, setInput] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.user_name || !input.user_email || !input.message) {
      Swal.fire({
        title: 'Por favor completa todos los campos',
        icon: 'warning'
      });
      return;
    }

    emailjs
      .sendForm('service_rwnuc7n', 'template_nndwhip', e.target, 'i_ZUgVzWhlmZOn9Kg')
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: 'Correo enviado exitosamente',
            icon: 'success'
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.',
            icon: 'error'
          });
        }
      );

    e.target.reset();

    setInput({
      user_name: '',
      user_email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={`${aboutBgClass} flex items-center justify-center md:justify-evenly min-h-screen`}>
      <div className="p-8 max-[768px]:hidden">
        <img src="/contact.svg" alt="" />
      </div>
      <div className="p-8 w-[600px]">
        <h2 className={`text-4xl font-bold text-center ${colorText}`}>Contacto</h2>
        <form className="max-w-lg mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={`block mb-2 text-lg font-semibold ${colorText}`} htmlFor="user_name">
              Nombre
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Ingrese nombre"
              value={input.user_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className={`block mb-2 text-lg font-semibold ${colorText}`} htmlFor="user_email">
              Correo
            </label>
            <input
              className="w-full p-2 border rounded"
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Ingrese correo"
              value={input.user_email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className={`block mb-2 text-lg font-semibold ${colorText}`} htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="w-full p-2 border rounded"
              id="message"
              name="message"
              rows="4"
              placeholder="Ingrese mensaje"
              value={input.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            className={`px-4 py-2 text-white rounded transition duration-300 ${btnColorClass} hover:bg-[#1a25c2] float-right`}
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



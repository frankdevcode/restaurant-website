import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-surface p-10 rounded-lg shadow-xl">
      <h2 className="text-3xl font-serif mb-6">Información de Contacto</h2>
      <div className="space-y-4 text-lg text-secondary">
        <p>
          <strong>Dirección:</strong> Calle Ficticia 123, 28080 Madrid, España
        </p>
        <p>
          <strong>Teléfono:</strong> <a href="tel:+34912345678" className="hover:text-accent">+34 912 345 678</a>
        </p>
        <p>
          <strong>Correo:</strong> <a href="mailto:contacto@sabordivino.com" className="hover:text-accent">contacto@sabordivino.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;

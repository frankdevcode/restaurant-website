import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
      <p className="text-gray-600 mb-2">
        <strong>Dirección:</strong> Calle Ficticia 123, 28080 Madrid, España
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Teléfono:</strong> +34 912 345 678
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Correo:</strong> contacto@sabordivino.com
      </p>
    </div>
  );
};

export default ContactInfo;

import React from 'react';

const Map = () => {
  return (
    <div className="rounded-lg shadow-xl overflow-hidden h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.606430558614!2d-3.703790184592135!3d40.41677537936475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288a3a9b1a1b%3A0x1a1a1a1a1a1a1a1a!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1618853968516!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '400px' }}
        allowFullScreen=""
        loading="lazy"
        title="Ubicación del Restaurante"
      ></iframe>
    </div>
  );
};

export default Map;

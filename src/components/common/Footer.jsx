import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Sabor Divino. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-yellow-500">Facebook</a>
          <a href="#" className="hover:text-yellow-500">Instagram</a>
          <a href="#" className="hover:text-yellow-500">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

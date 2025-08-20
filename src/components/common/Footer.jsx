import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Sabor Divino. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-accent transition-colors duration-300">Facebook</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

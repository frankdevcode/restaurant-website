import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-600">
          Sabor Divino
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-600" : "text-gray-600 hover:text-yellow-600")}>Inicio</NavLink>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? "text-yellow-600" : "text-gray-600 hover:text-yellow-600")}>Menú</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-yellow-600" : "text-gray-600 hover:text-yellow-600")}>Sobre Nosotros</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-yellow-600" : "text-gray-600 hover:text-yellow-600")}>Contacto</NavLink>
        </nav>
        <Link to="/reservations">
          <Button>Reservar Ahora</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="bg-surface shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif text-accent">
          Sabor Divino
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => `text-lg ${isActive ? "text-accent" : "text-primary hover:text-accent transition-colors duration-300"}`}>Inicio</NavLink>
          <NavLink to="/menu" className={({ isActive }) => `text-lg ${isActive ? "text-accent" : "text-primary hover:text-accent transition-colors duration-300"}`}>Menú</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-lg ${isActive ? "text-accent" : "text-primary hover:text-accent transition-colors duration-300"}`}>Sobre Nosotros</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-lg ${isActive ? "text-accent" : "text-primary hover:text-accent transition-colors duration-300"}`}>Contacto</NavLink>
        </nav>
        <Link to="/reservations">
          <Button>Reservar Ahora</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

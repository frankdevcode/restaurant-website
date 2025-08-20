import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-serif mb-4"
        >
          Sabor Divino
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl font-sans mb-8 max-w-2xl"
        >
          Donde cada platillo es una obra de arte culinario, servido en un ambiente de elegancia y confort.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Link to="/reservations">
            <Button>Reservar Ahora</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

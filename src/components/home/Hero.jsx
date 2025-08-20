import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Sabor Divino
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl mb-8"
        >
          Donde cada platillo es una obra de arte.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
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

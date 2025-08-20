import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;

import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`bg-yellow-500 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;

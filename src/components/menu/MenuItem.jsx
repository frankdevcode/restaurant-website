import React from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ item }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="bg-surface rounded-lg shadow-md overflow-hidden transition-all duration-300"
    >
      <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-serif mb-2">{item.name}</h3>
        <p className="text-secondary mb-4 font-sans">{item.description}</p>
        <p className="text-xl font-bold text-accent font-sans">{item.price}</p>
      </div>
    </motion.div>
  );
};

export default MenuItem;

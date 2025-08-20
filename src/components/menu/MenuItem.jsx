import React from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ item }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <p className="text-lg font-semibold text-yellow-600">{item.price}</p>
      </div>
    </motion.div>
  );
};

export default MenuItem;

import React from 'react';
import MenuItem from './MenuItem';
import { motion } from 'framer-motion';

const MenuCategory = ({ category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-semibold mb-6 border-b-2 border-yellow-500 pb-2">{category.name}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default MenuCategory;

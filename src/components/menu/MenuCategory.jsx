import React from 'react';
import MenuItem from './MenuItem';
import { motion } from 'framer-motion';

const MenuCategory = ({ category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-serif mb-8 text-center md:text-left">{category.name}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default MenuCategory;

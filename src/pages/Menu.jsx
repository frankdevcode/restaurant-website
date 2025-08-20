import React from 'react';
import { menuData } from '../data/menuData';
import MenuCategory from '../components/menu/MenuCategory';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations/variants';

const Menu = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Nuestro Menú</h1>
      <div>
        {menuData.categories.map((category, index) => (
          <MenuCategory key={index} category={category} />
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;

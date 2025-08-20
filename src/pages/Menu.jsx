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
      className="container mx-auto px-6 py-16"
    >
      <h1 className="text-5xl font-serif text-center mb-12">Nuestro Menú</h1>
      <div className="space-y-16">
        {menuData.categories.map((category, index) => (
          <MenuCategory key={index} category={category} />
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;

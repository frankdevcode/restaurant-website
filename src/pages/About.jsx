import React from 'react';
import Story from '../components/about/Story';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations/variants';

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Sobre Nosotros</h1>
      <Story />
    </motion.div>
  );
};

export default About;

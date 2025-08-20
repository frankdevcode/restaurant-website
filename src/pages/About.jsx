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
      className="container mx-auto px-6 py-16"
    >
      <h1 className="text-5xl font-serif text-center mb-12">Nuestra Historia</h1>
      <Story />
    </motion.div>
  );
};

export default About;

import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations/variants';

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contacto</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <ContactInfo />
        <Map />
      </div>
    </motion.div>
  );
};

export default Contact;

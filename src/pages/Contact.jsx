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
      className="container mx-auto px-6 py-16"
    >
      <h1 className="text-5xl font-serif text-center mb-12">Contacto</h1>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <ContactInfo />
        <Map />
      </div>
    </motion.div>
  );
};

export default Contact;

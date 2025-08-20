import React from 'react';
import ReservationForm from '../components/reservations/ReservationForm';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations/variants';

const Reservations = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="container mx-auto px-6 py-16"
    >
      <h1 className="text-5xl font-serif text-center mb-12">Hacer una Reserva</h1>
      <ReservationForm />
    </motion.div>
  );
};

export default Reservations;

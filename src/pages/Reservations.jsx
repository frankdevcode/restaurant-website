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
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Hacer una Reserva</h1>
      <ReservationForm />
    </motion.div>
  );
};

export default Reservations;

import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
    >
      <p className="text-gray-600 leading-relaxed mb-4">
        Fundado en 2010, "Sabor Divino" nació de la pasión por la auténtica cocina mediterránea y el deseo de crear un espacio acogedor donde amigos y familias pudieran reunirse para disfrutar de momentos inolvidables.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Nuestros valores se centran en la calidad, la frescura y la creatividad. Seleccionamos cuidadosamente los mejores ingredientes locales y de temporada para ofrecer platillos que no solo deleitan el paladar, sino que también cuentan una historia.
      </p>
      <p className="text-gray-600 leading-relaxed">
        En "Sabor Divino", cada comida es una celebración. Nuestro compromiso es brindar una experiencia culinaria excepcional, con un servicio atento y un ambiente que te haga sentir como en casa.
      </p>
    </motion.div>
  );
};

export default Story;

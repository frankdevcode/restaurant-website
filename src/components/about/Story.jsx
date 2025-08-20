import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-3xl mx-auto bg-surface p-10 rounded-lg shadow-xl text-center"
    >
      <p className="text-lg text-secondary leading-relaxed mb-6">
        Fundado en 2010, "Sabor Divino" nació de la pasión por la auténtica cocina mediterránea y el deseo de crear un espacio acogedor donde amigos y familias pudieran reunirse para disfrutar de momentos inolvidables.
      </p>
      <p className="text-lg text-secondary leading-relaxed mb-6">
        Nuestros valores se centran en la calidad, la frescura y la creatividad. Seleccionamos cuidadosamente los mejores ingredientes locales y de temporada para ofrecer platillos que no solo deleitan el paladar, sino que también cuentan una historia.
      </p>
      <p className="text-lg text-secondary leading-relaxed">
        En "Sabor Divino", cada comida es una celebración. Nuestro compromiso es brindar una experiencia culinaria excepcional, con un servicio atento y un ambiente que te haga sentir como en casa.
      </p>
    </motion.div>
  );
};

export default Story;

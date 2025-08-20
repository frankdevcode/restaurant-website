import React, { useState } from 'react';
import Button from '../common/Button';
import { reservations } from '../../data/reservations';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "El nombre es requerido.";
    if (!formData.email) {
      tempErrors.email = "El correo es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El correo no es válido.";
    }
    if (!formData.phone) tempErrors.phone = "El teléfono es requerido.";
    if (!formData.date) tempErrors.date = "La fecha es requerida.";
    if (!formData.time) tempErrors.time = "La hora es requerida.";
    if (formData.guests < 1) tempErrors.guests = "Debe haber al menos 1 persona.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      reservations.push(formData);
      setSubmitted(true);
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: 1 });
        setSubmitted(false);
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
        <h2 className="text-2xl font-bold">¡Reserva confirmada!</h2>
        <p>Gracias, {formData.name}. Hemos recibido tu reserva.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
            <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora</label>
            <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" />
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Número de Personas</label>
          <input type="number" name="guests" id="guests" min="1" value={formData.guests} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" />
          {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button type="submit">Confirmar Reserva</Button>
      </div>
    </form>
  );
};

export default ReservationForm;

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
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: 1 });
        setSubmitted(false);
      }, 5000);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-10 bg-green-50 border border-green-200 text-green-800 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-3xl font-serif mb-4">¡Reserva confirmada!</h2>
        <p className="text-lg">Gracias, {formData.name}. Hemos recibido tu reserva y te hemos enviado un correo de confirmación.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-surface p-10 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-primary">Nombre Completo</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-primary">Correo Electrónico</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-sm font-medium text-primary">Teléfono</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-primary">Fecha</label>
          <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent" />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-primary">Hora</label>
          <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent" />
          {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="guests" className="block text-sm font-medium text-primary">Número de Personas</label>
          <input type="number" name="guests" id="guests" min="1" value={formData.guests} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent" />
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

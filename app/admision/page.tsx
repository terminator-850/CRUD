'use client';

import { useState } from 'react';

export default function AdmisionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-2xl font-bold text-[#001a38] mb-2">Pre-Inscripción de Postgrado</h1>
        <p className="text-xs text-gray-600 mb-6">
          Completa tus datos para iniciar el proceso de postulación a nuestros programas académicos.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded text-sm">
            ¡Tu solicitud ha sido enviada con éxito! Nos pondremos en contacto contigo pronto.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Nombre Completo</label>
              <input 
                type="text" 
                required 
                className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-[#002855]"
                placeholder="Ej. Juan Pérez"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                required 
                className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-[#002855]"
                placeholder="ejemplo@correo.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Programa de Interés</label>
              <select className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:border-[#002855]">
                <option>Maestría en Ingeniería de Software y Sistemas Web</option>
                <option>Diplomado en Ciberseguridad y Auditoría Informática</option>
                <option>Doctorado en Ciencias de la Educación Superior</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#002855] text-white py-2.5 rounded font-bold text-xs hover:bg-[#001a38] transition-colors"
            >
              Enviar Postulación
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
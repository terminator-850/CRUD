'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [codigoDocente, setCodigoDocente] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!codigoDocente || !password) {
      setError('Por favor ingrese su código de docente y contraseña');
      return;
    }
    // Redirige al panel del docente
    router.push('/docente/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#002855] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border-t-4 border-[#d4af37]">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#001a38]">PORTAL DOCENTE</h2>
          <p className="text-sm text-gray-600">Escuela de Postgrado - UAGRM</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Código de Docente
            </label>
            <input
              type="text"
              placeholder="Ej. DOC-2026-88"
              value={codigoDocente}
              onChange={(e) => setCodigoDocente(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#002855] outline-none text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#002855] outline-none text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#d4af37] text-[#001a38] font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-200 shadow-md"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-xs text-gray-500 hover:underline">
            ¿Olvidaste tu contraseña o código de acceso?
          </a>
        </div>
      </div>
    </div>
  );
}
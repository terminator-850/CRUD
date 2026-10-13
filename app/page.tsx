'use client';

import Link from 'next/link';

export default function Home() {
  const linkOlvidastePassword = "https://perfil.uagrm.edu.bo/recuperar";
  const linkHabilitacionCobros = "https://pagos.uagrm.edu.bo/externos";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between py-12 px-4 font-sans text-gray-800">
      
      {/* Encabezado: Logo Institucional Centrado */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center p-1">
            <div className="w-full h-full border border-gray-300 rounded-full flex items-center justify-center font-serif text-gray-600 font-bold text-xs text-center leading-none">
              UAGRM
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-gray-500 text-lg tracking-widest leading-none">
              Universidad Autónoma
            </span>
            <span className="font-serif text-gray-700 text-3xl font-bold tracking-tight leading-tight">
              Gabriel René Moreno
            </span>
          </div>
        </div>
      </div>

      {/* Bloque Central de Selección */}
      <main className="flex flex-col items-center text-center my-auto space-y-6">
        <h1 className="text-3xl font-bold text-[#b91c1c] tracking-wide">
          Bienvenido al Perfil
        </h1>
        
        <h2 className="text-xl font-bold text-[#0284c7] mb-4">
          Elige tu tipo de cuenta
        </h2>

        {/* Opciones de Selección con Imágenes Personalizadas */}
        <div className="flex flex-wrap justify-center gap-6 my-4">
          
          {/* Opción 1: Estudiante */}
          <Link
            href="/estudiante/login"
            className="w-40 h-40 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-xl flex flex-col items-center justify-center p-4 transition-all shadow-sm hover:shadow-md group cursor-pointer"
            title="Ingreso Estudiante"
          >
            <div className="w-16 h-16 mb-2 relative flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                src="/estudiante-icon.png" 
                alt="Estudiante" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              ESTUDIANTE
            </span>
          </Link>

          {/* Opción 2: Docente */}
          <Link
            href="/docente/login"
            className="w-40 h-40 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-xl flex flex-col items-center justify-center p-4 transition-all shadow-sm hover:shadow-md group cursor-pointer"
            title="Ingreso Docente"
          >
            <div className="w-16 h-16 mb-2 relative flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                src="/docente-icon.png" 
                alt="Docente" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              DOCENTE
            </span>
          </Link>

        </div>

        {/* Enlaces Inferiores con Redirección */}
        <div className="pt-8 space-y-3">
          <div>
            <a
              href={linkOlvidastePassword}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0284c7] font-bold text-sm hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div>
            <a
              href={linkHabilitacionCobros}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0284c7] font-bold text-sm hover:underline"
            >
              Habilitación de servicios de cobros para personas externas
            </a>
          </div>
        </div>
      </main>

      {/* Pie de página oficial */}
      <footer className="text-xs text-gray-400 text-center mt-8">
        © {new Date().getFullYear()} Universidad Autónoma Gabriel René Moreno - DTIC
      </footer>
    </div>
  );
}
'use client';

import Link from 'next/link';

export default function SelectorPerfilPage() {
  // Configura aquí los enlaces a donde quieras redirigir cada opción inferior
  const linkOlvidastePassword = "https://perfil.uagrm.edu.bo/recuperar"; // Reemplaza con tu link
  const linkHabilitacionCobros = "https://pagos.uagrm.edu.bo/externos"; // Reemplaza con tu link

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between py-12 px-4 font-sans text-gray-800">
      
      {/* Encabezado: Isotipo y Logo Oficial UAGRM */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-3">
          {/* Escudo / Sello UAGRM */}
          <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center p-1">
            <div className="w-full h-full border border-gray-300 rounded-full flex items-center justify-center font-serif text-gray-600 font-bold text-xs text-center leading-none">
              UAGRM
            </div>
          </div>
          {/* Texto Institucional */}
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

        {/* Tarjetas de Selección de Tipo de Usuario */}
        <div className="flex flex-wrap justify-center gap-4 my-4">
          
          {/* Opción 1: Estudiante */}
          <Link
            href="/estudiante/login"
            className="w-32 h-32 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded flex flex-col items-center justify-center p-4 transition-all shadow-sm hover:shadow group cursor-pointer"
            title="Ingreso Estudiante"
          >
            <div className="text-4xl text-gray-800 mb-1 group-hover:scale-110 transition-transform">
              🧑‍🎓
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Estudiante
            </span>
          </Link>

          {/* Opción 2: Docente */}
          <Link
            href="/docente/login"
            className="w-32 h-32 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded flex flex-col items-center justify-center p-4 transition-all shadow-sm hover:shadow group cursor-pointer"
            title="Ingreso Docente"
          >
            <div className="text-4xl text-gray-800 mb-1 group-hover:scale-110 transition-transform">
              👨‍🏫
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Docente
            </span>
          </Link>

          {/* Opción 3: Administrativo */}
          <Link
            href="/administrativo/login"
            className="w-32 h-32 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded flex flex-col items-center justify-center p-4 transition-all shadow-sm hover:shadow group cursor-pointer"
            title="Ingreso Administrativo"
          >
            <div className="text-4xl text-gray-800 mb-1 group-hover:scale-110 transition-transform">
              👨‍💻
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Administrativo
            </span>
          </Link>

        </div>

        {/* Enlaces de Ayuda con redirección editable */}
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

      {/* Pie de página mínimo */}
      <footer className="text-xs text-gray-400 text-center mt-8">
        © {new Date().getFullYear()} Universidad Autónoma Gabriel René Moreno - DTIC
      </footer>
    </div>
  );
}
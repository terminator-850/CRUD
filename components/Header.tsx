import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-[#001a38] text-white border-b-4 border-[#d4af37]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Identidad Institucional */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#002855] border border-[#d4af37] rounded-full flex items-center justify-center font-bold text-[#d4af37]">
            UAGRM
          </div>
          <div>
            <h1 className="text-base md:text-lg font-extrabold tracking-wide">
              UNIVERSIDAD AUTÓNOMA GABRIEL RENÉ MORENO
            </h1>
            <p className="text-xs text-[#d4af37] font-semibold tracking-wider">
              ESCUELA DE POSTGRADO
            </p>
          </div>
        </div>

        {/* Menú de Navegación */}
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-[#d4af37] transition-colors">
            Inicio
          </Link>
          <Link href="/programas" className="hover:text-[#d4af37] transition-colors">
            Oferta Académica
          </Link>
          <Link href="/admision" className="hover:text-[#d4af37] transition-colors">
            Admisión
          </Link>
        </nav>

        {/* Botones de Acceso */}
        <div className="flex items-center gap-2">
          <Link 
            href="/estudiante/login" 
            className="bg-[#d4af37] text-[#001a38] font-bold px-4 py-2 rounded text-xs hover:bg-yellow-500 transition-colors"
          >
            Portal Estudiantil
          </Link>
          <Link 
            href="/login" 
            className="bg-white text-[#002855] font-bold px-4 py-2 rounded text-xs hover:bg-gray-100 transition-colors"
          >
            Portal Docente
          </Link>
        </div>
      </div>
    </header>
  );
};
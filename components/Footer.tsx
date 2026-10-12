export const Footer = () => {
  return (
    <footer className="bg-[#001a38] text-gray-300 text-sm mt-12 border-t-2 border-[#d4af37]">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-[#d4af37] font-bold text-base mb-2">Escuela de Postgrado UAGRM</h3>
          <p className="text-xs leading-relaxed">
            Formando profesionales altamente cualificados e impulsando la investigación científica e innovación en Bolivia.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Ubicación y Contacto</h4>
          <p className="text-xs">Ciudad Universitaria, Santa Cruz de la Sierra - Bolivia</p>
          <p className="text-xs">Correo: postgrado@uagrm.edu.bo</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Enlaces Rápidos</h4>
          <ul className="text-xs space-y-1">
            <li><a href="#" className="hover:text-[#d4af37]">Reglamento de Postgrado</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Calendario Académico</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Plataforma Virtual (Moodle)</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-[#001124] text-center py-3 text-xs text-gray-400">
        © {new Date().getFullYear()} UAGRM - Proyecto de Software II. Todos los derechos reservados.
      </div>
    </footer>
  );
};
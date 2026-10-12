import { mockPrograms } from "@/data/programs";
import { ProgramCard } from "@/components/ProgramCard";

export default function Home() {
  return (
    <div>
      {/* Banner Institucional Principal */}
      <section className="bg-[#002855] text-white py-16 px-4 text-center border-b-4 border-[#d4af37]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-[#d4af37] text-[#001a38] text-xs font-bold px-3 py-1 rounded-full uppercase">
            Convocatorias Abiertas 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-black">
            Impulsa tu Carrera Profesional en Postgrado UAGRM
          </h1>
          <p className="text-sm md:text-base text-gray-200">
            Diplomados, Maestrías y Doctorados con estándar de excelencia académica.
          </p>
        </div>
      </section>

      {/* Sección de Programas Destacados */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#001a38]">Oferta Académica Destacada</h2>
            <p className="text-xs text-gray-500">Programas disponibles para inscripciones inmediatas</p>
          </div>
        </div>

        {/* Grilla de Programas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>
    </div>
  );
}
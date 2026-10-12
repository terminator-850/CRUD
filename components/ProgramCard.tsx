import { Program } from '@/types';
import Link from 'next/link';

interface Props {
  program: Program;
}

export const ProgramCard = ({ program }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col justify-between">
      <div>
        <div className="relative h-44 w-full">
          {/* Imagen de fondo */}
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 right-3 bg-[#002855] text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
            {program.type}
          </span>
        </div>
        <div className="p-5">
          <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wide">
            {program.modality}
          </span>
          <h3 className="text-base font-bold text-[#001a38] mt-1 mb-2 line-clamp-2">
            {program.title}
          </h3>
          <p className="text-xs text-gray-500 mb-3">{program.faculty}</p>
          <p className="text-xs text-gray-700 font-medium">Duración: {program.duration}</p>
        </div>
      </div>
      <div className="p-5 pt-0">
        <Link 
          href="/admision"
          className="block text-center w-full bg-[#002855] text-white py-2 rounded text-xs font-semibold hover:bg-[#001a38] transition-colors"
        >
          Postular / Ver Más
        </Link>
      </div>
    </div>
  );
};
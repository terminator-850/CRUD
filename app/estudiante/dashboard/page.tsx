'use client';

import { useState } from 'react';

export default function EstudianteDashboard() {
  const [seccionActiva, setSeccionActiva] = useState<
    'perfil' | 'avance' | 'historico' | 'boleta'
  >('perfil');

  // Datos del estudiante (Inspirados en la interfaz institucional UAGRM)
  const perfilEstudiante = {
    registro: '220194821',
    nombres: 'Angel Rodriguez Gonzales',
    ci: '9842104 SC',
    sexo: 'Masculino',
    estadoCivil: 'Soltero(a)',
    fechaNacimiento: '12/04/2001',
    pais: 'Bolivia',
    departamento: 'Santa Cruz',
    provincia: 'Andrés Ibáñez',
    nacionalidad: 'Boliviana',
    direccion: 'Av. Las Américas #450',
    telefono: '3-3341200',
    celular: '78491203',
    email: 'angel.rodriguez@alumnos.uagrm.edu.bo',
    programa: 'Maestría en Ingeniería de Software y Sistemas Web',
    modalidadIngreso: 'Postulación Regular',
    periodo: '1/2026',
    tipoSangre: 'ORH+',
  };

  const avanceAcademico = [
    { codigo: 'MSW-101', modulo: 'Metodologías Ágiles de Desarrollo', nota: 92, estado: 'Aprobado' },
    { codigo: 'MSW-102', modulo: 'Bases de Datos NoSQL y Big Data', nota: 88, estado: 'Aprobado' },
    { codigo: 'MSW-103', modulo: 'Arquitectura de Software Avanzada', nota: 0, estado: 'En Cursado' },
    { codigo: 'MSW-104', modulo: 'Seguridad en Aplicaciones Web', nota: 0, estado: 'Pendiente' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navbar Superior */}
      <header className="bg-[#001a38] text-white px-6 py-4 flex justify-between items-center shadow-md border-b-4 border-[#d4af37]">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#d4af37] text-[#001a38] rounded-full flex items-center justify-center font-bold">
            UAGRM
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Portal del Estudiante</h1>
            <p className="text-xs text-[#d4af37]">Escuela de Postgrado</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium hidden md:inline">
            Univ. {perfilEstudiante.nombres}
          </span>
          <button
            onClick={() => (window.location.href = '/estudiante/login')}
            className="text-xs bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded text-white transition font-bold"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Menú Lateral Estilo UAGRM */}
        <aside className="bg-white rounded-lg shadow border border-gray-200 h-fit overflow-hidden">
          <div className="bg-[#001a38] text-white text-xs font-bold px-4 py-3 border-b border-[#d4af37]">
            MENÚ ACADÉMICO
          </div>
          <nav className="divide-y divide-gray-100">
            <button
              onClick={() => setSeccionActiva('perfil')}
              className={`w-full text-left px-4 py-3 font-medium transition text-sm flex items-center justify-between ${
                seccionActiva === 'perfil'
                  ? 'bg-[#001a38] text-white border-l-4 border-[#d4af37]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>Datos Personales</span>
              <span className="text-xs opacity-70">➔</span>
            </button>

            <button
              onClick={() => setSeccionActiva('avance')}
              className={`w-full text-left px-4 py-3 font-medium transition text-sm flex items-center justify-between ${
                seccionActiva === 'avance'
                  ? 'bg-[#001a38] text-white border-l-4 border-[#d4af37]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>Avance Académico</span>
              <span className="text-xs opacity-70">➔</span>
            </button>

            <button
              onClick={() => setSeccionActiva('historico')}
              className={`w-full text-left px-4 py-3 font-medium transition text-sm flex items-center justify-between ${
                seccionActiva === 'historico'
                  ? 'bg-[#001a38] text-white border-l-4 border-[#d4af37]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>Histórico de Notas</span>
              <span className="text-xs opacity-70">➔</span>
            </button>

            <button
              onClick={() => setSeccionActiva('boleta')}
              className={`w-full text-left px-4 py-3 font-medium transition text-sm flex items-center justify-between ${
                seccionActiva === 'boleta'
                  ? 'bg-[#001a38] text-white border-l-4 border-[#d4af37]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>Boleta de Inscripción</span>
              <span className="text-xs opacity-70">➔</span>
            </button>
          </nav>
        </aside>

        {/* Panel Central */}
        <main className="md:col-span-3">
          {/* SECCIÓN 1: DATOS PERSONALES */}
          {seccionActiva === 'perfil' && (
            <div className="bg-white rounded-lg shadow border border-gray-200 p-6 space-y-6">
              <div className="border-b pb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-[#001a38] flex items-center gap-2">
                    📌 DATOS PERSONALES DEL ESTUDIANTE
                  </h2>
                  <p className="text-xs text-gray-500">
                    Información registrada en la Escuela de Postgrado UAGRM
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-300">
                  Postgraduante Regular
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <div className="w-28 h-36 bg-gray-200 rounded border flex items-center justify-center text-gray-400 font-bold text-xs mb-3 shadow-inner">
                    [ Foto Estudiante ]
                  </div>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Registro (R.U.)</label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilEstudiante.registro}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Apellidos y Nombres</label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilEstudiante.nombres}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Cédula de Identidad</label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilEstudiante.ci}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Sexo</label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilEstudiante.sexo}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Fecha de Nacimiento</label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilEstudiante.fechaNacimiento}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="sm:col-span-3">
                  <label className="text-xs font-bold text-gray-500 uppercase">Programa Inscrito</label>
                  <p className="text-sm font-bold text-[#001a38] bg-yellow-50 p-2 rounded border border-yellow-200">
                    {perfilEstudiante.programa}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Correo Institucional</label>
                  <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                    {perfilEstudiante.email}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Teléfono Celular</label>
                  <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                    {perfilEstudiante.celular}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 2: AVANCE ACADÉMICO */}
          {seccionActiva === 'avance' && (
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h2 className="text-xl font-bold text-[#001a38] mb-4">Avance Académico de Postgrado</h2>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-gray-50 text-gray-700">
                    <th className="p-3">Código</th>
                    <th className="p-3">Módulo</th>
                    <th className="p-3">Calificación</th>
                    <th className="p-3">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-gray-600">
                  {avanceAcademico.map((m) => (
                    <tr key={m.codigo}>
                      <td className="p-3 font-semibold">{m.codigo}</td>
                      <td className="p-3">{m.modulo}</td>
                      <td className="p-3 font-bold">{m.nota > 0 ? m.nota : '-'}</td>
                      <td className="p-3">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                            m.estado === 'Aprobado'
                              ? 'bg-green-100 text-green-800'
                              : m.estado === 'En Cursado'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {m.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* SECCIÓN 3: HISTÓRICO DE NOTAS */}
          {seccionActiva === 'historico' && (
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h2 className="text-xl font-bold text-[#001a38] mb-2">Histórico de Calificaciones</h2>
              <p className="text-xs text-gray-500 mb-4">Resumen ponderado de la gestión académica</p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold text-[#001a38]">Promedio General Acumulado (P.A.A.)</p>
                  <p className="text-xs text-gray-600">Módulos Aprobados: 2 / 4</p>
                </div>
                <span className="text-2xl font-black text-[#001a38]">90.0 / 100</span>
              </div>
            </div>
          )}

          {/* SECCIÓN 4: BOLETA DE INSCRIPCIÓN */}
          {seccionActiva === 'boleta' && (
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h2 className="text-xl font-bold text-[#001a38] mb-2">Boleta de Inscripción Vigente</h2>
              <div className="border p-4 rounded bg-gray-50 text-xs space-y-2">
                <p><strong>Módulo Vigente:</strong> Arquitectura de Software Avanzada (MOD-101)</p>
                <p><strong>Horario:</strong> Viernes 19:00 - 22:00 / Sábados 08:00 - 12:00</p>
                <p><strong>Docente Asignado:</strong> Mgtr. Angel Rodriguez Gonzales</p>
                <p><strong>Modalidad:</strong> Virtual (Plataforma Moodle / Zoom)</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
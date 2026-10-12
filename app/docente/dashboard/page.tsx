'use client';

import { useState } from 'react';

export default function DocenteDashboard() {
  const [seccionActiva, setSeccionActiva] = useState<
    'perfil' | 'materias' | 'horarios' | 'evaluacion'
  >('perfil');

  // Datos del perfil docente basados en el sistema UAGRM
  const perfilDocente = {
    registro: 'DOC-884920',
    nombres: 'Angel Rodriguez Gonzales',
    ci: '8932104 SC',
    sexo: 'Masculino',
    estadoCivil: 'Soltero(a)',
    fechaNacimiento: '15/08/1988',
    pais: 'Bolivia',
    departamento: 'Santa Cruz',
    provincia: 'Andrés Ibáñez',
    nacionalidad: 'Boliviana',
    direccion: 'Av. Bush 2do Anillo, Calle 4 #120',
    telefono: '3-3458920',
    celular: '77390123',
    email: 'angel.rodriguez@uagrm.edu.bo',
    gradoAcademico: 'Magíster en Ciencias de la Computación',
    unidadAcademica: 'Facultad de Ciencias del Hábitat / Postgrado',
    tipoSangre: 'ORH+',
    categoriaDocente: 'Titular B',
  };

  const modulosDocente = [
    {
      id: 'MOD-101',
      nombre: 'Arquitectura de Software Avanzada',
      programa: 'Maestría en Ingeniería de Software',
      version: 'Edición III - 2026',
      horario: 'Viernes 19:00 - 22:00 | Sábados 08:00 - 12:00',
      estudiantes: 24,
      aula: 'Aula Virtual 3 - Zoom',
    },
    {
      id: 'MOD-204',
      nombre: 'Gestión y Desarrollo de Proyectos Tecnológicos',
      programa: 'Diplomado en Gestión de TI',
      version: 'Edición V - 2026',
      horario: 'Lunes y Miércoles 19:00 - 21:30',
      estudiantes: 30,
      aula: 'Módulo 224 - Aula 12',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Top Navbar Docente */}
      <header className="bg-[#001a38] text-white px-6 py-4 flex justify-between items-center shadow-md border-b-4 border-[#d4af37]">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#d4af37] text-[#001a38] rounded-full flex items-center justify-center font-bold">
            UAGRM
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">
              Portal de Gestión Docente
            </h1>
            <p className="text-xs text-[#d4af37]">Escuela de Postgrado</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium hidden md:inline">
            Bienvenido(a), {perfilDocente.nombres}
          </span>
          <button
            onClick={() => (window.location.href = '/login')}
            className="text-xs bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded text-white transition font-bold"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Nav inspirado en la interfaz UAGRM */}
        <aside className="bg-white rounded-lg shadow border border-gray-200 h-fit overflow-hidden">
          <div className="bg-[#001a38] text-white text-xs font-bold px-4 py-3 border-b border-[#d4af37]">
            MENÚ DOCENTE
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
              onClick={() => setSeccionActiva('materias')}
              className={`w-full text-left px-4 py-3 font-medium transition text-sm flex items-center justify-between ${
                seccionActiva === 'materias'
                  ? 'bg-[#001a38] text-white border-l-4 border-[#d4af37]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>Mis Módulos Asignados</span>
              <span className="text-xs opacity-70">➔</span>
            </button>
            <button
              onClick={() => setSeccionActiva('horarios')}
              className={`w-full text-left px-4 py-3 font-medium transition text-sm flex items-center justify-between ${
                seccionActiva === 'horarios'
                  ? 'bg-[#001a38] text-white border-l-4 border-[#d4af37]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>Horarios y Agenda</span>
              <span className="text-xs opacity-70">➔</span>
            </button>
            <button
              onClick={() => setSeccionActiva('evaluacion')}
              className={`w-full text-left px-4 py-3 font-medium transition text-sm flex items-center justify-between ${
                seccionActiva === 'evaluacion'
                  ? 'bg-[#001a38] text-white border-l-4 border-[#d4af37]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>Evaluación Académica</span>
              <span className="text-xs opacity-70">➔</span>
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="md:col-span-3">
          {/* SECCIÓN 1: DATOS PERSONALES DEL DOCENTE */}
          {seccionActiva === 'perfil' && (
            <div className="bg-white rounded-lg shadow border border-gray-200 p-6 space-y-6">
              <div className="border-b pb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-[#001a38] flex items-center gap-2">
                    📌 DATOS PERSONALES DEL DOCENTE
                  </h2>
                  <p className="text-xs text-gray-500">
                    Información filiatoria y académica registrada en la UAGRM
                  </p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-300">
                  Estado: Docente Activo
                </span>
              </div>

              {/* Contenedor con Foto y Datos Principales */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Cuadro de Fotografía */}
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <div className="w-28 h-36 bg-gray-200 rounded border flex items-center justify-center text-gray-400 font-bold text-xs mb-3 shadow-inner">
                    [ Foto Oficial ]
                  </div>
                  <button className="text-xs bg-[#001a38] text-white px-3 py-1.5 rounded hover:bg-blue-900 transition w-full text-center">
                    Actualizar Foto
                  </button>
                </div>

                {/* Formulario / Grilla de Datos Filiatorios */}
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Registro Docente
                    </label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilDocente.registro}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Apellidos y Nombres
                    </label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilDocente.nombres}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Cédula de Identidad
                    </label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilDocente.ci}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Sexo
                    </label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilDocente.sexo}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Estado Civil
                    </label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilDocente.estadoCivil}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Fecha de Nacimiento
                    </label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilDocente.fechaNacimiento}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      País
                    </label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilDocente.pais}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Departamento
                    </label>
                    <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                      {perfilDocente.departamento}
                    </p>
                  </div>
                </div>
              </div>

              {/* Información de Contacto y Académica */}
              <div className="pt-4 border-t grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Nacionalidad
                  </label>
                  <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                    {perfilDocente.nacionalidad}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Dirección Domiciliaria
                  </label>
                  <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                    {perfilDocente.direccion}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Teléfono Celular
                  </label>
                  <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                    {perfilDocente.celular}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Correo Institucional
                  </label>
                  <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                    {perfilDocente.email}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Categoría Docente
                  </label>
                  <p className="text-sm font-semibold text-[#001a38] bg-yellow-50 p-2 rounded border border-yellow-200">
                    {perfilDocente.categoriaDocente}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Máximo Grado Académico
                  </label>
                  <p className="text-sm font-semibold text-gray-800 bg-gray-50 p-2 rounded border">
                    {perfilDocente.gradoAcademico}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 2: MIS MÓDULOS ASIGNADOS */}
          {seccionActiva === 'materias' && (
            <div>
              <h2 className="text-xl font-bold text-[#001a38] mb-4">
                Módulos Asignados - Gestión 2026
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {modulosDocente.map((mod) => (
                  <div
                    key={mod.id}
                    className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-xs bg-yellow-100 text-yellow-800 font-bold px-2 py-0.5 rounded">
                          {mod.id}
                        </span>
                        <h3 className="text-lg font-bold text-gray-800 mt-1">
                          {mod.nombre}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {mod.programa} ({mod.version})
                        </p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-1 rounded-full">
                        {mod.estudiantes} Alumnos
                      </span>
                    </div>

                    <div className="mt-4 pt-3 border-t text-sm text-gray-600 flex flex-wrap justify-between items-center gap-2">
                      <div>
                        <p>
                          <strong>Horario:</strong> {mod.horario}
                        </p>
                        <p>
                          <strong>Ubicación/Aula:</strong> {mod.aula}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-[#001a38] text-white text-xs px-3 py-2 rounded hover:bg-blue-900 transition font-bold">
                          Lista de Estudiantes
                        </button>
                        <button className="bg-[#d4af37] text-[#001a38] font-bold text-xs px-3 py-2 rounded hover:bg-yellow-500 transition">
                          Subir Calificaciones
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECCIÓN 3: HORARIOS */}
          {seccionActiva === 'horarios' && (
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h2 className="text-xl font-bold text-[#001a38] mb-4">
                Cronograma de Clases
              </h2>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-gray-50 text-gray-700">
                    <th className="p-3">Día</th>
                    <th className="p-3">Módulo</th>
                    <th className="p-3">Horario</th>
                    <th className="p-3">Aula</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-gray-600">
                  <tr>
                    <td className="p-3 font-semibold">Lunes / Miércoles</td>
                    <td className="p-3">
                      Gestión y Desarrollo de Proyectos Tecnológicos
                    </td>
                    <td className="p-3">19:00 - 21:30</td>
                    <td className="p-3">Módulo 224 - Aula 12</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Viernes</td>
                    <td className="p-3">Arquitectura de Software Avanzada</td>
                    <td className="p-3">19:00 - 22:00</td>
                    <td className="p-3">Aula Virtual 3 - Zoom</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Sábado</td>
                    <td className="p-3">Arquitectura de Software Avanzada</td>
                    <td className="p-3">08:00 - 12:00</td>
                    <td className="p-3">Aula Virtual 3 - Zoom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* SECCIÓN 4: EVALUACIÓN ACADÉMICA */}
          {seccionActiva === 'evaluacion' && (
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h2 className="text-xl font-bold text-[#001a38] mb-2">
                Evaluación Docente
              </h2>
              <p className="text-xs text-gray-500 mb-4">
                Resultados de encuestas de satisfacción realizadas por los
                estudiantes de postgrado.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold text-[#001a38]">
                    Promedio General de Desempeño
                  </p>
                  <p className="text-xs text-gray-600">
                    Gestión Académica Pasada (2025)
                  </p>
                </div>
                <span className="text-2xl font-black text-[#001a38]">
                  94.8 / 100
                </span>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
export interface Program {
  id: string;
  title: string;
  type: 'Diplomado' | 'Maestría' | 'Doctorado' | 'Especialidad';
  faculty: string;
  duration: string;
  modality: 'Presencial' | 'Virtual' | 'Semipresencial';
  image: string;
}
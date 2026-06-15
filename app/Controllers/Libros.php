<?php

namespace App\Controllers;

use App\Models\LibroModel;

class Libros extends BaseController
{
    // 1. LISTAR LOS LIBROS
    public function index()
    {
        $libroModel = new LibroModel();
        $data['libros'] = $libroModel->findAll();

        return view('libros/index', $data);
    }

    // 2. FORMULARIO PARA CREAR NUEVO LIBRO
    public function crear()
    {
        return view('libros/crear');
    }

    // 3. GUARDAR EL LIBRO EN LA BD
    public function guardar()
    {
        $libroModel = new LibroModel();

        $libroModel->save([
            'titulo'            => $this->request->getPost('titulo'),
            'sinopsis'          => $this->request->getPost('sinopsis'),
            'paginas'           => $this->request->getPost('paginas'),
            'fecha_publicacion' => $this->request->getPost('fecha_publicacion'),
        ]);

        return redirect()->to(base_url('libros'));
    }

    // 4. FORMULARIO PARA EDITAR UN LIBRO
    public function editar($id = null)
    {
        $libroModel = new LibroModel();
        $data['libro'] = $libroModel->find($id);

        if (!$data['libro']) {
            return redirect()->to(base_url('libros'));
        }

        return view('libros/editar', $data);
    }

    // 5. ACTUALIZAR LOS CAMBIOS EN LA BD
    public function actualizar()
    {
        $libroModel = new LibroModel();
        $id = $this->request->getPost('id');

        $libroModel->update($id, [
            'titulo'            => $this->request->getPost('titulo'),
            'sinopsis'          => $this->request->getPost('sinopsis'),
            'paginas'           => $this->request->getPost('paginas'),
            'fecha_publicacion' => $this->request->getPost('fecha_publicacion'),
        ]);

        return redirect()->to(base_url('libros'));
    }

    // 6. ELIMINAR UN LIBRO
    public function eliminar($id = null)
    {
        $libroModel = new LibroModel();
        $libroModel->delete($id);

        return redirect()->to(base_url('libros'));
    }
} 
<?php

namespace App\Controllers;

use App\Models\BookModel;
use CodeIgniter\RESTful\ResourceController;

class Books extends ResourceController
{
    protected $modelName = 'App\Models\BookModel';
    protected $format    = 'json'; // Indicas que las respuestas serán JSON profesionales

    // Listar todos los libros (GET /books)
    public function index()
    {
        return $this->respond($this->model->findAll());
    }

    // Guardar un libro (POST /books)
    public function create()
    {
        $data = $this->request->getJSON(true); // Captura datos JSON enviados por JS
        $this->model->save($data);
        return $this->respondCreated(['status' => true, 'message' => 'Book saved']);
    }

    // Ver los datos de un solo libro para editar (GET /books/(:num))
    public function show($id = null)
    {
        $book = $this->model->find($id);
        return $book ? $this->respond($book) : $this->failNotFound('Book not found');
    }

    // Actualizar un libro (PUT /books/(:num))
    public function update($id = null)
    {
        $data = $this->request->getJSON(true);
        $this->model->update($id, $data);
        return $this->respond(['status' => true, 'message' => 'Book updated']);
    }

    // Eliminar un libro (DELETE /books/(:num))
    public function delete($id = null)
    {
        $this->model->delete($id);
        return $this->respondDeleted(['status' => true, 'message' => 'Book deleted']);
    }
}
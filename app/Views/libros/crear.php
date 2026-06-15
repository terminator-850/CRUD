<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Agregar Libro - Stephen King</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
<div class="container mt-5" style="max-width: 600px;">
    <div class="card shadow">
        <div class="card-header bg-primary text-white">
            <h3 class="m-0">Añadir Obra de Stephen King</h3>
        </div>
        <div class="card-body">
            <form action="<?= base_url('libros/guardar') ?>" method="post">
                <div class="mb-3">
                    <label class="form-label">Título de la novela</label>
                    <input type="text" name="titulo" class="form-control" placeholder="Ej: El Resplandor" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Sinopsis</label>
                    <textarea name="sinopsis" class="form-control" rows="3" placeholder="Breve resumen del libro..."></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Número de páginas</label>
                    <input type="number" name="paginas" class="form-control" placeholder="Ej: 447">
                </div>
                <div class="mb-3">
                    <label class="form-label">Fecha de Publicación original</label>
                    <input type="date" name="fecha_publicacion" class="form-control">
                </div>
                <div class="d-flex justify-content-between">
                    <a href="<?= base_url('libros') ?>" class="btn btn-secondary">Cancelar</a>
                    <button type="submit" class="btn btn-success">Guardar Libro</button>
                </div>
            </form>
        </div>
    </div>
</div>
</body>
</html>

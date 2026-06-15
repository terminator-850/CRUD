<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Editar Libro - Stephen King</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
<div class="container mt-5" style="max-width: 600px;">
    <div class="card shadow">
        <div class="card-header bg-warning text-dark">
            <h3 class="m-0">Modificar datos del Libro</h3>
        </div>
        <div class="card-body">
            <form action="<?= base_url('libros/actualizar') ?>" method="post">
                <input type="hidden" name="id" value="<?= $libro['id'] ?>">
                <div class="mb-3">
                    <label class="form-label">Título</label>
                    <input type="text" name="titulo" class="form-control" value="<?= $libro['titulo'] ?>" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Sinopsis</label>
                    <textarea name="sinopsis" class="form-control" rows="3"><?= $libro['sinopsis'] ?></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Páginas</label>
                    <input type="number" name="paginas" class="form-control" value="<?= $libro['paginas'] ?>">
                </div>
                <div class="mb-3">
                    <label class="form-label">Fecha de Publicación</label>
                    <input type="date" name="fecha_publicacion" class="form-control" value="<?= $libro['fecha_publicacion'] ?>">
                </div>
                <div class="d-flex justify-content-between">
                    <a href="<?= base_url('libros') ?>" class="btn btn-secondary">Cancelar</a>
                    <button type="submit" class="btn btn-success">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>
</body>
</html>

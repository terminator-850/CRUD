<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Colección Stephen King</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="text-dark">📚 Primer Contenedor: Libros de Stephen King</h1>
        <a href="<?= base_url('libros/crear') ?>" class="btn btn-primary">+ Agregar Libro</a>
    </div>

    <div class="card shadow-sm">
        <div class="card-body">
            <table class="table table-striped table-hover align-middle m-0">
                <thead class="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Sinopsis</th>
                        <th>Páginas</th>
                        <th>Fecha Publicación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if(!empty($libros) && is_array($libros)): ?>
                        <?php foreach($libros as $libro): ?>
                            <tr>
                                <td><?= $libro['id'] ?></td>
                                <td><strong><?= $libro['titulo'] ?></strong></td>
                                <td><?= $libro['sinopsis'] ?></td>
                                <td><?= $libro['paginas'] ?></td>
                                <td><?= $libro['fecha_publicacion'] ?></td>
                                <td>
                                    <a href="<?= base_url('libros/editar/'.$libro['id']) ?>" class="btn btn-warning btn-sm">Editar</a>
                                    <a href="<?= base_url('libros/eliminar/'.$libro['id']) ?>" class="btn btn-danger btn-sm" onclick="return confirm('¿Seguro que deseas eliminar este libro?')">Eliminar</a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="6" class="text-center text-muted">No hay libros registrados aún. ¡Sé el primero en agregar una obra de King!</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

</body>
</html>
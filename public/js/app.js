const API_URL = 'http://localhost:8080/biblioteca-king/public/books';

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", loadBooks);

// 1. OBTENER Y ENLISTAR LIBROS (READ)
function loadBooks() {
    fetch(API_URL)
        .then(res => res.json())
        .then(books => {
            let html = '';
            books.forEach(b => {
                html += `<tr>
                    <td>${b.id}</td>
                    <td><strong>${b.title}</strong></td>
                    <td>${b.synopsis || ''}</td>
                    <td>${b.pages || ''}</td>
                    <td>${b.publication_date || ''}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editBook(${b.id})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteBook(${b.id})">Delete</button>
                    </td>
                </tr>`;
            });
            document.getElementById('booksTableBody').innerHTML = html || '<tr><td colspan="6" class="text-center">No books found</td></tr>';
        });
}

// 2. ENVIAR DATOS: CREAR O EDITAR (CREATE / UPDATE)
function saveBook() {
    const id = document.getElementById('bookId').value;
    const data = {
        title: document.getElementById('title').value,
        synopsis: document.getElementById('synopsis').value,
        pages: document.getElementById('pages').value,
        publication_date: document.getElementById('publication_date').value
    };

    // Si hay ID editamos (PUT), si no creamos (POST)
    const url = id ? `${API_URL}/${id}` : API_URL;
    const method = id ? 'PUT' : 'POST';

    fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(() => {
        hideForm();
        loadBooks();
    });
}

// 3. CARGAR DATOS EN EL FORMULARIO PARA EDITAR
function editBook(id) {
    fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(b => {
            document.getElementById('bookId').value = b.id;
            document.getElementById('title').value = b.title;
            document.getElementById('synopsis').value = b.synopsis;
            document.getElementById('pages').value = b.pages;
            document.getElementById('publication_date').value = b.publication_date;
            showForm(true);
        });
}

// 4. ELIMINAR LIBRO (DELETE)
function deleteBook(id) {
    if (confirm('Delete this book?')) {
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(() => loadBooks());
    }
}

// Funciones de control visual del formulario
function showForm(isEdit = false) {
    document.getElementById('formTitle').innerText = isEdit ? 'Edit Book' : 'Add New Book';
    if(!isEdit) resetForm();
    document.getElementById('bookFormContainer').classList.remove('d-none');
}
function hideForm() { document.getElementById('bookFormContainer').classList.add('d-none'); }
function resetForm() {
    document.getElementById('bookId').value = '';
    document.getElementById('title').value = '';
    document.getElementById('synopsis').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('publication_date').value = '';
}
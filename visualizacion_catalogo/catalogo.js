let categoriaActual = 'Todas';

function renderizarProductos(lista) {
    const contenedor = document.getElementById('contenedorProductos');
    contenedor.innerHTML = '';

    if (!lista || lista.length === 0) {
        contenedor.innerHTML = `<p class="text-center text-muted py-4">No se encontraron productos.</p>`;
        return;
    }

    lista.forEach(p => {
        contenedor.innerHTML += `
            <div class="col-md-4 col-lg-3">
                <div class="card card-producto h-100">
                    <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
                    <div class="card-body d-flex flex-column text-center">
                        <h6 class="fw-bold mb-1 text-cafe">${p.nombre}</h6>
                        <span class="badge bg-light text-dark mb-2 align-self-center border">${p.categoria}</span>
                        <p class="text-muted small flex-grow-1">${p.descripcion}</p>
                        <h5 class="fw-bold my-2 text-purpura">$${p.precio.toLocaleString('es-CL')}</h5>
                        <button class="btn btn-rosa w-100 mt-2 rounded-pill fw-bold">Añadir al Carrito</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function filtrarCategoria(cat, e) {
    categoriaActual = cat;
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('active'));
    if (e) e.target.classList.add('active');
    aplicarFiltros();
}

function aplicarFiltros() {
    const texto = document.getElementById('inputBuscar').value.toLowerCase();
    const filtrados = productos.filter(p => {
        const matchesCat = (categoriaActual === 'Todas' || p.categoria === categoriaActual);
        const matchesText = p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto);
        return matchesCat && matchesText;
    });
    renderizarProductos(filtrados);
}

document.getElementById('inputBuscar').addEventListener('input', aplicarFiltros);
document.addEventListener('DOMContentLoaded', () => {
    if (typeof productos !== 'undefined') {
        renderizarProductos(productos);
    }
});
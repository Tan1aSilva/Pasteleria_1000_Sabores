const productos = [
    {
        codigo: "TC001",
        categoria: "Cuadradas",
        nombre: "Torta Cuadrada de Chocolate",
        descripcion: "Chocolate con ganache y avellanas tostadas. Bizcocho húmedo, nada seco. Es la que nunca falla cuando no sabís qué pedir.",
        precio: 45000,
        imagen: "imagenhtml/Torta Cuadrada de Chocolate.jfif"
    },
    {
        codigo: "TC002",
        categoria: "Cuadradas",
        nombre: "Torta Cuadrada de Frutas",
        descripcion: "Vainilla, crema y fruta fresca de la feria. Simple pero rica, como las que hacen en las casas de verano.",
        precio: 50000,
        imagen: "imagenhtml/Torta Cuadrada de Frutas.jfif"
    },
    {
        codigo: "TT001",
        categoria: "Circulares",
        nombre: "Torta Circular de Vainilla",
        descripcion: "La torta de cumpleaños de siempre. Bizcochuelo esponjoso con crema pastelera casera, sin vueltas raras.",
        precio: 40000,
        imagen: "imagenhtml/Torta Circular de Vainilla.jfif"
    },
    {
        codigo: "TT002",
        categoria: "Circulares",
        nombre: "Torta Circular de Manjar",
        descripcion: "Manjar hecho en paila, reducido de a poco, con nueces picadas. Un sabor que a mucha gente le recuerda al sur.",
        precio: 42000,
        imagen: "imagenhtml/Torta Circular de Manjar.webp"
    },
    {
        codigo: "P1001",
        categoria: "Postres",
        nombre: "Mousse de Chocolate",
        descripcion: "Chocolate amargo, textura liviana. Ideal para cerrar un almuerzo sin dejar a nadie muy empalagado.",
        precio: 5000,
        imagen: "imagenhtml/images.jfif"
    },
    {
        codigo: "P1002",
        categoria: "Postres",
        nombre: "Tiramisú Clásico",
        descripcion: "Café cargado, mascarpone y cacao encima. El que uno pide para quedar bien en una cena.",
        precio: 5500,
        imagen: "imagenhtml/Tiramisu Clasico.jfif"
    },
    {
        codigo: "PSA001",
        categoria: "Sin Azúcar",
        nombre: "Torta Sin Azúcar de Naranja",
        descripcion: "Jugo de naranja natural y bizcocho húmedo, endulzada sin azúcar. Buena opción para la once sin culpa.",
        precio: 48000,
        imagen: "imagenhtml/Torta Sin Azucar de Naranja.jfif"
    },
    {
        codigo: "PSA002",
        categoria: "Sin Azúcar",
        nombre: "Cheesecake Sin Azúcar",
        descripcion: "Base cremosa al horno, con mermelada casera de frutos rojos y sin azúcar añadida. Rinde harto.",
        precio: 47000,
        imagen: "imagenhtml/Cheesecake Sin Azucar.jpg"
    },
    {
        codigo: "PT001",
        categoria: "Tradicional",
        nombre: "Empanada de Manzana",
        descripcion: "Hojaldre hecho a mano, relleno de manzana y un toque de canela. Como las de las picadas del sur cuando llueve.",
        precio: 3000,
        imagen: "imagenhtml/Empanada de Manzana.jpg"
    },
    {
        codigo: "PT002",
        categoria: "Tradicional",
        nombre: "Tarta de Santiago",
        descripcion: "Almendra molida, huevo y ralladura de limón. Sin harina, receta de siempre.",
        precio: 6000,
        imagen: "imagenhtml/Tarta de Santiago.jfif"
    },
    {
        codigo: "PG001",
        categoria: "Sin Gluten",
        nombre: "Brownie Sin Gluten",
        descripcion: "Denso y bien chocolatoso, hecho con frutos secos molidos en vez de harina. Nadie se da cuenta que es sin gluten.",
        precio: 4000,
        imagen: "imagenhtml/Brawnie sin gluten.webp"
    },
    {
        codigo: "PG002",
        categoria: "Sin Gluten",
        nombre: "Pan Sin Gluten",
        descripcion: "Horneado día por medio, con almidones naturales y semillas. Rico tostado con mantequilla.",
        precio: 3500,
        imagen: "imagenhtml/Pan Sin Gluten.jpg"
    },
    {
        codigo: "PV001",
        categoria: "Vegana",
        nombre: "Torta Vegana de Chocolate",
        descripcion: "Con leche vegetal y aceite de coco, pero igual de húmeda que la original. Para compartir sin restarle a nadie.",
        precio: 50000,
        imagen: "imagenhtml/Torta Vegana de Chocolate.jfif"
    },
    {
        codigo: "PV002",
        categoria: "Vegana",
        nombre: "Galletas Veganas de Avena",
        descripcion: "Avena entera, jarabe vegetal y vainilla. Las de siempre para el bolso, camino a la u o al trabajo.",
        precio: 4500,
        imagen: "imagenhtml/Galletas Veganas de Avena.jfif"
    },
    {
        codigo: "TE001",
        categoria: "Especiales",
        nombre: "Torta Especial de Cumpleaños",
        descripcion: "Decorada a mano con merengue, una por una. Pensada para el momento de apagar las velas.",
        precio: 55000,
        imagen: "imagenhtml/Torta Especial de Cumpleanos.jpg"
    },
    {
        codigo: "TE002",
        categoria: "Especiales",
        nombre: "Torta Especial de Boda",
        descripcion: "En pisos, bizcocho fino y rellenos a elección. La que se lleva las miradas en la fiesta.",
        precio: 60000,
        imagen: "imagenhtml/Torta Especial de Boda.webp"
    }
];

function cargarProductosDestacados() {
    const contenedor = document.getElementById("contenedorDestacados");

    if (!contenedor) return;

    const productosDestacados = productos.slice(0, 4);

    contenedor.innerHTML = productosDestacados.map(producto => {
        const precioFormateado = producto.precio.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP',
            maximumFractionDigits: 0
        });

        return `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="${producto.imagen}" class="card-img-top imagenn" alt="${producto.nombre}">
                    <div class="card-body d-flex flex-column text-center">
                        <h5 class="card-title fw-bold fs-6">${producto.nombre}</h5>
                        <p class="card-text text-muted flex-grow-1 small">${producto.descripcion}</p>
                        <div class="mt-3">
                            <span class="fs-5 fw-bold text-dark d-block mb-2">${precioFormateado}</span>
                            <button class="btn btn-sm text-white w-100" style="background-color: var(--purple-bg)">
                                <i class="fa-solid fa-cart-shopping me-1"></i> Añadir al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

document.addEventListener("DOMContentLoaded", cargarProductosDestacados);
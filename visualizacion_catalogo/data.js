const productos = [
    {
        codigo: "TC001",
        categoria: "Cuadradas",
        nombre: "Torta Cuadrada de Chocolate",
        descripcion: "Inspirada en la alta chocolatería europea del siglo XIX. Nació en nuestro taller combinando cacao puro de selección con capas artesanalmente montadas de ganache y avellanas tostadas.",
        precio: 45000,
        imagen: "imagenhtml/Torta Cuadrada de Chocolate.jfif"
    },
    {
        codigo: "TC002",
        categoria: "Cuadradas",
        nombre: "Torta Cuadrada de Frutas",
        descripcion: "Basada en las clásicas tartas de campo francesas. Su receta rinde tributo a las cosechas de estación, acomodando frutas frescas sobre un suave bizcocho de vainilla aromatizado con azahar.",
        precio: 50000,
        imagen: "imagenhtml/Torta Cuadrada de Frutas.jfif"
    },
    {
        codigo: "TT001",
        categoria: "Circulares",
        nombre: "Torta Circular de Vainilla",
        descripcion: "Nuestra receta fundacional heredada de la abuela pastelera. Mantiene la técnica tradicional de batido a mano para lograr un bizcocho esponjoso rellenado con crema pastelera a la antigua.",
        precio: 40000,
        imagen: "imagenhtml/Torta Circular de Vainilla.jfif"
    },
    {
        codigo: "TT002",
        categoria: "Circulares",
        nombre: "Torta Circular de Manjar",
        descripcion: "Receta tradicional de la zona central chilena nacida en los antiguos fundos. Destaca por su manjar casero reducido lentamente en paila de cobre y nueces del valle seleccionadas.",
        precio: 42000,
        imagen: "imagenhtml/Torta Circular de Manjar.webp"
    },
    {
        codigo: "P1001",
        categoria: "Postres",
        nombre: "Mousse de Chocolate",
        descripcion: "Creación de origen francés catalogada en los recetarios del siglo XVIII. Su secreto está en el emulsionado artesanal de chocolate amargo con crema fresca para lograr una textura aireada única.",
        precio: 5000,
        imagen: "imagenhtml/images.jfif"
    },
    {
        codigo: "P1002",
        categoria: "Postres",
        nombre: "Tiramisú Clásico",
        descripcion: "Originario de la región del Véneto en Italia durante los años 60. Elaborado con la receta original a base de galletas embebidas en café expreso intenso, queso mascarpone y cacao en polvo.",
        precio: 5500,
        imagen: "imagenhtml/Tiramisu Clasico.jfif"
    },
    {
        codigo: "PSA001",
        categoria: "Sin Azúcar",
        nombre: "Torta Sin Azúcar de Naranja",
        descripcion: "Creada en nuestra cocina experimental para recrear los bizcochos citrícos mediterráneos tradicionales, sustituyendo el azúcar por endulzantes naturales sin perder la humedad del jugo fresco.",
        precio: 48000,
        imagen: "imagenhtml/Torta Sin Azucar de Naranja.jfif"
    },
    {
        codigo: "PSA002",
        categoria: "Sin Azúcar",
        nombre: "Cheesecake Sin Azúcar",
        descripcion: "Inspirado en el famoso estilo New York de los años 20. Recreamos la receta cremosa original usando horneado al baño María y mermelada artesanal de frutos rojos sin azúcar añadida.",
        precio: 47000,
        imagen: "imagenhtml/Cheesecake Sin Azucar.jpg"
    },
    {
        codigo: "PT001",
        categoria: "Tradicional",
        nombre: "Empanada de Manzana",
        descripcion: "Receta colonial traída por inmigrantes europeos a América. Rellena de manzanas seleccionadas horneadas lentamente con canela en rama y masa hojaldrada a mano.",
        precio: 3000,
        imagen: "imagenhtml/Empanada de Manzana.jpg"
    },
    {
        codigo: "PT002",
        categoria: "Tradicional",
        nombre: "Tarta de Santiago",
        descripcion: "Emblemático dulce gallego con origen documentado en el año 1577. Elaborada sin harina, respetando la tradición de almendras molidas, huevo, azúcar y ralladura de limón.",
        precio: 6000,
        imagen: "imagenhtml/Tarta de Santiago.jfif"
    },
    {
        codigo: "PG001",
        categoria: "Sin Gluten",
        nombre: "Brownie Sin Gluten",
        descripcion: "Nacido en Estados Unidos a finales del siglo XIX, adaptamos esta icónica receta sustituyendo la harina por frutos secos molidos para conservar el centro húmedo y denso de chocolate puro.",
        precio: 4000,
        imagen: "imagenhtml/Brawnie sin gluten.webp"
    },
    {
        codigo: "PG002",
        categoria: "Sin Gluten",
        nombre: "Pan Sin Gluten",
        descripcion: "Desarrollado en nuestro taller tras meses de prueba para devolver el sabor del pan de pueblo artesanal, combinando almidones naturales y semillas tostadas horneadas cada mañana.",
        precio: 3500,
        imagen: "imagenhtml/Pan Sin Gluten.jpg"
    },
    {
        codigo: "PV001",
        categoria: "Vegana",
        nombre: "Torta Vegana de Chocolate",
        descripcion: "Adaptación moderna de la clásica repostería de chocolate. Reemplaza los lácteos y huevos por bebidas vegetales y aceite de coco, manteniendo una textura rica y un sabor intenso.",
        precio: 50000,
        imagen: "imagenhtml/Torta Vegana de Chocolate.jfif"
    },
    {
        codigo: "PV002",
        categoria: "Vegana",
        nombre: "Galletas Veganas de Avena",
        descripcion: "Inspiradas en las galletas rústicas de avena del campo escocés. Horneadas con aceites prensados en frío, avena entera, miel de ágave y un toque de vainilla natural.",
        precio: 4500,
        imagen: "imagenhtml/Galletas Veganas de Avena.jfif"
    },
    {
        codigo: "TE001",
        categoria: "Especiales",
        nombre: "Torta Especial de Cumpleaños",
        descripcion: "Nacida de la tradición familiar de celebrar los momentos más importantes. Cada pieza se decora manualmente con técnicas tradicionales de merengue y detalles en azúcar.",
        precio: 55000,
        imagen: "imagenhtml/Torta Especial de Cumpleanos.jpg"
    },
    {
        codigo: "TE002",
        categoria: "Especiales",
        nombre: "Torta Especial de Boda",
        descripcion: "Inspirada en los grandes banquetes reales del siglo XVIII. Diseñada con capas de bizcocho fino y rellenos delicados para ser la pieza central de celebraciones inolvidables.",
        precio: 60000,
        imagen: "imagenhtml/Torta Especial de Boda.webp"
    }
];
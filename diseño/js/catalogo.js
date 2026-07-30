// ---------------------------------------------
  // 1. LOS DATOS: cada producto es un objeto simple.
  //    En producción esto vendría de una API o un JSON,
  //    pero para la plantilla basta con este arreglo.
  //    La LLAVE de cada producto (ej. "concha") ES su
  //    identificador único: el mismo que va en la URL
  //    y el que llevará impreso el código QR.
  // ---------------------------------------------

const productos = {
    "Surtido": {
      nombre: "Pan de masa madre",
      categoria: "Surtido",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },
    "Barra": {
      nombre: "Bolillo Clásico",
      categoria: "Barra",
      descripcion: "Pan crujiente por fuera y suave por dentro, ideal para tortas o para acompañar cualquier comida.",
      ingredientes: ["Harina de trigo", "Sal", "Levadura", "Agua"],
      imagen: "img/pan2.webp"
    },
    "Galleta": {
      nombre: "Pastel de Chocolate",
      categoria: "Galleta",
      descripcion: "Rebanada húmeda de chocolate con relleno de ganache, perfecta para acompañar un café.",
      ingredientes: ["Chocolate amargo", "Huevo", "Azúcar", "Crema"],
      imagen: "img/pan3.webp"
    }
  };
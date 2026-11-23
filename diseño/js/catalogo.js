// ---------------------------------------------
  // 1. LOS DATOS: cada producto es un objeto simple.
  //    En producción esto vendría de una API o un JSON,
  //    pero para la plantilla basta con este arreglo.
  //    La LLAVE de cada producto (ej. "concha") ES su
  //    identificador único: el mismo que va en la URL
  //    y el que llevará impreso el código QR.
  // ---------------------------------------------

const productos = {
    1: {
      nombre: "Concha de chocolate",
      categoria: "Surtido",
      subcategoria: "Concha",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },
    2: {
      nombre: "Concha de vainilla",
      categoria: "Surtido",
      subcategoria: "Concha",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },
    3: {
      nombre: "Concha de mantequilla",
      categoria: "Surtido",
      subcategoria: "Concha",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },
    4: {
      nombre: "Sema",
      categoria: "Surtido",
      subcategoria: "Sema",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },
    5: {
      nombre: "Cocol de anis",
      categoria: "Surtido",
      subcategoria: "Cocol",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },
    6: {
      nombre: "Cocol de ajonjolí",
      categoria: "Surtido",
      subcategoria: "Cocol",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },
    7: {
      nombre: "Cocol de salvado",
      categoria: "Surtido",
      subcategoria: "Cocol",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },
    8: {
      nombre: "Piojosa",
      categoria: "Surtido",
      subcategoria: "Piojosa",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },
    9: {
      nombre: "Pan de naranja",
      categoria: "Surtido",
      subcategoria: "Naranja",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel hendrerit nisi. In imperdiet urna non dui imperdiet aliquet. Vestibulum sagittis velit non dolor feugiat, eu rhoncus nibh posuere. Phasellus interdum et massa et mollis. Duis vel rutrum nisl. Etiam rutrum placerat erat a interdum. ",
      ingredientes: ["Harina de trigo", "Mantequilla", "Azúcar", "Vainilla"],
      imagen: "img/pan1.jfif"
    },

    10: {
      nombre: "Barra de zarzamora",
      categoria: "Barra",
      subcategoria: "Barra",
      descripcion: "Pan crujiente por fuera y suave por dentro, ideal para tortas o para acompañar cualquier comida.",
      ingredientes: ["Harina de trigo", "Sal", "Levadura", "Agua"],
      imagen: "img/pan2.webp"
    },
    11: {
      nombre: "Barra de chocolate",
      categoria: "Barra",
      subcategoria: "Barra",
      descripcion: "Pan crujiente por fuera y suave por dentro, ideal para tortas o para acompañar cualquier comida.",
      ingredientes: ["Harina de trigo", "Sal", "Levadura", "Agua"],
      imagen: "img/pan2.webp"
    },
    12: {
      nombre: "Barra de membrillo",
      categoria: "Barra",
      subcategoria: "Barra",
      descripcion: "Pan crujiente por fuera y suave por dentro, ideal para tortas o para acompañar cualquier comida.",
      ingredientes: ["Harina de trigo", "Sal", "Levadura", "Agua"],
      imagen: "img/pan2.webp"
    },
    13: {
      nombre: "Barra de manzana",
      categoria: "Barra",
      subcategoria: "Barra",
      descripcion: "Pan crujiente por fuera y suave por dentro, ideal para tortas o para acompañar cualquier comida.",
      ingredientes: ["Harina de trigo", "Sal", "Levadura", "Agua"],
      imagen: "img/pan2.webp"
    },
    14: {
      nombre: "Barra de frutos rojos",
      categoria: "Barra",
      subcategoria: "Barra",
      descripcion: "Pan crujiente por fuera y suave por dentro, ideal para tortas o para acompañar cualquier comida.",
      ingredientes: ["Harina de trigo", "Sal", "Levadura", "Agua"],
      imagen: "img/pan2.webp"
    },
    15: {
      nombre: "Barra de crema pastelera",
      categoria: "Barra",
      subcategoria: "Barra",
      descripcion: "Pan crujiente por fuera y suave por dentro, ideal para tortas o para acompañar cualquier comida.",
      ingredientes: ["Harina de trigo", "Sal", "Levadura", "Agua"],
      imagen: "img/pan2.webp"
    },
    16: {
      nombre: "Barra de piña",
      categoria: "Barra",
      subcategoria: "Barra",
      descripcion: "Pan crujiente por fuera y suave por dentro, ideal para tortas o para acompañar cualquier comida.",
      ingredientes: ["Harina de trigo", "Sal", "Levadura", "Agua"],
      imagen: "img/pan2.webp"
    },

    17: {
      nombre: "Galleta de miel",
      categoria: "Galleta",
      subcategoria: "Galleta de miel",
      descripcion: "Rebanada húmeda de chocolate con relleno de ganache, perfecta para acompañar un café.",
      ingredientes: ["Chocolate amargo", "Huevo", "Azúcar", "Crema"],
      imagen: "img/pan3.webp"
    },
    18: {
      nombre: "Galleta sin miel",
      categoria: "Galleta",
      subcategoria: "Galleta sin miel",
      descripcion: "Rebanada húmeda de chocolate con relleno de ganache, perfecta para acompañar un café.",
      ingredientes: ["Chocolate amargo", "Huevo", "Azúcar", "Crema"],
      imagen: "img/pan3.webp"
    },
    19: {
      nombre: "Galleta de coco",
      categoria: "Galleta",
      subcategoria: "Galleta redonda",
      descripcion: "Rebanada húmeda de chocolate con relleno de ganache, perfecta para acompañar un café.",
      ingredientes: ["Chocolate amargo", "Huevo", "Azúcar", "Crema"],
      imagen: "img/pan3.webp"
    },
    20: {
      nombre: "Galleta de avena",
      categoria: "Galleta",
      subcategoria: "Galleta redonda",
      descripcion: "Rebanada húmeda de chocolate con relleno de ganache, perfecta para acompañar un café.",
      ingredientes: ["Chocolate amargo", "Huevo", "Azúcar", "Crema"],
      imagen: "img/pan3.webp"
    },
  };
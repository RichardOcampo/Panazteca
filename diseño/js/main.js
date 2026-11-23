const PRODUCTO_POR_DEFECTO = "1";   // debe existir en catalogo.js
const PARAM_URL = "producto";       // pagina.html?producto=1

// Valores que luego mandarás al servidor para contar escaneos
let productoActualId = null;
let categoriaActualId = null;
let subcategoriaActualId = null;

// ---------------------------------------------
// Tarjeta de cross-nav (se genera igual para todas)
// ---------------------------------------------
function crearTarjeta(id) {
  const p = productos[id];
  return `
    <button class="cross-nav-card" data-id="${id}">
      <img src="${p.imagen}" alt="${p.nombre}">
      <span>${p.nombre}</span>
    </button>`;
}

// ---------------------------------------------
// Cross-nav automático:
//  - "Otras variantes": mismos productos de la misma subcategoría
//  - "Otras opciones": un representante de cada OTRA subcategoría
// ---------------------------------------------
function renderCrossNav() {
  const actual = productos[productoActualId];
  const ids = Object.keys(productos);

  const variantes = ids.filter(id =>
    id !== productoActualId &&
    productos[id].subcategoria === actual.subcategoria
  );

  const vistas = new Set([actual.subcategoria]);
  const otras = [];
  ids.forEach(id => {
    const sub = productos[id].subcategoria;
    if (!vistas.has(sub)) {
      vistas.add(sub);
      otras.push(id); // el primer producto de esa subcategoría
    }
  });

  const pintar = (contenedorId, tituloId, lista) => {
    document.getElementById(contenedorId).innerHTML = lista.map(crearTarjeta).join("");
    // Si no hay nada que mostrar, se oculta también el título
    document.getElementById(tituloId).style.display = lista.length ? "" : "none";
  };

  pintar("variantes-container", "variantes-titulo", variantes);
  pintar("otras-container", "otras-titulo", otras);
}

// ---------------------------------------------
// Pinta un producto
// ---------------------------------------------
function renderProduct(id) {
  id = String(id);
  let producto = productos[id];

  // Si el QR trae un ID que no existe, se muestra el producto por defecto
  if (!producto) {
    console.warn("Producto no encontrado:", id);
    id = PRODUCTO_POR_DEFECTO;
    producto = productos[id];
  }

  productoActualId = id;
  categoriaActualId = producto.categoria;
  subcategoriaActualId = producto.subcategoria;

  document.getElementById("product-image").src = producto.imagen;
  document.getElementById("product-image").alt = producto.nombre;
  document.getElementById("product-name").textContent = producto.nombre;
  document.getElementById("product-category").textContent =
    `Categoría: ${producto.categoria} · ${producto.subcategoria}`;
  document.getElementById("product-description").textContent = producto.descripcion;

  const precioLi = document.getElementById("precio");
  if (producto.precio) {
    precioLi.textContent = producto.precio;
    precioLi.style.display = "";
  } else {
    precioLi.style.display = "none";
  }

  const lista = document.getElementById("ingredientes-lista");
  lista.querySelectorAll("li:not(.precio)").forEach(li => li.remove());
  producto.ingredientes.forEach(ing => {
    const li = document.createElement("li");
    li.textContent = ing;
    lista.insertBefore(li, precioLi);
  });

  renderCrossNav();

  // A futuro: aquí se manda el conteo de escaneo
  // fetch(`/api/escaneos`, { method: "POST", body: JSON.stringify({
  //   producto: productoActualId, categoria: categoriaActualId, subcategoria: subcategoriaActualId }) });

  return id;
}

// ---------------------------------------------
// URL
// ---------------------------------------------
function obtenerIdDesdeURL() {
  return new URLSearchParams(window.location.search).get(PARAM_URL);
}

function actualizarURL(id, reemplazar = false) {
  const url = new URL(window.location);
  url.searchParams.set(PARAM_URL, id);
  const metodo = reemplazar ? "replaceState" : "pushState";
  history[metodo]({ producto: id }, "", url);
}

// ---------------------------------------------
// Clicks en el cross-nav (un solo listener para todas las tarjetas,
// funciona aunque las tarjetas se regeneren)
// ---------------------------------------------
document.querySelector(".cross-nav").addEventListener("click", (e) => {
  const card = e.target.closest(".cross-nav-card");
  if (!card) return;
  const id = renderProduct(card.dataset.id);
  actualizarURL(id);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Botón atrás/adelante del navegador
window.addEventListener("popstate", () => {
  renderProduct(obtenerIdDesdeURL() || PRODUCTO_POR_DEFECTO);
});

// ---------------------------------------------
// Producto inicial (viene del QR o se usa el de por defecto)
// ---------------------------------------------
const idInicial = renderProduct(obtenerIdDesdeURL() || PRODUCTO_POR_DEFECTO);
actualizarURL(idInicial, true); // replaceState: no ensucia el historial
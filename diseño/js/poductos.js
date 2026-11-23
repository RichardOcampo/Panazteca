document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.getElementById("categorias-tabs");
  const contenedor = document.getElementById("cross-nav-container");

  // Categorías únicas, en el orden en que aparecen en catalogo.js
  const categorias = [...new Set(Object.values(productos).map(p => p.categoria))];

  // Categoría activa: la de la URL (?categoria=Galleta) o la primera
  let activa = new URLSearchParams(window.location.search).get("categoria");
  if (!categorias.includes(activa)) activa = categorias[0];

  function renderTabs() {
    tabs.innerHTML = categorias.map(cat => `
      <button class="tab ${cat === activa ? "active" : ""}" data-categoria="${cat}">
        ${cat}
      </button>`).join("");
  }

  function renderProductos() {
    // Agrupa por subcategoría los productos de la categoría activa
    const grupos = {};
    Object.entries(productos).forEach(([id, p]) => {
      if (p.categoria !== activa) return;
      (grupos[p.subcategoria] ||= []).push([id, p]);
    });

    contenedor.innerHTML = Object.entries(grupos).map(([sub, items]) => `
      <h4 class="subcategoria-titulo">${sub}</h4>
      <div class="cross-nav-grid" style="grid-template-columns: 1fr;">
        ${items.map(([id, p]) => `
          <button class="cross-nav-card" data-id="${id}">
            <img src="${p.imagen}" alt="${p.nombre}">
            <span>${p.nombre}</span>
          </button>`).join("")}
      </div>`).join("");
  }

  // Cambiar de categoría
  tabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    activa = tab.dataset.categoria;
    renderTabs();
    renderProductos();
    // Recuerda la categoría en la URL, así "atrás" desde un producto
    // te regresa a la misma categoría
    history.replaceState(null, "", `?categoria=${encodeURIComponent(activa)}`);
  });

  // Click en un producto: ir a index.html con su ID
  contenedor.addEventListener("click", (e) => {
    const card = e.target.closest(".cross-nav-card");
    if (!card) return;
    window.location.href = `index.html?producto=${encodeURIComponent(card.dataset.id)}`;
  });

  renderTabs();
  renderProductos();
});
const PRODUCTO_POR_DEFECTO = "Surtido";
  const PARAM_URL = "producto"; // así se verá: pagina.html?producto=Surtido

  // Mapea cada botón de cross-nav a un producto "representante" de esa categoría
  const categoriaAProducto = {
    "Barra": "Barra",
    "Galleta": "Galleta"
  };

  // Guarda el id del producto y de su categoría actualmente visibles.
  // A futuro, este es el valor que se mandaría al servidor para
  // contar cuántas veces se escaneó el QR de cada pan.
  let productoActualId = null;
  let categoriaActualId = null;

  // ---------------------------------------------
  // 2. LA FUNCIÓN QUE PINTA UN PRODUCTO EN EL DOM
  // ---------------------------------------------
  function renderProduct(id) {
    const producto = productos[id];
    if (!producto) {
      console.warn('Producto no encontrado:', id);
      return;
    }

    productoActualId = id;
    categoriaActualId = producto.categoria; // ej. "Pan Dulce"

    document.getElementById('product-image').src = producto.imagen;
    document.getElementById('product-image').alt = producto.nombre;
    document.getElementById('product-name').textContent = producto.nombre;
    document.getElementById('product-category').textContent = `Categoría: ${producto.categoria}`;
    document.getElementById('product-description').textContent = producto.descripcion;

    // El precio es opcional: si el producto no lo trae, se oculta esa línea.
    const precioLi = document.getElementById('precio');
    if (producto.precio) {
      precioLi.textContent = producto.precio;
      precioLi.style.display = '';
    } else {
      precioLi.style.display = 'none';
    }

    // Reconstruye la lista de ingredientes (puede variar en cantidad)
    const lista = document.getElementById('ingredientes-lista');
    lista.querySelectorAll('li:not(.precio)').forEach(li => li.remove());
    producto.ingredientes.forEach(ing => {
      const li = document.createElement('li');
      li.textContent = ing;
      lista.insertBefore(li, precioLi); // el precio siempre queda al final
    });

    // NOTA (a futuro, no ahora): aquí es donde se mandaría al servidor
    // el conteo de escaneo, algo como:
    // fetch(`/api/escaneos?producto=${productoActualId}`, { method: 'POST' });
  }

  // ---------------------------------------------
  // 3. LEER EL ID DE PRODUCTO DESDE LA URL
  //    Ejemplo real de QR: https://tusitio.com/producto.html?producto=concha
  // ---------------------------------------------
  function obtenerIdDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get(PARAM_URL);
  }

  // Actualiza la URL sin recargar la página, para que sea
  // compartible/copiable y refleje el producto que se está viendo.
  function actualizarURL(id) {
    const url = new URL(window.location);
    url.searchParams.set(PARAM_URL, id);
    history.pushState({ producto: id }, '', url);
  }

  // ---------------------------------------------
  // 4. CONECTAR LOS BOTONES DE CROSS-NAVIGATION
  // ---------------------------------------------
  document.querySelectorAll('.cross-nav-card').forEach(card => {
    card.addEventListener('click', () => {
      const categoria = card.dataset.category;
      const idProducto = categoriaAProducto[categoria];
      if (idProducto) {
        renderProduct(idProducto);
        actualizarURL(idProducto);
      }
    });
  });

  // Soporta el botón de "atrás/adelante" del navegador
  window.addEventListener('popstate', () => {
    const id = obtenerIdDesdeURL() || PRODUCTO_POR_DEFECTO;
    renderProduct(id);
  });

  // ---------------------------------------------
  // 5. PRODUCTO INICIAL: viene del QR / de la URL,
  //    o si no hay ninguno, se usa uno por defecto.
  // ---------------------------------------------
  const idInicial = obtenerIdDesdeURL() || PRODUCTO_POR_DEFECTO;
  renderProduct(idInicial);
  actualizarURL(idInicial);
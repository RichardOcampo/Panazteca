document.addEventListener("DOMContentLoaded", () => {
        const contenedor = document.getElementById("cross-nav-container");

        // Limpiamos el contenedor por si acaso
        contenedor.innerHTML = "";

        // Recorremos cada producto en el diccionario
        // Usamos Object.entries para tener la LLAVE (id) de cada producto,
        // que es lo que index.html espera recibir en el parámetro ?producto=
        Object.entries(productos).forEach(([id, prod]) => {
            contenedor.innerHTML += `
                    <button class="cross-nav-card" data-id="${id}" data-category="${prod.categoria}">
                        <img src="${prod.imagen}" alt="${prod.nombre}">
                        <span>${prod.nombre} (${prod.categoria})</span>
                    </button>
                `;
        });

        // Al hacer click, mandamos al usuario a index.html con el id del
        // producto en la URL. index.html (via main.js) lee ese parámetro
        // y pinta la info correspondiente, igual que si hubiera escaneado
        // el QR de ese producto.
        contenedor.querySelectorAll(".cross-nav-card").forEach(card => {
            card.addEventListener("click", () => {
                const id = card.dataset.id;
                window.location.href = `index.html?producto=${encodeURIComponent(id)}`;
            });
        });
    });
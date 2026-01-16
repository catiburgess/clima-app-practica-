const localidades = [
  { id: 1, nombre: "Playa del Viento", temp: 22, estado: "Soleado" },
  { id: 2, nombre: "Montaña Azul", temp: 10, estado: "Nublado" },
  { id: 3, nombre: "Valle Verde", temp: 18, estado: "Lluvioso" },
  { id: 4, nombre: "Costa Dorada", temp: 25, estado: "Soleado" },
  { id: 5, nombre: "Ciudad Central", temp: 20, estado: "Nublado" },
  { id: 6, nombre: "Desierto Rojo", temp: 30, estado: "Soleado" },
  { id: 7, nombre: "Bosque Frío", temp: 12, estado: "Lluvioso" },
  { id: 8, nombre: "Isla Azul", temp: 27, estado: "Despejado" },
  { id: 9, nombre: "Pueblo Norte", temp: 15, estado: "Nublado" },
  { id: 10, nombre: "Pueblo Sur", temp: 14, estado: "Lluvioso" }
];

// HOME
const contenedor = document.getElementById("contenedor-localidades");

if (contenedor) {
  localidades.forEach(l => {
    contenedor.innerHTML += `
      <article class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100 text-center">
          <div class="card-body">
            <h5 class="card-title">${l.nombre}</h5>
            <p class="card-text">${l.temp} °C</p>
            <span class="badge bg-info">${l.estado}</span>
            <div class="mt-3">
              <a href="detalle.html?id=${l.id}" class="btn btn-primary btn-sm">Ver detalle</a>
            </div>
          </div>
        </div>
      </article>
    `;
  });
}

// DETALLE
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id) {
  const ciudad = localidades.find(l => l.id == id);

  document.getElementById("titulo-ciudad").textContent = ciudad.nombre;
  document.getElementById("temp").textContent = ciudad.temp;
  document.getElementById("estado").textContent = ciudad.estado;
}
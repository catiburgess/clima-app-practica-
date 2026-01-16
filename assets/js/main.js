// ==========================
// MODELO DE DATOS
// ==========================
const lugares = [
  {
    id: 1,
    nombre: "Playa del Viento",
    tempActual: 22,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 24, estado: "Soleado" },
      { dia: "Martes", min: 17, max: 23, estado: "Nublado" },
      { dia: "Miércoles", min: 16, max: 22, estado: "Soleado" },
      { dia: "Jueves", min: 18, max: 25, estado: "Soleado" },
      { dia: "Viernes", min: 19, max: 26, estado: "Lluvioso" }
    ]
  },
  {
    id: 2,
    nombre: "Montaña Azul",
    tempActual: 10,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 5, max: 12, estado: "Nublado" },
      { dia: "Martes", min: 4, max: 11, estado: "Lluvioso" },
      { dia: "Miércoles", min: 3, max: 10, estado: "Lluvioso" },
      { dia: "Jueves", min: 6, max: 13, estado: "Nublado" },
      { dia: "Viernes", min: 7, max: 14, estado: "Soleado" }
    ]
  },
  {
    id: 3,
    nombre: "Valle Verde",
    tempActual: 18,
    estadoActual: "Lluvioso",
    pronosticoSemanal: [
      { dia: "Lunes", min: 14, max: 20, estado: "Lluvioso" },
      { dia: "Martes", min: 13, max: 19, estado: "Nublado" },
      { dia: "Miércoles", min: 12, max: 18, estado: "Lluvioso" },
      { dia: "Jueves", min: 14, max: 21, estado: "Soleado" },
      { dia: "Viernes", min: 15, max: 22, estado: "Soleado" }
    ]
  },
  {
    id: 4,
    nombre: "Ciudad Central",
    tempActual: 20,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 16, max: 22, estado: "Nublado" },
      { dia: "Martes", min: 15, max: 21, estado: "Soleado" },
      { dia: "Miércoles", min: 14, max: 20, estado: "Soleado" },
      { dia: "Jueves", min: 16, max: 23, estado: "Nublado" },
      { dia: "Viernes", min: 17, max: 24, estado: "Lluvioso" }
    ]
  },
  {
    id: 5,
    nombre: "Isla Azul",
    tempActual: 27,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 23, max: 29, estado: "Soleado" },
      { dia: "Martes", min: 22, max: 28, estado: "Soleado" },
      { dia: "Miércoles", min: 21, max: 27, estado: "Nublado" },
      { dia: "Jueves", min: 22, max: 28, estado: "Soleado" },
      { dia: "Viernes", min: 23, max: 30, estado: "Soleado" }
    ]
  }
];

// ==========================
// FUNCIÓN: BUSCAR LUGAR
// ==========================
function buscarLugar(id) {
  for (const lugar of lugares) {
    if (lugar.id === id) {
      return lugar;
    }
  }
  return null;
}

// ==========================
// FUNCIÓN: CALCULAR ESTADÍSTICAS
// ==========================
function calcularEstadisticas(pronostico) {
  let min = pronostico[0].min;
  let max = pronostico[0].max;
  let suma = 0;
  let soleados = 0;
  let lluviosos = 0;

  for (const dia of pronostico) {
    if (dia.min < min) min = dia.min;
    if (dia.max > max) max = dia.max;

    suma += (dia.min + dia.max) / 2;

    if (dia.estado === "Soleado") soleados++;
    if (dia.estado === "Lluvioso") lluviosos++;
  }

  const promedio = (suma / pronostico.length).toFixed(1);

  let resumen = "Semana variable.";
  if (soleados > lluviosos) resumen = "Semana mayormente soleada.";
  else if (lluviosos > soleados) resumen = "Semana lluviosa.";

  return {
    min,
    max,
    promedio,
    soleados,
    lluviosos,
    resumen
  };
}

// ==========================
// HOME: MOSTRAR LUGARES
// ==========================
const contenedor = document.getElementById("contenedor-localidades");

if (contenedor) {
  for (const lugar of lugares) {
    contenedor.innerHTML += `
      <article class="col-12 col-md-4 mb-4">
        <div class="card h-100 text-center">
          <div class="card-body">
            <h5>${lugar.nombre}</h5>
            <p>${lugar.tempActual} °C</p>
            <span class="badge bg-info">${lugar.estadoActual}</span>
            <div class="mt-3">
              <a href="detalle.html?id=${lugar.id}" class="btn btn-primary btn-sm">
                Ver detalle
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

// ==========================
// DETALLE: PRONÓSTICO + ESTADÍSTICAS
// ==========================
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id) {
  const lugar = buscarLugar(Number(id));
  const stats = calcularEstadisticas(lugar.pronosticoSemanal);

  let htmlPronostico = "<h3>Pronóstico semanal</h3><ul>";
  for (const dia of lugar.pronosticoSemanal) {
    htmlPronostico += `<li>${dia.dia}: ${dia.min}° / ${dia.max}° - ${dia.estado}</li>`;
  }
  htmlPronostico += "</ul>";

  document.getElementById("pronostico").innerHTML = htmlPronostico;

  document.getElementById("estadisticas").innerHTML = `
    <h3>Estadísticas de la semana</h3>
    <p>Mínima: ${stats.min} °C</p>
    <p>Máxima: ${stats.max} °C</p>
    <p>Promedio: ${stats.promedio} °C</p>
    <p>Días soleados: ${stats.soleados}</p>
    <p>Días lluviosos: ${stats.lluviosos}</p>
    <strong>${stats.resumen}</strong>
  `;
}

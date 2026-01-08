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

  let promedio = suma / pronostico.length;

  let resumen = "Semana variable.";
  if (soleados > lluviosos) resumen = "Semana mayormente soleada.";
  else if (lluviosos > soleados) resumen = "Semana lluviosa.";

  return {
    min,
    max,
    promedio: promedio.toFixed(1),
    soleados,
    lluviosos,
    resumen
  };
}

// ==========================
// MOSTRAR LUGARES (HOME)
// ==========================
const lista = document.getElementById("lista-lugares");

for (const lugar of lugares) {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${lugar.nombre}</strong> - ${lugar.tempActual}°C (${lugar.estadoActual})
    <button onclick="mostrarDetalle(${lugar.id})">Ver detalle</button>
  `;
  lista.appendChild(li);
}

// ==========================
// MOSTRAR DETALLE
// ==========================
function mostrarDetalle(id) {
  const lugar = buscarLugar(id);
  const stats = calcularEstadisticas(lugar.pronosticoSemanal);

  let htmlPronostico = "<ul>";
  for (const dia of lugar.pronosticoSemanal) {
    htmlPronostico += `<li>${dia.dia}: ${dia.min}° / ${dia.max}° - ${dia.estado}</li>`;
  }
  htmlPronostico += "</ul>";

  document.getElementById("detalle-lugar").innerHTML = `
    <h3>${lugar.nombre}</h3>
    <h4>Pronóstico semanal</h4>
    ${htmlPronostico}

    <h4>Estadísticas de la semana</h4>
    <p>Mínima: ${stats.min}°C</p>
    <p>Máxima: ${stats.max}°C</p>
    <p>Promedio: ${stats.promedio}°C</p>
    <p>Días soleados: ${stats.soleados}</p>
    <p>Días lluviosos: ${stats.lluviosos}</p>
    <strong>${stats.resumen}</strong>
  `;
}
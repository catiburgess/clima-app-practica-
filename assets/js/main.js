// ==========================
// CLASE API CLIENT
// ==========================
class WeatherApi {
  async obtenerClima(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&current_weather=true&timezone=auto`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al cargar datos del clima");
    }
    return response.json();
  }
}

// ==========================
// CLASE PRINCIPAL
// ==========================
class WeatherApp {
  constructor(api) {
    this.api = api;
    this.lugares = [
      { id: 1, nombre: "Santiago", lat: -33.45, lon: -70.66 },
      { id: 2, nombre: "Valparaíso", lat: -33.05, lon: -71.62 },
      { id: 3, nombre: "Concepción", lat: -36.82, lon: -73.05 },
      { id: 4, nombre: "La Serena", lat: -29.90, lon: -71.25 },
      { id: 5, nombre: "Puerto Montt", lat: -41.47, lon: -72.94 }
    ];
  }

  buscarLugar(id) {
    return this.lugares.find(l => l.id === id);
  }

  calcularEstadisticas(pronostico) {
    let min = pronostico[0].min;
    let max = pronostico[0].max;
    let suma = 0;
    let diasCalurosos = 0;

    for (const dia of pronostico) {
      if (dia.min < min) min = dia.min;
      if (dia.max > max) max = dia.max;
      suma += (dia.min + dia.max) / 2;
      if (dia.max >= 30) diasCalurosos++;
    }

    const promedio = (suma / pronostico.length).toFixed(1);

    let alerta = "Sin alertas.";
    if (promedio >= 28) alerta = "⚠️ Alerta de calor";
    if (diasCalurosos >= 3) alerta = "⚠️ Semana muy calurosa";

    return { min, max, promedio, alerta };
  }

  async cargarHome() {
    const contenedor = document.getElementById("contenedor-localidades");
    if (!contenedor) return;

    contenedor.innerHTML = "<p>Cargando clima...</p>";

    try {
      contenedor.innerHTML = "";
      for (const lugar of this.lugares) {
        const data = await this.api.obtenerClima(lugar.lat, lugar.lon);
        const temp = data.current_weather.temperature;

        contenedor.innerHTML += `
          <article class="col-12 col-md-4 mb-4">
            <div class="card text-center">
              <div class="card-body">
                <h5>${lugar.nombre}</h5>
                <p>${temp} °C</p>
                <a href="detalle.html?id=${lugar.id}" class="btn btn-primary btn-sm">
                  Ver detalle
                </a>
              </div>
            </div>
          </article>
        `;
      }
    } catch (error) {
      contenedor.innerHTML = "<p>Error al cargar datos del clima</p>";
    }
  }

  async cargarDetalle(id) {
    const lugar = this.buscarLugar(id);
    if (!lugar) return;

    document.getElementById("titulo-ciudad").textContent = lugar.nombre;

    try {
      const data = await this.api.obtenerClima(lugar.lat, lugar.lon);

      const pronostico = data.daily.time.map((dia, i) => ({
        dia,
        min: data.daily.temperature_2m_min[i],
        max: data.daily.temperature_2m_max[i]
      }));

      let htmlPronostico = "<h3>Pronóstico semanal</h3><ul>";
      pronostico.forEach(d =>
        htmlPronostico += `<li>${d.dia}: ${d.min}° / ${d.max}°</li>`
      );
      htmlPronostico += "</ul>";

      document.getElementById("pronostico").innerHTML = htmlPronostico;

      const stats = this.calcularEstadisticas(pronostico);

      document.getElementById("estadisticas").innerHTML = `
        <h3>Estadísticas</h3>
        <p>Mínima: ${stats.min} °C</p>
        <p>Máxima: ${stats.max} °C</p>
        <p>Promedio: ${stats.promedio} °C</p>
        <strong>${stats.alerta}</strong>
      `;
    } catch (error) {
      document.getElementById("estadisticas").innerHTML =
        "<p>Error al cargar detalle del clima</p>";
    }
  }
}

// ==========================
// INICIALIZACIÓN
// ==========================
const app = new WeatherApp(new WeatherApi());

// HOME
app.cargarHome();

// DETALLE
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if (id) {
  app.cargarDetalle(Number(id));
}

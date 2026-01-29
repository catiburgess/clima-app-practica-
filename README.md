# App de Clima – Módulo 6

Aplicación de clima desarrollada como una **Single Page Application (SPA)** utilizando **Vue.js**.
Este módulo tiene como objetivo aplicar el uso de componentes, enrutamiento y reactividad
para mostrar información climática de distintas localidades.

## Descripción general
La aplicación permite visualizar un listado de localidades y acceder al detalle de cada una
sin recargar la página, haciendo uso de Vue Router.  
Los datos del clima se gestionan desde un archivo de datos y se renderizan dinámicamente
mediante directivas propias de Vue.

## Estructura del proyecto

src/
├─ main.js
├─ App.vue
├─ router/
│ └─ index.js
├─ views/
│ ├─ Home.vue
│ └─ Detalle.vue
└─ data/
└─ lugares.js

- **Home.vue**: vista principal con el listado de localidades.
- **Detalle.vue**: vista de detalle con información climática por localidad.
- **router/index.js**: configuración de rutas para la navegación SPA.
- **lugares.js**: archivo con los datos de las localidades.

## Funcionalidades principales
- Navegación SPA sin recarga de página.
- Listado dinámico de localidades.
- Vista de detalle por localidad.
- Uso de directivas Vue:
  - `v-for`
  - `v-if`
  - `v-model`
- Interacción con el usuario mediante búsqueda de localidades.

## Tecnologías utilizadas
- Vue.js 3
- Vue Router
- JavaScript ES6+
- HTML5
- CSS / Bootstrap
- Vite

## Ejecución del proyecto
1. Instalar dependencias:
   ```bash
   npm install
Ejecutar servidor de desarrollo:

npm run dev
Abrir la aplicación en el navegador usando la URL indicada por Vite.

Repositorio
https://github.com/catiburgess/clima-app-practica-.git


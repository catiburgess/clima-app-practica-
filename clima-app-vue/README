App de Clima — Módulo 7

Aplicación de clima desarrollada con Vue.js que incorpora un sistema básico de autenticación de usuarios, manejo de estado global con Vuex y rutas protegidas mediante Vue Router.

Este módulo extiende la SPA creada en el Módulo 6 agregando funcionalidades de login, personalización por usuario y control de acceso.


Funcionalidades implementadas

Autenticación de usuarios

La aplicación incluye un sistema de login con validación de credenciales.

- Formulario de inicio de sesión
- Validación de usuario y contraseña
- Mensaje de error si las credenciales son incorrectas
- Redirección automática al iniciar sesión correctamente


Usuarios de prueba

Usuario 1
Email: camila@clima.com
Contraseña: 1234

Usuario 2
Email: martin@clima.com
Contraseña: 1234


Estado global con Vuex

Se utiliza Vuex para manejar el estado de autenticación.

Se almacena:

- Usuario actual
- Estado de sesión
- Favoritos del usuario
- Preferencias del usuario

Acciones implementadas:

- Login
- Logout


Rutas implementadas

/             Página principal del clima
/login        Inicio de sesión
/lugar/:id    Detalle del clima
/favoritos    Lugares favoritos


Rutas protegidas

La ruta /favoritos está protegida.
Si el usuario no está autenticado, se redirige automáticamente a /login.


Personalización por usuario

Cuando el usuario inicia sesión:

- Se muestra su nombre en el header
- Se habilita la sección favoritos
- Se personaliza la interfaz


Tecnologías utilizadas

- Vue 3
- Vue Router
- Vuex
- JavaScript
- CSS
- Vite


Estructura del proyecto

src/
 ├── App.vue
 ├── main.js
 ├── style.css
 ├── router/
 ├── store/
 ├── data/
 └── views/


Instalación del proyecto

Instalar dependencias:

npm install

Ejecutar proyecto:

npm run dev

Abrir en navegador:

http://localhost:5173


Repositorio GitHub

https://github.com/catiburgess/clima-app-practica-.git


Proyecto desarrollado para el Módulo 7 — App de Clima
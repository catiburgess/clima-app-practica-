# 🌤️ Clima App — Módulo 7

Aplicación de clima desarrollada en Vue.js, con autenticación de usuarios, manejo de estado global y rutas protegidas.

## 🚀 Funcionalidades principales

- **Autenticación de usuarios:**  
    - Formulario de login con validación de credenciales.
    - Mensaje de error si las credenciales son incorrectas.
    - Redirección automática tras inicio de sesión exitoso.

- **Usuarios de prueba:**
    - **Usuario 1:**  
        - Email: `camila@clima.com`  
        - Contraseña: `1234`
    - **Usuario 2:**  
        - Email: `martin@clima.com`  
        - Contraseña: `1234`

- **Estado global con Vuex:**  
    - Manejo de usuario actual, sesión, favoritos y preferencias.
    - Acciones: login y logout.

- **Rutas implementadas:**
    - `/` — Página principal del clima
    - `/login` — Inicio de sesión
    - `/lugar/:id` — Detalle del clima
    - `/favoritos` — Lugares favoritos (🔒 protegida, requiere login)

- **Personalización por usuario:**  
    - Nombre en el header, favoritos y preferencias personalizadas tras login.

## 🛠️ Tecnologías utilizadas

- Vue 3
- Vue Router
- Vuex
- JavaScript
- CSS
- Vite

## 📁 Estructura del proyecto

```
src/
 ├── App.vue
 ├── main.js
 ├── style.css
 ├── router/
 │   └── index.js
 ├── store/
 │   └── index.js
 ├── data/
 │   ├── lugares.js
 │   └── usuarios.js
 └── views/
         ├── Home.vue
         ├── Detalle.vue
         ├── Login.vue
         └── Favoritos.vue
```

## ⚙️ Instalación y ejecución

1. Instala las dependencias:
     ```
     npm install
     ```
2. Ejecuta el proyecto:
     ```
     npm run dev
     ```
3. Abre en tu navegador:  
     [http://localhost:5173](http://localhost:5173)

## 📌 Repositorio

[Repositorio en GitHub](https://github.com/catiburgess/clima-app-practica-.git)

## 👨‍💻 Autor

Proyecto desarrollado para el Módulo 7 — App de Clima  
Bootcamp Desarrollo Frontend Vue.js

## ✅ Estado del proyecto

- [✅] Login funcional
- [✅] Vuex implementado
- [✅] Rutas protegidas
- [✅] SPA con Vue Router
- [✅] Personalización por usuario
# App de Clima – Módulo 3

Refactorización visual de la App de Clima desarrollada en el Módulo 2.
En esta versión se mejora la interfaz, la organización de estilos y la responsividad,
manteniendo la funcionalidad existente.

## Temática
Aplicación de clima con lugares ficticios (playas, montañas y ciudades).

## Metodología de estilos
Se utiliza la metodología BEM para organizar las clases CSS de forma clara y mantenible.

## SASS y estructura de estilos
Los estilos están organizados utilizando SASS con la siguiente estructura:

- scss/base: variables globales (colores, tipografías, espaciados)
- scss/layout: estilos de estructura general (header, contenido y footer)
- scss/components: estilos de componentes reutilizables (cards de lugares)

Los archivos SASS se compilan en un único archivo CSS (`assets/css/main.css`).

## Tecnologías
- HTML5
- Bootstrap
- SASS
- JavaScript

## Ejecución
1. Compilar SASS con `sass scss/main.scss assets/css/main.css`
2. Abrir `index.html` en el navegador

Repositorio: https://github.com/catiburgess/clima-app-practica-.git
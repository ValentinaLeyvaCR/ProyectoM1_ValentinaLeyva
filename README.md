# Arcobaleno Studio
Generador de paleta de colores interactivo para el proyecto integrador del modulo 1. 

# Funcionalidades
 - Genera paletas de colores aleatorias con un solo clic
 - Permite elegir cuántos colores quieres ver (6, 8 o 9)
 - Cada color se muestra en una tarjeta con su nombre y sus códigos (HEX y HSL)
 - Actualiza la paleta automáticamente al cambiar la cantidad de colores en el desplegable
 - Diseño responsive: las tarjetas se acomodan solas según el tamaño de la pantalla

# Tecnologias usadas 
- HTML
- CSS
- JavaScript

# Como usar

1. Abrir `index.html` en el navegador con link de github. 
2. Al ingresar a la pagina ya se veran por defecto 6 colores.
3. Elige la cantidad de colores que quieres generar por paleta en el desplegable `cantidad de colores`.
4. Da click en el boton `generar paleta` para crear una nueva paleta.
5. Cada tarjeta va a mostrar su respectiva informacion por color, incluyendo el codigo HSL y el HEX. 

# Decisiones tecnicas

- Se genera cada color variando solo el tono (H) de forma aleatoria entre 0 y 360, dejando fijos la saturación en 70% y el brillo en 60%. 
- Se implementó la función hslToHex() para poder mostrar cada color en dos formatos distintos
- En vez de escribir cada tarjeta de color a mano en el HTML, se usa document.createElement() para crearlas automáticamente.
- se definieron los colores de la pagina como variables CSS para reutilizarlos fácilmente.

# Estructura del proyecto

arcobaleno-studio
- index.html
- CSS
  - styles.css
- JS
  - index.js

# como desplegar y ejecutar 

1. Se debe clonar el repositorio https://github.com/ValentinaLeyvaCR/ProyectoM1_ValentinaLeyva.git.
2. 


# Uso de la IA en el proyecto

Funcion cambio de tema claro a oscuro

//Cambio de tema de oscuro a claro

![const botonTema = document.getElementById  ("tema-claro"); 

  if (botonTema) {
    botonTema.addEventListener("click", function () {
        const temaActual = document.documentElement.getAttribute("data-theme");
        const nuevoTema = temaActual === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", nuevoTema);

        localStorage.setItem("arcobaleno-tema", nuevoTema);

        });
 } else {
    console.log("no existe un boton de tema para apretar");
    }`] 

    ![alt text](image.png) 
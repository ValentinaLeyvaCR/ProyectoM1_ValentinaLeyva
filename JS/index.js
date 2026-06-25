

function hslToHex(h, s, l) {
    l = l / 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = function (n) {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return "#" + f(0) + f(8) + f(4);
}


function crearSwatch(colorHSL, colorHEX, nombre){  //esta funcion lo que hace es crear la misma estructura del article de html para que se vayan generando de manera automatica 
    const swatch = document.createElement("article");
    swatch.className = "swatch"; //"swatch" cuando se muestra el color y la informacion abajo
    
    //Este es color de la tarjeta 
    const color = document.createElement("div");
    color.className = "swatch-color"; //este muestra solo el color de la tarjeta
    color.style.background = colorHSL;
    //aqui lo que se hace es crear la etiqueta div con clase y decirle que como color se debe poner el que establezca el parametro colorHSL
    
    // codigos de color de la tarjeta 
    const info = document.createElement("div");
    info.className = "swatch-info"; //este muestra la informacion de la tarjeta
    
    const elNombre = document.createElement("p");
    elNombre.className = "swatch-nombre"; //este muestra el nombre del color
    elNombre.textContent = nombre;
    //Aqui se crea un elemento p donde se vera el nombre del color que sera el que corresponda al parametro nombre
    
    const elCodigo = document.createElement("p");
    elCodigo.className = "swatch-codigo"; //aqui el codigo del color
    elCodigo.textContent = colorHEX + " . " + colorHSL;
    //Aqui se genera otro p que mostrara el codigo del color en hex y en hsl, y se debe generar la estructura de como se debe ver 
    
    info.append(elNombre, elCodigo); //el appendChild sirve para agregar los hijos a la etiqueta padre, osea en este caso meter los dos p elNonbre y elCodigo dentro del div info
    swatch.append(color, info);
    
    return swatch;
}

//esta funcion lo que hace es generar el hsl generando aleatoriamente solo la h del hsl, y genera tambien el hex de la misma manera usando el codigo hsl para generar el hex y esos dos resultados los guarda en un objeto
function generarColor(){ 
    const h = Math.round(Math.random() * 360); 
    const hsl = "hsl("+ h +", 70%, 60%)";
    const hex = hslToHex(h, 70, 60);
    
    return {hsl: hsl, hex: hex};
};

const galeria = document.getElementById("galeria");

function renderPaleta(cantidad) { //esta funcion renderiza la paleta para que cada que se genere una nueva paleta cambien los datos 
    galeria.innerHTML = ""; // limpia todos los colores que ya estan y se generan unos nuevos 
    
    for (let i = 0; i < cantidad; i++){ // este for es el encargado de generar las paleta con el color y numerarlas segun la cantidad indicada
        const color = generarColor();
        const swatch = crearSwatch(color.hsl, color.hex, "Color " + (i + 1));
        galeria.appendChild(swatch);
    };
    
}

const boton = document.getElementById("generar"); //eso srive para darle funcion al boton generar paleta 
const selector = document.getElementById("cantidad"); //esto le da funcion al desplegable de selector de cantidad de colores que se deben generar

//mensaje de aviso de accion
const mensaje = document.getElementById("mensaje");
let mensajeTimeoutId = null; // aqui guardamos el tiempo que esta esperando para esconder el mensaje

function mostrarMensaje(texto) {
    if (!mensaje) return; 

mensaje.textContent = texto;
    mensaje.classList.add("mensaje-visible");

if (mensajeTimeoutId) {
        clearTimeout(mensajeTimeoutId);
}

mensajeTimeoutId = setTimeout(function () {
        mensaje.classList.remove("mensaje-visible");
    }, 2200); 
}


if (boton) { // con este if se le dice que cantidad de colores debe generar al activar el evento con el click
    boton.addEventListener("click", function () { 
        const cantidad = Number(selector.value);  //esto es lo que debe pasar cuando se de click al boton generar la cantidad seleccionada en el desplegable, el Number lo convierte de string a numero
        renderPaleta(cantidad);
        mostrarMensaje("Nueva paleta generada");
    });    
} else { 
    console.log("no existe un boton para apretar");
}

selector.addEventListener("change", function () { // esta funcion sirve para que cada que se seleccione la cantidad en el desplegable se actualice el color sin oprimir el boton generar
    const cantidad = Number(selector.value);
    renderPaleta(cantidad);
    mostrarMensaje(cantidad + " colores generados"); 

});
renderPaleta(6); //esto hace que apenas se abra la pagina se generen 6 colores por defecto

//Cambio de tema de oscuro a claro

const botonTema = document.getElementById("tema-claro"); 

if (botonTema) {
    botonTema.addEventListener("click", function () {
        const temaActual = document.documentElement.getAttribute("data-theme");
        const nuevoTema = temaActual === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", nuevoTema);

        localStorage.setItem("arcobaleno-tema", nuevoTema);

        });
} else {
    console.log("no existe un boton de tema para apretar");
    }
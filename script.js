const textos = ["speedcuber ⬜", "salsa dancer 🕺🏼", "gamer 👾", "animal lover 🐶"];
const elementoTexto = document.getElementById('text');

let indiceTextoActual = 0;

function cambiarTextoConEfecto() {
    elementoTexto.style.opacity = 0; // Cambia la opacidad a 0 para ocultar el texto actual

    setTimeout(() => {
        elementoTexto.textContent = textos[indiceTextoActual];
        elementoTexto.style.opacity = 1; // Restaura la opacidad a 1 para mostrar el nuevo texto con una transición suave
        indiceTextoActual = (indiceTextoActual + 1) % textos.length;
    }, 500); // Espera 500 milisegundos (0.5 segundos) antes de mostrar el nuevo texto
}

// Cambia el texto cada 3 segundos (3000 milisegundos)
setInterval(cambiarTextoConEfecto, 3000);

// Llama a la función inicialmente para que el texto se muestre de inmediato
cambiarTextoConEfecto();
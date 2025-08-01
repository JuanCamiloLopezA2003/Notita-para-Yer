// Efecto de mensaje que se escribe solo
const mensaje = "luchando, con esto busco que recuerdes lo fuerte que has sido y elogiar eso de ti porque pese a todo sigues adelante, luchando en contra de tus tormentas, y si un día me preguntan ¿Qué fue lo que viste en ella? diría que fue su sonrisa y ojitos preciosos, pero si me agarran sensible diría, que eres un gran mujer que cada día se esfuerza muchísimo, da todo de si para salir adelante, que a pesar de tener días cansados siempre logra salir adelante, también es la persona que sin importar que este pasando en contra se mantiene firme y no se da por vencida, que es una mujer entregada, muy trabajadora, inteligente, noble y es de admirar en todo lo que hace; y por supuesto para mi ella es la mas preciosa, noble empática, sincera, y que tiene el corazón mas grande y noble. Gracias por compartir tu amor, tu alegría, y tus días. Te quiero y adoro más de lo que las palabras pueden explicar 💗";
let index = 0;
const p = document.createElement("p");
document.querySelector(".mensaje").appendChild(p);

function escribir() {
  if (index < mensaje.length) {
    p.textContent += mensaje.charAt(index);
    index++;
    setTimeout(escribir, 40);
  }
}

window.addEventListener("load", escribir);


const fondo = document.getElementById("imagen");

// EScucha el evento "keydown"
document.addEventListener("keydown", (event) => {
  // Comprueba si se pulsa Ctrl + B
  if (event.ctrlKey && event.key === "b") {
    // Cambia el fondo del contenedor
    fondo.style.backgroundImage = "url('landscape.jpg')";
  }
});
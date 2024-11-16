
// Función constructora
function Punto(coordenadaX, coordenadaY) {
  this.x = Number.isFinite(coordenadaX) ? coordenadaX : 0;
  this.y = Number.isFinite(coordenadaY) ? coordenadaY : 0;

  this.cambiar = function (nuevaX, nuevaY) {
    this.x = Number.isFinite(nuevaX) ? nuevaX : 0;
    this.y = Number.isFinite(nuevaY) ? nuevaY : 0;
  };

  // Metodo que crea una coopia de Puntos
  this.copia = function () {
    return new Punto(this.x, this.y);
  };
  
  // Método que recibe un segundo punto y devuelve un tercer punto resultado de sumar las coordenadas de los dos anteriores.
  this.suma = function (otroPunto){
    return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
  };
}

// Pruebas del funcionamiento
// Crea un punto inicial
const punto1 = new Punto(3, 4);
console.log("Punto de partida:", punto1);

//Cambia las coordenadas del Punto
punto1.cambiar(8,9);
console.log("Punto1 cambiado:", punto1);

// Copia del Punto1
const punto2 = punto1.copia();
console.log("Copia del Punto1:", punto2);

// Suma dos puntos
const punto3 = punto1.suma(new Punto(1,2));
console.log("Suma del punto1 más un punto nuevo:", punto3);

// Valida los no numericos
const punto4 = new Punto("Hola", null);
console.log("Punto de valores no numericos:", punto4);


Array.prototype.calculoMediaAritmetica = function(){
  // Si el array está vacío se devuelve un mensaje. 
  if (this.length === 0){
    console.log("El array está vacío");
  }

  // Suma todos los elementos con Reduce(). 'this' es el array sobre el que llamamos el método reduce().
  const suma = this.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

  // Dividir la suma entre el numero de elementos del array
  return suma / this.length;
}

// Valida el funcioanmiento
// Array números
const numArray = [10,8,4,20,13];
console.log("La media del conjunto de números es:", numArray.calculoMediaAritmetica());

// Array Vacío
const arrayVacio = [];
console.log("La media del conjunto de números es:", arrayVacio.calculoMediaAritmetica());
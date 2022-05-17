const { LinkedList, Node } = require("../estructuras");
const { parse, stringify } = require("flatted/cjs");
// LinkedList es como las mamushkas de la lista
// agregar el metodo size al prototipo de LinkedList.
// Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size = function () {
  // Tu código acá
  return this.len;
};

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:
  let arr = [];
  let current = this.head;
  let next = current.next;
  while (current) {
    current = current.next;
  }
};

let list = new LinkedList();
list.add(4);
list.add(1);
list.add(6);
list.add(2);
//console.log(JSON.stringify(list));
list.orderList();

// agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
// tomar el head como posicion 1

LinkedList.prototype.insert = function (data, pos) {
  let nodeInstert = new Node(data);
  let current = this.data;
  if (!this.head) return false;
  if (this.len < pos && this.len === 1) {
    return this.add(data);
  } else if (pos === 1) {
    nodeInstert.next = current;
    this.head = nodeInstert;
    this.len++;
  } else {
    while (pos - 1 > 1) {
      pos--;
      current = current.next;
    }
    nodeInstert.next = current.next;
    current.next = nodeInstert;
    this.len++;
  }
};

const miListitaEnlazada = new LinkedList();
miListitaEnlazada.add(33);
miListitaEnlazada.add(44);
miListitaEnlazada.add(66);
console.log(miListitaEnlazada);
miListitaEnlazada.insert(2, 1);
console.log(miListitaEnlazada);

//console.log(JSON.stringify(miListitaEnlazada));
miListitaEnlazada.insert(777, 1);
//console.log(miListitaEnlazada);
//console.log(stringify(miListitaEnlazada));

LinkedList.prototype.orderList = function () {
  // Tu código aca:
  var current = this.head;
  var aux = null;
  
  if(!current)return null;

  while(current !== null){
    index = current.next;
  while(index !== null){
    if(current.value < index.value){
       aux = current.value;
       current.value = index.value;
       index.value = aux;
    }
    index = index.next; 
  }
    current = current.next;
  }
 
};

// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

// Vemos lo ya implementado en el archivo estructuras.js
// function LinkedList() {
//   this.head = null
// }

// function Node(value){
// this.value = value;
// this.next = null
// }

/* ////////////////////////----- ----- --------/////////////////// */

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no sean numeros por 'NotNumber' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Hola']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['NotNumber'] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
};

module.exports = {
  LinkedList,
};

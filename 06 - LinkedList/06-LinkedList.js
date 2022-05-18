const { LinkedList, Node } = require("../estructuras");
const { parse, stringify } = require("flatted/cjs");

class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.next = null;
  }
}
class Lista {
  constructor() {
    this.cabeza = null;
    this.count = 0;
  }
  add(valor) {
    let n = new Nodo(valor);
    if (this.cabeza === null) {
      this.cabeza = n;
      this.count++;
    } else {
      let current = this.cabeza;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = n;
      this.count++;
    }
  }
}
const listTest = new Lista();
listTest.add(5);
listTest.add(10);

//console.log(JSON.stringify(listTest));

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
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  this.head = null;
  this.len = null;

  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    list.add(arr[i]);
  }
};

let list = new LinkedList();
list.add(4);
list.add(1);
list.add(6);
list.add(2);
//console.log(JSON.stringify(list));
list.orderList();
//console.log(JSON.stringify(list));

// agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
// tomar el head como posicion 1

/* LinkedList.prototype.insert = function (data, pos) {
  if (this.len < pos && pos - this.len === 1) return this.add(data);
  let newNodo = new Node(data);
  let current = this.head;
  console.log("1111111", current);
  if (pos === 1) {
    newNodo.next = current;
    console.log("22222222", newNodo);
    this.head = newNodo;
  }
  while (pos - 1 > 1) {
    pos--;
    current = current.next;
  }
  newNodo.next = current.next; // acá pos es 2
  current.next = newNodo;
  this.len++;
}; */

LinkedList.prototype.insert = function (data, pos) {
  let arr1 = [];
  let arr2 = [];
  let current = this.head;
  while (current) {
    arr1.push(current.value);
    current = current.next;
  }
  console.log(arr1);
};
const miListitaEnlazada = new LinkedList();
miListitaEnlazada.add(33);
miListitaEnlazada.add(44);
miListitaEnlazada.add(66);
//console.log(miListitaEnlazada);
miListitaEnlazada.insert(2, 1); 
console.log(miListitaEnlazada);

//console.log(JSON.stringify(miListitaEnlazada));

//console.log(miListitaEnlazada);
//console.log(stringify(miListitaEnlazada));

LinkedList.prototype.orderList = function () {
  // Tu código aca:
  var current = this.head;
  var aux = null;

  if (!current) return null;

  while (current !== null) {
    index = current.next;
    while (index !== null) {
      if (current.value < index.value) {
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

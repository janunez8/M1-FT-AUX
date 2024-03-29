function timeConversion(time) {
  // Recibe una hora en formato 12 horas y retorna la hora en formato 24 horas
  // Ejemplo:
  // timeConversion("12:00 AM") // "00:00"
  // timeConversion("12:00 PM") // "12:00"
  // timeConversion("27:00") // false
  // timeConversion("12:60") // false
  // timeConversion("09:00 PM") // "21:00"
  // tu codigo acá

  if (
    time.substr(0, 2) > 12 ||
    time.substr(3, 2) > 60 ||
    time.substr(6, 2) > 60 ||
    time.length < 10
  ) {
    return false;
  } else {
    let h = parseInt(time.substr(0, 2)); //03
    let hNew = time.substr(2, 6); //:15:00

    if (h === 12 && time.substr(-2) === "PM") {
    } else if (h === 12 && time.substr(-2) === "AM") h = "00";
    else if (time.substr(-2) === "PM") h += 12;
    else {
      return time.substr(0, 8);
    }
    return h + hNew;
  }
}
//console.log(timeConversion("03:15:00PM"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.

/*
Crear una funcion saludar que pueda fijar cada vez que la guardo en una variable distintos saludos.
Recibira en la funcion interna el nombre a quien tiene que saludar y retornara el saludo correspondiente seguido por el nombre al ser invocada
*/
function saludar(saludo) {
  return function (name) {
    return saludo + " " + name;
  };
}

greet = saludar("Hola");
console.log(greet("Juan"));
console.log(greet("Pedro"));

/*---------------------------------------------------*/

/* 
Crear una funcion contador que debe incrementar de a uno cada vez que invoco la funcion.
Adicionalmente agregarle una funcion que cuando pasen 8 seg incremente el contador a 100.

*/

function contador() {
  var count = 0;
  setTimeout(() => {
    console.log((count += 100));
  }, 8000);
  return function () {
    count++;
    return count;
  };
}
/* let count = contador();

console.log(count());
console.log(count());
console.log(count());
console.log(count()); */

/*---------------------------------------------------*/
/*
  Retorna una funcion que cuando sea invocada retorne 
un valor creciente.
 el primer valor debe ser el que se le pase por 
parametro a la funcion global.
 
 ejemplo: const Pepe = creciendo(20);
 Pepe(); // "El proximo año va a tener 21"
 Pepe(); // "El proximo año va a tener 22"
*/
function creciendo(n) {
  return () => {
    return `El proximo año ${n++}`;
  };
}

/* let crecer = creciendo(20);
console.log(crecer());
console.log(crecer());
console.log(crecer()); */

/*---------------------------------------------------*/
// Retorna una funcion que cuando sea invocada con un valor mayor a 50 retorne un valor decreciente,
// pero si el valor es menor o igual que 50 retorne un valor creciente
// el primer valor debe ser el que se le pase por parametro a la funcion global.
// ejemplo: const newCounter = arribaArbajo(49);
// newCounter(); // 50
// newCounter(); // 51
// newCounter(); // 52
// newCounter(); // 53
// ejemplo: const newCounter = arribaArbajo(52)
// newCounter(); // 51
// newCounter(); // 50
// newCounter(); // 49

function arribaAbajo(n) {
  if (n > 50) {
    return function () {
      return n--;
    };
  } else {
    return function () {
      return n++;
    };
  }
}

arAba = arribaAbajo(58);
console.log(arAba());
console.log(arAba());
console.log(arAba());
console.log(arAba());
console.log(arAba());
console.log(arAba());

/*---------------------------------------------------*/

// Implementar la funcion closureSum que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  return function (n) {
    return n * multiplier;
  };
};
var c = closureMult(4);
console.log(c(5));

/*---------------------------------------------------*/

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!

  let cache = {};
  return function (x) {
    if (!cache.hasOwnProperty(x)) {
      cache[x] = cb(x); //key : value
      console.log(cache);
    }
    return cache[x];
  };
}

var cache = cacheFunction(function (x) {
  return x * 2;
});
console.log(cache(20));
console.log(cache(20));
console.log(cache(30));

module.exports = {
  timeConversion,
};

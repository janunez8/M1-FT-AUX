
function invertirOrden(array) {
    // [1,2,"x"]
    // ["x",2,1]
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO 
    // debera ser devuelto
    // No vale usar el metodo "reverse"
    // [1, 4, 24, 10, 8, 6]
    let reverse = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0 && array[i] < 10) {
            reverse.unshift(array[i]);
        }
    }
    return reverse;
};

//console.log(invertirOrden([2, 4, 19, 3]))



function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    let comun;
    array1.map(element => {
        array2.map(element2 => {
            if (element == element2) {
                comun = element
            }
        })
    })

    if (comun){
        return comun
    }else{
        return Math.min(...array1, ...array2)
    }
};

//console.log(numeroEnComun([2, 3], [1, 4, 15]))




function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    // Ejemplo: [[1, 3], [10, 20], [4, 5], 2]

    arr = []
    aux = 0;
    array.map(e => {
    console.log("🚀 ~ e", e)
        aux = 0
        if (Array.isArray(e)) {
            console.log("asd")
            e.map(f => {
                aux = aux + f
            })
            arr.push(aux)
        }else{
        arr.push(e)

        }
    })
    return arr
};
//console.log(sumaDeArrays([[1, 3], [10, 20], [4, 5], 2]))



function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Ejemplo divisor = 3 => [x,x,x] y si es divisor = 4 => [x,x,x,x]
    // vemos que todos los elementos deben tener el mismo valor
    // Siendo el número divisible entre el divisor, de no ser así, debe devolver false
    // es decir Si el resultado de la division no es un entero, deben devolver false
    let div = numero / divisor
    let array = new Array(divisor);
    if(Number.isInteger(div)){
        console.log(div)
        return array.fill(div)
    }else{
        return false
    }
};

//console.log(mismoValorMismosElementos(13, 7));


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    return [Math.min(...array), Math.max(...array)]
};
console.log(elementoMenorYMayor([10, 15, 24]))


/* ******************************************************

Que pasaria si los array recibidos fuesen multidimensionales?

****************************************************** */


module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};


console.log('Hellow world 2')

// este es un comentario lineal 

/* esto es 
un comentario 
de multiples 
lineas
*/


//tipos de datos
//Primitivos: Number ,String , boolean(true,false),undenfined

//number

const numero1=20;
const numero2=20.50;
const numero3=-36;

console.log(numero1);
console.log(numero2);
console.log(numero3);

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)


//String o cadena

const alumna='Claudia';
const alumno="Marco";
const numero4="200";
const numero5=200;

console.log(typeof alumna);
console.log(typeof alumno);
console.log(typeof numero4);
console.log(typeof numero5);


//boolean --> False o true

const tinedaDescuento=false;
//const =true;

console.log(tinedaDescuento);
console.log(typeof tinedaDescuento);

//UNDEFINED

let nombre;

console.log(nombre);
console.log(typeof nombre);

//null -> es un object

let apellido=null;

console.log(apellido)
console.log(typeof apellido);

// object
// funtion
// BigInt
// Symbol


//Variables y constantes 

//EcamaSCRIPT 6 = ES6

//EcmaSCRIPT 5 = ES5

//var -> es5 (Forma de declarar una variable)

var nombredemiVariable='un valor';

//cosnt, let -> (el uso de const y let es lo recomendado)

//const -> ES6 (El uso de let es lo recomendado)
//*no se puede reasignar su valor

const edad=55;
const _edad=25;
const edadDeMihijo=15;

//edad=33;//index.js:87 Uncaught TypeError: Assignment to constant variable.



console.log(edad)

//Let -> ES6 (El uso de let es lo recomendado)

//*si podemos reasignar su valor

let edad2=55;
edad2=35;
edad2=22;

console.log(edad2)


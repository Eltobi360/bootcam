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

//operadores matematicos

console.log(2+1);
console.log(2-1);
console.log(2*2);
console.log(1/2);
console.log(1%2);//residuo
console.log(2**3);//dos elevado al cubo

//operador de asignacion
const genero='femenino';
console.log(genero +';)');

//operadores de asignacion

//operador de igualdad y desigualdad no escrita
//Debuelven un valor boleano (true o false)

//este operador no toma encuenta el tipo de datos al comprar sino uno de sus valores

console.log(-1==1);//false
console.log(1=='1'); //true
console.log(1!=1);//false


//operador de igualdad y desigualdad estricta (ES RECOMENDABLE USARLO CASI SIEMPRE)
//DEVUELVEN UN VLAOR BOOLEANO(TRUE O FALSE)
//ESTE OPERADOR SI TOMA EN ENCUENTA EL TIPO DE DATO T SUS VALORES AL COMPARAR

console.log(1===1)//true
console.log(1==='1')//false
console.log(1!==1)//false


//operadores de compracion,siempre deveulven un booleano

console.log(8>5)
console.log(5<1)
console.log(8>=5)
console.log(8<=5)

//operadores logicos (and,or,negacion)

console.log(true&&false)//and
console.log(true||false)//or
console.log(!true)//negacion

//operador de cada (concatenacion)

const saludo='hola'+' '
const nombreCompleto='Jorge'+' '+'Neyra'
const miEdad=37;

const saludoAmigo=saludo+nombreCompleto +'.Tengo '+ miEdad +' años';

console.log(nombreCompleto)
console.log(saludoAmigo)


//Ejercios

//retornarr true si dos string tienen la misma longitud sino devilver false


const cadena1="codigo";

const cadena2="cadaga";

console.log(cadena1.length);
console.log(cadena2.length);

console.log(cadena1.length===cadena2.length)

//2 retornar true si un numero es menor que 40 sino delvover false

const num1=20

console.log(40<num1)

//3 retornar true si un numero es menor que 60 sino delvolver false

const num2=30
console.log(60>30)

//4 retornar true si un nuemro es par sino delvorver false 


const num3 = 3
const num33 = 10
console.log(num3%2===0)//false
console.log(num33%2===0)//false

//5 retornar true si un numero es inpar sino delvorver false

const num4 = 3
const num44 = 10
console.log(num3%2===1)//false
console.log(num33%2===1)//false



//calcular el area del triangulo y mostrar su resultado si no tenemos los valores base y altura

const b=10
const h=5

console.log(b*h/2)

//7 (TODO) almacenar en una constante en un numero de 3 cifras y mostrar la suma de cifras

const num5 = 111; 
const cf1 = num5 / 100 | 0;
const cf2 = (num5 / 10 | 0) % 10;
const cf3 = num5 % 10;
const sumaCifras = cf1 + cf2 + cf3;

console.log(sumaCifras**3)


//  almacenar una constante un monto de dinero , luego mostrar cuanto le toca a cada socio segun la ssiguiente tabla

//socio A= 30% , socio B=20% socio= C=60&

const din=1000
const A=0.3
const B=0.2
const C=0.6

const parteA=(din*A)
const parteB=(din*B)
const parteC=din*C

console.log('Recibe'+' '+ parteA)
console.log('Recibe'+' '+ parteB)
console.log('Recibe'+' '+ parteC)

//condicionales 
if(true){
    //verdadero
}

const nuemro=34

const esPar=nuemro%2===0

if(esPar){
    console.log('Este nuemro es par')
}


//condicionales  (if else)

if(true){
    //verdadero
}else{
    //falso
}

if(esPar){
    console.log('Este número es par')
}else{
    console.log('Este número es impar')
}


//condicionales if, else if , else

if(true){
    //verdadero
}else{
    //falso
}



const heroe="Spiderman"
if(heroe==="Soy batman"){
    console.log('Hola soy bruce')
}else if(heroe==='Spiderman'){
    console.log('Hola soy Peter')
}else if(heroe==='Iroman'){
    console.log('Hola soy Tony')
}else{
    console.log('No soy un heroe')
}


//condicionales (Switch)

switch(heroe){
    case 'Batman':
        console.log('Hola soy Bruce')
    break
    
    case 'Spiderman':
        console.log('Hola soy Peter')
    break

    case 'Iroman':
        console.log('Hola soy Tony')
    break

    default:
        console.log('No soy un heroe')
}


//Estructuras repetitivas

for(let i=0; i<=10;i++){
    console.log(i)
}

/*for(let i=0; i<=10;i++){
    for(let j=0; j<=10;j++){
        console.log(i+'+'+j+'='+i+j)
    }
} */


//while

let j=0

while(j<10){
    console.log(j)
    j=j+1
}

//do while

let k=0

do{
    console.log(k)
    k=k+1
}while(k<10)

//Ejercisios
/* 1 Determinar su la edad de una persona es mayor de edad o menor de dedad mostrando "Mayor de edad " o "Menor de edad" */

const EdadPersona=37
if(EdadPersona >=18){
    console.log('Mayor de edad')
}else{
    console.log('Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

const Saludo="Español"
if(Saludo==="Español"){
    console.log('Hola')
}else if(Saludo==='Ingles'){
    console.log('Hello')
}else if(Saludo==='Aimara'){
    console.log('kamisaraki')
}else{
    console.log('No te entiendo')
}

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

const numero = 10; 

if (numero % 3 === 0 && numero % 5 === 0) {
  console.log('fizzbuzz');
} else if (numero % 3 === 0) {
  console.log('fizz');
} else if (numero % 5 === 0) {
  console.log('buzz');
} else {
  console.log(numero);
}


//



// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

for (let valor=2; valor < 10; valor += 2) {
    console.log(valor);
  }


//funciones

//definicion de una funcion
 
function nombreDelaFuncion(){
    //Cuerpo de la funcion y aqui va la logica a ejecutar
}

//funciones sin parametros

function imprimirMinombre(){
    console.log('Hola soy Mauricio')
    console.log('y soy Frontend')
}


imprimirMinombre()

/* Promt para leer valores del usurario
    const tuEdad=prompt("ingresa tu edad")
*/

//funciones con parametros

function imprimirUnNombre(nombre){
    console.log('Hola soy '+ nombre)
}

imprimirUnNombre('Claudia')


function imprimirNombreYApellidos(nombre,apellido,edad){
   // console.log('Hola soy '+ nombre +' '+apellido+''+edad+' '+'años')

   console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años.`)
}

imprimirNombreYApellidos('Mauricio','Arzaplo','37')


//Ejercios 



//funciones sin retorno

const miEdad_=22

function esMayorOMenorDeEdad(edad){
    if(edad>=18){
        console.log('Mayor de edad')
    }else{
        console.log('Menor de edad')
    }

}

esMayorOMenorDeEdad(37)
esMayorOMenorDeEdad(7)
esMayorOMenorDeEdad(3)
esMayorOMenorDeEdad(18)


//Funciones con retorno de valor

function esMayorOMenorDeEdadConRetorno(edad){
    if(edad>=18){
        return 'Mayor de edads'
    }else{
        return 'Menor de edad'
    }
}

console.log(esMayorOMenorDeEdadConRetorno(25))
console.log(esMayorOMenorDeEdadConRetorno(15))
console.log("Hola");

//funciones

//funciones sin para metros 

function nombreDeLaFuncion(){ //estamos declarando la funcion
    console.log("Hola");
}


nombreDeLaFuncion(); //Esta ejecutandose la funcion



//funciones con parametros

function suma(numero1, numero2){
    console.log(numero1+numero2);
}

suma(10, 20);

//funciones con salida con retorno de datos

function multiplicacion(numero1, numero2){
    return numero1*numero2;
}

const resultadoDeMultiplicacion=multiplicacion(10, 20);

console.log(resultadoDeMultiplicacion);


//funciones con retorno de datos

function resta(numero1, numero2){
    return numero1-numero2;

}

const resultadoDeResta=resta(30, 20);
console.log(resultadoDeResta)

//funciones con parametros por defecto con retorno y en multiples lineas

function calcularSiEsMayorDE18 (edad = 1){
    if(edad>18){
        return 'es mayor de edad';
    }else{
        return 'es menor de edad';
    }
}

console.log(calcularSiEsMayorDE18());


//arrow function (funciones flecha)

//funciones sin parametros arrow funticon
const imprimiendoSaludo=()=>console.log('hola a todos')

imprimiendoSaludo();


//funciones con parametros modo arrow funticon

const otraSuma=(numero1, numero2) => console.log(numero1 + numero2)
otraSuma(12, 12);

//funciones con parametros y retorno de datos en una sola linea

const otraMultiplicacion = (numero1 , numero2) => numero1*numero2

console.log(otraMultiplicacion(4,2))

//funciones sin parametros con retornos en multiples lineas

const saludoEnMayuscula=(nombre)=>{
    const nombreEnmayuscula = nombre.toUpperCase()

    return 'Hola ' + nombreEnmayuscula + '!'

}
console.log(saludoEnMayuscula('Mauricio'));

//funciones con parametros por defecto con retorno  y en multiples lineas

const otroSaludoConParametrosPorDefecto=(nombre='Anonimo') =>{
    const nombreEnMayuscula = nombre.toUpperCase()

    return 'Que tal ' + nombreEnMayuscula + '!'
}

console.log(otroSaludoConParametrosPorDefecto());
console.log(otroSaludoConParametrosPorDefecto('Mauricio'));


//parametros REST (operador rest -> ...)

const numeros=[4,6]
function miSuma(n1,n2){
    return n1+n2;
}

console.log(miSuma(...numeros))


const listaDeNumeros=[6,33,998,1,-66,453]


console.log(
    Math.max(...listaDeNumeros),
    Math.min(...listaDeNumeros),
)

//Spread operator (...) sirve para expandir un arreglo, llamadas a funciones , incluso objetos

const frutas=['Manzanas','Naranjas','Plátanos','Sandia','Duraznos']

const FrutasYVerduras=['Papa','Cebolla',...frutas]

console.log(frutas)
console.log(FrutasYVerduras)



const persona={
    nombre: 'Mauricio',
    apellifo: 'Neyra',
    edad:'20'
}

const stack={
    Javascript : 'Reactjs',
    python: 'Django',
    nodejs:'Express.js'
}

const personaYSuStack={
    ...persona,
    ...stack,
}

console.log(personaYSuStack)

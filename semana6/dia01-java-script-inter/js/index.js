console.log("HOLA JS")

//Arrays

const numero=999;
const cadena="Victor";
const esMayor="39"

//un arreglo tiene elemtos como a cualquier tipo de datos; boolean , undefined,null,arrays,objetcs,etc2;


const listaDeValores=[1,2,3,"Jorge","Mauricio", true];

console.log(listaDeValores)

console.log(listaDeValores[0]);//1
console.log(listaDeValores[4]);//Mauricio
console.log(listaDeValores[5]);//true
console.log(listaDeValores[100]);//undefined


//estructura en un arreglo

listaDeValores[2]=99;

//Remover elemtos de un arreglo

listaDeValores.pop();
console.log(listaDeValores)

//eliminar un elmento

listaDeValores.splice(4)

console.log('usando splice',listaDeValores)


//obtener nuestro tamaño de nuestro arreglo

console.log("bienvenido",length)
console.log(listaDeValores.length)


//objetos

//{key: value}
//{
//key:value,
//key:value,
//}

const miObjeto={
    nombre:'Mauricio',
    apellido:'Arzapalo',
    coloFavorito:"morado",
    'mi edad':37

}
console.log(miObjeto)

//Leer los campos de un objeto

console.log(miObjeto.nombre)
console.log(miObjeto.apellido)
console.log(miObjeto.edad)

console.log(miObjeto['mi edad'])
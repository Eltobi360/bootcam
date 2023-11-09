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
    'mi edad':37,
    coloresFavoritos:['rosado','rojo','azul'],

    cursos:[
        {
            nombre:'Matematica',
            nota:18,
        },
        {
            nombre:'Algoritmos',
            nota:20,
        }
    ]

}
console.log(miObjeto)

//Leer los campos de un objeto

console.log(miObjeto.nombre)
console.log(miObjeto.apellido)
console.log(miObjeto.edad)

//console.log(miObjeto.mi edad) esto no se hace

console.log(miObjeto['mi edad'])//esta bien

console.log(miObjeto.coloresFavoritos[0])

console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nombre)
console.log(miObjeto.cursos[1]['nota'])


//El minar propiedades de un objeto
console.log(miObjeto)
delete miObjeto.coloFavorito
console.log(miObjeto)

//insertar una nueva propiedad a un objeto

miObjeto.platoFavorito ='Ceviche',

miObjeto['juegos Favoritos']='Dark Soul'

console.log(miObjeto)

//destruturing

//Es una forma de extraer las propiedades/ de un objeto o un arreglo en variable

const nombreValue=miObjeto

console.log(nombreValue)

const{nombre, apellido}=miObjeto

const{nombre:nombreValor,apellido:apellidoValor}=miObjeto


//Destructuring para arreglos

const amigos=['angel','carlos','claudia','franklin','samael']

const [amigo1,amigo2]=amigos

console.log(amigo1)
console.log(amigo2)

//spread operator
const producto={
    nombre:'Laptop',
    precio:6800,
    categoria:'tech',
}

const cliente={
    nombre:'Claudia',
    isVip:true,
}

console.log(producto+cliente)//[object object][object object]

const nuevoObjeto={...producto,...cliente}

console.log(nuevoObjeto)


//Spread operator sin coliciones

const nuevoObjetoSinColiciones={
    producto:{...producto},
    cliente:{...cliente},
}

console.log(nuevoObjetoSinColiciones)



//otros metodos de objetos

console.log(Object.keys(producto))//obtenemos solo las claves (keys) del objeto
console.log(Object.values(producto))//obtenemos los valores del objeto
console.log(Object.entries(producto)) //Cuando convertimos un objeto en arreglo 

/// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo con los resultados

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(
  languages.filter(
    function(language) {
      // return language === 'python' ['python', 'python']
      // return language.includes('c') // ['javascript', 'c', 'c++']
      return language.toLowerCase().includes('c') // ['javascript', 'c', 'c++']
    }
  )
)
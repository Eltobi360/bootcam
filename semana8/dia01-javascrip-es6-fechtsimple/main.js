/*console.log('hola')

//para atraer informacion en formato json de una url

const url = 'https://jsonplaceholder.typicode.com/posts'

//fetch(url) //Devuelve una promesa (PROMISE)
  //.then(Response => Response.json())//Conbertimos la respuesta a unobjeto JS
  //.then(data=>{console.log(data)}) //podemos usar el objeto JS


  const fetchPost = () => {
    console.log('Llamado al api de JSONPlaceholder')
    
    return fetch(url)
    .then(response => response.json())
    //.then(data=>{
      //  return data
    //})
  }


  fetchPost().then(data=>{
    console.log(data)
 }) */ 
  

  /*const renderPost =(posts = []) =>{

    const appDiv= document.getElementById('app')

    let postList=''

    posts.forEach(post =>{

        postList=`
        <div>
            <h2>${post.id}: ${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
    })

    appDiv.innerHTML = postList

    //console.log(posts)
  }

  fetchPost().then(posts =>{
    renderPost(posts)
    console.log(posts)
  })*/

  //comparar las fallas del primero

  console.log('Hola JS!')

// PARA TRAER INFORMACIÓN EN FORMATO JSON DE UNA URL

const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url) // Devuelve una promesa (Promise)
//   .then(response => response.json()) // Convertimos la respuesta a un objeto JS
//   .then(data => {
//     console.log(data)
//   }) // Podemos usar el objeto JS

const fetchPosts = () => {
  console.log('Llamando al api de JSONPLACEHOLDER')

  return fetch(url)
    .then(response => response.json())
    // .then(data => {
    //   return data
    // })
}

const renderPosts = (posts = []) => {
  // const appDiv = document.querySelector('#app')
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {
    // console.log(post)
    postList += `
      <div>
        <h2>${post.id}: ${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `
  })

  appDiv.innerHTML = postList
}

fetchPosts()
  .then(posts => {
    renderPosts(posts)
    console.log(posts)
  })
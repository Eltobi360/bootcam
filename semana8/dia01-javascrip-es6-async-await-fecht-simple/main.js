  console.log('Hola')

const url = 'https://jsonplaceholder.typicode.com/posts'



const fetchPosts = async () =>{


  try {
  const response = await fetch(url)//primise

    if(!response.ok) {
      throw new Error('ERROR HTTP:',response.status)
    }

  const json = await response.json()

  // aqui podemos modificar el json entrnate
  return json

  }catch (error){
    console.log(error)
  }

}

const renderPosts=(posts=[])=>{
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {
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
.then(posts =>{
  renderPosts(posts)
  console.log(posts)
})
.catch(error => conosole.log(error))
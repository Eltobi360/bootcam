


//componetne usando function
/*function App() {
  return <h1>Hola react</h1>
}

export default App*/

//conponente con un Arrow funtion
/*const App = () => {
  return <h1>Hola react</h1>
}

export default App*/

//componente react usando multiples lineas con el elemtro padre
/*const App = () =>{
  return(
    <div>
    <h1>Hola react</h1>
    <p>Estoy usando react</p>
    </div>
  ) 
}

export default App*/


//componente usando fragmentos (fragment) para evitar el renderizar en un lemto padre
const App = () =>{
  return(
    <>
    <h1>Hola react</h1>
    <p>Estoy usando react</p>
    </>
  )
}

export default App




//lo minimo de un componete debe contener
/*function APP(){
  return <h1> hola react</h1>
} 
export default APP
*/
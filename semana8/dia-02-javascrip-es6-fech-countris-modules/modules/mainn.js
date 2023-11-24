/*//console.log('HOLA')

const url= 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

let countryData = []

const searchInput= document.querySelector('.app__input')
const filterSelect = document.querySelector('app__filter')

/*function fechtCountries(){
    return fetch(url)
    .then(response => response.json())
    .catch(error=>console.log(error))
}


fechtCountries()
.then(data => console.log(data))*/


// function fetchCountries() {
//   return fetch(url) // Promise
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

// const numeros = [4, 5, 6, 19, 99, -5]
// const numerosFiltrados = numeros.filter(numero => {
//   return numero > 10
// })
// console.log(numerosFiltrados) // [19, 99]


/*searchInput.addEventListener('input', (event) => {
  // const value = searchInput.value
  const value = event.target.value
  const loweredValue = value.toLowerCase()

  
  // console.log(value)
  const filteredCountries = countryData.filter(
    country => {
      const loweredName = country.name.common.toLowerCase()

      return loweredName.includes(loweredValue) // true o false
    }
  )

  renderCountries(filteredCountries)
})








//TODO: Usar la funcion fechtCountries usando async/await 







const fechtCountries = async() =>{
    try{
        const response = await fetch(url)

        if(!response.ok) {
            throw new Error('ERROR HTTP:',response.status)
        }
        const json = await response.json()

        return json

    }catch(error){
        console.log(error)
    }
}

const rederCountries = (countries =[])=>{

    //console.log(countries)

    const countryListElement = document.querySelector('.app__list')

    let countryList = ''

    countries.forEach(country => {
        countryList += `
        <div class="country">
        <img class="country__flag" src="${country.flags.png}" alt="xxxx" />
        <div class="country__wrapper">
          <h2 class="country__title">${country.name.common}</h2>
          <div class="country__description">
            <strong>Population:</strong> ${country.population}
          </div>
          <div class="country__description">
            <strong>Region:</strong> ${country.region}
          </div>
          <div class="country__description">
            <strong>Capital:</strong> ${country.capital[0]} 
          </div>
        </div>
      </div>
        `
    })

    countryListElement.innerHTML = countryList
}

//DOMContentLoaded -> Es un evento del navegar qu espera a que le dom este cargado

document.addEventListener('DOMContentLoaded', async () =>{
    console.log('Mi DOM ya cargo')

   // const data=await fechtCountries()

    const data = await fechtCountries()
    rederCountries(data)
})

/*fechtCountries()
   .then(data => console.log(data))*/

 //  fechtCountries()
   //.then(data=>rederCountries(data))*/





//________----------________

// console.log('Hola JS!')

// console.log('Hola JS!')

import{renderCountries, renderResults}from './utils.js'
import fetchCountries from './servicios.js'
import Minombre, {regions} from './constants.js'

console.log(Minombre)
console.log(regions)

let countryData = []

const searchInput = document.querySelector('.app__input')
const filterSelect = document.querySelector('.app__filter')


// function fetchCountries() {
//   return fetch(url) // Promise
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

// const numeros = [4, 5, 6, 19, 99, -5]
// const numerosFiltrados = numeros.filter(numero => {
//   return numero > 10
// })
// console.log(numerosFiltrados) // [19, 99]

searchInput.addEventListener('input', (event) => {
  // const value = searchInput.value
  const value = event.target.value
  const loweredValue = value.toLowerCase()
  
  const filteredCountries = countryData.filter(
    country => {
      const loweredName = country.name.common.toLowerCase()

      // TODO: Adicionalmente necesitamos filtrar los paises por su capital
      const joinedCapitals = country.capital.join(',') // Une todos los elementos de un arreglo en una cadena de texto
      const loweredCapitals = joinedCapitals.toLowerCase()

      return loweredName.includes(loweredValue) || loweredCapitals.includes(loweredValue)
    }
  )

  renderCountries(filteredCountries)
  renderResults(filteredCountries)
})

filterSelect.addEventListener('input', (event) => {
  const value = event.target.value
  const loweredValue = value.toLowerCase()

  const filteredCountriesByRegion = countryData.filter(
    country => {
      const loweredRegion = country.region.toLowerCase()
      
      return loweredRegion.includes(loweredValue)
    }
  )

  renderCountries(filteredCountriesByRegion)
  renderResults(filteredCountriesByRegion)
})

 // DOMContentLoaded -> Es un evento del navegador que espera a que el DOM esté cargado
  
 document.addEventListener('DOMContentLoaded', async () => {
  console.log('¡Mi DOM ya cargó!')
  
  // fetchCountries()
  //   .then(data => renderCountries(data))

  const data = await fetchCountries()

  countryData = data

  renderCountries(data)
})

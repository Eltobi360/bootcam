//console.log('HOLA')

const url= 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,languages,currencies,timezones'

/*function fechtCountries(){
    return fetch(url)
    .then(response => response.json())
    .catch(error=>console.log(error))
}

fechtCountries()
.then(data => console.log(data))*/

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

fechtCountries()
   .then(data => console.log(data))
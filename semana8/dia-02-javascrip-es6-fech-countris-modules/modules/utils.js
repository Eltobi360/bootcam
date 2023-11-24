
export const renderResults = (countriesFiltered) => {
    const resultsDiv = document.querySelector('.app__results')
    const total = countriesFiltered.length
  
    resultsDiv.textContent = `${total} Countries Filtered`
  }
  
export const renderCountries = (countries = []) => {
    console.log(countries)
  
    const countryListElement = document.querySelector('.app__list')
  
    let countryList = ''
  
    if(countries.length === 0) {
      countryListElement.innerHTML=`
      <div class="card">
      <div class='app__list--no--found'>
      <img src=./images/icon-sad-square.svg width=100px, height=100px >
      <p>Sorry no result fount</p>
      </div>
      </div>
      `
      return
    }
  
    countryListElement.classList.remove('app__list--no--found')
    
  
    countries.forEach(country => {
      // console.log(country)
      countryList += `
        <div class="country">
          <img class="country__flag" src="${country.flags.png}" alt="${country.flags.alt}" />
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
  
 
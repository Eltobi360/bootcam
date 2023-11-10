//console.log('Hola desde js')

const inputPeso=document.querySelector('#inputPeso')
const inputAltura=document.querySelector('#inputAltura')
const btnCalcular=document.querySelector('#btnCalcular')
const divresultado=document.querySelector('#resultado')
//console.log(inputPeso,inputAltura)

btnCalcular.addEventListener('click',function(event){
   //console.log(event.target)

   const peso= inputPeso.value
   const altura=inputAltura.value

   console.log(peso, altura)

   const IndiceDeMasaCorporal= peso/(altura/100*altura/100)
   console.log(IndiceDeMasaCorporal)


   let resultado=''

   if(IndiceDeMasaCorporal <18.5){
    resultado ='Baja'
   }else if(IndiceDeMasaCorporal >= 18.5 && IndiceDeMasaCorporal<=24){
    resultado='Normal'
   }else if(IndiceDeMasaCorporal >25 && IndiceDeMasaCorporal <=29.9){
    resultado='Sobrepeso'
   }else{
    resultado='Datos Incorrectos'
   }

   console.log(resultado)


   //divresultado.innerText= 'Tu indice de Masa Corporal es' + resultado
   divresultado.textContent= 'Tu indice de Masa Corporal es' + resultado+ ' con' + IndiceDeMasaCorporal.toFixed(2)
})
//inputPeso.value =90
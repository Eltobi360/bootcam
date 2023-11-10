//console.log('Funciona')

const taskAdd= document.querySelector('.task__add')
const taskReset=document.querySelector('.task__reset')

const taskInput=document.querySelector('.task__input')
//const taskInput=document.getElementById('task__input')
const taskList=document.querySelector('.task__list')
taskAdd.addEventListener('click',function(event){
    //Se ejeuctara cuando agamos click en el boton añadir tarea
   
    console.log(taskInput.value)

    //const button=document.createElement('button')
    //button.textContent = 'Hola soy un boton'
    //document.body.appendChild(button)

    

    
    if(taskInput.value==''){
        alert('el campo es requerido')
        return
    }

    const li = document.createElement('li')

    const chekbox=document.createElement('input')
    chekbox.setAttribute('type','checkbox')
    li.appendChild(chekbox)

    const span=document.createElement('span')
    span.textContent=taskInput.value
    li.appendChild(span)

// TODO: añadir un boton al li con el texto borrar y al hacer clik en el boton que se elimine la fila de la tarea

    const button=document.createElement('button')
    button.textContent = 'Borrar'
    li.appendChild(button)
     
    /*li.textContent = taskInput.value*/
    taskList.appendChild(li)

    taskInput.value=''
})

taskList.addEventListener('click', function(event){
    console.log(event)

    const target=event.target

    console.log(target)

    if(target.tagName == 'INPUT' && target.type == 'checkbox'){
        target.classList.toggle('completed')
    }

    if(target.tagName === 'BUTTON') {
        target.parentElement.remove()
      }
})


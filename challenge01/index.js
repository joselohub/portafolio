const date = document.querySelector('#date')
const list = document.querySelector('#list')
const elemento = document.querySelector('#element')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let LIST

let id // to intialize with 0 to each task with diferent id

 

const DATE = new Date ()
date.innerHTML = DATE.toLocaleDateString('en-US',{weekday: 'long', month: 'short', day:'numeric'})







// function to add task

function addTask( task,id,done,removed) {
    if(removed) {return} 

    const DONE = done ? check : uncheck // if it is done check else uncheck

    const LINE = done ? lineThrough : '' 

    const elemento = `
                        <li id="element">
                        <i class="far ${DONE}" data="done" id="${id}"></i>
                        <p class="text ${LINE}">${task}</p>
                        <i class="fas fa-trash de" data="removed" id="${id}"></i> 
                        </li>
                    `
    list.insertAdjacentHTML("beforeend",elemento)

}


// task done function 

function taskDone(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    LIST[element.id].done = LIST[element.id].done ?false :true //yes
   // console.log(LIST)
   // console.log(LIST[element.id])
   // console.log(LIST[element.id].done)
}

function taskRemoved(element){
   // console.log(element.parentNode)
   // console.log(element.parentNode.parentNode)
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].removed = true
    console.log(LIST)
}





// create an event to enter and to enable the button 

botonEnter.addEventListener('click', ()=> {
    const task = input.value
    if(task){
        addTask(task,id,false,false)
        LIST.push({
            name : task,
            id : id,
            done : false,
            removed : false
        })
        localStorage.setItem('TODO',JSON.stringify(LIST))
        id++
        input.value = ''
    }

})

document.addEventListener('keyup', function (event) {
    if (event.key=='Enter'){
        const task = input.value
        if(task) {
            addTask(task,id,false,false)
        LIST.push({
            name : task,
            id : id,
            done : false,
            removed : false
        })
        localStorage.setItem('TODO',JSON.stringify(LIST))
     
        input.value = ''
        id++
        console.log(LIST)
        }
    }
    
})


list.addEventListener('click',function(event){
    const element = event.target 
    const elementData = element.attributes.data.value
    console.log(elementData)
    
    if(elementData == 'done') {
        taskDone(element)
    }
    else if(elementData == 'removed') {
        taskRemoved(element)
        console.log("removed")
    }
    localStorage.setItem('TODO',JSON.stringify(LIST))
})




let data = localStorage.getItem('TODO')
if(data){
    LIST = JSON.parse(data)
    console.log(LIST)
    id = LIST.length
    cargarLista(LIST)
}else {
    LIST = []
    id = 0
}


function cargarLista(array) {
    array.forEach(function(item){
        addTask(item.name,item.id,item.done,item.removed)
    })
}
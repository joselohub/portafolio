const list = document.querySelector("#list");
const input = document.querySelector("#input");
const buttonEnter = document.querySelector("#button-enter");
const check = 'box-check-task';
const uncheck = 'box-task';
const lineThrough = 'lineThrough';
let LIST

let id




//function to add the task
function addTask(task,id,done,removed){
    if(removed)return;

    const DONE = done ?check :uncheck;
    const LINE = done ?lineThrough :''

    const element = `<li id="element">
                        <input class="${DONE}"  data="done" id="${id}" type="checkbox">
                        <p class="text ${LINE}">${task}</p>
                        <i class="fa fa-remove" style="font-size:24px" data="removed" id="${id}"></i>
                    </li>`
    list.insertAdjacentHTML('beforeend',element)
};




//task done function
function taskDone(elementList){
    elementList.classList.toggle(check)
    elementList.classList.toggle(uncheck)
    elementList.parentNode.querySelector('.text').classList.toggle(lineThrough)
    LIST[elementList.id].done = LIST[elementList.id].done ?false :true 

}




//task removed fuction
function taskRemoved(elementList){
    // console.log(element.parentNode)
     elementList.parentNode.parentNode.removeChild(elementList.parentNode)
     LIST[elementList.id].removed = true
     //console.log(LIST)
 }





buttonEnter.addEventListener('click',()=>{
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
        input.value=''
        id++
        
    }
    
})



list.addEventListener('click',function(event){
    const elementList = event.target
    const elementData = elementList.attributes.data.value
    //console.log(elementList.attributes.data.value)

    if(elementData === "done"){
        taskDone(elementList)
    }
    else if(elementData == "removed") {
        taskRemoved(elementList)
    
    }
})



//local storage get item

let data = localStorage.getItem('TODO')
if(data){
    LIST = JSON.parse(data)
    console.log(LIST)
    id = LIST.length
    chargeList(LIST)
}else {
    LIST = []
    id = 0
}


function chargeList(array) {
    array.forEach(function(item){
        addTask(item.name,item.id,item.done,item.removed)
    })
}
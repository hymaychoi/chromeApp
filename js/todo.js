const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODO_KEY = 'todos'

let toDos= []

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos))
}

function deleteToDo(e){
    const li =e.target.parentElement
    const listId = parseInt(li.id)
    li.remove();
    toDos = toDos.filter(todo=> todo.id!==listId )
    console.log(toDos)
    saveToDos()
}

function renderToDo(newToDo){
    const li = document.createElement('li')
    li.id = newToDo.id
    const span = document.createElement('span')
    const removeBtn = document.createElement('button')
    span.innerText = newToDo.text
    removeBtn.innerText='❌'
    li.appendChild(span)
    li.appendChild(removeBtn)
    toDoList.appendChild(li)

    removeBtn.addEventListener('click', deleteToDo)
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value=''
    const newTodoObj = {
        id: Date.now(),
        text: newToDo
    }

    //push to the to dos array and set item in the localStorage
    renderToDo(newTodoObj)
    toDos.push(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODO_KEY)
if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos)
    // to remember old todos that stored in localStorage earlier 
    toDos =parsedToDos
    parsedToDos.forEach(renderToDo)
}
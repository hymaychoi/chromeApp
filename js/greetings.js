// null means nothingness: you tell the javascript that there is no value in that variable
// undefined means it is existed but no value defined on that variable

// Data structure: how you are gonna organize the data
// Array: to group data types to list things
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting  = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY= 'username'
const savedUserName = localStorage.getItem(USERNAME_KEY)

function onLoginSubmit(e){
    // this prevents browser's default behavior (refreshing the page)
    e.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    renderGreetings()
}

function renderGreetings(){
    const username= localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${username},`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

if(savedUserName ===null){
    console.log("this is null")
    //show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    //show the greetings
    renderGreetings()
}
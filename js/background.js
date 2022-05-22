// https://source.unsplash.com/random

const images = [
    "https://raw.githubusercontent.com/nomadcoders/javascript-for-beginners/5874df713ba5476174c5df78dc886198c38ef8dc/img/0.jpeg",
    "https://raw.githubusercontent.com/nomadcoders/javascript-for-beginners/5874df713ba5476174c5df78dc886198c38ef8dc/img/1.jpeg",
    "https://raw.githubusercontent.com/nomadcoders/javascript-for-beginners/5874df713ba5476174c5df78dc886198c38ef8dc/img/2.jpeg",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280",
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280",
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280"
]

const chosenImage = images[[Math.floor( Math.random() * images.length)]]
document.body.style.backgroundImage = `url(${chosenImage})`
document.body.style.backgroundPosition = 'center'
document.body.style.backgroundRepeat = 'no-repeat'
document.body.style.backgroundSize = 'cover'
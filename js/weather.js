const API_KEY = '252406e589fffb4d1be19eb38841c362'

function onGeoSuccess(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res=>{
        if(!res.ok){
            throw Error("Something went wrong on weather API call")
        }
        return res.json()
    })
    .then(data=>{
        // weather icon image set up
        const weatherContainer = document.querySelector('#weather')
        const iconImg = document.createElement('img')
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        iconImg.src = iconUrl
        weatherContainer.appendChild(iconImg)

        const weather = document.querySelector('#weather span:first-child')
        const city = document.querySelector('#weather span:nth-child(3)')
        weather.innerText= `${data.weather[0].main} / ${data.main.temp.toFixed(1)} °C`
        city.innerText = `@ ${data.name}`
    })
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)


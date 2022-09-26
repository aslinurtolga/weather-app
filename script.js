const url = 'https://api.openweathermap.org/data/2.5/';
const key = '49306de5d3a8197d358c351a17da1f02';

const setQuery = (event) => {
    if(event.keyCode == '13')
    getResult(searchBar.value)
};

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (res) => {

    let city = document.querySelector('.city')
    city.innerText = `${res.name}, ${res.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(res.main.temp)}°c`;

    let desc = document.querySelector('.desc')
    desc.innerText = `${res.weather[0].description}`;
    
    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(res.main.temp_min)}°c /  
    ${Math.round(res.main.temp_max)}°c`;
}



const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);

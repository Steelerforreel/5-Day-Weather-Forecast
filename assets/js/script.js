var weather = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=77cf92a3ef9952d5acbf952a47570fae&units=imperial"

var currentWeather = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=77cf92a3ef9952d5acbf952a47570fae&units=imperial"
fetch (weather)
    .then(function (response) {
        //console.log(response)
        return response.json()
    })
    .then(function (data) {
        //console.log(data)
    })
    .catch(function (error) {
        //console.log(error)
    })

fetch (currentWeather)
    .then(function (response) {
        //console.log(response)
        return response.json()
    })
    .then(function (data) {
        //console.log(data)
    })
    .catch(function (error) {
        //console.log(error)//
    })

var searchButton = document.getElementById(".search-button")
console.log(searchButton)
searchButton.addEventListener("click", function () {
    console.log("hello")
//Fetch current weather and weather options based on search results
})

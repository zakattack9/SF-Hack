function getWeather(cities){
    let promises = []
    let returnMap = {}
    for (var i = 0; i < cities.length; i++){
        var city = cities[i]
        getCityWeather(city)
    }
    function getCityWeather(city){
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=611d6f12d130e2d22e75d76eec49ddca&units=metric"
        promises.push(axios.get(url))
    }

    Promise.all(promises).then(res => {
        for (var i = 0; i < res.length; i++){
            var name = res[i].data.name
            var weather = res[i].data.weather[0].main
            returnMap[name] = weather
        }
        console.log(returnMap)
        return returnMap
    })
}

var cities = ["prescott", "sedona", "london"]
getWeather(cities)
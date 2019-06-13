import {sfLocationData} from "./data.js"

let object = {     // This object is used to represent locations
    city: {
        writable: true,
        enumerable: true,
        configerable: true,
        value: 'default city name'
    },
    state: {
        writable: true,
        enumerable: true,
        configerable: true,
        value: 'default state name'
    },
    //State abbreviation
    stateAbbr: {
    writable: true,
    enumerable: true,
    configerable: true,
    value: 'default state abbreviation'
    },
    locationName: {
        writable: true,
        enumerable: true,
        configerable: true,
        value: 'default location name'
    },
    weather: {
        writable: true,
        enumerable: true,
        configerable: true,
        value: 'default weather'
    },
}
function getWeather(){
    // locations is list of objects that represent different SF locations
    var locations = sfLocationData
    let promises = [] //List of get requests. Stored in this way to ensure api calls return before referenced
    let returnMap = {} //Dictionary --> key = [city name] :: value = location object (instance of the struct above)
    let weatherAndCities = {}//Dictionary --> key = [cityname] :: value = weather
    for (var i = 0; i < locations.length; i++){ //for each SF location
        var cityObject = locations[i]  //Attribues of cityObject include but not limited to: city,state,locationName
        var obj = Object.create(object)
        obj.city = cityObject.city
        obj.state = cityObject.state
        obj.locationName = cityObject.locationName  
        obj.stateAbbr = cityObject.abbrState
        returnMap[i] = obj
        getCityWeather(obj)
    }
    function getCityWeather(cityStatsObject){
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityStatsObject.city + "&APPID=611d6f12d130e2d22e75d76eec49ddca&units=metric"
        // promises is used to ensure that the api calls are not referenced before they return. This is basically a stack of api calls that are waiting for their responce to come in
        promises.push(axios.get(url))
    }
    // Promise.all checks to make sure that all of the requests are in and then preforms the following opperations.
    Promise.all(promises).then(apiResult => {
        for (var i = 0; i < apiResult.length; i++){
            var cityName = apiResult[i].data.name
            var weather = apiResult[i].data.weather[0].main
            weatherAndCities[cityName] = weather
        }
        var keys = Object.keys(returnMap)
        for (var key in keys){
            returnMap[key].weather = weatherAndCities[returnMap[key].city]
        }
        //returnMap[i].weather = weatherAndCities[returnMap[i].city]
        console.log(returnMap)
        return returnMap
    })
}
getWeather()
import React from 'react';
import './WeatherRow.css';
import WeatherNotifications from './WeatherNotifications'


function WeatherRow(props) {

    return (
        <div>   
             <h1 className = 'mainTitle'>Weather <br/> Updates</h1>
            <WeatherNotifications location = 'Phoenix, AZ' time = '8:03 pm' weatherTitle = 'Heavy Flooding' description = "Accuweather has reported heavy rain for the area of Phoenix"/>
            <WeatherNotifications location = 'Bloomington, IL' time = '5:30 am' weatherTitle = 'Strong Winds' description = "Accuweather has reported heavy rain for the area of Phoenix"/>
        </div>
    )
} 

export default WeatherRow;
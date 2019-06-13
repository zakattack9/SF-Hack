import React from 'react';
import './WeatherUpdateRows.css';
import WeatherUpdateNotifications from './WeatherUpdateNotifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

function WeatherUpdateRows(props) {
    return (
        <div>  
            <h1 className = 'mainTitle'>Weather Updates</h1>
            <WeatherUpdateNotifications location = 'Phoenix, AZ' time = '10:03 am' outageWarning = 'Heavy Flooding' description = "OpenWeatherMap has reported heavy rain for the area of Phoenix..."/>
            <WeatherUpdateNotifications location = 'Bloomington, IL' time = '8:03 am' outageWarning = 'Thunderstorms' description = "OpenWeatherMap has reported upcoming thunderstorms for the area of Bloomington..."/>
            <WeatherUpdateNotifications location = 'Atlanta, GA' time = '8:03 am' outageWarning = 'High Winds' description = "OpenWeatherMap has reported high winds for the area of Atlanta..."/>
            <WeatherUpdateNotifications location = 'Dallas, TX' time = '8:03 am' outageWarning = 'Dust Storms' description = "OpenWeatherMap has reported potential dust storms for the area of Dallas..."/>
        </div>
    )
}

export default WeatherUpdateRows;
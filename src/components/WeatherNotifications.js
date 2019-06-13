import React from 'react';

function WeatherNotifications(props) {
    return (
        <div className = 'weatherNotifications'>
            
            <div className = 'groupLocationTime'>
                <h4 className = 'location'>{props.location}</h4>     
                <h4 className = 'time'>{props.time}</h4>
            </div>

                <h4 className = 'weatherTitle'>{props.weatherTitle}</h4>
            
         
            <h6 className = 'description'>{props.description}</h6>
        </div>
    )
}

export default WeatherNotifications;
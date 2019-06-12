import React from 'react';
import './Weather.css';


function WeatherRow(props) {

    return (
        <div>
            
            <h1 className = {'title'}>{props.title}</h1>
            <div>
                <h4 className = {'location'} >{props.location}</h4>
                <h4 className = {'time'}>{props.time}</h4> 
            </div>

        
        </div>
    )
} 

export default WeatherRow;
import React from 'react';

const WeatherNotification = props => {
  return (
    <div className='WeatherNotification'>
      <div className='groupLocationTime'>
        <div className='location'>{props.location}</div>
        <div className='weatherTime'>{props.time}</div>
      </div>

      <div className='weatherTitle'>{props.weatherTitle}</div>

      <div className='description'>{props.description}</div>
    </div>
  )
}

export default WeatherNotification;
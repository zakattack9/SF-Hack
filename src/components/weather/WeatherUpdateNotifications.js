import React from 'react';

function WeatherUpdateNotifications(props) {
  return (
    <div className='weatherNotification'>
      <div className='groupLocationTime'>
        <h4 className='location'>{props.location}</h4>
        <h4 className='outageTime'>{props.time}</h4>
      </div>
      <div className='weatherWarning'>{props.weatherWarning}</div>
      <h6 className='description'>{props.description}</h6>
    </div>
  );
}

export default WeatherUpdateNotifications;
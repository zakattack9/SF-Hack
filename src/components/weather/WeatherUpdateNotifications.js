import React from 'react';
import Fade from 'react-reveal/Fade';

function WeatherUpdateNotifications(props) {
  return (
    <div className='weatherNotification'>
      <Fade bottom distance={'10px'}>
        <div className='groupLocationTime'>
          <h4 className='location'>{props.location}</h4>
          <h4 className='outageTime'>{props.time}</h4>
        </div>
        <div className='weatherWarning'>{props.weatherWarning}</div>
        <h6 className='description'>{props.description}</h6>
      </Fade>
    </div>
  );
}

export default WeatherUpdateNotifications;
import React from 'react';
import './HomeNotifications.css';
import WeatherRow from './WeatherRow';

class HomeNotifications extends React.Component {
  render() {
    return (
      <div className='HomeNotifications'>
        <WeatherRow />
        {/* <hr/> */}

      </div>
    )
  }
}

export default HomeNotifications;
import React from 'react';
import './HomeNotifications.css';
import WeatherRow from './WeatherRow';
import OutageRow from './OutageRow';

class HomeNotifications extends React.Component {
  render() {
    return (
      <div className='HomeNotifications'>
        <WeatherRow />
        <OutageRow />
      </div>
    )
  }
}

export default HomeNotifications;
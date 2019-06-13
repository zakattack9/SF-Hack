import React from 'react';
import './WeatherRow.css';
import WeatherNotifications from './WeatherNotifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const WeatherRow = props => {
  return (
    <div className="WeatherRow">
      <div className="titleWrapper">
        <h1 className='mainTitle'>Weather<br />Updates</h1>
        <div className="cloudIcon">
          <FontAwesomeIcon icon={faCloud} size="lg"/>
        </div>
      </div>
      <WeatherNotifications location='Phoenix, AZ' time='8:03 pm' weatherTitle='Heavy Flooding' description="Accuweather has reported heavy rain for the area of Phoenix" />
      <WeatherNotifications location='Bloomington, IL' time='5:30 am' weatherTitle='Strong Winds' description="Accuweather has reported heavy rain for the area of Phoenix" />
      <div className="viewAll">View All</div>
      <hr/>
    </div>
  )
}

export default WeatherRow;
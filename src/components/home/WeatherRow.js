import React from 'react';
import './WeatherRow.css';
import SideNotification  from './SideNotification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const WeatherRow = props => {
  return (
    <div className="WeatherRow">
      <div className="titleWrapper">
        <h1 className='mainTitle'>Weather<br />Updates</h1>
        <div className="cloudIcon">
          <FontAwesomeIcon icon={faCloud} size="lg"/>
        </div>
      </div>

      <SideNotification location="Phoenix, AZ" time='2:05 pm' title='Heavy Flooding' description='OpenWeatherMap has reported heavy rain for the area of Phoenix' />
      <SideNotification location="Tempe, AZ" time='8:03 pm' title='Heavy Flooding' description='OpenWeatherMap has reported heavy rain for the area of Phoenix' />
      <SideNotification location="Bloomington, IL" time='5:30 am' title='Strong Winds' description='OpenWeatherMap has reported strong winds for the area of Bloomington' />
      
      <div className="viewAll">
        <Link to="/weather">
          View All
        </Link>
      </div>
      <hr/>
    </div>
  )
}

export default WeatherRow;
import React from 'react';
import './WeatherRow.css';
import SideNotification from './SideNotification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getWeather } from '../../api/weatherapi';

class WeatherRow extends React.Component {
  state = { weatherData: null };

  componentDidMount() {
    getWeather().then(res => {
      // converts object to array
      this.setState({ weatherData: Object.values(res).slice(0, 3) });
    })
  }

  convertTime = () => {
    let date = new Date();
    let hrMin;
    if (date.getHours() === 12) {
      hrMin = `${date.getHours()}:${date.getMinutes()} pm`;
    } else if (date.getHours() === 24) {
      hrMin = `${date.getHours() - 12}:${date.getMinutes()} am`;
    } else if (date.getHours() > 12) {
      hrMin = `${date.getHours() - 12}:${date.getMinutes()} pm`;
    } else {
      hrMin = `${date.getHours()}:${date.getMinutes()} am`;
    }
    return hrMin;
  }

  render() {
    if (this.state.weatherData === null) {
      return <div className="WeatherRow"></div>;
    }

    return (
      <div className="WeatherRow">
        <div className="titleWrapper">
          <h1 className='mainTitle'>Weather<br />Updates</h1>
          <div className="cloudIcon">
            <FontAwesomeIcon icon={faCloud} size="lg" />
          </div>
        </div>
        <div className="weatherWrapper">
          {this.state.weatherData.map((location, i) => {
            return <SideNotification
              key={i}
              location={location.locationName}
              time={this.convertTime()}
              title={location.weather[0].main}
              description={`OpenWeatherMap has reported ${location.weather[0].description} for the area of ${location.city}`} />
          })}
        </div>

        {/* <SideNotification location="Phoenix, AZ" time='2:05 pm' title='Heavy Flooding' description='OpenWeatherMap has reported heavy rain for the area of Phoenix' />
        <SideNotification location="Tempe, AZ" time='8:03 pm' title='Heavy Flooding' description='OpenWeatherMap has reported heavy rain for the area of Phoenix' />
        <SideNotification location="Bloomington, IL" time='5:30 am' title='Strong Winds' description='OpenWeatherMap has reported strong winds for the area of Bloomington' /> */}

        <div className="viewAll">
          <Link to="/weather">
            View All
          </Link>
        </div>
        <hr />
      </div>
    )
  }
}

export default WeatherRow;
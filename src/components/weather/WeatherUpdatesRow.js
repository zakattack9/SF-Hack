import React from 'react';
import './WeatherUpdatesRows.css';
import WeatherUpdateNotifications from './WeatherUpdateNotifications';
import SearchBar from '../SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCaretRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getWeather } from '../../api/weatherapi';

class WeatherUpdatesRow extends React.Component {
  state = { weatherData: null };

  componentDidMount() {
    getWeather().then(res => {
      // converts object to array
      this.setState({ weatherData: Object.values(res) });
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
      return <div className="WeatherUpdatesRow"></div>;
    }

    return (
      <div className="WeatherUpdatesRow">
        <SearchBar width="40%" />
        <div className="cloudIcon">
          <FontAwesomeIcon icon={faCloud} size="lg" />
        </div>
        <h1 className="weatherUpdatesTitle">Weather Updates</h1>
        <div className="weatherNotificationWrapper">
          {this.state.weatherData.map(location => {
            console.log(location);
            return <WeatherUpdateNotifications 
            // location={`${location.city}, ${location.stateAbbr}`}
            location={location.locationName}
            time={this.convertTime()} 
            weatherWarning={location.weather[0].main}
            description={`OpenWeatherMap has reported ${location.weather[0].description} for the area of ${location.city}`} />
          })}
          {/* <WeatherUpdateNotifications location='Phoenix, AZ' time='10:03 am' weatherWarning='Heavy Flooding' description="OpenWeatherMap has reported heavy rain for the area of Phoenix..." />
          <WeatherUpdateNotifications location='Bloomington, IL' time='8:03 am' weatherWarning='Thunderstorms' description="OpenWeatherMap has reported upcoming thunderstorms for the area of Bloomington..." />
          <WeatherUpdateNotifications location='Atlanta, GA' time='8:03 am' weatherWarning='High Winds' description="OpenWeatherMap has reported high winds for the area of Atlanta..." />
          <WeatherUpdateNotifications location='Dallas, TX' time='8:03 am' weatherWarning='Dust Storms' description="OpenWeatherMap has reported potential dust storms for the area of Dallas..." />
          <WeatherUpdateNotifications location='Phoenix, AZ' time='10:03 am' weatherWarning='Heavy Flooding' description="OpenWeatherMap has reported heavy rain for the area of Phoenix..." />
          <WeatherUpdateNotifications location='Bloomington, IL' time='8:03 am' weatherWarning='Thunderstorms' description="OpenWeatherMap has reported upcoming thunderstorms for the area of Bloomington..." />
          <WeatherUpdateNotifications location='Atlanta, GA' time='8:03 am' weatherWarning='High Winds' description="OpenWeatherMap has reported high winds for the area of Atlanta..." />
          <WeatherUpdateNotifications location='Dallas, TX' time='8:03 am' weatherWarning='Dust Storms' description="OpenWeatherMap has reported potential dust storms for the area of Dallas..." /> */}
        </div>

        <div className="outagesNav">
          <div className="homeIcon">
            <Link to='/'>
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Link>
          </div>

          <div className="arrowWrapper">
            <Link to='/outages'>
              <div className="arrowText">Reported<br />Outages</div>
              <FontAwesomeIcon className="arrowIcon" icon={faCaretRight} size="2x" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherUpdatesRow;
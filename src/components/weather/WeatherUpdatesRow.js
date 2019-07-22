import React from 'react';
import './WeatherUpdatesRows.css';
import WeatherUpdateNotifications from './WeatherUpdateNotifications';
import SearchBar from '../SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCaretRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getWeather } from '../../api/weatherapi';
import Fade from 'react-reveal/Fade';

class WeatherUpdatesRow extends React.Component {
  state = { weatherData: null, search: null };

  componentDidMount() {
    getWeather().then(res => {
      // converts object to array
      this.setState({ weatherData: Object.values(res) });
    })
  }

  onSearchSubmit = (term) => {
    this.setState({ search: term });
  }

  renderWeather() {
    if (this.state.weatherData === null) {
      return <div className="lds-ripple"><div></div><div></div></div>;
    } else if (this.state.search === null || this.state.search === '') {
      return this.state.weatherData.map((location, i) => {
        return <WeatherUpdateNotifications
          key={i}
          location={location.locationName}
          time={this.convertTime()}
          weatherWarning={location.weather[0].main}
          description={`OpenWeatherMap has reported ${location.weather[0].description} for the area of ${location.city}`} />
      })
    } else {
      return this.state.weatherData.map((location, i) => {
        if (location.locationName.toLowerCase().includes(this.state.search.toLowerCase())) {
          return <WeatherUpdateNotifications
            key={i}
            location={location.locationName}
            time={this.convertTime()}
            weatherWarning={location.weather[0].main}
            description={`OpenWeatherMap has reported ${location.weather[0].description} for the area of ${location.city}`} />
        }
        return false;
      })
    }
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
    return (
      <div className="WeatherUpdatesRow">
        <SearchBar width="40%" onSubmitForm={this.onSearchSubmit} />
        <Fade bottom distance={'6px'}>
          <div className="cloudIcon">
            <FontAwesomeIcon icon={faCloud} size="lg" />
          </div>
          <h1 className="weatherUpdatesTitle">Weather Updates</h1>
        </Fade>
        <div className="weatherNotificationWrapper">
          {this.renderWeather()}
        </div>

        <Fade right distance={'10px'}>
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
        </Fade>
      </div>
    )
  }
}

export default WeatherUpdatesRow;
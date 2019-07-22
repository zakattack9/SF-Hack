import React from 'react';
import './WeatherRow.css';
import SideNotification from './SideNotification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getWeather } from '../../api/weatherapi';
import Fade from 'react-reveal/Fade';

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
      return (
        <div className="WeatherRow">
          {/* <Fade bottom distance={'8px'} delay={50}> */}
            <div className="titleWrapper">
              <h1 className='mainTitle'>Weather<br />Updates</h1>
              <div className="cloudIcon">
                <FontAwesomeIcon icon={faCloud} size="lg" />
              </div>
            </div>
          {/* </Fade> */}
          <div className="weatherWrapper">
            <div className="lds-ripple"><div></div><div></div></div>
          </div>
        </div>
      );
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
              delay={i * 100}
              location={location.locationName}
              time={this.convertTime()}
              title={location.weather[0].main}
              description={`OpenWeatherMap has reported ${location.weather[0].description} for the area of ${location.city}`} />
          })}
        </div>

        <Fade bottom distance={'8px'} delay={300}>
          <div className="viewAll">
            <Link to="/weather">
              View All
          </Link>
          </div>
        </Fade>

        <Fade bottom distance={'5px'}>
          <hr />
        </Fade>
      </div>
    )
  }
}

export default WeatherRow;
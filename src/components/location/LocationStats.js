import React from 'react';
import './LocationStats.css';
import SearchBar from '../SearchBar';
import ReportButton from '../ReportButton';
import PieChart from 'react-minimal-pie-chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHome, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class LocationStats extends React.Component {
  state = {
    location: this.props.location.state.location,
    sfLocationData: this.props.location.state.sfLocationData,
    errMsg: ''
  };

  onSearchSubmit = (term) => {
    if (term !== '') {
      let locationObj = this.state.sfLocationData.find(location => {
        return location.locationName.toLowerCase().includes(term.toLowerCase());
      })
      if (locationObj !== undefined) {
        this.setState({ location: locationObj, redirect: true });
        this.setState({ errMsg: '' });
      } else {
        this.setState({ errMsg: 'Location not found, please search for another location' });
      }
    } else {
      this.setState({ errMsg: 'Please enter a location to search for' });
    }
  }

  getStatusColor = () => {
    return this.state.location.status !== 'Good' ? { color: '#FF6969' } : { color: '#A4E6A2' };
  }

  getRiskColor = () => {
    switch (this.state.location.risk) {
      case ('None'):
        return { color: '#A4E6A2' };
      case ('Low'):
        return { color: '#FBF25A' };
      case ('Medium'):
        return { color: '#FEB535' };
      case ('High'):
        return { color: '#FF6969' };
      case ('Very High'):
        return { color: '#FF6969' };
      default:
        return { color: '#FF6969' };
    }
  }

  calcPctWithoutPower = () => {
    let percent = this.state.location.powerOutageData.city.OutageCount / this.state.location.powerOutageData.city.TrackedCount;
    return Math.ceil(percent);
  }

  render() {
    return (
      <div className="LocationStatsWrapper">
        <SearchBar width="100%" onSubmitForm={this.onSearchSubmit} />
        <div className="searchErr">{this.state.errMsg}</div>
        <div className="stats">
          <Fade bottom distance={'15px'}>
            <div className="locationInfo">
              <div className="county">{this.state.location.county} County</div>
              <div className="locationName">{this.state.location.locationName}</div>
              <div className="city">{this.state.location.city}, {this.state.location.abbrState}</div>
            </div>

            <div className="locationData">
              <table>
                <tbody>
                  <tr>
                    <td>Status:</td>
                    <td style={this.getStatusColor()}>{this.state.location.status}</td>
                  </tr>
                  <tr>
                    <td>Power Outage Risk:</td>
                    <td style={this.getRiskColor()}>{this.state.location.risk}</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>{this.state.location.type}</td>
                  </tr>
                  <tr>
                    <td>Reported Outages:</td>
                    <td>{this.state.location.reports.length}</td>
                  </tr>
                  <tr>
                    <td>Last Updated:</td>
                    <td>{this.state.location.lastUpdated}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr />

            <div className="powerOutageData">
              <div className="powerOutageTitle">Power Outage Tracking</div>

              <div className="category">State</div>
              <table>
                <tbody>
                  <tr>
                    <td>Population Tracked:</td>
                    <td>{this.state.location.powerOutageData.state.TrackedCount}</td>
                  </tr>
                  <tr>
                    <td>Outages:</td>
                    <td>{this.state.location.powerOutageData.state.OutageCount}</td>
                  </tr>
                </tbody>
              </table>

              <div className="category">County</div>
              <table>
                <tbody>
                  <tr>
                    <td>Population Tracked:</td>
                    <td>{this.state.location.powerOutageData.county.TrackedCount}</td>
                  </tr>
                  <tr>
                    <td>Outages:</td>
                    <td>{this.state.location.powerOutageData.county.OutageCount}</td>
                  </tr>
                </tbody>
              </table>

              <div className="category">City</div>
              <table>
                <tbody>
                  <tr>
                    <td>Population Tracked:</td>
                    <td>{this.state.location.powerOutageData.city.TrackedCount}</td>
                  </tr>
                  <tr>
                    <td>Outages:</td>
                    <td>{this.state.location.powerOutageData.city.OutageCount}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </Fade>
          <ReportButton />
        </div>

        <div className="outageGraph">
          <Fade bottom distance={'15px'} delay={150}>
            <div className="graphTitle">{this.calcPctWithoutPower()}% without power in {this.state.location.city}</div>
            <PieChart
              data={[
                { title: 'Tracked', value: this.state.location.powerOutageData.city.OutageCount, color: '#FFD227' },
                { title: 'Outages', value: this.state.location.powerOutageData.city.TrackedCount - this.state.location.powerOutageData.city.OutageCount, color: '#262626' }
              ]}
              lineWidth={30}
            />
          </Fade>
        </div>

        <div className="navMenu">
          <Link to='/'>
            <Fade right distance={'10px'} delay={150}>
              <FontAwesomeIcon className="homeNav" icon={faHome} size="2x" />
            </Fade>
          </Link>
          <Link to='/weather'>
            <Fade right distance={'10px'} delay={150}>
              <FontAwesomeIcon className="cloudNav" icon={faCloud} size="2x" />
            </Fade>
          </Link>
          <Link to='/outages'>
            <Fade right distance={'10px'} delay={150}>
              <FontAwesomeIcon className="boltNav" icon={faBolt} size="2x" />
            </Fade>
          </Link>
        </div>

      </div>
    );
  };
}

export default LocationStats;
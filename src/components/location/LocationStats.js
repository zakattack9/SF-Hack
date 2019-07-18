import React from 'react';
import './LocationStats.css';
import SearchBar from '../SearchBar';
import ReportButton from '../ReportButton';
import PieChart from 'react-minimal-pie-chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHome, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class LocationStats extends React.Component {
  state = { location: this.props.location.state.location };

  componentDidMount() {
    console.log(this.state.location);
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
        <SearchBar width="100%" />
        <div className="stats">
          <div className="locationInfo">
            <div className="county">{this.state.location.county} County</div>
            <div className="locationName">{this.state.location.locationName}</div>
            <div className="city">{this.state.location.city}, {this.state.location.abbrState}</div>
          </div>

          <div className="locationData">
            <table>
              <tr>
                <td>Status:</td>
                <td style={this.getStatusColor()}>{this.state.location.status}</td>
              </tr>
              <tr>
                <td>Power Outage Risk:</td>
                <td style={this.getRiskColor()}>{this.state.location.risk}</td>
              </tr>
              <tr>
                <td>Last Updated:</td>
                <td>{this.state.location.lastUpdated}</td>
              </tr>
              <tr>
                <td>Reported Outages:</td>
                <td>{this.state.location.reports}</td>
              </tr>
            </table>
          </div>

          <hr />

          <div className="powerOutageData">
            <div className="powerOutageTitle">Power Outage Tracking</div>
            <table>
              <tbody>
                <div className="category">State</div>
                <tr>
                  <td>Population Tracked:</td>
                  <td>{this.state.location.powerOutageData.state.TrackedCount}</td>
                </tr>
                <tr>
                  <td>Outages:</td>
                  <td>{this.state.location.powerOutageData.state.OutageCount}</td>
                </tr>
                <div className="category">County</div>
                <tr>
                  <td>Population Tracked:</td>
                  <td>{this.state.location.powerOutageData.county.TrackedCount}</td>
                </tr>
                <tr>
                  <td>Outages:</td>
                  <td>{this.state.location.powerOutageData.county.OutageCount}</td>
                </tr>
                <div className="category">City</div>
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

          <ReportButton />
        </div>

        <div className="outageGraph">
          <div className="graphTitle">{this.calcPctWithoutPower()}% without power in {this.state.location.city}</div>
          <PieChart
            data={[
              { title: 'Tracked', value: this.state.location.powerOutageData.city.OutageCount, color: '#FFD227' },
              { title: 'Outages', value: this.state.location.powerOutageData.city.TrackedCount - this.state.location.powerOutageData.city.OutageCount, color: '#262626' }
            ]}
            lineWidth={30}
          />
        </div>

        <div className="navMenu">
          <Link to='/'>
            <FontAwesomeIcon className="homeNav" icon={faHome} size="2x" />
          </Link>
          <Link to='/weather'>
            <FontAwesomeIcon className="cloudNav" icon={faCloud} size="2x" />
          </Link>
          <Link to='/outages'>
            <FontAwesomeIcon className="boltNav" icon={faBolt} size="2x" />
          </Link>
        </div>

      </div>
    );
  };
}

export default LocationStats;
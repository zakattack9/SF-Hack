import React from 'react';
import './LocationStats.css';
import SearchBar from './SearchBar';
import ReportButton from './ReportButton';
import PieChart from './PieChart';

class LocationStats extends React.Component {

  render() {
    return (
      <div className="LocationStatsWrapper">
        <SearchBar width="100%" />
        <div className="stats">
          <div className="locationInfo">
            <div className="county">Maricopa County</div>
            <div className="locationName">Marina Heights</div>
            <div className="city">Tempe, AZ</div>
          </div>

          <div className="locationData">
            <table>
              <tr>
                <td>Status:</td>
                <td>Potentially Down</td>
              </tr>
              <tr>
                <td>Power Outage Risk:</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Last Updated:</td>
                <td>12:30 pm</td>
              </tr>
              <tr>
                <td>Reported Outages:</td>
                <td>0</td>
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
                  <td>7.1 Million</td>
                </tr>
                <tr>
                  <td>Outages:</td>
                  <td>35,729</td>
                </tr>
                <div className="category">County</div>
                <tr>
                  <td>Population Tracked:</td>
                  <td>4.3 Million</td>
                </tr>
                <tr>
                  <td>Outages:</td>
                  <td>7,560</td>
                </tr>
                <div className="category">City</div>
                <tr>
                  <td>Population Tracked:</td>
                  <td>185,373</td>
                </tr>
                <tr>
                  <td>Outages:</td>
                  <td>2,039</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ReportButton />
        </div>

        <div className="outageGraph">
          {/* <PieChart /> */}
        </div>
      </div>
    );
  };
}

export default LocationStats;
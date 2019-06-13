import React from 'react';
import './LocationStats.css';
import SearchBar from './SearchBar';
import ReportButton from './ReportButton';
// import PieChart from './PieChart';

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
                <td className='green'>Good</td>
              </tr>
              <tr>
                <td>Power Outage Risk:</td>
                <td className='green'>Medium</td>
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
                  <td>731,525</td>
                </tr>
                <tr>
                  <td>Outages:</td>
                  <td>117</td>
                </tr>
                <div className="category">County</div>
                <tr>
                  <td>Population Tracked:</td>
                  <td>328,766</td>
                </tr>
                <tr>
                  <td>Outages:</td>
                  <td>96</td>
                </tr>
                <div className="category">City</div>
                <tr>
                  <td>Population Tracked:</td>
                  <td>18,828</td>
                </tr>
                <tr>
                  <td>Outages:</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ReportButton />
        </div>

        {/* <div className="outageGraph">

        </div> */}
      </div>
    );
  };
}

export default LocationStats;
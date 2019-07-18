import React from 'react';
import './ReportOutage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHome, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { sfLocationData } from '../../api/data';
import axios from 'axios';

class ReportOutage extends React.Component {
  state = { location: 'Tempe, AZ:Marina Heights', description: null };

  handleSubmit = event => {
    // need to add code to compensate for time differences
    event.preventDefault();
    let cityState = this.state.location.split(":")[0];
    let sfLocation = this.state.location.split(":")[1];

    axios({
      url: 'https://gebef0w3d8.execute-api.us-west-2.amazonaws.com/dev/report',
      method: 'post',
      contentType: "application/json; charset=utf-8",
      dataType: 'JSON',
      data: JSON.stringify({
        "time": new Date().toISOString(),
        "city": cityState,
        "description": this.state.description,
        "location": sfLocation
      })
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="ReportOutage">
        <div className="reportWrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="reportIcon">
              <FontAwesomeIcon icon={faBolt} size="lg" />
            </div>
            <h1 className='reportTitle'>Report an Outage</h1>

            <div className="fieldTitle">Location</div>
            <select className="locationSelect" onChange={(e) => this.setState({ location: e.target.value })}>
              {sfLocationData.map((location, i) => {
                let cityState = `${location.city}, ${location.abbrState}:${location.locationName}`;
                return <option key={i} value={cityState}>{location.locationName}</option>
              })}
            </select>

            <div className="fieldTitle">Cause of Outage</div>
            <textarea className="descriptionField" onChange={(e) => this.setState({ description: e.target.value })}></textarea>

            <input type="submit" value="Report" className="sendReportBtn"></input>
          </form>
        </div>

        <div className="sideNav">
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

          <div className="arrowWrapper">
            <Link to='/weather'>
              <div className="arrowText">Weather<br />Updates</div>
              <FontAwesomeIcon className="arrowIcon" icon={faCaretRight} size="2x" />
            </Link>
          </div>
        </div>
      </div>
    );
  };
}

export default ReportOutage;
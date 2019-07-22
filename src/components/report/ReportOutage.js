import React from 'react';
import './ReportOutage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHome, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import { sfLocationData } from '../../api/data';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

class ReportOutage extends React.Component {
  state = {
    location: 'Tempe, AZ:Marina Heights',
    description: null,
    redirect: false,
    errMsg: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.description === null) {
      this.setState({ errMsg: 'Please provide the cause of the power outage' })
    } else {
      // need to add code to compensate for time differences
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
          this.setState({ redirect: true });
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/outages"></Redirect>
    }

    return (
      <div className="ReportOutage">
        <div className="reportWrapper">
          <form onSubmit={this.handleSubmit}>
            <Fade bottom distance={'8px'}>
              <div className="reportIcon">
                <FontAwesomeIcon icon={faBolt} size="lg" />
              </div>
              <h1 className='reportTitle'>Report an Outage</h1>
            </Fade>

            <Fade bottom distance={'8px'} delay={200}>
              <div className="fieldTitle">Location</div>
              <select className="locationSelect" onChange={(e) => this.setState({ location: e.target.value })}>
                {sfLocationData.map((location, i) => {
                  let cityState = `${location.city}, ${location.abbrState}:${location.locationName}`;
                  return <option key={i} value={cityState}>{location.locationName}</option>
                })}
              </select>
            </Fade>

            <Fade bottom distance={'8px'} delay={300}>
              <div className="fieldTitle">Cause of Outage</div>
              <textarea className="descriptionField" onChange={(e) => this.setState({ description: e.target.value })}></textarea>
              <div className="errMsg">{this.state.errMsg}</div>
            </Fade>

            <Fade bottom distance={'8px'} delay={400}>
              <input type="submit" value="Report" className="sendReportBtn"></input>
            </Fade>
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
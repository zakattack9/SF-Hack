import React from 'react';
import './ReportOutage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHome, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class ReportOutage extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="ReportOutage">
        <div className="reportWrapper">
          <div className="reportIcon">
            <FontAwesomeIcon icon={faBolt} size="lg" />
          </div>
          <h1 className='reportTitle'>Report an Outage</h1>
          <div className="fieldTitle">Location</div>
          <input className="locationField" value="yuh"></input>
          <div className="fieldTitle">Cause of Outage</div>
          <textarea className="descriptionField"></textarea>
          <div className="sendReportBtn">Report</div>
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
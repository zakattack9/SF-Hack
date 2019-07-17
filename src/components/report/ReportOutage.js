import React from 'react';
import './ReportOutage.css';
import ReportButton from '../ReportButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

class ReportOutage extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="ReportOutage">
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
    );
  };
}

export default ReportOutage;
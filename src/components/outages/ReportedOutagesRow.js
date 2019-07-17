import React from 'react';
import './ReportedOutagesRow.css';
import ReportedOutagesNotifications from './ReportedOutagesNotifications';
import SearchBar from '../SearchBar';
import ReportButton from '../ReportButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCaretRight, faBolt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ReportedOutagesRow(props) {
  return (
    <div className="ReportedOutagesRow">
      <SearchBar width="40%" />
      <div className="boltIcon">
        <FontAwesomeIcon icon={faBolt} size="lg" />
      </div>
      <h1 className='outagesTitle'>Reported Outages</h1>
      <div className="outageNotificationWrapper">
        <ReportedOutagesNotifications location='Tempe, AZ' time='8:03 am' stateFarmLocation='Marina Heights' description="All systems and servers have gone down due to a mass power outage cause by heavy rain and wind in the Tempe area" />
        <ReportedOutagesNotifications location='Phoenix, AZ' time='8:03 am' stateFarmLocation='Main Headquarters' description="A part of claims department is down due to a power outage that affected the south side of the Bloomington headquarters" />
        <ReportedOutagesNotifications location='Phoenix, AZ' time='8:03 am' stateFarmLocation='Marina Heights' description="All systems and servers have gone down due to a power outage" />
        <ReportedOutagesNotifications location='Phoenix, AZ' time='8:03 am' stateFarmLocation='Marina Heights' description="All systems and servers have gone down due to a power outage" />
        <ReportedOutagesNotifications location='Tempe, AZ' time='8:03 am' stateFarmLocation='Marina Heights' description="All systems and servers have gone down due to a mass power outage cause by heavy rain and wind in the Tempe area" />
        <ReportedOutagesNotifications location='Phoenix, AZ' time='8:03 am' stateFarmLocation='Main Headquarters' description="A part of claims department is down due to a power outage that affected the south side of the Bloomington headquarters" />
        <ReportedOutagesNotifications location='Phoenix, AZ' time='8:03 am' stateFarmLocation='Marina Heights' description="All systems and servers have gone down due to a power outage" />
        <ReportedOutagesNotifications location='Phoenix, AZ' time='8:03 am' stateFarmLocation='Marina Heights' description="All systems and servers have gone down due to a power outage" />
      </div>
      <ReportButton />

      <div className="outagesNav">
        <div className="homeIcon">
          <Link to='/'>
            <FontAwesomeIcon icon={faHome} size="lg" />
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
  )
}

export default ReportedOutagesRow;
import React from 'react';
import './OutageRow.css';
import OutageNotification from './OutageNotification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const OutageRow = props => {
  return (
    <div className="OutageRow">
      <div className="titleWrapper">
        <h1 className='mainTitle'>Reported<br />Outages</h1>
        <div className="boltIcon">
          <FontAwesomeIcon icon={faBolt} size="lg" />
        </div>
      </div>
      <OutageNotification time='2:05 pm' office='Marina Heights' location='Phoenix, AZ' />
      <OutageNotification time='6:03 am' office='Dallas Hub' location='Dallas, TX' />
      <OutageNotification time='5:45 am' office='Atlanta Hub' location='Atlanta, GA' />

      <div className="viewAll">
        <Link to="/outages">
          View All
        </Link>
      </div>
    </div>
  )
}

export default OutageRow;
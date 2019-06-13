import React from 'react';
import './OutageRow.css';
import UserOutageNotification from './UserOutageNotification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const OutageRow = props => {
  return (
    <div className="OutageRow">
      <div className="titleWrapper">
        <h1 className='mainTitle'>Reported<br />Outages</h1>
        <div className="boltIcon">
          <FontAwesomeIcon icon={faBolt} size="lg" />
        </div>
      </div>
      <UserOutageNotification time='2:05 pm' office='Marina Heights' location='Phoenix, AZ' />
      <UserOutageNotification time='6:03 am' office='Dallas Hub' location='Dallas, TX' />
      <UserOutageNotification time='5:45 am' office='Atlanta Hub' location='Atlanta, GA' />
      <div className="viewAll">View All</div>
    </div>
  )
}

export default OutageRow;
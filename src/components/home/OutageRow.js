import React from 'react';
import './OutageRow.css';
import SideNotification  from './SideNotification';
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
      
      <SideNotification location="Tempe, AZ" time='2:05 pm' title='Marina Heights' description='All systems and servers have gone down due to a power outage' />
      <SideNotification location="Dallas, TX" time='2:05 pm' title='Dallas Hub' description='All systems and servers have gone down due to a power outage' />
      <SideNotification location="Atlanta, GA" time='2:05 pm' title='Atlanta Hub' description='All systems and servers have gone down due to a power outage' />

      <div className="viewAll">
        <Link to="/outages">
          View All
        </Link>
      </div>
    </div>
  )
}

export default OutageRow;
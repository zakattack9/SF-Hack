import React from 'react';
import './ReportedOutagesNotifications.css';
import ReportedOutagesNotifications from './ReportedOutagesNotifications';
import SearchBar from './SearchBar';
import ReportButton from './ReportButton';

function ReportedOutagesRow(props) {
  return (
    <div className="ReportedOutagesRow">  
      <SearchBar width = "40%"/>
      <div className="outageNotificationWrapper">
        <h1 className = 'outagesTitle'>Reported Outages</h1>
        <ReportedOutagesNotifications location = 'Tempe, AZ' time = '8:03 am' stateFarmLocation = 'Marina Heights' description = "All systems and servers have gone down due to a mass power outage cause by heavy rain and wind in the Tempe area"/>
        <ReportedOutagesNotifications location = 'Phoenix, AZ' time = '8:03 am' stateFarmLocation = 'Main Headquarters' description = "A part of claims department is down due to a power outage that affected the south side of the Bloomington headquarters"/>
        <ReportedOutagesNotifications location = 'Phoenix, AZ' time = '8:03 am' stateFarmLocation = 'Marina Heights' description = "All systems and servers have gone down due to a power outage"/>
        <ReportedOutagesNotifications location = 'Phoenix, AZ' time = '8:03 am' stateFarmLocation = 'Marina Heights' description = "All systems and servers have gone down due to a power outage"/>
      </div>
      <ReportButton />
    </div>
  )
}

export default ReportedOutagesRow;
import React from 'react';
import './ReportedOutagesNotifications.css';
import ReportedOutagesNotifications from './ReportedOutagesNotifications';
import SearchBar from './SearchBar';

function ReportedOutagesRow(props) {
  return (
    <div>  
      <SearchBar width = "20%" />
      <h1 className = 'mainTitle'>Reported Outages</h1>
      <ReportedOutagesNotifications location = 'Tempe, AZ' time = '8:03 am' stateFarmLocation = 'Marina Heights' description = "All systems and servers have gone down due to a mass power outage cause by heavy rain and wind in the Tempe area"/>
      <ReportedOutagesNotifications location = 'Phoenix, AZ' time = '8:03 am' stateFarmLocation = 'Main Headquarters' description = "A part of claims department is down due to a power outage that affected the south side of the Bloomington headquarters"/>
      <ReportedOutagesNotifications location = 'Phoenix, AZ' time = '8:03 am' stateFarmLocation = 'Marina Heights' description = "All systems and servers have gone down due to a power outage"/>
      <ReportedOutagesNotifications location = 'Phoenix, AZ' time = '8:03 am' stateFarmLocation = 'Marina Heights' description = "All systems and servers have gone down due to a power outage"/>
    </div>
  )
}

export default ReportedOutagesRow;
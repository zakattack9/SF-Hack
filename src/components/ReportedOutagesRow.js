import React from 'react';
import './ReportedOutagesNotifications.css';
import ReportedOutagesNotifications from './ReportedOutagesNotifications';
import SearchBar from './SearchBar';

function ReportedOutagesRow(props) {
    return (
        <div>  
             <SearchBar  width = "20%" />
            <h1 className = 'mainTitle'>Reported Outages</h1>
            <ReportedOutagesNotifications location = 'Tempe, AZ' time = '10:03 am' stateFarmLocation = 'Marina Heights' description = "All systems and servers have gone down due to a mass power outage cause by heavy rain and wind in the Tempe area"/>
            <ReportedOutagesNotifications location = 'Bloomington, IL' time = '8:03 am' stateFarmLocation = 'Main Headquarters' description = "A part of claims department is down due to a power outage that affected the south side of the Bloomington headquarters"/>
            <ReportedOutagesNotifications location = 'Atlanta, GA' time = '8:03 am' stateFarmLocation = 'Atlanta Hub' description = "The large majority of Atlanta systems and servers have gone down due to a power outage"/>
            <ReportedOutagesNotifications location = 'Dallas, TX' time = '8:03 am' stateFarmLocation = 'Dallas Hub' description = "Enterprise Technology at the Dallas Hub is experiencing communication issues due to a power outage"/>
        </div>
    )
}

export default ReportedOutagesRow;
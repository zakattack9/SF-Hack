import React from 'react';
import SearchBar from './SearchBar';

function ReportedOutagesNotifications(props) {
    return (
    <div className = 'wrapNotification'>
        <SearchBar  width = "20%" />
        <div className = 'outageNotifications '>
            
            <div className = 'groupLocationTime'>
                <h4 className = 'location'>{props.location}</h4>     
                <h4 className = 'time'>{props.time}</h4>
            </div>
            <div className = 'stateFarmLocation'>{props.stateFarmLocation}</div>    
            <h6 className = 'description'>{props.description}</h6>
        </div>
    </div>
    )
}


export default ReportedOutagesNotifications;
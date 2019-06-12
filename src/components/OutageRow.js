import React from 'react';  
import './OutageRow.css';
import UserOutageNotification from './UserOutageNotification';

function OutageRow(props) {

    return (

        <div >
            
            <h1 className = 'title' >Reported <br/> Outages</h1>
            <UserOutageNotification  time = '2:05 pm' office = 'Marina Heights'location = 'Phoenix, AZ' />
            <UserOutageNotification  time = '6:03 am' office = 'Statefarm Texas' location = 'Dallas, TX'/>
            <UserOutageNotification  time = '5:45 am' office = 'Atlanta Hub' location = 'Atlanta, GA'/>
        </div>



    )

}

export default OutageRow;
import React from 'react';

function UserOutageNotification(props) {

    return (

        <div className = 'userOutageNotification' >
            
            <h3 className = 'time' >{(props.time)}</h3>
            <h2 className = 'office'>{(props.office)}</h2>
            <h3 className = 'location'>{(props.location)}</h3>
        </div>



    )

}

export default UserOutageNotification;
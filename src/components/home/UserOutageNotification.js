import React from 'react';

function UserOutageNotification(props) {
  return (
    <div className='UserOutageNotification' >
      <div className='time'>{props.time}</div>
      <div className='office'>{props.office}</div>
      <div className='location'>{props.location}</div>
    </div>
  )
}

export default UserOutageNotification;
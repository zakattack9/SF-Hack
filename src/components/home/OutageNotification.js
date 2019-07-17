import React from 'react';

function OutageNotification(props) {
  return (
    <div className='OutageNotification' >
      <div className='time'>{props.time}</div>
      <div className='office'>{props.office}</div>
      <div className='location'>{props.location}</div>
    </div>
  )
}

export default OutageNotification;
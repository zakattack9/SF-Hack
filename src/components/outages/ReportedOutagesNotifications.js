import React from 'react';

function ReportedOutagesNotifications(props) {
  return (
    <div className='outageNotification'>
      <div className='groupLocationTime'>
        <h4 className='location'>{props.location}</h4>
        <h4 className='outageTime'>{props.time}</h4>
      </div>
      <div className='stateFarmLocation'>{props.stateFarmLocation}</div>
      <h6 className='description'>{props.description}</h6>
    </div>
  )
}


export default ReportedOutagesNotifications;
import React from 'react';
import SearchBar from './SearchBar';

function ReportedOutagesNotifications(props) {
  return (
    <div className='wrapNotification'>
      <div className='outageNotifications '>

        <div className='groupLocationTime'>
          <h4 className='location'>{props.location}</h4>
          {/* <h4 className='outageTime'>{props.time}</h4> */}
        </div>
        <div className='stateFarmLocation'>{props.stateFarmLocation}</div>
        <h6 className='description'>{props.description}</h6>
      </div>
    </div>
  )
}


export default ReportedOutagesNotifications;
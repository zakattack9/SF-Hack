import React from 'react';
import './SideNotification.css';

const SideNotification = props => {
  return (
    <div className='SideNotification'>
      <div className='groupLocationTime'>
        <div className='location'>{props.location}</div>
        <div className='time'>{props.time}</div>
      </div>

      <div className='title'>{props.title}</div>

      <div className='description'>{props.description}</div>
    </div>
  )
}

export default SideNotification;
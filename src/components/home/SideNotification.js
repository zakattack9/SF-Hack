import React from 'react';
import './SideNotification.css';
import Fade from 'react-reveal/Fade';

const SideNotification = props => {
  return (
    <div className='SideNotification'>
      <Fade bottom distance={'8px'} delay={props.delay}>
        <div className='groupLocationTime'>
          <div className='location'>{props.location}</div>
          <div className='time'>{props.time}</div>
        </div>

        <div className='title'>{props.title}</div>

        <div className='description'>{props.description}</div>
      </Fade>
    </div>
  );
}

export default SideNotification;
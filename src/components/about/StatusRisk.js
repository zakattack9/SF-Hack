import React from 'react';
import './StatusRisk.css';

const About = props => {
  return (
    <div className="StatusRisk">
      <div className="riskStatusWrapper">
        <span className="risk" style={props.riskStyle}>{props.risk}</span>
        <br />
        <span className="status" style={props.statusStyle}>{props.status}</span>
      </div>

      <div className="desc">
        {props.desc}
      </div>
    </div>
  );
}

export default About;
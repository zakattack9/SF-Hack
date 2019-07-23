import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const btnStyle = {
  fontSize: '0.7em',
  color: '#FFD227',
  border: '#FFD227 solid 2px',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '0.09em',
  borderRadius: '100px 100px 100px 100px',
  padding: '0.5em',
  display: 'block',
  width: '90px',
  transition: '0.3s'
};

const ReportButton = () => {
  return (
    <Link to="/report">
      <Fade bottom distance={'10px'} delay={250}>
        <div style={btnStyle} className="reportBtn">Report +</div>
      </Fade>
    </Link>
  );
}

export default ReportButton;
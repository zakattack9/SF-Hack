import React from 'react';

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
};

const ReportButton = () => {
  return <div style={btnStyle} className="reportBtn">Report +</div>;
}

export default ReportButton;
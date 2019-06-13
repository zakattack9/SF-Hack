import React from 'react';
import ReportButton from './ReportButton';
import SearchBar from './SearchBar';
import BubbleChart from './BubbleChart';
import './HomeMain.css';

class HomeMain extends React.Component {
  render() {
    return (
      <div className='HomeMain'>
        <SearchBar width="35%"/>
        <ReportButton />
        <BubbleChart />
        <div className="outageRisk">
          <span className="title">
            Power<br />
            Outage<br />
            Risk<br />
          </span>
          <span className="riskNone">None<br /></span>
          <span className="riskLow">Low<br /></span>
          <span className="riskMedium">Medium<br /></span>
          <span className="riskHigh">High<br /></span>
        </div>
      </div>
    )
  }
}

export default HomeMain;
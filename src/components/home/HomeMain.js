import React from 'react';
import ReportButton from '../ReportButton';
import SearchBar from '../SearchBar';
import BubbleChart from './BubbleChart';
import './HomeMain.css';
import { sfLocationData } from '../../api/data';
import { Redirect, withRouter } from 'react-router-dom';

class HomeMain extends React.Component {
  state = { location: null, redirect: false };

  onSearchSubmit = (term) => {
    if (term !== '') {
      let locationObj = sfLocationData.find(location => {
        return location.locationName.toLowerCase().includes(term.toLowerCase());
      })
      if (locationObj !== undefined) {
        this.setState({ location: locationObj, redirect: true })
      }
    }
  }

  render() {
    if (this.state.redirect) {
      this.props.history.push('/');
      return <Redirect to={{
        pathname: '/location',
        state: { location: this.state.location, sfLocationData }
      }} />
    }

    return (
      <div className='HomeMain'>
        <SearchBar width="35%" onSubmitForm={this.onSearchSubmit} />
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

export default withRouter(HomeMain);
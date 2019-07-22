import React from 'react';
import ReportButton from '../ReportButton';
import SearchBar from '../SearchBar';
import BubbleChart from './BubbleChart';
import './HomeMain.css';
import { sfLocationData } from '../../api/data';
import { Redirect, withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class HomeMain extends React.Component {
  state = { location: null, redirect: false, errMsg: '' };

  onSearchSubmit = (term) => {
    if (term !== '') {
      let locationObj = sfLocationData.find(location => {
        return location.locationName.toLowerCase().includes(term.toLowerCase());
      })
      if (locationObj !== undefined) {
        this.setState({ location: locationObj, redirect: true });
        this.setState({ errMsg: '' });
      } else {
        this.setState({ errMsg: 'Location not found, please search for another location' });
      }
    } else {
      this.setState({ errMsg: 'Please enter a location to search for' });
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
        <Fade bottom distance={'10px'} delay={150}>
          <SearchBar width="35%" onSubmitForm={this.onSearchSubmit} />
        </Fade>
        <div className="errMsg">{this.state.errMsg}</div>
        <ReportButton />
        <BubbleChart />

        <Fade bottom distance={'10px'} delay={150}>
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
        </Fade>
      </div>
    )
  }
}

export default withRouter(HomeMain);
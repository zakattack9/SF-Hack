import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state.term);
  };

  render() {
    const searchBarStyle = {
      width: this.props.width,
      fontSize: '0.8em',
      fontWeight: '400',
      backgroundColor: '#2D2D2D',
      color: '#808080',
      // letterSpacing: '-0.03em',
      outline: 'none',
      border: 'none',
      borderRadius: '100px 100px 100px 100px',
      boxShadow: 'inset 0 2px 3px 0 #232323',
      padding: '0.6em',
      paddingLeft: '1.5em',
      display: 'block'
    };

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          style={searchBarStyle}
          className="searchBar"
          value={this.state.term}
          placeholder="Search by location"
          onChange={(e) => this.setState({ term: e.target.value })}></input>
      </form>
    );
  }
}

export default SearchBar;
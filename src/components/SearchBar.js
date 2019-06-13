import React from 'react';


const SearchBar = props => {
  const searchBarStyle = {
    width: props.width,
    fontSize: '0.8em',
    fontWeight: 'bold',
    backgroundColor: '#2D2D2D',
    color: '#404040',
    letterSpacing: '-0.03em',
    outline: 'none',
    border: 'none',
    borderRadius: '100px 100px 100px 100px',
    boxShadow: 'inset 0 2px 3px 0 #232323',
    padding: '0.6em',
    paddingLeft: '1.5em',
    display: 'block',
  };

  return <input style={searchBarStyle} className="searchBar" value="Search"></input>;
}

export default SearchBar;
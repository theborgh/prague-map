import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ searchInput, onSearchBoxUpdate }) => {
  Sidebar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    onSearchBoxUpdate: PropTypes.func.isRequired,
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar--title">Prague map</h3>
      <input
        className="sidebar--input"
        type="text"
        value={searchInput}
        onChange={onSearchBoxUpdate}
      />
      <div id="sidebar--results">[List of results]</div>
    </div>
  );
};

export default Sidebar;

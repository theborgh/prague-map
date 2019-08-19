import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

const Sidebar = ({ searchInput, onSearchBoxUpdate }) => {
  Sidebar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    onSearchBoxUpdate: PropTypes.func.isRequired,
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Prague's Parks</h3>
      <input
        className="sidebar__input"
        type="text"
        value={searchInput}
        onChange={onSearchBoxUpdate}
      />
      <div className="sidebar__results">[List of results]</div>
    </div>
  );
};

export default Sidebar;

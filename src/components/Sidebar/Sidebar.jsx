import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

const Sidebar = ({ searchInput, onSearchBoxUpdate, visibleParks }) => {
  Sidebar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    onSearchBoxUpdate: PropTypes.func.isRequired,
    visibleParks: PropTypes.array.isRequired,
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Prague&apos;s Parks</h3>
      <input
        className="sidebar__input"
        type="text"
        value={searchInput}
        onChange={onSearchBoxUpdate}
      />
      <div className="sidebar__results">
        {
          visibleParks
            .map((filteredPark, i) => (
              <div className="sidebar__results" key={i}>
                {filteredPark.name}</div>
            ))}
      </div>
    </div>
  );
};

export default Sidebar;

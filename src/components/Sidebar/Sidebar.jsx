import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';
import parks from '../../parks';

const Sidebar = ({ searchInput, onSearchBoxUpdate }) => {
  Sidebar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    onSearchBoxUpdate: PropTypes.func.isRequired,
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
          parks
            .filter(park => park.name.toLowerCase().includes(searchInput.toLowerCase()))
            .map((filteredPark, i) => (
              <div key={i}>
                <div className="sidebar__park-name">{filteredPark.name}</div><hr></hr>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Sidebar;

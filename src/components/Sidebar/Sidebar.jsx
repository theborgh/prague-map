import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ visible, searchInput, onSearchboxUpdate }) => {
  Sidebar.propTypes = {
    visible: PropTypes.bool.isRequired,
    searchInput: PropTypes.string.isRequired,
    onSearchboxUpdate: PropTypes.func.isRequired,
  };

  return (
    <div className="sidebar">
      {
        visible ? Sidebar : null
      }
    </div>
  );
};

export default Sidebar;

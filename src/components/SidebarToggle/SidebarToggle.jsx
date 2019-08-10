import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import './SidebarToggle.css';

const SidebarToggle = ({ toggle }) => {
  SidebarToggle.propTypes = {
    toggle: PropTypes.func.isRequired,
  };

  return (
    <div className="sidebar-toggle" onClick={toggle}>
      <MenuIcon />
    </div>
  );
};

export default SidebarToggle;

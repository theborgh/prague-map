import React from 'react';
import ReactDOM from 'react-dom';
import SidebarToggle from './SidebarToggle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SidebarToggle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Map />, div);
  ReactDOM.unmountComponentAtNode(div);
});
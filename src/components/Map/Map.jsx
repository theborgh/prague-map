import React, { Component } from 'react';
import './Map.scss';
import parks from './parks';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

class Map extends Component {
  constructor(props) {
    super(props);
    const { searchInput } = this.props;
    this.state = {
      searchInput,
    };
  }

  componentDidMount() {
    this.createMap();

    parks.forEach(park => console.log(park.name, park.latitude, park.longitude))
  }
  
  createMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoianJhYmJpdGUiLCJhIjoiY2p6NHF1ODNwMDIwZTNucWwyMG1wdWtoYiJ9.7whEfiHYWiNfnoGlkurT2g';
    const bounds = [[14.2, 50.0], [14.6, 50.2]]; // W, S, E, N
    const pragueMap = new mapboxgl.Map({
      container: 'map',
      center: [14.40, 50.08], // starting position [lng, lat]
      zoom: 11, // starting zoom
      minZoom: 10,
      maxZoom: 14,
      style: 'mapbox://styles/mapbox/streets-v11',
      hash: true,
      maxBounds: bounds,
    });
  }

  render() {
    return (
      <div id="map">
      </div>
    );
    }
};

export default Map;

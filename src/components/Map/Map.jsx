import React, { Component } from 'react';
import './Map.css';

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

    mapboxgl.accessToken = 'pk.eyJ1IjoianJhYmJpdGUiLCJhIjoiY2p6NHF1ODNwMDIwZTNucWwyMG1wdWtoYiJ9.7whEfiHYWiNfnoGlkurT2g';
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [14.40, 50.08], // starting position [lng, lat]
      zoom: 11, // starting zoom
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

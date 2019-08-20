import React, { useEffect, useRef } from 'react';
import './Map.scss';
import parks from '../../parks';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const Map = ({ searchInput, markers }) => {
  let map = useRef(null);

  useEffect(() => {
    map.current = createMap();
  }, []);

  useEffect(() => {
    addFilteredParksToMap(searchInput, markers);
  }, [searchInput, markers]);

  const createMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoianJhYmJpdGUiLCJhIjoiY2p6NHF1ODNwMDIwZTNucWwyMG1wdWtoYiJ9.7whEfiHYWiNfnoGlkurT2g';
    const bounds = [[14.2, 50.0], [14.6, 50.2]]; // W, S, E, N

    return new mapboxgl.Map({
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

  const addFilteredParksToMap = (searchInput, markers) => {
    parks.forEach(park => {
      if (park.name.toLowerCase().includes(searchInput.toLowerCase())) {
        new mapboxgl.Marker()
          .setLngLat([park.longitude, park.latitude])
          .addTo(map.current)
      }
    })
  }

  return (
    <div id="map">
    </div>
  );

};

export default Map;

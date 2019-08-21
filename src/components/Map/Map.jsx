import React, { useState, useEffect, useRef } from 'react';
import './Map.scss';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const Map = ({ visibleParks }) => {
  let map = useRef(null);
  const [visibleMarkers, setVisibleMarkers] = useState([]);

  useEffect(() => {
    map.current = createMap();
  }, []);

  useEffect(() => {
    updateMarkers(visibleParks);
  }, [visibleParks]);

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

  const updateMarkers = (visibleParks) => {
    visibleMarkers.forEach(marker => {
      marker.remove();
    });
    
    let tmp = [];
    visibleParks.forEach(park => {
      let popup = new mapboxgl.Popup({ offset: 25 })
        .setText(park.name); 
      tmp.push(
        new mapboxgl.Marker()
          .setLngLat([park.longitude, park.latitude])
          .setPopup(popup)
          .addTo(map.current)
      );

    })

    setVisibleMarkers(tmp);
  }

  return (
    <div id="map">
    </div>
  );

};

export default Map;

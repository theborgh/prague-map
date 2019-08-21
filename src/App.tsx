import React, { useState } from 'react';
import './App.scss';
import SidebarToggle from './components/SidebarToggle/SidebarToggle';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import parks from './parks';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [visibleParks, setVisibleParks] = useState(parks);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  }

  const onSearchBoxUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    setVisibleParks(filterMarkers(event.target.value));
  };

  const filterMarkers = (filterString: string) => {
    let tmpMarkers = parks;
    
    tmpMarkers.forEach(marker => {
      if (marker.name.toLowerCase().includes(filterString.toLowerCase())) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
    });

    return tmpMarkers.filter(marker => marker.isVisible);
  };

  return (
    <div className="App">
      <SidebarToggle
        toggle={toggleSidebar}
      />
      {
        isSidebarVisible ?
          <Sidebar
            searchInput={searchInput}
            onSearchBoxUpdate={onSearchBoxUpdate}
            visibleParks={visibleParks}
          /> : null
      }

      <Map
        visibleParks={visibleParks}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.scss';
import SidebarToggle from './components/SidebarToggle/SidebarToggle';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import parks from './parks';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [markers, setMarkers] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  }

  const onSearchBoxUpdate = event => {
    setSearchInput(event.target.value);
    setMarkers(filterMarkers(event.target.value));

    console.log(markers);
  };

  const filterMarkers = (filterString) => {
    return parks.filter(park =>
      park.name.toLowerCase().includes(filterString.toLowerCase()));

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
            markers={markers}
            onSearchBoxUpdate={onSearchBoxUpdate}

          /> : null
      }

      <Map
        searchInput={searchInput}
        markers={markers}
      />
    </div>
  );
}

export default App;

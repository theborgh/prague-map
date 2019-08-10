import React, { Component } from 'react';
import './App.css';
import SidebarToggle from './components/SidebarToggle/SidebarToggle';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: 'sdfsg',
      isSidebarVisible: false,
    }
  }

  toggleSidebar = () => {
    this.setState(prevState => ({ isSidebarVisible: !prevState.isSidebarVisible }))
  }

  updateSearchInput = event => {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    const { isSidebarVisible, searchInput } = this.state;
    return (
      <div className="App">
        <SidebarToggle
          toggle={this.toggleSidebar}
        />
        {
          isSidebarVisible ?
            <Sidebar
              searchInput={searchInput}
              onSearchBoxUpdate={this.updateSearchInput}
          
            /> : null
        }

        <Map
          searchInput={this.searchInput}
        />
      </div>
    );
  }
}

export default App;

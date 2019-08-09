import React, { Component } from 'react';
import './App.css';
import SidebarToggle from './components/SidebarToggle/SidebarToggle';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      isSidebarVisible: false,
    }
  }

  toggleSidebar = () => {
    this.setState(prevState => ({showSidebar: !prevState.showSidebar}))
  }

  updateSearchInput = newInput => {
    this.setState({searchInput: newInput});
  }

  render() {
    return (
      <div className="App">
        Prague-map
        <SidebarToggle
          onClick={this.toggleSidebar}
        />
        <Sidebar 
          visible={this.isSidebarVisible}
          searchInput={this.searchInput}
          onSearchBoxUpdate={this.updateSearchInput}
        />
        <Map
          searchInput={this.searchInput}
        />
      </div>
    );
  }
}

export default App;

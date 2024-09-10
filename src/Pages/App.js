import React, { Component } from 'react';
import HeaderComponent from '../Components/header_component';
import SidebarComponent from '../Components/sidebar_component';
import './App.css';
{/*import SignUp from './sign_up_page';*/}

class App extends Component {
  render() {
    return (
      <div>
        {/* <SignUp /> */}
        <HeaderComponent />
        <SidebarComponent />
      </div>
    );
  }
}

export default App;

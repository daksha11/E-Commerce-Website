import React, { Component } from 'react';
import HeaderComponent from '../Components/header_component';
import './App.css';
{/*import SignUp from './sign_up_page';*/}

class App extends Component {
  render() {
    return (
      <div>
        {/* <SignUp /> */}
        <HeaderComponent />
      </div>
    );
  }
}

export default App;

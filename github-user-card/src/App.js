import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div>Here's To The Start Of A New App</div>
        </header>
      </div>
    );
  }
  
}

export default App;

import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: []
    };
  }

  componentDidMount() {
    console.log("Component Mount")

    axios
      .get("https://api.github.com/users/TylerAlsop")
      .then(res => {
        console.log("This is the API Data:", res)
        this.setState({ userInfo: res })
      })

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Somponent Update")

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

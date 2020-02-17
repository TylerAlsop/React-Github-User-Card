import React from 'react';
import axios from 'axios';

import User from './components/user';

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
      .catch(err => console.log("Error with axios call", err))

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated. This is the new state:", this.state)

  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div>Here's To The Start Of A New App</div>
            {/* <User 
              key={this.state.userInfo.data.id} 
              name={this.state.userInfo.data.name}
              picture={this.state.userInfo.data.avatar_url}
              followers={this.state.userInfo.data.followers}
            /> */}
        </header>
      </div>
    );
  }
  
}

export default App;

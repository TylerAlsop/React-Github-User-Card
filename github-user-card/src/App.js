import React from 'react';
import axios from 'axios';

import UserCard from './components/user-card';

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
        this.setState({ userInfo: res.data })
      })
      .catch(err => console.log("Error with axios call", err))

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated. This is the new state:", this.state)

  }

  render () {
    console.log("this.state", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <div>Here's To The Start Of A New App</div>
            <UserCard userInfo={this.state.userInfo} />
        </header>
      </div>
    );
  }
  
}

export default App;

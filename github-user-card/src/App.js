import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/lkmarcum`)
      .then(response => {
        return response.json();
      })
      .then(newUser => this.setState({ user: newUser }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return <h1>User Card</h1>;
  }
}

export default App;

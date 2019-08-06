import React from "react";
import "./App.css";
import UserCard from "./UserCard";

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
    return (
      <div>
        <h1>User Card</h1>
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;

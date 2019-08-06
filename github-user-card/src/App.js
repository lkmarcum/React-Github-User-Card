import React from "react";
import "./App.css";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
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

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/lkmarcum/followers`)
      .then(response => {
        return response.json();
      })
      .then(newFollowers => this.setState({ followers: newFollowers }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>User Card</h1>
        <UserCard user={this.state.user} />
        {this.state.followers.length === 0 ? (
          <h5>Loading followers...</h5>
        ) : (
          this.state.followers.map(follower => <UserCard user={follower} />)
        )}
      </div>
    );
  }
}

export default App;

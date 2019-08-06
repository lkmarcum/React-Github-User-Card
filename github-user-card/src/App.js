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
    this.fetchFollowerData();
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

  fetchFollowerData = () => {
    fetch(`https://api.github.com/users/lkmarcum/followers`)
      .then(response => {
        return response.json();
      })
      .then(newFollowers => {
        newFollowers.forEach(follower => {
          fetch(`${follower.url}`)
            .then(response => {
              return response.json();
            })
            .then(newFollower =>
              this.setState({
                followers: [...this.state.followers, newFollower]
              })
            )
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>User Cards</h1>
        </header>
        <div className="user-card">
          <UserCard user={this.state.user} />
        </div>
        <div className="follower-cards">
          {this.state.followers.length === 0 ? (
            <h5>Loading followers...</h5>
          ) : (
            this.state.followers.map(follower => <UserCard user={follower} />)
          )}
        </div>
      </div>
    );
  }
}

export default App;

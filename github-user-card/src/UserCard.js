import React from "react";

export default function UserCard(props) {
  return (
    <div className="card-container">
      <img src={props.user.avatar_url} />
      <div className="text-container">
        <h3>{props.user.name}</h3>
        <h4>{props.user.login}</h4>
        <h4>{props.user.location}</h4>
        <p>{props.user.bio}</p>
      </div>
    </div>
  );
}

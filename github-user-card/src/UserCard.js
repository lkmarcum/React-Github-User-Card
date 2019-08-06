import React from "react";

export default function UserCard(props) {
  return (
    <a href={props.user.html_url} target="_blank">
      <div className="card-container">
        <img width="200" src={props.user.avatar_url} />
        <div className="text-container">
          <h2>{props.user.name}</h2>
          <h4>{props.user.login}</h4>
          <h4>{props.user.location}</h4>
          <p>{props.user.bio}</p>
        </div>
      </div>
    </a>
  );
}

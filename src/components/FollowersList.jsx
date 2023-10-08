import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/FollowersList.css";

function FollowersList() {
  const followers = useSelector((store) => store.userReducer.followers);

  return (
    <div>
      <h1>Followers</h1>
      <div className="follower-container">
        {followers?.map((follower) => (
          <div className="follower-card" key={follower.id}>
            <Link to={`/followerRepositorie/${follower.login}`}>
              <img
                className="follower-avatar"
                src={follower.avatar_url}
                alt={`${follower.login}'s Avatar`}
              />
              <div className="follower-info">
                <h3>{follower.login}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowersList;

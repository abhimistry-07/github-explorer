import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/Users/action";
import RepositoryList from "./RepositoryList";
import FollowersList from "./FollowersList";
import "../styles/UserInput.css";

function UserInput() {
  const [userName, setUserName] = useState("abhimistry-07");
  const [showRepo, setShowRepo] = useState(false);
  const [showFollower, setShowFollower] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.userReducer.isLoading);
  const user = useSelector((store) => store.userReducer.userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      dispatch(fetchUser(userName));
    }
  };

  return (
    <div>
      <h2>GitHub Explorer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <h1>...Loading</h1>
      ) : Object.keys(user).length > 0 ? (
        <div>
          <h3>User Information:</h3>
          <img src={user.avatar_url} alt="" />
          <p>Username: {user.login}</p>
          <p>Name: {user.name || "N/A"}</p>
          <p>Location: {user.location || "N/A"}</p>
          <button onClick={() => setShowRepo(!showRepo)}>
            {" "}
            {showRepo ? "Hide" : "Show"} Repositories
          </button>
          {showRepo ? <RepositoryList /> : null}

          <button onClick={() => setShowFollower(!showFollower)}>
            {" "}
            {showFollower ? "Hide" : "Show"} Followers
          </button>
          {showFollower ? <FollowersList /> : null}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserInput;

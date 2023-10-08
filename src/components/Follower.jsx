import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFollowerRepositories } from "../redux/Users/action";
import "../styles/Follower.css";

function Follower() {
  const { followerName } = useParams();
  const dispatch = useDispatch();

  const followers = useSelector((store) => store.userReducer.followers);
  const followerRepositories = useSelector(
    (store) => store.userReducer.followerRepositories
  );

  const follower = followers?.find(
    (follower) => follower.login === followerName
  );

  useEffect(() => {
    if (follower) {
      dispatch(fetchFollowerRepositories(follower.login));
    }
  }, [dispatch, follower]);

  return (
    <div>
      <h2>{follower?.login}'s Repositories</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Repository Name</th>
            <th>Language</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {followerRepositories.repositories?.map((repo, index) => (
            <tr key={repo.id}>
              <td>{index + 1}</td>
              <td>{repo.name}</td>
              <td>{repo.language || "N/A"}</td>
              <td>{repo.stargazers_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Follower;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchFollowerRepositories } from "../redux/Users/action";
// // import "./Follower.css"; // Import the CSS file

// function Follower() {
//   const { followerName } = useParams();
//   const dispatch = useDispatch();

//   const followers = useSelector((store) => store.userReducer.followers);
//   const followerRepositories = useSelector(
//     (store) => store.userReducer.followerRepositories
//   );

//   const follower = followers?.find(
//     (follower) => follower.login === followerName
//   );

//   useEffect(() => {
//     dispatch(fetchFollowerRepositories(follower.login));
//   }, [follower]);

//   return (
//     <div className="follower-card">
//       <div className="follower-image">
//         <img src={follower?.avatar_url} alt="Follower Avatar" />
//       </div>
//       <div className="follower-details">
//         <h2>{follower?.login}</h2>
//         <p>Name: {follower?.name || "N/A"}</p>
//         <p>Username: {follower?.login}</p>
//         <p>Location: {follower?.location || "N/A"}</p>
//       </div>
//     </div>
//   );
// }

// export default Follower;

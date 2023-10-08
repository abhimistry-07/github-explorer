import React from "react";
import { Route, Routes } from "react-router-dom";
import UserInput from "../components/UserInput";
import RepositoryDetails from "../components/RepositoryDetails";
import FollowersList from "../components/FollowersList";
import Follower from "../components/Follower";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<UserInput />} />
      {/* <Route path="/repositories" element={<RepositoryList />} /> */}
      <Route path="/followersList" element={<FollowersList />} />

      <Route path="/followerRepositorie/:followerName" element={<Follower />} />

      <Route
        path="/repository/:repositoryName"
        element={<RepositoryDetails />}
      />
    </Routes>
  );
}

export default MainRoute;

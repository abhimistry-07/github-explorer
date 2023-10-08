import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/RepositoryList.css";

function RepositoryList() {
  const repositories = useSelector((store) => store.userReducer.repositories);

  return (
    <div>
      <h3>Repositories:</h3>
      <table className="repository-table">
        <thead>
          <tr>
            <th>Repository Number</th>
            <th>Repository Name</th>
          </tr>
        </thead>
        <tbody>
          {repositories?.map((repo, index) => (
            <tr key={repo.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/repository/${repo.name}`}>{repo.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RepositoryList;

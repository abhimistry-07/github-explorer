// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import "../styles/RepositoryDetails.css";

// function RepositoryDetails() {
//   const { repositoryName } = useParams();
//   const repositories = useSelector((store) => store.userReducer.repositories);

//   const repository = repositories?.find((repo) => repo.name === repositoryName);

//   if (!repository) {
//     return (
//       <div>
//         <h2>Repository not found</h2>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Repository Details</h2>
//       <h3>{repository.name}</h3>
//       <p>Description: {repository.description || "N/A"}</p>
//       <p>Created At: {new Date(repository.created_at).toLocaleDateString()}</p>
//       <p>Open Issues: {repository.open_issues_count}</p>
//       <p>Watchers: {repository.watchers_count}</p>
//       <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
//         View on GitHub
//       </a>
//     </div>
//   );
// }

// export default RepositoryDetails;


import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function RepositoryDetails() {
  const { repositoryName } = useParams();
  const repositories = useSelector((store) => store.userReducer.repositories);

  const repository = repositories?.find((repo) => repo.name === repositoryName);

  if (!repository) {
    return (
      <div>
        <h2>Repository not found</h2>
      </div>
    );
  }

  // Inline styles for this component
  const styles = {
    h2: {
      fontSize: "24px",
      marginBottom: "16px",
    },
    h3: {
      fontSize: "20px",
      marginTop: "8px",
      marginBottom: "16px",
    },
    p: {
      margin: "8px 0",
    },
    a: {
      display: "inline-block",
      marginTop: "16px",
      padding: "8px 16px",
      backgroundColor: "#0366d6",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "4px",
      transition: "background-color 0.3s ease",
    },
    aHover: {
      backgroundColor: "#0351a9",
    },
  };

  return (
    <div>
      <h2 style={styles.h2}>Repository Details</h2>
      <h3 style={styles.h3}>{repository.name}</h3>
      <p style={styles.p}>Description: {repository.description || "N/A"}</p>
      <p style={styles.p}>
        Created At: {new Date(repository.created_at).toLocaleDateString()}
      </p>
      <p style={styles.p}>Open Issues: {repository.open_issues_count}</p>
      <p style={styles.p}>Watchers: {repository.watchers_count}</p>
      <a
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.a}
      >
        View on GitHub
      </a>
    </div>
  );
}

export default RepositoryDetails;

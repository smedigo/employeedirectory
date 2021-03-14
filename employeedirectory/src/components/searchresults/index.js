import React from "react";

const SearchResults = ({ results }) => {
  return (
    <ul className="list-group search-results">
      {results.map(result => (
        <div key={result.login.uuid}>
          <li className="list-group-item">
            <img
              alt={`${result.name.first} ${result.name.last}`}
              src={result.picture.large}
              className="img-fluid"
            />
            <h2>{`${result.name.first} ${result.name.last}`}</h2>
            <p>Age: {result.dob.age}</p>
            <p>Email: {result.email}</p>
            <p>Phone: {result.phone}</p>
            <p>Title: {result.name.title}</p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default SearchResults;
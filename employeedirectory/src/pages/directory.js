import React, { useState, useEffect } from "react";
import Directorycard from "../components/directorycard";
import SearchForm from "../components/SearchForm/index";
import SearchResults from "../components/SearchResults/index";
import api from "../utils/api";

const Directory = () => {
  const [employees, setEmployees] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      api.getEmployees(25).then(res => {
        setEmployees([...res.data.results]);
        const sorted = [...res.data.results].sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        );
        setResults([...sorted]);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleInputChange = e => {
    setResults(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    try {
      let searchRes = employees.filter(employee =>
        `${employee.name.first} ${employee.name.last}`
          .toLowerCase()
          .includes(document.querySelector("#employee").value.toLowerCase())
      );

      setResults([...searchRes]);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  const handleSort = sortedBy => {
    console.log(sortedBy);
    let sorted;
    switch (sortedBy) {
      case "First Name":
        sorted = employees.sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        );
        console.log(sorted);
        setResults([...sorted]);
        break;
      case "Last Name":
        sorted = employees.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
        setResults([...sorted]);
        console.log(sorted);
        break;
      case "Age":
        sorted = employees.sort((a, b) => (a.dob.age > b.dob.age ? 1 : -1));
        setResults([...sorted]);
        console.log(sorted);
        break;
      case "Email":
        sorted = employees.sort((a, b) => (a.email > b.email ? 1 : -1));
        setResults([...sorted]);
        console.log(sorted);
        break;
      default:
        sorted = employees.sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        );
        setResults([...sorted]);
        break;
    }
  };

  return (
    <div>
      <Directorycard style={{ minHeight: "80%" }}>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          handleSort={handleSort}
          employees={employees}
        />
        <SearchResults results={results} />
      </Directorycard>
    </div>
  );
};

export default Directory;
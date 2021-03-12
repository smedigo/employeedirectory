import React from "react";
import Directory from "../components/directory";
import Directorycard from "../components/directorycard";
import Employeerows from "../components/employeerows";
import Dir from "../components/dir";
import backgroundImage from "./images/backgroundImage.jpg";

const Search = () => {
  return (
    <div>
      <Directory backgroundImage={backgroundImage}>
        <h1>Place where all employees are connected</h1>
        <h2>Manage employee directory</h2>
      </Directory>
      <Directorycard>
        <Employeerows>
          <Dir size="md-12">
            <h1>Welcome to Team Directory!</h1>
            <p>
              Hello
            </p>
            <br />
            <p>
              Hello Team!
            </p>
          </Dir>
        </Employeerows>
      </Directorycard>
    </div>
  );
};

export default Search;
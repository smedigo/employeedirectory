import React from "react";

function EmployeeBody ({ users }) {
  // function in order to get a proper date format and then place within table 
  function formatDate(date) {
    const dateArray = date.split("-");
    const month = dateArray[1];
    const year = dateArray[0];
    const dayArray = dateArray[2].split("T");   
    const day = dayArray[0];
    const formatteDate = [month, day, year].join("-");
    return formatteDate;
  }

  // setting up the structure of the table
  return (
    
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="DOB" className="align-middle">
                {formatDate(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
    
  )
}

export default EmployeeBody;


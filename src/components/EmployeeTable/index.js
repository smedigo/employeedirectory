import React from "react";
import EmployeeBody from "../EmployeeBody";
import "./style.css";


function EmployeeTable({ headings, users, handleSort}) {
    return (
        <div className="database mt-5">
            <table 
            id ="table"
            className="table table-striped table-condensed ">
                <thread>
                    <tr>
                        {headings.map(({ name, width}) => {
                        return(
                             <th
                            className="col"
                            key={name}
                            style={{ width}}
                            onClick ={() => {
                                handleSort(name.toLowerCase());
                            }} >
                                {name}
                                <span className="pointer"></span>
                        </th>
                        
                        );
                        }
                        )}
                       
                    </tr>
                </thread>
                <EmployeeBody users={users}></EmployeeBody>
            </table>
        </div>
    );
}

export default EmployeeTable;


import React from "react";
import SearchForm from "../SearchForm";


function Nav({ handleSearchChange, employees, search, handleInputChange, employeeSort, handleSelectChange}) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navigation">
                <SearchForm handleSearchChange={handleSearchChange} employees={employees} search={search} handleInputChange={handleInputChange} employeeSort= {employeeSort} handleSelectChange= {handleSelectChange}/>
                
            </div>
        </nav>
    );
}

export default Nav;

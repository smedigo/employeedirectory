import React from "react";
import SearchForm from "../SearchForm";


function Nav({ handleSearchChange, employees}) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navigation">
                <SearchForm handleSearchChange={handleSearchChange} employees={employees}/>
                
            </div>
        </nav>
    );
}

export default Nav;

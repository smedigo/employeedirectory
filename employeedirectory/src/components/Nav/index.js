import React from "react";
import SearchForm from "./searchform";


function Nav({ handleSearchChange}) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navigation">
                <SearchForm handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    );
}

export default Nav;

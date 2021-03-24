import React, { Component } from "react";
import Nav from "../Nav";
import API from "../../utils/API";
import EmployeeTable from "../EmployeeTable";

// need to make a component EmployeeTable and Nav

export default class EmployeeInfo extends Component {
    state = {  //saving data here
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    headings = [
        { name: "Image", width: "20%" },
        { name: "Name", width: "5%" },
        { name: "Phone", width: "5%" },
        { name: "Email", width: "5%" },
        { name: "DateOfBirth", width: "5%" },
    ]
    // !== vs === vs == vs =
    // === compares both type and value, is a strict comparison 
    // == only compares value, a == 2 
    employeeSort = heading => {
        if (this.state.order === "descend") {
            this.setState({
                order: "ascend"
            })
        } else {
            this.setState({
                order: "descend"
            })
        }

        const compareFunction = (a, b) => {
            if (this.state.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                else if (heading === "name") {
                    return a[heading].first.localCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return b[heading].first.localCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }
        }
        const usersSorted = this.state.filteredUsers.sort(compareFunction);
        this.setState({ filteredUsers: usersSorted });

    }
    searchChange = event => {
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
    }

    componentDidMount() {
        API.getEmployees(5).then(results => {
            
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results,
            });
        });
    }
    
    render() {
        return (
            <>
                <Nav searchChange={this.searchChange} employees={this.state.users}/>
                <div className="EmployeeInfo" />
                <EmployeeTable
                    headings={this.headings}
                    users={this.state.filteredUsers}
                    employeeSort={this.employeeSort}

                />


            </>
        )
    }







}
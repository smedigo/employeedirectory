import React, { Component } from "react";
import Nav from "../Nav";
import API from "../../utils/API";
import EmployeeTable from "../EmployeeTable";

// need to make a component EmployeeTable and Nav

export default class EmployeeInfo extends Component {
    state = {  //saving data here
        users: [{}],
        order: "descend",
        filteredUsers: [{}],
        search: ""
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
    // handleInputchange function 
     handleInputChange =(event) => {
        console.log(event.target.value)
        this.setState ({search:event.target.value})
        this.searchChange (event.target.value)
        // const {value} =event.target
    }

    handleSelectChange =(event) => {
        console.log(event.target.value)
        if (event.target.value === "Email"){
            
            const sortedEmployees=this.state.users.sort((a,b)=>a.email<b.email)
            console.log(sortedEmployees)
            this.setState ({filteredUsers:sortedEmployees})
        }



    }
    searchChange = (filter) => {
        
        console.log(filter)
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
                <Nav searchChange={this.searchChange} employees={this.state.users} search={this.search} handleInputChange={this.handleInputChange} employeeSort= {this.employeeSort} handleSelectChange= {this.handleSelectChange}/>
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
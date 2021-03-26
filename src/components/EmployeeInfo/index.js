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
    employeeSort = sortValue => {
        console.log(this.state.users)
        const sortedUsers= [...this.state.users]
        switch (sortValue){
            case "First Name":
          this.setState({
           users: sortedUsers.sort((a,b)=>a.name.first>b.name.first ? 1 : -1)

          })
          break;
          case "Last Name":
          this.setState({
           users: sortedUsers.sort((a,b)=>a.name.last>b.name.last ? 1 : -1)

          })
          break;
          case "Age":
          this.setState({
           users: sortedUsers.sort((a,b)=>a.dob.age-b.dob.age)

          })
          break;
          case "Email":
          this.setState({
           users: sortedUsers.sort((a,b)=>a.email>b.email ? 1 : -1)

          })

          break;
          default:
              break
        }

    
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
                    users={this.state.users}
                    employeeSort={this.employeeSort}

                />


            </>
        )
    }







}
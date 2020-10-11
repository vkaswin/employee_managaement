import React, { Component } from 'react';
import axios from 'axios'

class UsersPage3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            display : ''
        }
    }
    componentDidMount(){
        let url = "https://reqres.in/api/users?page=3"
        axios.get(url).then((response) => {
            if(response.data.data.length === 0){
                this.setState({
                    display : "NO RECORDS FOUND"
                })
            }
        }).catch((error) => {
            alert(error);
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="row">
                    <div className="col-10 offset-1">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Avatar</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="5" className="record">{this.state.display}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
}

export default UsersPage3;
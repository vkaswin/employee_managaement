import React, { Component } from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import axios from 'axios';

import UsersPage1 from '../pages/users_page_1'
import UsersPage2 from '../pages/users_page_2'
import UsersPage3 from '../pages/users_page_3'

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            add_user : {
                name : '',
                job : ''
            },
            user : false
        }
    }
    handleClick(){
        this.props.history.push('/login');
    }
    handleUser(){
        this.setState({
            user : !this.state.user
        })
    }
    handleChange = (event) => {
        let new_user = {...this.state.add_user, [event.target.name] : event.target.value}
        this.setState({
            add_user : new_user
        })
    }
    getApi(){
        this.setState({
            user : !this.state.user
        })
        let url = "https://reqres.in/api/users";
        axios.post(url, this.state.add_user).then((response)=>{
            alert("Successfully created a record " + response.data.id)
        }).catch((error)=>{

        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="row">
                    <div className="col-11 offset-1">
                        <b className="list-user">List of Users</b>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-11 offset-1">
                        <button className="btn-add" onClick={()=>this.handleUser()}>Add User</button>
                        <button className="btn-logout" onClick={()=>this.handleClick()}>Logout</button>
                        <br></br>
                        <br></br>
                        {this.state.user && 
                        <div>
                            <input type="text" placeholder="Name" name="name" onChange={this.handleChange}></input>
                            <input className="job" type="text" name="job" placeholder="Job" onChange={this.handleChange}></input>
                            <button className="btn-create" onClick={()=>this.getApi()}>Create</button>
                        </div>}
                    </div>
                </div>
                <Switch>
                    <Route path="/users" exact component={UsersPage1}></Route>
                    <Route path="/users/page=2" component={UsersPage2}></Route>
                    <Route path="/users/page=3" component={UsersPage3}></Route>
                </Switch>
                <div className="row">
                    <div className="col-11 offset-1 pagination page">
                        <NavLink to="">&laquo;</NavLink>
                        <NavLink to="/users" activeClassName="page-active" exact={true}><b>1</b></NavLink>
                        <NavLink to="/users/page=2" activeClassName="page-active"><b>2</b></NavLink>
                        <NavLink to="/users/page=3" activeClassName="page-active"><b>3</b></NavLink>
                        <NavLink to="">&raquo;</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
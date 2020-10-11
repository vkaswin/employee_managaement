import React, { Component } from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';

import LoginForm from '../components/login_form';
import RegisterForm from '../components/register_form';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="login-box">
                <div className="row">
                    <div className="col-6"><NavLink to="/login" className="link" exact={true} activeClassName="active-link"><b className="login-align">Login</b></NavLink></div>
                    <div className="col-6"><NavLink to="/login/register" className="link" activeClassName="active-link"><b>Register</b></NavLink></div>
                </div>
                <hr></hr>
                <div className="row">
                    <Switch>
                        <Route path="/login" exact component={LoginForm}></Route>
                        <Route path="/login/register" component={RegisterForm}></Route>
                    </Switch>
                </div>
                
            </div>
        );
    }
}

export default Login;
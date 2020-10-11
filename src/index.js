import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/login'
import Users from './pages/users';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'jquery/dist/jquery'

import './index.css';

function EmployeeManagement(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/users" component={Users}></Route>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<EmployeeManagement></EmployeeManagement>,document.getElementById('root'));






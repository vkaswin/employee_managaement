import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {
    constructor(props){
        super(props);
            this.state = {
                email : '',
                password : '',
                load : true
            }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleClick(){
        this.setState({
            load : !this.state.load
        })
        let url = "https://reqres.in/api/register";
        axios.post(url, this.state).then((response) => {
            if(response.status === 200){
                this.props.history.push('/users');
            }
        }).catch((error) => {
            alert("Invalid Username and Password");
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <input className="box" type="text" placeholder="Email" name="email" onChange={this.handleChange}></input>
                    </div>
                    <br></br>
                    <div className="col-6 offset-3">
                        <input className="box" type="password" placeholder="Password" name="password" onChange={this.handleChange}></input>
                    </div>
                    <br></br>
                    <div className="col-6 offset-3">
                        {this.state.load ?
                        <button className="btn-login" onClick={()=>this.handleClick()}>LOG IN</button>
                        :
                        <button className="btn-loading">LOADING</button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
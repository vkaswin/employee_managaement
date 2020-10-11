import React, { Component } from 'react';
import axios from 'axios'

class UsersPage2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_data : [],
            temp_first_name : '',
            temp_last_name : '',
            edit : [true,true,true,true,true,true],
        }
    }
    componentDidMount(){
        let url = "https://reqres.in/api/users?page=2"
        axios.get(url).then((response) => {
            let data = response.data.data;
            this.setState({
                user_data : data
            })
        }).catch((error) => {
            alert(error);
        })
    }
    handleCancel(position){
        let update = this.state.edit;
        update[position] = !(this.state.edit[position]);
        this.setState({
            edit : update
        })
    }
    handleButton(position){
        this.state.edit.fill(true);
        let update = this.state.edit;
        update[position] = !(this.state.edit[position]);
        this.setState({
            edit : update,
            temp_first_name : this.state.user_data[position].first_name,
            temp_last_name : this.state.user_data[position].last_name
        })
    }
    changeFirstName = (event) => {
        this.setState({
            temp_first_name : event.target.value
        })
    }
    changeLastName = (event) => {
        this.setState({
            temp_last_name : event.target.value
        })
    }
    save(position){
        let update = this.state.edit;
        update[position] = !this.state.edit[position];
        this.setState({
            edit : update,
        })
        let url = "https://reqres.in/api/users/1"
        axios.put(url).then((response)=>{
            let updatefirst = this.state.user_data;
        updatefirst[position].first_name = this.state.temp_first_name;
        this.setState({
            user_data : updatefirst
        })
        let updatelast = this.state.user_data;
        updatelast[position].last_name = this.state.temp_last_name;
        this.setState({
            user_data : updatelast
        })
        console.log(this.state.user_data);
            alert("Updated Sucessfully");
        }).catch((error)=>{

        })
        
    }
    delete(position){
        this.state.user_data.splice(position,1);
        this.setState({
            user_data : this.state.user_data
        })
    }
    render() {
        let user_details = this.state.user_data.map((value,index)=>{
            console.log(this.state.edit);
            return(
                    <tr key={index}>
                        <td> <b>{value.id}</b> </td>
                        <td> <img src={value.avatar}></img> </td>
                        <td> {this.state.edit[index] ?  <b> {value.first_name} </b> 
                        :
                        <input value={this.state.temp_first_name}  type="text" onChange={this.changeFirstName}></input>}
                        </td>
                        <td> {this.state.edit[index] ?  <b> {value.last_name} </b> 
                        :
                        <input value={this.state.temp_last_name} type="text" onChange={this.changeLastName}></input>}
                        </td>
                        <td> {this.state.edit[index] ? 
                        <button className="btn-edit" onClick={()=>this.handleButton(index)}>Edit</button>
                        : 
                        <div className="display">
                            <button className="btn-save" onClick={()=>this.save(index)}>Save</button> 
                            <button className="btn-cancel" onClick={()=>this.handleCancel(index)}>Cancel</button>
                        </div>} 
                        <button className="btn-delete" onClick={()=>this.delete(index)}>Delete</button> 
                        </td>
                    </tr>
            );
        })
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
                                {user_details}
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
}

export default UsersPage2;
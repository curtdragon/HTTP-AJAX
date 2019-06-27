import React, { Component } from "react";
// import { Route, NavLink, Link } from "react-router-dom";
import axios from "axios";

export default class NewFriend extends Component {
    state= {
        name:"",
        age:"",
        email:"",
        errorMessage: null
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    createFriend = (evt) => {
        evt.preventDefault()
        const { name, age, email } = this.state;
        const payload = {name, age, email};

        axios.post("http://localhost:5000/friends", payload)
            .then ((response) => {
                this.props.updateFriends(response.data)
                this.setState({
                    errorMessage:null
                })

                this.props.history.push("/")
            
            })
            .catch((err)=> {
                this.setState({
                    errorMessage: err.response.data.error
                })
            })
    }

    render () {
        const {name, age, email, errorMessage} =this.state;

        return (
            <form onSubmit={this.createFriend}>
                <h1>Create New Friend</h1>
                <p>{errorMessage}</p>
                <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                <input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
                <input type="text" name="email" placeholder="Email Address" value={email} onChange={this.handleChange} />
                <button type="submit">Create</button>
            </form>
        )

    }
}
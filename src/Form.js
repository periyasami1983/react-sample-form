import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends Component {

    state = {
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        username: '',
        usernameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: ''
    }

    change = (e) => {
        this.props.onChange({ [e.target.name]: e.target.value })
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError: '',
            lastNameError: '',
            usernameError: '',
            emailError: '',
            passwordError: ''
        };

        if(this.state.username.length < 5) {
            isError = true;
            errors.usernameError = 'Username needs to be 5 characters long';
        }

        if(this.state.email.indexOf('@') === -1) {
            isError = true;
            errors.emailError = 'Required valid email';
        }

        this.setState({
            ...this.state,
            ...errors
        })
        
        return isError;
    }

    onSubmit = (e) => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        const err = this.validate();
        if(!err) {
            this.setState({
                firstName: '',
                firstNameError: '',
                lastName: '',
                lastNameError: '',
                username: '',
                usernameError: '',
                email: '',
                emailError: '',
                password: '',
                passwordError: ''
            })
            this.props.onChange({
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: ''
            })
        }        
    }

    render() {
        return (
            <form>

                <TextField
                    name="firstName"
                    hintText="First Name"
                    floatingLabelText='First Name'
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    errorText={this.state.firstNameError}
                />
                <br />
                <TextField
                    name="lastName"
                    hintText="Last Name"
                    floatingLabelText='Last Name'
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                    errorText={this.state.lastNameError}
                />
                <br />
                <TextField
                    name="username"
                    hintText="Username"
                    floatingLabelText='Username'
                    value={this.state.username}
                    onChange={e => this.change(e)}
                    errorText={this.state.usernameError}
                />
                <br />
                <TextField
                    name="email"
                    hintText="Email"
                    floatingLabelText='Email'
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    errorText={this.state.emailError}
                />
                <br />
                <TextField
                    name="password"
                    hintText="Password"
                    floatingLabelText='Password'
                    type="password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                    errorText={this.state.passwordError}
                />
                <br />
                <RaisedButton onClick={(e) => this.onSubmit(e)} label="Submit" />
            </form>
        );
    }
}


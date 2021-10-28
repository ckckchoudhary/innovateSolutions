import React, { Component } from 'react';
import { Link } from "react-router-dom";

interface LoginPageState {
    enteredEmail: string;
    enteredPassword: string;
}
class LoginPage extends Component<any, LoginPageState>{

    constructor(props: any) {
        super(props);
        this.state = {
            enteredEmail: "",
            enteredPassword: ""
        }

    }

    onEmailChange = (e: any) => {
        this.setState({ enteredEmail: e?.target?.value });
    }

    onPwdChange = (e: any) => {
        this.setState({ enteredPassword: e?.target?.value });
    }

    login = () => {
        const { enteredEmail, enteredPassword } = this.state;
        if (enteredEmail && enteredPassword) {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "/"
        }else{
            alert("Please enter email and password!");
        }
    }

    render() {
        const {enteredEmail, enteredPassword } = this.state;
        return (
            <div style={{ width: 300, background: "lightgrey", padding: 50, margin: 50 }}>
                Login Page
                <div style={{ display: "flex", justifyContent: "space-between", margin: 10 }}>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" onChange={this.onEmailChange} value={enteredEmail}/>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: 10 }}>
                    <label>password</label>
                    <input type="password" name="password" onChange={this.onPwdChange} value={enteredPassword} placeholder="password"/>

                </div>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default LoginPage;
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LoginPage extends Component {
    render() {
        const login = () => {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "/"
        }
        return (
            <div style={{width: 300, background:"lightgrey", padding: 50, margin: 50}}>
                Login Page
                <div style={{display:"flex", justifyContent:"space-between", margin: 10}}>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div style={{display:"flex", justifyContent:"space-between", margin: 10}}>
                    <label>password</label>
                    <input type="password" name="password" />

                </div>
                <button onClick={login}>Login</button>
            </div>
        );
    }
}

export default LoginPage;
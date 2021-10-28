import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LoginPage extends Component {
    render() {
        const login = () => {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "/"
        }
        return (
            <div>
                Login Page
                <div>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" />

                </div>
                <button onClick={login}>Login</button>
            </div>
        );
    }
}

export default LoginPage;
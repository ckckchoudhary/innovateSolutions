import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    render() {
        return (
            <div style={{ backgroundColor: "lightblue" }}>
                <div style={{ display: "inline-block", margin: 50 }}>
                    <Link to="/profile"> Profile</Link>
                </div>
                <div style={{ display: "inline-block", margin: 50 }}>
                    <Link to="/"> Home</Link>
                </div>

                <div style={{ display: "inline-block", margin: 50 }}>
                    <button onClick={this.logout}>Logout</button>
                </div>
            </div>
        );
    }
}

export default Navbar;
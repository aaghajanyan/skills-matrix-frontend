import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/Home.css";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <header className="Home-header">
                    <img src={logo} className="Home-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export { Home };

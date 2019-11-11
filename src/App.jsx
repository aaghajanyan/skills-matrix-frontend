import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Home } from "./views/Home.jsx";
import { Register } from "./views/Register.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/register/:invitationId" component={Register} />
            </Router>
        );
    }
}

export { App };

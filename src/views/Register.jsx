import React, { Component } from "react";
import "../assets/css/Register.css";
import { RegisterForm } from "../components/RegisterForm.jsx";
import { head as checkInvitationExistence } from "../client/invitations";

class Register extends Component {
    constructor() {
        super();
        this.state = {};
        this.checkInvitation = this.checkInvitation.bind(this);
    }

    async checkInvitation() {
        try {
            await checkInvitationExistence(
                this.props.match.params.invitationId
            );
            this.setState({ invitationExist: true });
        } catch (error) {
            if (error.status === 404) {
                this.setState({ invitationExist: false });
            } else {
                console.log(error);
                this.setState({ invitationExist: false });
            }
        }
    }

    componentDidMount() {
        this.checkInvitation();
    }

    render() {
        if (this.state.invitationExist) {
            return (
                <RegisterForm
                    invitationId={this.props.match.params.invitationId}
                    history={this.props.history}
                />
            );
        } else {
            return (
                <div>
                    <p>false</p>
                </div>
            );
        }
    }
}

export { Register };

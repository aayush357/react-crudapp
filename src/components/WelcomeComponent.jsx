import { Component } from "react";
// import { NavLink } from "react-router-dom";

export class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                <br />
                <div>
                    <a href="/add">Add Resource</a>
                </div>
                <br />
                <div>
                    <a href="search">Search Resource</a>
                </div>
                <br />
                <div>
                    <a href="edit">Edit Resource</a>
                </div>
                <br />
                <div>
                    <a href="remove">Remove Resource</a>
                </div>
                <br />
                <div>
                    <a href="totalProd">Total Resource</a>
                </div>
            </div>
        )
    }
}
import { Component } from "react";

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light text-center">
                <a href="/" className="navbar-brand mb-0 h1">Dashboard</a>
            </nav>
        )
    }
}
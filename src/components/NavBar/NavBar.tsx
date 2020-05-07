import React, { Component } from 'react';
import './NavBar.scss';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-dark shadow">
                <h1 className="navbar-brand m-0">Task Manager</h1>
                <div>
                    <button className="btn btn-sm btn-outline-danger" type="button">
                        Logout
                        <i className="fas fa-sign-out-alt ml-2" />
                    </button>
                </div>
            </nav>
        );
    }
}

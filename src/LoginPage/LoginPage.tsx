import React, { Component } from 'react';
import './LoginPage.scss';

export default class LoginPage extends Component {
    render() {
        return (
            <div className="login">
                <h3 className="mb-4 page-title">Welcome</h3>
                <div className="form-wrapper shadow-lg clearfix">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>

                        <button type="submit" className="btn btn-primary float-right mt-3">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

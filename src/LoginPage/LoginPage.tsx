import React, { Component } from 'react';
import './LoginPage.scss';
import { LoginStateInterface } from '../interfaces/LoginState.interface';

export default class LoginPage extends Component<{}, LoginStateInterface> {
    /* Initialize State */
    state: LoginStateInterface = {
        username: '',
        password: '',
        submitted: false,
    };

    onLogin(ev: any): void {
        ev.preventDefault();

        this.setState({ submitted: true });
    }

    render() {
        return (
            <div className="login-container">
                <h3 className="mb-4 page-title">Welcome</h3>
                <div className="form-wrapper shadow-lg clearfix">
                    <form onSubmit={this.onLogin.bind(this)}>
                        <div
                            className={
                                'form-group' +
                                (this.state.submitted && !this.state.username ? ' has-error' : '')
                            }
                        >
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" />
                            {this.state.submitted && !this.state.username && (
                                <div className="error-text">Username is required</div>
                            )}
                        </div>

                        <div
                            className={
                                'form-group' +
                                (this.state.submitted && !this.state.username ? ' has-error' : '')
                            }
                        >
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" />
                            {this.state.submitted && !this.state.password && (
                                <div className="error-text">Password is required</div>
                            )}
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

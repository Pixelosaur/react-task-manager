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

    handleUsernameChange(ev: any): void {
        this.setState({ username: ev.target.value });
    }

    handlePasswordChange(ev: any): void {
        this.setState({ password: ev.target.value });
    }

    onSubmit(ev: any): void {
        ev.preventDefault();
        this.setState({ submitted: true });
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="login-container">
                <h3 className="mb-4 page-title">Welcome</h3>
                <div className="form-wrapper shadow-lg clearfix">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div
                            className={'form-group' + (submitted && !username ? ' has-error' : '')}
                        >
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={this.state.username}
                                onChange={this.handleUsernameChange.bind(this)}
                            />
                            {submitted && !username && (
                                <div className="error-text">Email is required</div>
                            )}
                        </div>

                        <div
                            className={'form-group' + (submitted && !password ? ' has-error' : '')}
                        >
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange.bind(this)}
                            />
                            {submitted && !password && (
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

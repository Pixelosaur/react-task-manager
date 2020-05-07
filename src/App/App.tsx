import React, { Component } from 'react';
import './App.scss';
import LoginPage from '../LoginPage/LoginPage';
import { Redirect, Route, Switch } from 'react-router';
import TaskManagerPage from '../TaskManagerPage/TaskManagerPage';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Switch>
                            <Route path="/login" component={LoginPage} />
                            <Route path="/task-manager" component={TaskManagerPage} />
                            <Redirect from="/" to="login" exact />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

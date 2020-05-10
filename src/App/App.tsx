import React, { Component } from 'react';
import './App.scss';
import LoginPage from '../LoginPage/LoginPage';
import { Redirect, Route, Switch } from 'react-router';
import TaskManagerPage from '../TaskManagerPage/TaskManagerPage';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';

class App extends Component<any, any> {
    render() {
        return (
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <PrivateRoute exact path="/task-manager">
                    <TaskManagerPage />
                </PrivateRoute>
                <Redirect from="/" to="login" exact />
            </Switch>
        );
    }
}

export default App;

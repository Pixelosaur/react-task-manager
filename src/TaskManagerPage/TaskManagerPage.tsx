import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';

export default class TaskManagerPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <NavBar />
                </div>
            </div>
        );
    }
}

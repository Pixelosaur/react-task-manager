import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import './TaskManagerPage.scss';

export default class TaskManagerPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                <div className="row pt-5">
                    <div className="col">
                        Task List
                    </div>
                </div>
            </div>
        );
    }
}

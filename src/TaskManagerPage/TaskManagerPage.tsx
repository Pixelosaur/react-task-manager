import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import './TaskManagerPage.scss';
import BootstrapTable from 'react-bootstrap-table-next';

const tasks = [];
const columns = [];

export default class TaskManagerPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                <div className="row pt-5">
                    <div className="col">
                        <BootstrapTable bootstrap4 keyField='id' data={ tasks } columns={ columns } />
                    </div>
                </div>
            </div>
        );
    }
}

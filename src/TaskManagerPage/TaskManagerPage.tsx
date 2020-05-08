import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import NavBar from '../components/NavBar/NavBar';
import './TaskManagerPage.scss';
import BootstrapTable from 'react-bootstrap-table-next';

    componentDidMount() {
        this.getTasks();
    }

    getTasks(): void {
        axios
            .get<TaskApiResponseInterface>(`${Config.SERVER_URL}/tasks`)
            .then((response: AxiosResponse<TaskApiResponseInterface>) => {
                console.log(response);
            })
            .catch((error: any) => console.log(error));
    }

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

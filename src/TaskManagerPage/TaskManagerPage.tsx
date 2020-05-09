import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import NavBar from '../components/NavBar/NavBar';
import './TaskManagerPage.scss';
import BootstrapTable, { ColumnDescription } from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { TaskInterface } from '../interfaces/Task.interface';
import { TaskApiResponseInterface } from '../interfaces/TaskApiResponse.interface';
import { TaskManagerStateInterface } from '../interfaces/TaskManagerState.interface';
import * as Config from '../configuration/config';

const { SearchBar, ClearSearchButton } = Search;

export default class TaskManagerPage extends Component<{}, TaskManagerStateInterface> {
    /* Initialize state */
    state: TaskManagerStateInterface = {
        tasks: [],
        columns: [],
        isLoaded: false,
    };

    componentDidMount() {
        this.getTasks();
    }

    getTasks(): void {
        axios
            .get<TaskApiResponseInterface>(`${Config.SERVER_URL}/tasks`)
            .then((response: AxiosResponse<TaskApiResponseInterface>) => {
                const tasks: TaskInterface[] = response.data.tasks;
                const columns: ColumnDescription[] = [
                    {
                        dataField: 'id',
                        text: 'ID',
                    },
                    {
                        dataField: 'project',
                        text: 'Project',
                    },
                    {
                        dataField: 'type',
                        text: 'Type',
                    },
                    {
                        dataField: 'credits',
                        text: 'Credits',
                    },
                    {
                        dataField: 'status',
                        text: 'Status',
                    },
                    {
                        dataField: 'dateCreated',
                        text: 'Date Created',
                    },
                    {
                        dataField: 'dateSubmitted',
                        text: 'Date Submitted',
                    },
                ];

                this.setState({ tasks, columns, isLoaded: true });
            })
            .catch((error: any) => console.log(error));
    }

    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                <div className="row pt-5">
                    <div className="col">
                        {this.state.isLoaded ? (
                            <ToolkitProvider
                                bootstrap4
                                keyField="id"
                                data={this.state.tasks}
                                columns={this.state.columns}
                                search
                            >
                                {(props) => (
                                    <div>
                                        <div className="row mb-4">
                                            <div className="col-4">
                                                <SearchBar {...props.searchProps} />
                                            </div>
                                            <div className="col-2">
                                                <ClearSearchButton
                                                    className="btn btn-secondary"
                                                    {...props.searchProps}
                                                />
                                            </div>
                                        </div>
                                        <BootstrapTable
                                            pagination={paginationFactory({
                                                sizePerPage: this.state.pageSize,
                                            })}
                                            striped={true}
                                            hover={true}
                                            selectRow={Config.selectRow}
                                            {...props.baseProps}
                                        />
                                    </div>
                                )}
                            </ToolkitProvider>
                        ) : (
                            <div>Loading ...</div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

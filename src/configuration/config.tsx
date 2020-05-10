import { ColumnDescription, PaginationOptions, SelectRowProps } from 'react-bootstrap-table-next';
import Moment from 'react-moment';
import React from 'react';

// SERVER
export const SERVER_URL: string = `http://localhost:4000`;

// BootstrapTable2
export const columns: ColumnDescription[] = [
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
        formatter: (cellContent, row) => {
            if (row.status === 'Submitted') {
                return <span className="badge badge-success">{row.status}</span>;
            }
            if (row.status === 'Active') {
                return <span className="badge badge-info">{row.status}</span>;
            }
            return <span className="badge badge-warning">{row.status}</span>;
        },
    },
    {
        dataField: 'dateCreated',
        text: 'Date Created',
        formatter: (cellContent, row) => {
            return <Moment format="DD:MM:YYYY hh:mm">{row.dateCreated}</Moment>;
        },
    },
    {
        dataField: 'dateSubmitted',
        text: 'Date Submitted',
        formatter: (cellContent, row) => {
            if (row.status !== 'Submitted') {
                return <span> N/A </span>;
            }
            return <Moment format="DD:MM:YYYY hh:mm">{row.dateSubmitted}</Moment>;
        },
    },
    {
        dataField: 'action',
        text: 'Action',
        formatter: (cellContent, row) => (
            <a href="#" className="table-action-link">
                <i className="fas fa-external-link-alt" />
            </a>
        ),
    },
];

export const selectRow: SelectRowProps<any> = {
    mode: 'checkbox',
    hideSelectAll: false,
    clickToSelect: false,
    classes: 'selected-row',
};

export const paginationOptions: PaginationOptions = {
    sizePerPage: 10,
    showTotal: false,
    withFirstAndLast: true,
    alwaysShowAllBtns: true,
    prePageText: 'Previous',
    nextPageText: 'Next',
    firstPageText: 'First',
    lastPageText: 'Last',
};

import { PaginationOptions, SelectRowProps } from 'react-bootstrap-table-next';

// SERVER
export const SERVER_URL: string = `http://localhost:4000`;

// BootstrapTable2
export const selectRow: SelectRowProps<any> = {
    mode: 'checkbox',
    hideSelectAll: false,
    clickToSelect: true,
    style: { background: '#6457a6', color: '#fff' },
    onSelect: (isSelect) => {
        return isSelect;
    },
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

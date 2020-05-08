import { SelectRowProps } from 'react-bootstrap-table-next';

// SERVER
export const SERVER_URL: string = `http://localhost:4000`;

// BootstrapTable2
export const selectRow: SelectRowProps<any> = {
    mode: 'checkbox',
    hideSelectAll: false,
    clickToSelect: true,
};

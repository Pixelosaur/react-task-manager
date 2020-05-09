import { TaskInterface } from './Task.interface';
import { ColumnDescription } from 'react-bootstrap-table-next';

export interface TaskManagerStateInterface {
    tasks: TaskInterface[];
    columns: ColumnDescription[];
    isLoaded: boolean;
}

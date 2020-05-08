export interface TaskInterface {
    id: number;
    project: string;
    type: string;
    credits: number;
    status: string;
    dateCreated: Date;
    dateSubmitted: Date;
}

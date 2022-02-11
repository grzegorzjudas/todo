export enum DBTable {
    TASKS = 'tasks'
}

export type DBSchemaTask = {
    id: string;
    title: string;
    complete: boolean;
    added: Date;
    completed: Date;
}

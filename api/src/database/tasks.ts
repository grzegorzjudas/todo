import DB from '../database/knex';

import { DBSchemaTask, DBTable } from '../types/DB';

export async function listTasks (): Promise<DBSchemaTask[]> {
    const tasks = await DB(DBTable.TASKS).select('*') as DBSchemaTask[];

    return tasks;
}

export async function createTask (title: string): Promise<DBSchemaTask> {
    const [ task ] = await DB(DBTable.TASKS).insert({ title }).returning('*') as DBSchemaTask[];

    return task;
}

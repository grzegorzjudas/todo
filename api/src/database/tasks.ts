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

export async function updateTask (id: string, patch: Partial<DBSchemaTask>): Promise<DBSchemaTask> {
    const updateSize = Object.values(patch).filter((value) => typeof value === 'undefined').length;

    if (updateSize === 0) {
        return getTask(id);
    }

    const [ task ] = await DB(DBTable.TASKS).update(patch).where({ id }).returning('*') as DBSchemaTask[];

    return task;
}

export async function getTask (id: string): Promise<DBSchemaTask> {
    const [ task ] = await DB(DBTable.TASKS).select('*').where({ id }) as DBSchemaTask[];

    return task;
}
